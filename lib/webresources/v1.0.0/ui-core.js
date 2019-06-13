(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("bentleyjs_core"), require("geometry_core"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("ui_core", ["bentleyjs_core", "geometry_core", "react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ui_core"] = factory(require("bentleyjs_core"), require("geometry_core"), require("react"), require("react-dom"));
	else
		root["ui_core"] = factory(root["bentleyjs_core"], root["geometry_core"], root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__bentley_bentleyjs_core__, __WEBPACK_EXTERNAL_MODULE__bentley_geometry_core__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return (this["webpackJsonp"] = this["webpackJsonp"] || []).push([["ui-core"],{

/***/ "../../common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css":
/*!****************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../../.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!./bentley-icons-generic-webfont.css */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../../common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.eot?e9be0920a6ca9566eb3e5f169f114105":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.eot?e9be0920a6ca9566eb3e5f169f114105 ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bentley-icons-generic-webfont.4aea837a.eot";

/***/ }),

/***/ "../../common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.svg?e9be0920a6ca9566eb3e5f169f114105":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.svg?e9be0920a6ca9566eb3e5f169f114105 ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bentley-icons-generic-webfont.9c2d7590.svg";

/***/ }),

/***/ "../../common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.ttf?e9be0920a6ca9566eb3e5f169f114105":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.ttf?e9be0920a6ca9566eb3e5f169f114105 ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bentley-icons-generic-webfont.149f17fb.ttf";

/***/ }),

/***/ "../../common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.woff2?e9be0920a6ca9566eb3e5f169f114105":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.woff2?e9be0920a6ca9566eb3e5f169f114105 ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bentley-icons-generic-webfont.c54bf61e.woff2";

/***/ }),

/***/ "../../common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.woff?e9be0920a6ca9566eb3e5f169f114105":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.woff?e9be0920a6ca9566eb3e5f169f114105 ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bentley-icons-generic-webfont.49a7b52d.woff";

/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js":
/*!********************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../../../../../../.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/url-escape.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./bentley-icons-generic-webfont.eot?e9be0920a6ca9566eb3e5f169f114105 */ "../../common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.eot?e9be0920a6ca9566eb3e5f169f114105") + "?#iefix");
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ./bentley-icons-generic-webfont.woff2?e9be0920a6ca9566eb3e5f169f114105 */ "../../common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.woff2?e9be0920a6ca9566eb3e5f169f114105"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ./bentley-icons-generic-webfont.woff?e9be0920a6ca9566eb3e5f169f114105 */ "../../common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.woff?e9be0920a6ca9566eb3e5f169f114105"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ./bentley-icons-generic-webfont.ttf?e9be0920a6ca9566eb3e5f169f114105 */ "../../common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.ttf?e9be0920a6ca9566eb3e5f169f114105"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ./bentley-icons-generic-webfont.svg?e9be0920a6ca9566eb3e5f169f114105 */ "../../common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.svg?e9be0920a6ca9566eb3e5f169f114105") + "#bentley-icons-generic-webfont");

// Module
exports.push([module.i, "@font-face {\n\tfont-family: \"bentley-icons-generic-webfont\";\n\tsrc: url(" + ___CSS_LOADER_URL___0___ + ") format(\"embedded-opentype\"),\nurl(" + ___CSS_LOADER_URL___1___ + ") format(\"woff2\"),\nurl(" + ___CSS_LOADER_URL___2___ + ") format(\"woff\"),\nurl(" + ___CSS_LOADER_URL___3___ + ") format(\"truetype\"),\nurl(" + ___CSS_LOADER_URL___4___ + ") format(\"svg\");\n}\n\n.icon {\n\tfont-family: bentley-icons-generic-webfont !important;\n\tspeak: none;\n\tfont-style: normal;\n\tfont-weight: normal !important;\n\tfont-variant: normal;\n\ttext-transform: none;\n\tline-height: 1;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.icon-2d:before { content: \"\\f101\"; }\n.icon-3d-photo:before { content: \"\\f102\"; }\n.icon-3d-render:before { content: \"\\f103\"; }\n.icon-3d:before { content: \"\\f104\"; }\n.icon-accusnaps:before { content: \"\\f105\"; }\n.icon-active:before { content: \"\\f106\"; }\n.icon-activity:before { content: \"\\f107\"; }\n.icon-add-circular:before { content: \"\\f108\"; }\n.icon-add:before { content: \"\\f109\"; }\n.icon-airplane:before { content: \"\\f10a\"; }\n.icon-align-align-bottom:before { content: \"\\f10b\"; }\n.icon-align-align-center-horizontal:before { content: \"\\f10c\"; }\n.icon-align-align-center-vertical:before { content: \"\\f10d\"; }\n.icon-align-align-left:before { content: \"\\f10e\"; }\n.icon-align-align-right:before { content: \"\\f10f\"; }\n.icon-align-align-top:before { content: \"\\f110\"; }\n.icon-annotation-add:before { content: \"\\f111\"; }\n.icon-annotation-info:before { content: \"\\f112\"; }\n.icon-annotation-manager:before { content: \"\\f113\"; }\n.icon-annotation-settings:before { content: \"\\f114\"; }\n.icon-annotation-show:before { content: \"\\f115\"; }\n.icon-annotation:before { content: \"\\f116\"; }\n.icon-app-1:before { content: \"\\f117\"; }\n.icon-app-2:before { content: \"\\f118\"; }\n.icon-app-launcher:before { content: \"\\f119\"; }\n.icon-apps-assetwise-2:before { content: \"\\f11a\"; }\n.icon-apps-assetwise:before { content: \"\\f11b\"; }\n.icon-apps-connect:before { content: \"\\f11c\"; }\n.icon-apps-projectwise:before { content: \"\\f11d\"; }\n.icon-apps-sharepoint-2:before { content: \"\\f11e\"; }\n.icon-apps-sharepoint:before { content: \"\\f11f\"; }\n.icon-archived:before { content: \"\\f120\"; }\n.icon-arrow-down:before { content: \"\\f121\"; }\n.icon-arrow-left:before { content: \"\\f122\"; }\n.icon-arrow-right:before { content: \"\\f123\"; }\n.icon-arrow-up:before { content: \"\\f124\"; }\n.icon-attach:before { content: \"\\f125\"; }\n.icon-automatic:before { content: \"\\f126\"; }\n.icon-automation:before { content: \"\\f127\"; }\n.icon-basket:before { content: \"\\f128\"; }\n.icon-bentley-systems:before { content: \"\\f129\"; }\n.icon-blank:before { content: \"\\f12a\"; }\n.icon-bolt-2:before { content: \"\\f12b\"; }\n.icon-bookmark:before { content: \"\\f12c\"; }\n.icon-browse-2:before { content: \"\\f12d\"; }\n.icon-browse:before { content: \"\\f12e\"; }\n.icon-calendar:before { content: \"\\f12f\"; }\n.icon-camera-animation:before { content: \"\\f130\"; }\n.icon-camera-location:before { content: \"\\f131\"; }\n.icon-camera:before { content: \"\\f132\"; }\n.icon-caret-down:before { content: \"\\f133\"; }\n.icon-caret-left:before { content: \"\\f134\"; }\n.icon-caret-right:before { content: \"\\f135\"; }\n.icon-caret-up:before { content: \"\\f136\"; }\n.icon-charts:before { content: \"\\f137\"; }\n.icon-chat-new:before { content: \"\\f138\"; }\n.icon-chat:before { content: \"\\f139\"; }\n.icon-check-in-document:before { content: \"\\f13a\"; }\n.icon-check-in:before { content: \"\\f13b\"; }\n.icon-check-out-document:before { content: \"\\f13c\"; }\n.icon-check-out:before { content: \"\\f13d\"; }\n.icon-checkbox-deselect:before { content: \"\\f13e\"; }\n.icon-checkbox-select:before { content: \"\\f13f\"; }\n.icon-checkmark:before { content: \"\\f140\"; }\n.icon-chevron-down:before { content: \"\\f141\"; }\n.icon-chevron-left:before { content: \"\\f142\"; }\n.icon-chevron-right:before { content: \"\\f143\"; }\n.icon-chevron-up:before { content: \"\\f144\"; }\n.icon-clipboard:before { content: \"\\f145\"; }\n.icon-clipboard-copy-2:before { content: \"\\f146\"; }\n.icon-clipboard-copy-3:before { content: \"\\f147\"; }\n.icon-clipboard-copy:before { content: \"\\f148\"; }\n.icon-clipboard-cut:before { content: \"\\f149\"; }\n.icon-clipboard-paste-2:before { content: \"\\f14a\"; }\n.icon-clipboard-paste:before { content: \"\\f14b\"; }\n.icon-clock:before { content: \"\\f14c\"; }\n.icon-close-circular:before { content: \"\\f14d\"; }\n.icon-close:before { content: \"\\f14e\"; }\n.icon-cloud:before { content: \"\\f14f\"; }\n.icon-coating-system-concrete:before { content: \"\\f150\"; }\n.icon-coating-system-steelwork:before { content: \"\\f151\"; }\n.icon-comments:before { content: \"\\f152\"; }\n.icon-compare:before { content: \"\\f153\"; }\n.icon-computer:before { content: \"\\f154\"; }\n.icon-concrete-block:before { content: \"\\f155\"; }\n.icon-convert:before { content: \"\\f156\"; }\n.icon-crop:before { content: \"\\f157\"; }\n.icon-cube-faces-bottom:before { content: \"\\f158\"; }\n.icon-cube-faces-front:before { content: \"\\f159\"; }\n.icon-cube-faces-iso-left:before { content: \"\\f15a\"; }\n.icon-cube-faces-iso-right:before { content: \"\\f15b\"; }\n.icon-cube-faces-left:before { content: \"\\f15c\"; }\n.icon-cube-faces-none:before { content: \"\\f15d\"; }\n.icon-cube-faces-rear:before { content: \"\\f15e\"; }\n.icon-cube-faces-right:before { content: \"\\f15f\"; }\n.icon-cube-faces-top:before { content: \"\\f160\"; }\n.icon-cursor-click:before { content: \"\\f161\"; }\n.icon-cursor:before { content: \"\\f162\"; }\n.icon-dashboard-2:before { content: \"\\f163\"; }\n.icon-database:before { content: \"\\f164\"; }\n.icon-delete:before { content: \"\\f165\"; }\n.icon-deliverable:before { content: \"\\f166\"; }\n.icon-details:before { content: \"\\f167\"; }\n.icon-developer:before { content: \"\\f168\"; }\n.icon-disconnect:before { content: \"\\f169\"; }\n.icon-distribute-distribute-bottom:before { content: \"\\f16a\"; }\n.icon-distribute-distribute-center-horizontal:before { content: \"\\f16b\"; }\n.icon-distribute-distribute-center-vertical:before { content: \"\\f16c\"; }\n.icon-distribute-distribute-left:before { content: \"\\f16d\"; }\n.icon-distribute-distribute-right:before { content: \"\\f16e\"; }\n.icon-distribute-distribute-top:before { content: \"\\f16f\"; }\n.icon-document-lock:before { content: \"\\f170\"; }\n.icon-document-reference:before { content: \"\\f171\"; }\n.icon-document:before { content: \"\\f172\"; }\n.icon-documentation:before { content: \"\\f173\"; }\n.icon-download:before { content: \"\\f174\"; }\n.icon-drag:before { content: \"\\f175\"; }\n.icon-duplicate:before { content: \"\\f176\"; }\n.icon-ec-schema:before { content: \"\\f177\"; }\n.icon-edit-all:before { content: \"\\f178\"; }\n.icon-edit-object:before { content: \"\\f179\"; }\n.icon-edit:before { content: \"\\f17a\"; }\n.icon-element:before { content: \"\\f17b\"; }\n.icon-email:before { content: \"\\f17c\"; }\n.icon-exit:before { content: \"\\f17d\"; }\n.icon-export:before { content: \"\\f17e\"; }\n.icon-external-apps:before { content: \"\\f17f\"; }\n.icon-feedback:before { content: \"\\f180\"; }\n.icon-file-types-amim:before { content: \"\\f181\"; }\n.icon-file-types-audio:before { content: \"\\f182\"; }\n.icon-file-types-creative-cloud:before { content: \"\\f183\"; }\n.icon-file-types-dgn-db-2:before { content: \"\\f184\"; }\n.icon-file-types-dgn-db:before { content: \"\\f185\"; }\n.icon-file-types-document:before { content: \"\\f186\"; }\n.icon-file-types-documentarchive:before { content: \"\\f187\"; }\n.icon-file-types-documentautocad:before { content: \"\\f188\"; }\n.icon-file-types-dwg:before { content: \"\\f189\"; }\n.icon-file-types-forms-shared-help:before { content: \"\\f18a\"; }\n.icon-file-types-forms-shared-success:before { content: \"\\f18b\"; }\n.icon-file-types-forms-shared:before { content: \"\\f18c\"; }\n.icon-file-types-forms-unshared-help:before { content: \"\\f18d\"; }\n.icon-file-types-forms-unshared-success:before { content: \"\\f18e\"; }\n.icon-file-types-image:before { content: \"\\f18f\"; }\n.icon-file-types-microstation:before { content: \"\\f190\"; }\n.icon-file-types-mism:before { content: \"\\f191\"; }\n.icon-file-types-msg:before { content: \"\\f192\"; }\n.icon-file-types-pdf-markup:before { content: \"\\f193\"; }\n.icon-file-types-pdf:before { content: \"\\f194\"; }\n.icon-file-types-ppt:before { content: \"\\f195\"; }\n.icon-file-types-raster:before { content: \"\\f196\"; }\n.icon-file-types-revit:before { content: \"\\f197\"; }\n.icon-file-types-rfa:before { content: \"\\f198\"; }\n.icon-file-types-sketchup:before { content: \"\\f199\"; }\n.icon-file-types-system:before { content: \"\\f19a\"; }\n.icon-file-types-txt-2:before { content: \"\\f19b\"; }\n.icon-file-types-txt:before { content: \"\\f19c\"; }\n.icon-file-types-unknown:before { content: \"\\f19d\"; }\n.icon-file-types-vector:before { content: \"\\f19e\"; }\n.icon-file-types-video:before { content: \"\\f19f\"; }\n.icon-file-types-visio:before { content: \"\\f1a0\"; }\n.icon-file-types-word:before { content: \"\\f1a1\"; }\n.icon-file-types-xls:before { content: \"\\f1a2\"; }\n.icon-filter-outlined:before { content: \"\\f1a3\"; }\n.icon-filter:before { content: \"\\f1a4\"; }\n.icon-find:before { content: \"\\f1a5\"; }\n.icon-fit-to-view:before { content: \"\\f1a6\"; }\n.icon-folder-add:before { content: \"\\f1a7\"; }\n.icon-folder-chevron-down:before { content: \"\\f1a8\"; }\n.icon-folder-chevron-up:before { content: \"\\f1a9\"; }\n.icon-folder-export:before { content: \"\\f1aa\"; }\n.icon-folder-import:before { content: \"\\f1ab\"; }\n.icon-folder-lock:before { content: \"\\f1ac\"; }\n.icon-folder-opened:before { content: \"\\f1ad\"; }\n.icon-folder-remove-2:before { content: \"\\f1ae\"; }\n.icon-folder-remove:before { content: \"\\f1af\"; }\n.icon-folder-shortcut:before { content: \"\\f1b0\"; }\n.icon-folder:before { content: \"\\f1b1\"; }\n.icon-font-bold:before { content: \"\\f1b2\"; }\n.icon-font-color:before { content: \"\\f1b3\"; }\n.icon-font-italic:before { content: \"\\f1b4\"; }\n.icon-font-size:before { content: \"\\f1b5\"; }\n.icon-function:before { content: \"\\f1b6\"; }\n.icon-globe:before { content: \"\\f1b7\"; }\n.icon-graph-bar:before { content: \"\\f1b8\"; }\n.icon-graph-pie-chart:before { content: \"\\f1b9\"; }\n.icon-graph-scatter-chart:before { content: \"\\f1ba\"; }\n.icon-graph:before { content: \"\\f1bb\"; }\n.icon-group-ungroup:before { content: \"\\f1bc\"; }\n.icon-group:before { content: \"\\f1bd\"; }\n.icon-gyroscope:before { content: \"\\f1be\"; }\n.icon-hand-2:before { content: \"\\f1bf\"; }\n.icon-help-hollow:before { content: \"\\f1c0\"; }\n.icon-help:before { content: \"\\f1c1\"; }\n.icon-hierarchy-tree:before { content: \"\\f1c2\"; }\n.icon-history:before { content: \"\\f1c3\"; }\n.icon-home:before { content: \"\\f1c4\"; }\n.icon-hourglass:before { content: \"\\f1c5\"; }\n.icon-hub:before { content: \"\\f1c6\"; }\n.icon-i-beam:before { content: \"\\f1c7\"; }\n.icon-image:before { content: \"\\f1c8\"; }\n.icon-imodel-2:before { content: \"\\f1c9\"; }\n.icon-imodel-hollow-2:before { content: \"\\f1ca\"; }\n.icon-imodel-hollow:before { content: \"\\f1cb\"; }\n.icon-imodel-schema:before { content: \"\\f1cc\"; }\n.icon-imodel:before { content: \"\\f1cd\"; }\n.icon-imodeljs:before { content: \"\\f1ce\"; }\n.icon-import:before { content: \"\\f1cf\"; }\n.icon-info-2:before { content: \"\\f1d0\"; }\n.icon-info-hollow:before { content: \"\\f1d1\"; }\n.icon-info:before { content: \"\\f1d2\"; }\n.icon-install:before { content: \"\\f1d3\"; }\n.icon-isolate:before { content: \"\\f1d4\"; }\n.icon-item:before { content: \"\\f1d5\"; }\n.icon-layers:before { content: \"\\f1d6\"; }\n.icon-lightbulb:before { content: \"\\f1d7\"; }\n.icon-link:before { content: \"\\f1d8\"; }\n.icon-list:before { content: \"\\f1d9\"; }\n.icon-location:before { content: \"\\f1da\"; }\n.icon-lock-unlocked:before { content: \"\\f1db\"; }\n.icon-lock:before { content: \"\\f1dc\"; }\n.icon-manager:before { content: \"\\f1dd\"; }\n.icon-map:before { content: \"\\f1de\"; }\n.icon-measure-2d:before { content: \"\\f1df\"; }\n.icon-measure-3d:before { content: \"\\f1e0\"; }\n.icon-measure-area:before { content: \"\\f1e1\"; }\n.icon-measure-distance:before { content: \"\\f1e2\"; }\n.icon-measure-location:before { content: \"\\f1e3\"; }\n.icon-measure:before { content: \"\\f1e4\"; }\n.icon-media-controls-circular-pause:before { content: \"\\f1e5\"; }\n.icon-media-controls-circular-play:before { content: \"\\f1e6\"; }\n.icon-media-controls-circular-stop:before { content: \"\\f1e7\"; }\n.icon-media-controls-fast-backward:before { content: \"\\f1e8\"; }\n.icon-media-controls-fast-forward:before { content: \"\\f1e9\"; }\n.icon-media-controls-frame-backward:before { content: \"\\f1ea\"; }\n.icon-media-controls-frame-forward:before { content: \"\\f1eb\"; }\n.icon-media-controls-go-to-end:before { content: \"\\f1ec\"; }\n.icon-media-controls-go-to-start:before { content: \"\\f1ed\"; }\n.icon-media-controls-loop:before { content: \"\\f1ee\"; }\n.icon-media-controls-pause:before { content: \"\\f1ef\"; }\n.icon-media-controls-play-backward:before { content: \"\\f1f0\"; }\n.icon-media-controls-play-section:before { content: \"\\f1f1\"; }\n.icon-media-controls-play:before { content: \"\\f1f2\"; }\n.icon-media-controls-record:before { content: \"\\f1f3\"; }\n.icon-media-controls-stop:before { content: \"\\f1f4\"; }\n.icon-menu:before { content: \"\\f1f5\"; }\n.icon-merge:before { content: \"\\f1f6\"; }\n.icon-model:before { content: \"\\f1f7\"; }\n.icon-more-2:before { content: \"\\f1f8\"; }\n.icon-more-circular:before { content: \"\\f1f9\"; }\n.icon-more-vertical-2:before { content: \"\\f1fa\"; }\n.icon-more-vertical-circular:before { content: \"\\f1fb\"; }\n.icon-more-vertical:before { content: \"\\f1fc\"; }\n.icon-more:before { content: \"\\f1fd\"; }\n.icon-mouse-click-left:before { content: \"\\f1fe\"; }\n.icon-mouse-click-right:before { content: \"\\f1ff\"; }\n.icon-mouse-click-wheel:before { content: \"\\f200\"; }\n.icon-mouse-click:before { content: \"\\f201\"; }\n.icon-move-below:before { content: \"\\f202\"; }\n.icon-move:before { content: \"\\f203\"; }\n.icon-network:before { content: \"\\f204\"; }\n.icon-notification:before { content: \"\\f205\"; }\n.icon-paintbrush:before { content: \"\\f206\"; }\n.icon-palette:before { content: \"\\f207\"; }\n.icon-perspective:before { content: \"\\f208\"; }\n.icon-pin:before { content: \"\\f209\"; }\n.icon-placeholder:before { content: \"\\f20a\"; }\n.icon-plane:before { content: \"\\f20b\"; }\n.icon-print-preview:before { content: \"\\f20c\"; }\n.icon-print-settings:before { content: \"\\f20d\"; }\n.icon-print:before { content: \"\\f20e\"; }\n.icon-process:before { content: \"\\f20f\"; }\n.icon-progress-backward-2:before { content: \"\\f210\"; }\n.icon-progress-backward-3:before { content: \"\\f211\"; }\n.icon-progress-backward:before { content: \"\\f212\"; }\n.icon-progress-forward-2:before { content: \"\\f213\"; }\n.icon-progress-forward-3:before { content: \"\\f214\"; }\n.icon-progress-forward:before { content: \"\\f215\"; }\n.icon-properties-list:before { content: \"\\f216\"; }\n.icon-properties:before { content: \"\\f217\"; }\n.icon-range:before { content: \"\\f218\"; }\n.icon-read-only:before { content: \"\\f219\"; }\n.icon-records:before { content: \"\\f21a\"; }\n.icon-redo:before { content: \"\\f21b\"; }\n.icon-refresh:before { content: \"\\f21c\"; }\n.icon-remove-2:before { content: \"\\f21d\"; }\n.icon-remove:before { content: \"\\f21e\"; }\n.icon-rename:before { content: \"\\f21f\"; }\n.icon-repair:before { content: \"\\f220\"; }\n.icon-replace:before { content: \"\\f221\"; }\n.icon-reports:before { content: \"\\f222\"; }\n.icon-rotate-left:before { content: \"\\f223\"; }\n.icon-rotate-right:before { content: \"\\f224\"; }\n.icon-rules:before { content: \"\\f225\"; }\n.icon-save-as:before { content: \"\\f226\"; }\n.icon-save-settings:before { content: \"\\f227\"; }\n.icon-save-update:before { content: \"\\f228\"; }\n.icon-save:before { content: \"\\f229\"; }\n.icon-saved-searches:before { content: \"\\f22a\"; }\n.icon-saved-view-annotate:before { content: \"\\f22b\"; }\n.icon-saved-view-chat:before { content: \"\\f22c\"; }\n.icon-saved-view:before { content: \"\\f22d\"; }\n.icon-scale:before { content: \"\\f22e\"; }\n.icon-screenshare-stop:before { content: \"\\f22f\"; }\n.icon-screenshare:before { content: \"\\f230\"; }\n.icon-script-run:before { content: \"\\f231\"; }\n.icon-script-status:before { content: \"\\f232\"; }\n.icon-script:before { content: \"\\f233\"; }\n.icon-search:before { content: \"\\f234\"; }\n.icon-section-tool:before { content: \"\\f235\"; }\n.icon-select-box:before { content: \"\\f236\"; }\n.icon-select-line:before { content: \"\\f237\"; }\n.icon-select-minus:before { content: \"\\f238\"; }\n.icon-select-plus:before { content: \"\\f239\"; }\n.icon-select-single:before { content: \"\\f23a\"; }\n.icon-selection-clear:before { content: \"\\f23b\"; }\n.icon-selection:before { content: \"\\f23c\"; }\n.icon-settings:before { content: \"\\f23d\"; }\n.icon-shape:before { content: \"\\f23e\"; }\n.icon-share:before { content: \"\\f23f\"; }\n.icon-shortcut-add:before { content: \"\\f240\"; }\n.icon-sitemap:before { content: \"\\f241\"; }\n.icon-smartphone:before { content: \"\\f242\"; }\n.icon-smiley-happy-very:before { content: \"\\f243\"; }\n.icon-smiley-happy:before { content: \"\\f244\"; }\n.icon-smiley-neutral:before { content: \"\\f245\"; }\n.icon-smiley-sad-very:before { content: \"\\f246\"; }\n.icon-smiley-sad:before { content: \"\\f247\"; }\n.icon-snaps-bisector:before { content: \"\\f248\"; }\n.icon-snaps-center:before { content: \"\\f249\"; }\n.icon-snaps-intersection:before { content: \"\\f24a\"; }\n.icon-snaps-midpoint:before { content: \"\\f24b\"; }\n.icon-snaps-multione:before { content: \"\\f24c\"; }\n.icon-snaps-multithree:before { content: \"\\f24d\"; }\n.icon-snaps-multitwo:before { content: \"\\f24e\"; }\n.icon-snaps-nearest:before { content: \"\\f24f\"; }\n.icon-snaps-origin:before { content: \"\\f250\"; }\n.icon-snaps:before { content: \"\\f251\"; }\n.icon-sort-down:before { content: \"\\f252\"; }\n.icon-sort-menu:before { content: \"\\f253\"; }\n.icon-sort-up:before { content: \"\\f254\"; }\n.icon-spaces:before { content: \"\\f255\"; }\n.icon-spin:before { content: \"\\f256\"; }\n.icon-star-hollow:before { content: \"\\f257\"; }\n.icon-star:before { content: \"\\f258\"; }\n.icon-status-draft:before { content: \"\\f259\"; }\n.icon-status-error-hollow:before { content: \"\\f25a\"; }\n.icon-status-error:before { content: \"\\f25b\"; }\n.icon-status-pass-hollow:before { content: \"\\f25c\"; }\n.icon-status-pass:before { content: \"\\f25d\"; }\n.icon-status-pending-hollow:before { content: \"\\f25e\"; }\n.icon-status-pending:before { content: \"\\f25f\"; }\n.icon-status-rejected-hollow:before { content: \"\\f260\"; }\n.icon-status-rejected:before { content: \"\\f261\"; }\n.icon-status-running:before { content: \"\\f262\"; }\n.icon-status-success-hollow:before { content: \"\\f263\"; }\n.icon-status-success:before { content: \"\\f264\"; }\n.icon-status-update:before { content: \"\\f265\"; }\n.icon-status-warning:before { content: \"\\f266\"; }\n.icon-sync:before { content: \"\\f267\"; }\n.icon-table-2:before { content: \"\\f268\"; }\n.icon-table-of-contents:before { content: \"\\f269\"; }\n.icon-table:before { content: \"\\f26a\"; }\n.icon-tag-2:before { content: \"\\f26b\"; }\n.icon-technical-preview-badge-bw:before { content: \"\\f26c\"; }\n.icon-technical-preview-badge:before { content: \"\\f26d\"; }\n.icon-technical-preview-bw:before { content: \"\\f26e\"; }\n.icon-technical-preview-mini-bw:before { content: \"\\f26f\"; }\n.icon-technical-preview-mini:before { content: \"\\f270\"; }\n.icon-technical-preview:before { content: \"\\f271\"; }\n.icon-text-align-text-align-center:before { content: \"\\f272\"; }\n.icon-text-align-text-align-justify:before { content: \"\\f273\"; }\n.icon-text-align-text-align-left:before { content: \"\\f274\"; }\n.icon-text-align-text-align-right:before { content: \"\\f275\"; }\n.icon-text-medium:before { content: \"\\f276\"; }\n.icon-text-small:before { content: \"\\f277\"; }\n.icon-text:before { content: \"\\f278\"; }\n.icon-thumbnails:before { content: \"\\f279\"; }\n.icon-timeline:before { content: \"\\f27a\"; }\n.icon-timer:before { content: \"\\f27b\"; }\n.icon-tools:before { content: \"\\f27c\"; }\n.icon-tree:before { content: \"\\f27d\"; }\n.icon-underline:before { content: \"\\f27e\"; }\n.icon-undo:before { content: \"\\f27f\"; }\n.icon-unlink:before { content: \"\\f280\"; }\n.icon-upgrade:before { content: \"\\f281\"; }\n.icon-upload-to-cloud:before { content: \"\\f282\"; }\n.icon-upload:before { content: \"\\f283\"; }\n.icon-user-add:before { content: \"\\f284\"; }\n.icon-user:before { content: \"\\f285\"; }\n.icon-users:before { content: \"\\f286\"; }\n.icon-validate:before { content: \"\\f287\"; }\n.icon-versions:before { content: \"\\f288\"; }\n.icon-vertex:before { content: \"\\f289\"; }\n.icon-view-layouts:before { content: \"\\f28a\"; }\n.icon-view-navigation:before { content: \"\\f28b\"; }\n.icon-visibility-hide-2:before { content: \"\\f28c\"; }\n.icon-visibility-hide:before { content: \"\\f28d\"; }\n.icon-visibility-invert:before { content: \"\\f28e\"; }\n.icon-visibility-semi-transparent:before { content: \"\\f28f\"; }\n.icon-visibility:before { content: \"\\f290\"; }\n.icon-walk:before { content: \"\\f291\"; }\n.icon-wifi-disabled:before { content: \"\\f292\"; }\n.icon-wifi:before { content: \"\\f293\"; }\n.icon-window-add:before { content: \"\\f294\"; }\n.icon-window-area:before { content: \"\\f295\"; }\n.icon-window-backward:before { content: \"\\f296\"; }\n.icon-window-collapse-2:before { content: \"\\f297\"; }\n.icon-window-collapse:before { content: \"\\f298\"; }\n.icon-window-expand:before { content: \"\\f299\"; }\n.icon-window-forward:before { content: \"\\f29a\"; }\n.icon-window-full-screen:before { content: \"\\f29b\"; }\n.icon-window-maximize:before { content: \"\\f29c\"; }\n.icon-window-minimize:before { content: \"\\f29d\"; }\n.icon-window-new:before { content: \"\\f29e\"; }\n.icon-window-split-horizontal:before { content: \"\\f29f\"; }\n.icon-window-split-vertical:before { content: \"\\f2a0\"; }\n.icon-window:before { content: \"\\f2a1\"; }\n.icon-windows:before { content: \"\\f2a2\"; }\n.icon-xray-view:before { content: \"\\f2a3\"; }\n.icon-zoom-in-2:before { content: \"\\f2a4\"; }\n.icon-zoom-in:before { content: \"\\f2a5\"; }\n.icon-zoom-out-2:before { content: \"\\f2a6\"; }\n.icon-zoom-out:before { content: \"\\f2a7\"; }\n.icon-zoom:before { content: \"\\f2a8\"; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/button/UnderlinedButton.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/button/UnderlinedButton.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.core-underlined-button {\n  background: transparent;\n  color: var(--buic-foreground-primary);\n  border: 0px solid var(--buic-foreground-primary);\n  border-bottom-width: 1px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: pointer; }\n  .core-underlined-button:hover {\n    color: var(--buic-foreground-primary-tone);\n    border-color: var(--buic-foreground-primary-tone); }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/checklistbox/CheckListBox.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/checklistbox/CheckListBox.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.core-chk-listbox {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative; }\n  .core-chk-listbox > li > .core-chk-listboxitem-checkbox {\n    display: block;\n    position: relative;\n    padding: 0 0 0 22px;\n    margin: 11px 0;\n    background-color: var(--buic-background-control);\n    cursor: pointer;\n    margin: 4px 0; }\n    .core-chk-listbox > li > .core-chk-listboxitem-checkbox > input {\n      position: absolute;\n      left: 4px;\n      top: 0;\n      height: 22px;\n      margin: 0;\n      font-size: 14px;\n      line-height: 22px;\n      text-align: left;\n      cursor: pointer; }\n    .core-chk-listbox > li > .core-chk-listboxitem-checkbox > .core-checkbox-label {\n      display: inline;\n      position: relative;\n      left: 0;\n      padding: 0;\n      margin: 0;\n      border: 0 none transparent;\n      font-size: 14px;\n      font-style: normal;\n      font-weight: 400;\n      line-height: 22px;\n      text-align: left;\n      vertical-align: initial;\n      white-space: normal;\n      color: var(--buic-foreground-body); }\n    .core-chk-listbox > li > .core-chk-listboxitem-checkbox.disabled {\n      cursor: not-allowed; }\n    .core-chk-listbox > li > .core-chk-listboxitem-checkbox.success > .core-checkbox-label {\n      color: var(--buic-foreground-success);\n      /*$uicore-green;*/ }\n    .core-chk-listbox > li > .core-chk-listboxitem-checkbox.warning > .core-checkbox-label {\n      color: var(--buic-foreground-warning);\n      /*$uicore-orange;*/ }\n    .core-chk-listbox > li > .core-chk-listboxitem-checkbox.error > .core-checkbox-label {\n      color: var(--buic-foreground-alert);\n      /*$uicore-red;*/ }\n    .core-chk-listbox > li > .core-chk-listboxitem-checkbox.disabled > .core-checkbox-label {\n      color: var(--buic-foreground-disabled);\n      /*$uicore-gray-9;*/ }\n  .core-chk-listbox > .core-chk-listbox-separator {\n    height: 1px;\n    background: var(--buic-background-divider);\n    margin: 4px 0;\n    pointer-events: none; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/classes.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/classes.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n.uicore-centered {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.uicore-full-height {\n  height: 100%; }\n\n.uicore-full-size {\n  width: 100%;\n  height: 100%; }\n\n.uicore-fill-centered {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  width: 100%;\n  height: 100%; }\n\n.uicore-scrollview {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto; }\n  @supports (-webkit-overflow-scrolling: touch) {\n    .uicore-scrollview {\n      overflow-y: scroll;\n      /* overflow-y has to be scroll, not auto */\n      -webkit-overflow-scrolling: touch; } }\n  .uicore-scrollview::-webkit-scrollbar {\n    width: 12px;\n    height: 12px; }\n  .uicore-scrollview::-webkit-scrollbar-thumb {\n    border-radius: 12px;\n    background-color: var(--buic-background-scrollbar);\n    background-clip: content-box;\n    border-style: solid;\n    border-color: transparent;\n    border-width: 2px; }\n  .uicore-scrollview::-webkit-scrollbar-corner {\n    background-color: transparent; }\n  .uicore-scrollview::-webkit-scrollbar-track-piece:corner-present {\n    margin-bottom: -4px;\n    margin-right: -4px; }\n\n.uicore-flex-wrap-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.uicore-inputs-checkbox {\n  display: block;\n  position: relative;\n  padding: 0 0 0 22px;\n  margin: 11px 0;\n  background-color: var(--buic-background-control);\n  cursor: pointer; }\n  .uicore-inputs-checkbox > input {\n    position: absolute;\n    left: 4px;\n    top: 0;\n    height: 22px;\n    margin: 0;\n    font-size: 14px;\n    line-height: 22px;\n    text-align: left;\n    cursor: pointer; }\n  .uicore-inputs-checkbox > .core-checkbox-label {\n    display: inline;\n    position: relative;\n    left: 0;\n    padding: 0;\n    margin: 0;\n    border: 0 none transparent;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 22px;\n    text-align: left;\n    vertical-align: initial;\n    white-space: normal;\n    color: var(--buic-foreground-body); }\n  .uicore-inputs-checkbox.disabled {\n    cursor: not-allowed; }\n  .uicore-inputs-checkbox.success > .core-checkbox-label {\n    color: var(--buic-foreground-success);\n    /*$uicore-green;*/ }\n  .uicore-inputs-checkbox.warning > .core-checkbox-label {\n    color: var(--buic-foreground-warning);\n    /*$uicore-orange;*/ }\n  .uicore-inputs-checkbox.error > .core-checkbox-label {\n    color: var(--buic-foreground-alert);\n    /*$uicore-red;*/ }\n  .uicore-inputs-checkbox.disabled > .core-checkbox-label {\n    color: var(--buic-foreground-disabled);\n    /*$uicore-gray-9;*/ }\n\n.core-checkbox {\n  display: block;\n  position: relative;\n  padding: 0 0 0 22px;\n  margin: 11px 0;\n  background-color: var(--buic-background-control);\n  cursor: pointer; }\n  .core-checkbox > input {\n    position: absolute;\n    left: 4px;\n    top: 0;\n    height: 22px;\n    margin: 0;\n    font-size: 14px;\n    line-height: 22px;\n    text-align: left;\n    cursor: pointer; }\n  .core-checkbox > .core-checkbox-label {\n    display: inline;\n    position: relative;\n    left: 0;\n    padding: 0;\n    margin: 0;\n    border: 0 none transparent;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 22px;\n    text-align: left;\n    vertical-align: initial;\n    white-space: normal;\n    color: var(--buic-foreground-body); }\n  .core-checkbox.disabled {\n    cursor: not-allowed; }\n  .core-checkbox.success > .core-checkbox-label {\n    color: var(--buic-foreground-success);\n    /*$uicore-green;*/ }\n  .core-checkbox.warning > .core-checkbox-label {\n    color: var(--buic-foreground-warning);\n    /*$uicore-orange;*/ }\n  .core-checkbox.error > .core-checkbox-label {\n    color: var(--buic-foreground-alert);\n    /*$uicore-red;*/ }\n  .core-checkbox.disabled > .core-checkbox-label {\n    color: var(--buic-foreground-disabled);\n    /*$uicore-gray-9;*/ }\n\n.uicore-inputs-input {\n  display: block;\n  width: 100%;\n  padding: 7px 10px;\n  margin: 3px 0;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 22px;\n  color: var(--buic-foreground-body);\n  background-color: var(--buic-background-control);\n  background-image: none;\n  border: 1px solid var(--buic-inputs-border);\n  border-radius: 3px;\n  -webkit-box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset;\n          box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  -o-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out; }\n  .uicore-inputs-input:-ms-input-placeholder {\n    color: var(--buic-foreground-disabled); }\n  .uicore-inputs-input::-webkit-input-placeholder {\n    color: var(--buic-foreground-disabled); }\n  .uicore-inputs-input::-moz-placeholder {\n    color: var(--buic-foreground-disabled); }\n  .uicore-inputs-input::-ms-input-placeholder {\n    color: var(--buic-foreground-disabled); }\n  .uicore-inputs-input::placeholder {\n    color: var(--buic-foreground-disabled); }\n  .uicore-inputs-input[disabled], .uicore-inputs-input[readonly] {\n    background-color: var(--buic-background-control-disabled);\n    color: var(--buic-foreground-muted);\n    cursor: not-allowed; }\n  .uicore-inputs-input:focus {\n    border-color: var(--buic-inputs-border);\n    outline: 0px;\n    -webkit-box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, var(--buic-inputs-focus-boxshadow-gradient2) 0px 0px 0px 2px;\n            box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, var(--buic-inputs-focus-boxshadow-gradient2) 0px 0px 0px 2px; }\n\n.uicore-inputs-labeled-input {\n  display: block;\n  padding: 0;\n  margin: 0 0 11px;\n  text-align: left;\n  font-size: 14px;\n  font-weight: 400;\n  cursor: pointer; }\n  .uicore-inputs-labeled-input > .label {\n    padding: 0;\n    margin: 0;\n    border: 0 none transparent;\n    display: block;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 22px;\n    text-align: left;\n    color: var(--buic-foreground-body); }\n  .uicore-inputs-labeled-input > .input {\n    position: relative;\n    display: inline-block;\n    width: 100%; }\n    .uicore-inputs-labeled-input > .input.with-icon > input,\n    .uicore-inputs-labeled-input > .input.with-icon > .bwx-inputs-input {\n      padding-right: 32px; }\n    .uicore-inputs-labeled-input > .input > .icon {\n      display: block;\n      position: absolute;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      padding: 11px;\n      font-size: 16px;\n      font-weight: normal;\n      line-height: 22px; }\n  .uicore-inputs-labeled-input > .message {\n    display: block;\n    font-size: 12px;\n    line-height: 22px;\n    color: var(--buic-foreground-muted); }\n  .uicore-inputs-labeled-input.success,\n  .uicore-inputs-labeled-input.success > .message {\n    color: #56aa1c; }\n  .uicore-inputs-labeled-input.success > .input > input,\n  .uicore-inputs-labeled-input.success > .input > .uicore-inputs-input {\n    border-color: #56aa1c;\n    -webkit-box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset;\n            box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset; }\n    .uicore-inputs-labeled-input.success > .input > input:focus,\n    .uicore-inputs-labeled-input.success > .input > .uicore-inputs-input:focus {\n      border-color: #56aa1c;\n      -webkit-box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, rgba(86, 170, 28, 0.15) 0px 0px 0px 2px;\n              box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, rgba(86, 170, 28, 0.15) 0px 0px 0px 2px; }\n  .uicore-inputs-labeled-input.warning,\n  .uicore-inputs-labeled-input.warning > .message {\n    color: #ff6600; }\n  .uicore-inputs-labeled-input.warning > .input > input,\n  .uicore-inputs-labeled-input.warning > .input > .uicore-inputs-input {\n    border-color: #ff6600;\n    -webkit-box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset;\n            box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset; }\n    .uicore-inputs-labeled-input.warning > .input > input:focus,\n    .uicore-inputs-labeled-input.warning > .input > .uicore-inputs-input:focus {\n      border-color: #ff6600;\n      -webkit-box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, rgba(255, 102, 0, 0.15) 0px 0px 0px 2px;\n              box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, rgba(255, 102, 0, 0.15) 0px 0px 0px 2px; }\n  .uicore-inputs-labeled-input.error,\n  .uicore-inputs-labeled-input.error > .message {\n    color: #cc0000; }\n  .uicore-inputs-labeled-input.error > .input > input,\n  .uicore-inputs-labeled-input.error > .input > .uicore-inputs-input {\n    border-color: #cc0000;\n    -webkit-box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset;\n            box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset; }\n    .uicore-inputs-labeled-input.error > .input > input:focus,\n    .uicore-inputs-labeled-input.error > .input > .uicore-inputs-input:focus {\n      border-color: #cc0000;\n      -webkit-box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, rgba(204, 0, 0, 0.15) 0px 0px 0px 2px;\n              box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, rgba(204, 0, 0, 0.15) 0px 0px 0px 2px; }\n\n.uicore-inputs-labeled-select {\n  display: block;\n  padding: 0;\n  margin: 0 0 11px;\n  text-align: left;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  cursor: pointer; }\n  .uicore-inputs-labeled-select > .label {\n    padding: 0;\n    margin: 0;\n    border: 0 none transparent;\n    display: block;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 22px;\n    text-align: left;\n    color: var(--buic-foreground-body); }\n  .uicore-inputs-labeled-select > .message {\n    display: block;\n    font-size: 12px;\n    line-height: 22px;\n    color: var(--buic-foreground-muted); }\n  .uicore-inputs-labeled-select.success,\n  .uicore-inputs-labeled-select.success > .message {\n    color: #56aa1c; }\n  .uicore-inputs-labeled-select.success > select,\n  .uicore-inputs-labeled-select.success > .uicore-inputs-select {\n    border-color: #56aa1c;\n    -webkit-box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset;\n            box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset; }\n    .uicore-inputs-labeled-select.success > select:focus,\n    .uicore-inputs-labeled-select.success > .uicore-inputs-select:focus {\n      border-color: #56aa1c;\n      -webkit-box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, rgba(86, 170, 28, 0.15) 0px 0px 0px 2px;\n              box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, rgba(86, 170, 28, 0.15) 0px 0px 0px 2px; }\n  .uicore-inputs-labeled-select.warning,\n  .uicore-inputs-labeled-select.warning > .message {\n    color: #ff6600; }\n  .uicore-inputs-labeled-select.warning > select,\n  .uicore-inputs-labeled-select.warning > .uicore-inputs-select {\n    border-color: #ff6600;\n    -webkit-box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset;\n            box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset; }\n    .uicore-inputs-labeled-select.warning > select:focus,\n    .uicore-inputs-labeled-select.warning > .uicore-inputs-select:focus {\n      border-color: #ff6600;\n      -webkit-box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, rgba(255, 102, 0, 0.15) 0px 0px 0px 2px;\n              box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, rgba(255, 102, 0, 0.15) 0px 0px 0px 2px; }\n  .uicore-inputs-labeled-select.error,\n  .uicore-inputs-labeled-select.error > .message {\n    color: #cc0000; }\n  .uicore-inputs-labeled-select.error > select,\n  .uicore-inputs-labeled-select.error > .uicore-inputs-select {\n    border-color: #cc0000;\n    -webkit-box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset;\n            box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset; }\n    .uicore-inputs-labeled-select.error > select:focus,\n    .uicore-inputs-labeled-select.error > .uicore-inputs-select:focus {\n      border-color: #cc0000;\n      -webkit-box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, rgba(204, 0, 0, 0.15) 0px 0px 0px 2px;\n              box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, rgba(204, 0, 0, 0.15) 0px 0px 0px 2px; }\n\n.uicore-inputs-labeled-textarea {\n  display: block;\n  padding: 0;\n  margin: 0 0 11px;\n  line-height: 0;\n  text-align: left;\n  cursor: pointer;\n  font-weight: normal; }\n  .uicore-inputs-labeled-textarea > .label {\n    padding: 0;\n    margin: 0;\n    border: 0 none transparent;\n    display: block;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 22px;\n    text-align: left;\n    color: var(--buic-foreground-body); }\n  .uicore-inputs-labeled-textarea > .uicore-inputs-textarea {\n    display: inline-block;\n    width: 100%; }\n  .uicore-inputs-labeled-textarea > .message {\n    display: block;\n    font-size: 12px;\n    line-height: 22px;\n    color: var(--buic-foreground-muted); }\n  .uicore-inputs-labeled-textarea.success,\n  .uicore-inputs-labeled-textarea.success > .message {\n    color: #56aa1c; }\n  .uicore-inputs-labeled-textarea.success > textarea,\n  .uicore-inputs-labeled-textarea.success > .uicore-inputs-textarea {\n    border-color: #56aa1c;\n    -webkit-box-shadow: var(--buic-inputs-border) 0px 1px 1px inset;\n            box-shadow: var(--buic-inputs-border) 0px 1px 1px inset; }\n    .uicore-inputs-labeled-textarea.success > textarea:focus,\n    .uicore-inputs-labeled-textarea.success > .uicore-inputs-textarea:focus {\n      border-color: #56aa1c;\n      -webkit-box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, rgba(86, 170, 28, 0.15) 0px 0px 0px 2px;\n              box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, rgba(86, 170, 28, 0.15) 0px 0px 0px 2px; }\n  .uicore-inputs-labeled-textarea.warning,\n  .uicore-inputs-labeled-textarea.warning > .message {\n    color: #ff6600; }\n  .uicore-inputs-labeled-textarea.warning > textarea,\n  .uicore-inputs-labeled-textarea.warning > .uicore-inputs-textarea {\n    border-color: #ff6600;\n    -webkit-box-shadow: var(--buic-inputs-border) 0px 1px 1px inset;\n            box-shadow: var(--buic-inputs-border) 0px 1px 1px inset; }\n    .uicore-inputs-labeled-textarea.warning > textarea:focus,\n    .uicore-inputs-labeled-textarea.warning > .uicore-inputs-textarea:focus {\n      border-color: #ff6600;\n      -webkit-box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, rgba(255, 102, 0, 0.15) 0px 0px 0px 2px;\n              box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, rgba(255, 102, 0, 0.15) 0px 0px 0px 2px; }\n  .uicore-inputs-labeled-textarea.error,\n  .uicore-inputs-labeled-textarea.error > .message {\n    color: #cc0000; }\n  .uicore-inputs-labeled-textarea.error > textarea,\n  .uicore-inputs-labeled-textarea.error > .uicore-inputs-textarea {\n    border-color: #cc0000;\n    -webkit-box-shadow: var(--buic-inputs-border) 0px 1px 1px inset;\n            box-shadow: var(--buic-inputs-border) 0px 1px 1px inset; }\n    .uicore-inputs-labeled-textarea.error > textarea:focus,\n    .uicore-inputs-labeled-textarea.error > .uicore-inputs-textarea:focus {\n      border-color: #cc0000;\n      -webkit-box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, rgba(204, 0, 0, 0.15) 0px 0px 0px 2px;\n              box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, rgba(204, 0, 0, 0.15) 0px 0px 0px 2px; }\n\n.uicore-inputs-radio {\n  display: block;\n  position: relative;\n  padding: 0 0 0 22px;\n  margin: 11px 0;\n  cursor: pointer; }\n  .uicore-inputs-radio > input {\n    position: absolute;\n    left: 4px;\n    top: 0;\n    height: 22px;\n    margin: 0;\n    font-size: 14px;\n    line-height: 22px;\n    text-align: left;\n    cursor: pointer; }\n  .uicore-inputs-radio > .label {\n    display: inline;\n    position: relative;\n    left: 0;\n    padding: 0;\n    margin: 0;\n    border: 0 none transparent;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 22px;\n    text-align: left;\n    vertical-align: initial;\n    white-space: normal;\n    color: var(--buic-foreground-body); }\n  .uicore-inputs-radio.disabled {\n    cursor: not-allowed; }\n  .uicore-inputs-radio.success > .label {\n    color: #56aa1c; }\n  .uicore-inputs-radio.warning > .label {\n    color: #ff6600; }\n  .uicore-inputs-radio.error > .label {\n    color: #cc0000; }\n  .uicore-inputs-radio.disabled > .label {\n    color: var(--buic-foreground-disabled); }\n\n.uicore-inputs-select {\n  display: inline-block;\n  height: 38px;\n  padding: 8px 7px;\n  margin: 3px 0;\n  font-size: 14px;\n  line-height: 22px;\n  color: var(--buic-foreground-body);\n  background-color: var(--buic-background-control);\n  background-image: none;\n  border: 1px solid var(--buic-inputs-border);\n  border-radius: 3px;\n  -webkit-box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset;\n          box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset;\n  -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  -o-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out; }\n  .uicore-inputs-select:invalid {\n    color: var(--buic-foreground-disabled); }\n    .uicore-inputs-select:invalid > option {\n      color: var(--buic-foreground-body); }\n  .uicore-inputs-select > option.placeholder {\n    display: none; }\n  .uicore-inputs-select[disabled], .uicore-inputs-select[readonly] {\n    background-color: var(--buic-background-control-disabled);\n    color: var(--buic-foreground-disabled);\n    cursor: not-allowed; }\n  .uicore-inputs-select:focus {\n    border-color: var(--buic-inputs-border);\n    outline: 0px;\n    -webkit-box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, var(--buic-inputs-focus-boxshadow-gradient2) 0px 0px 0px 2px;\n            box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, var(--buic-inputs-focus-boxshadow-gradient2) 0px 0px 0px 2px; }\n\n.uicore-inputs-textarea {\n  display: block;\n  width: 100%;\n  padding: 7px 10px;\n  margin: 3px 0;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 22px;\n  color: var(--buic-foreground-body);\n  background-color: var(--buic-background-control);\n  background-image: none;\n  border: 1px solid var(--buic-inputs-border);\n  border-radius: 3px;\n  -webkit-box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset;\n          box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset;\n  -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  -o-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out; }\n  .uicore-inputs-textarea:-ms-input-placeholder {\n    color: var(--buic-foreground-disabled);\n    /* $uicore-gray-9;*/ }\n  .uicore-inputs-textarea::-webkit-input-placeholder {\n    color: var(--buic-foreground-disabled);\n    /* $uicore-gray-9;*/ }\n  .uicore-inputs-textarea::-moz-placeholder {\n    color: var(--buic-foreground-disabled);\n    /* $uicore-gray-9;*/ }\n  .uicore-inputs-textarea::-ms-input-placeholder {\n    color: var(--buic-foreground-disabled);\n    /* $uicore-gray-9;*/ }\n  .uicore-inputs-textarea::placeholder {\n    color: var(--buic-foreground-disabled);\n    /* $uicore-gray-9;*/ }\n  .uicore-inputs-textarea[disabled], .uicore-inputs-textarea[readonly] {\n    background-color: var(--buic-background-control-disabled);\n    color: var(--buic-foreground-muted);\n    cursor: not-allowed; }\n  .uicore-inputs-textarea:focus {\n    border-color: var(--buic-inputs-border);\n    outline: 0px;\n    -webkit-box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, var(--buic-inputs-focus-boxshadow-gradient2) 0px 0px 0px 2px;\n            box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, var(--buic-inputs-focus-boxshadow-gradient2) 0px 0px 0px 2px; }\n\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.uicore-text-block {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 22px;\n  color: var(--buic-foreground-body);\n  padding: 0;\n  margin: 0 0 22px; }\n\n.uicore-text-headline {\n  font-size: 32px;\n  font-weight: 300;\n  line-height: 44px;\n  color: var(--buic-foreground-body);\n  padding: 0;\n  margin: 0 0 22px; }\n\n.uicore-text-leading {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 22px;\n  color: var(--buic-foreground-body);\n  padding: 0;\n  margin: 0 0 22px; }\n\n.uicore-text-leading-2 {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 22px;\n  color: var(--buic-foreground-body);\n  padding: 0;\n  margin: 0 0 22px; }\n\n.uicore-text-muted {\n  color: #9ba5ae; }\n\n.uicore-text-small {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 22px;\n  color: var(--buic-foreground-body);\n  padding: 0;\n  margin: 0; }\n\n.uicore-text-subheading {\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 33px;\n  color: var(--buic-foreground-body);\n  padding: 0;\n  margin: 0 0 22px; }\n\n.uicore-text-subheading-2 {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 33px;\n  color: var(--buic-foreground-body);\n  padding: 0;\n  margin: 0 0 22px; }\n\n.uicore-text-title {\n  font-size: 24px;\n  font-weight: 300;\n  line-height: 33px;\n  color: var(--buic-foreground-body);\n  padding: 0;\n  margin: 0 0 22px; }\n\n.uicore-text-title-2 {\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 33px;\n  color: var(--buic-foreground-body);\n  padding: 0;\n  margin: 0 0 22px; }\n\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.uicore-buttons-blue {\n  display: inline-block;\n  padding: 8px 11px;\n  margin: 3px 0;\n  border-radius: 3px;\n  line-height: 22px;\n  outline: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  text-decoration: none;\n  cursor: pointer; }\n  .uicore-buttons-blue:hover {\n    text-decoration: none; }\n  .uicore-buttons-blue:active, .uicore-buttons-blue:focus {\n    outline: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    text-decoration: none; }\n  .uicore-buttons-blue[disabled], .uicore-buttons-blue[disabled]:hover, .uicore-buttons-blue[disabled]:active, .uicore-buttons-blue[disabled]:focus {\n    opacity: 0.4;\n    background-color: #9ba5ae;\n    border: 0;\n    color: #fff;\n    cursor: not-allowed; }\n  .uicore-buttons-blue, .uicore-buttons-blue:active, .uicore-buttons-blue:focus {\n    border: none;\n    background-color: #008be1;\n    color: #fff; }\n  .uicore-buttons-blue:hover {\n    background-color: #0073ba;\n    color: #fff; }\n\n.uicore-buttons-blue-large {\n  display: inline-block;\n  padding: 8px 11px;\n  margin: 3px 0;\n  border-radius: 3px;\n  line-height: 22px;\n  outline: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  text-decoration: none;\n  cursor: pointer;\n  padding: 13px 22px;\n  margin: 9px 0;\n  font-size: 16px;\n  font-weight: 400; }\n  .uicore-buttons-blue-large:hover {\n    text-decoration: none; }\n  .uicore-buttons-blue-large:active, .uicore-buttons-blue-large:focus {\n    outline: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    text-decoration: none; }\n  .uicore-buttons-blue-large[disabled], .uicore-buttons-blue-large[disabled]:hover, .uicore-buttons-blue-large[disabled]:active, .uicore-buttons-blue-large[disabled]:focus {\n    opacity: 0.4;\n    background-color: #9ba5ae;\n    border: 0;\n    color: #fff;\n    cursor: not-allowed; }\n  .uicore-buttons-blue-large, .uicore-buttons-blue-large:active, .uicore-buttons-blue-large:focus {\n    border: none;\n    background-color: #008be1;\n    color: #fff; }\n  .uicore-buttons-blue-large:hover {\n    background-color: #0073ba;\n    color: #fff; }\n\n.uicore-buttons-disabled {\n  display: inline-block;\n  padding: 8px 11px;\n  margin: 3px 0;\n  border-radius: 3px;\n  line-height: 22px;\n  outline: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  text-decoration: none;\n  cursor: pointer; }\n  .uicore-buttons-disabled:hover {\n    text-decoration: none; }\n  .uicore-buttons-disabled:active, .uicore-buttons-disabled:focus {\n    outline: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    text-decoration: none; }\n  .uicore-buttons-disabled[disabled], .uicore-buttons-disabled[disabled]:hover, .uicore-buttons-disabled[disabled]:active, .uicore-buttons-disabled[disabled]:focus {\n    opacity: 0.4;\n    background-color: #9ba5ae;\n    border: 0;\n    color: #fff;\n    cursor: not-allowed; }\n  .uicore-buttons-disabled, .uicore-buttons-disabled:active, .uicore-buttons-disabled:focus, .uicore-buttons-disabled:hover {\n    opacity: 0.4;\n    background-color: #9ba5ae;\n    border: 0;\n    color: #fff;\n    cursor: not-allowed; }\n\n.uicore-buttons-disabled-large {\n  display: inline-block;\n  padding: 8px 11px;\n  margin: 3px 0;\n  border-radius: 3px;\n  line-height: 22px;\n  outline: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  text-decoration: none;\n  cursor: pointer;\n  padding: 13px 22px;\n  margin: 9px 0;\n  font-size: 16px;\n  font-weight: 400; }\n  .uicore-buttons-disabled-large:hover {\n    text-decoration: none; }\n  .uicore-buttons-disabled-large:active, .uicore-buttons-disabled-large:focus {\n    outline: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    text-decoration: none; }\n  .uicore-buttons-disabled-large[disabled], .uicore-buttons-disabled-large[disabled]:hover, .uicore-buttons-disabled-large[disabled]:active, .uicore-buttons-disabled-large[disabled]:focus {\n    opacity: 0.4;\n    background-color: #9ba5ae;\n    border: 0;\n    color: #fff;\n    cursor: not-allowed; }\n  .uicore-buttons-disabled-large, .uicore-buttons-disabled-large:active, .uicore-buttons-disabled-large:focus, .uicore-buttons-disabled-large:hover {\n    opacity: 0.4;\n    background-color: #9ba5ae;\n    border: 0;\n    color: #fff;\n    cursor: not-allowed; }\n\n.uicore-buttons-hollow {\n  display: inline-block;\n  padding: 8px 11px;\n  margin: 3px 0;\n  border-radius: 3px;\n  line-height: 22px;\n  outline: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  text-decoration: none;\n  cursor: pointer; }\n  .uicore-buttons-hollow:hover {\n    text-decoration: none; }\n  .uicore-buttons-hollow:active, .uicore-buttons-hollow:focus {\n    outline: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    text-decoration: none; }\n  .uicore-buttons-hollow[disabled], .uicore-buttons-hollow[disabled]:hover, .uicore-buttons-hollow[disabled]:active, .uicore-buttons-hollow[disabled]:focus {\n    opacity: 0.4;\n    background-color: #9ba5ae;\n    border: 0;\n    color: #fff;\n    cursor: not-allowed; }\n  .uicore-buttons-hollow, .uicore-buttons-hollow:active, .uicore-buttons-hollow:focus {\n    padding: 7px 10px;\n    border: 1px solid var(--buic-foreground-muted);\n    background-color: transparent;\n    color: var(--buic-foreground-body); }\n  .uicore-buttons-hollow:hover {\n    background-color: transparent;\n    border-color: var(--buic-foreground-body);\n    color: var(--buic-foreground-activehover); }\n  .uicore-buttons-hollow[disabled], .uicore-buttons-hollow[disabled]:hover, .uicore-buttons-hollow[disabled]:active, .uicore-buttons-hollow[disabled]:focus {\n    padding: 8px 11px; }\n\n.uicore-buttons-hollow-large {\n  display: inline-block;\n  padding: 8px 11px;\n  margin: 3px 0;\n  border-radius: 3px;\n  line-height: 22px;\n  outline: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  text-decoration: none;\n  cursor: pointer;\n  padding: 12px 21px;\n  margin: 9px 0;\n  font-size: 16px;\n  font-weight: 400; }\n  .uicore-buttons-hollow-large:hover {\n    text-decoration: none; }\n  .uicore-buttons-hollow-large:active, .uicore-buttons-hollow-large:focus {\n    outline: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    text-decoration: none; }\n  .uicore-buttons-hollow-large[disabled], .uicore-buttons-hollow-large[disabled]:hover, .uicore-buttons-hollow-large[disabled]:active, .uicore-buttons-hollow-large[disabled]:focus {\n    opacity: 0.4;\n    background-color: #9ba5ae;\n    border: 0;\n    color: #fff;\n    cursor: not-allowed; }\n  .uicore-buttons-hollow-large, .uicore-buttons-hollow-large:active, .uicore-buttons-hollow-large:focus {\n    padding: 7px 10px;\n    border: 1px solid var(--buic-foreground-muted);\n    background-color: transparent;\n    color: var(--buic-foreground-body); }\n  .uicore-buttons-hollow-large:hover {\n    background-color: transparent;\n    border-color: var(--buic-foreground-body);\n    color: var(--buic-foreground-activehover); }\n  .uicore-buttons-hollow-large[disabled], .uicore-buttons-hollow-large[disabled]:hover, .uicore-buttons-hollow-large[disabled]:active, .uicore-buttons-hollow-large[disabled]:focus {\n    padding: 8px 11px; }\n  .uicore-buttons-hollow-large, .uicore-buttons-hollow-large:active, .uicore-buttons-hollow-large:focus {\n    padding: 12px 21px;\n    margin: 9px 0;\n    font-size: 16px;\n    font-weight: 400; }\n  .uicore-buttons-hollow-large[disabled], .uicore-buttons-hollow-large[disabled]:hover, .uicore-buttons-hollow-large[disabled]:active, .uicore-buttons-hollow-large[disabled]:focus {\n    padding: 13px 22px;\n    margin: 9px 0;\n    font-size: 16px;\n    font-weight: 400; }\n\n.uicore-buttons-primary {\n  display: inline-block;\n  padding: 8px 11px;\n  margin: 3px 0;\n  border-radius: 3px;\n  line-height: 22px;\n  outline: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  text-decoration: none;\n  cursor: pointer; }\n  .uicore-buttons-primary:hover {\n    text-decoration: none; }\n  .uicore-buttons-primary:active, .uicore-buttons-primary:focus {\n    outline: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    text-decoration: none; }\n  .uicore-buttons-primary[disabled], .uicore-buttons-primary[disabled]:hover, .uicore-buttons-primary[disabled]:active, .uicore-buttons-primary[disabled]:focus {\n    opacity: 0.4;\n    background-color: #9ba5ae;\n    border: 0;\n    color: #fff;\n    cursor: not-allowed; }\n  .uicore-buttons-primary, .uicore-buttons-primary:active, .uicore-buttons-primary:focus {\n    color: #fff;\n    border: none;\n    background-color: #56aa1c; }\n  .uicore-buttons-primary:hover {\n    background-color: #458816;\n    color: #fff; }\n\n.uicore-buttons-primary-large {\n  display: inline-block;\n  padding: 8px 11px;\n  margin: 3px 0;\n  border-radius: 3px;\n  line-height: 22px;\n  outline: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  text-decoration: none;\n  cursor: pointer;\n  padding: 13px 22px;\n  margin: 9px 0;\n  font-size: 16px;\n  font-weight: 400; }\n  .uicore-buttons-primary-large:hover {\n    text-decoration: none; }\n  .uicore-buttons-primary-large:active, .uicore-buttons-primary-large:focus {\n    outline: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    text-decoration: none; }\n  .uicore-buttons-primary-large[disabled], .uicore-buttons-primary-large[disabled]:hover, .uicore-buttons-primary-large[disabled]:active, .uicore-buttons-primary-large[disabled]:focus {\n    opacity: 0.4;\n    background-color: #9ba5ae;\n    border: 0;\n    color: #fff;\n    cursor: not-allowed; }\n  .uicore-buttons-primary-large, .uicore-buttons-primary-large:active, .uicore-buttons-primary-large:focus {\n    color: #fff;\n    border: none;\n    background-color: #56aa1c; }\n  .uicore-buttons-primary-large:hover {\n    background-color: #458816;\n    color: #fff; }\n\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.uicore-expandable-blocks-list > div {\n  -webkit-transition: margin 0.15s ease-in-out;\n  -o-transition: margin 0.15s ease-in-out;\n  transition: margin 0.15s ease-in-out; }\n  .uicore-expandable-blocks-list > div > .header {\n    border-color: #dce0e3 transparent transparent; }\n  .uicore-expandable-blocks-list > div:first-child > .header {\n    border-top-color: transparent; }\n\n.uicore-expandable-blocks-list > .is-expanded + div > .header {\n  border-top-color: transparent; }\n\n.uicore-expandable-blocks-list > .is-expanded + div.is-expanded > .header {\n  border-top-color: #008be1; }\n\n.uicore-expandable-blocks-list > .is-expanded + .is-expanded {\n  margin-top: 0; }\n\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.uicore-icons-large {\n  width: 48px;\n  height: 48px; }\n\n.uicore-icons-medium {\n  width: 32px;\n  height: 32px; }\n\n.uicore-icons-small {\n  width: 16px;\n  height: 16px; }\n\n.uicore-icons-x-large {\n  width: 64px;\n  height: 64px; }\n\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.uicore-tabs-horizontal {\n  display: block;\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n  .uicore-tabs-horizontal > li {\n    display: block;\n    position: relative;\n    padding: 0;\n    margin: 0; }\n    .uicore-tabs-horizontal > li > a {\n      display: block;\n      position: relative;\n      padding: 10px 13px 11px;\n      border: 1px solid var(--buic-foreground-muted);\n      border-bottom: 0 none transparent;\n      margin: 0;\n      line-height: 22px;\n      color: var(--buic-foreground-body);\n      cursor: pointer; }\n      .uicore-tabs-horizontal > li > a::after {\n        content: \"\";\n        position: absolute;\n        z-index: 1;\n        -webkit-transition: all 0.5s;\n        -o-transition: all 0.5s;\n        transition: all 0.5s;\n        width: 2px;\n        height: 100%;\n        top: 0;\n        left: 0;\n        background: var(--buic-foreground-primary);\n        opacity: 0; }\n      .uicore-tabs-horizontal > li > a:hover {\n        text-decoration: none;\n        color: var(--buic-foreground-activehover); }\n        .uicore-tabs-horizontal > li > a:hover::after {\n          opacity: 1; }\n    .uicore-tabs-horizontal > li:last-child > a {\n      border-bottom: 1px solid var(--buic-foreground-muted); }\n    .uicore-tabs-horizontal > li.active > a {\n      font-weight: 700; }\n      .uicore-tabs-horizontal > li.active > a::after {\n        opacity: 1; }\n  .uicore-tabs-horizontal.green > li > a::after {\n    background: #56aa1c; }\n  .uicore-tabs-horizontal > li {\n    display: inline-block;\n    margin: 0 -1px 0 0;\n    padding: 0; }\n    .uicore-tabs-horizontal > li > a {\n      line-height: 22px;\n      padding: 7px 14px;\n      margin: 6px 0 0;\n      background: var(--buic-background-tab-inactive); }\n      .uicore-tabs-horizontal > li > a::after {\n        width: 100%;\n        height: 2px; }\n    .uicore-tabs-horizontal > li.active > a {\n      border-bottom: 1px solid var(--buic-background-tab-active);\n      background: var(--buic-background-tab-active); }\n  .uicore-tabs-horizontal.uicore-tabs-green > li > a::after {\n    background: var(--buic-foreground-success); }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/colorthemes.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/colorthemes.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n:root {\n  --buic-accessory-hollow:        rgb(255, 255, 255);\n  --buic-accessory-primary:       rgb(000, 139, 225);\n  --buic-accessory-success:       rgb(086, 169, 028);\n  --buic-accessory-alert:         rgb(211, 010, 010);\n  --buic-accessory-warning:       rgb(241, 139, 018);\n  --buic-accessory-primary-tint:  rgb(165, 215, 245);\n  --buic-accessory-success-tint:  rgb(195, 225, 175);\n  --buic-accessory-alert-tint:    rgb(239, 169, 169);\n  --buic-accessory-warning-tint:  rgb(249, 215, 171);\n  --buic-foreground-mediumgray:   rgb(155, 165, 174);\n  /** background.5 */\n  --buic-background-titlebar:                 var(--buic-background-5);\n  --buic-background-dialog-stroke:            var(--buic-background-5);\n  --buic-background-widget-stroke:            var(--buic-background-5);\n  --buic-background-control-stroke:           var(--buic-background-5);\n  --buic-background-panel-stroke:             var(--buic-background-5);\n  /** background.4 */\n  --buic-background-titlebar-outoffocus:      var(--buic-background-4);\n  --buic-background-divider:                  var(--buic-background-4);\n  --buic-background-widget-element-stroke:    var(--buic-background-4);\n  --buic-background-control-disabled:         var(--buic-background-4);\n  --buic-background-statusbar:                var(--buic-background-4);\n  --buic-background-table-header:             var(--buic-background-4);\n  /** background.3 */\n  --buic-background-tab-inactive:             var(--buic-background-3);\n  --buic-background-toolbutton-inactive:      var(--buic-background-3);\n  --buic-background-context-menu:             var(--buic-background-3);\n  --buic-background-panel:                    var(--buic-background-3);\n  --buic-background-placeholder:              var(--buic-background-3);\n  /** background.2 */\n  --buic-background-tab-active:               var(--buic-background-2);\n  --buic-background-dialog:                   var(--buic-background-2);\n  --buic-background-widget:                   var(--buic-background-2);\n  --buic-background-window:                   var(--buic-background-2);\n  /** background.1 */\n  --buic-background-card:                     var(--buic-background-1);\n  --buic-background-control:                  var(--buic-background-1);\n  /** Widget Opacity */\n  --buic-widget-opacity:    0.90; }\n\n/** @note: This file should only be imported by UiCore.ts.\r\n *  It should NOT be imported by any *.scss or other ui-core files.\r\n */\nhtml,\nhtml[data-theme=\"light\"] {\n  --buic-background-1:            rgb(255, 255, 255);\n  --buic-background-2:            rgb(248, 249, 251);\n  --buic-background-3:            rgb(238, 240, 243);\n  --buic-background-4:            rgb(220, 224, 227);\n  --buic-background-5:            rgb(199, 204, 209);\n  --buic-background-tooltip:      rgba(199, 204, 209, 0.90);\n  --buic-background-scrollbar:    rgb(155, 165, 174);\n  --buic-background-toolbutton-stroke:  rgb(155, 165, 174);\n  --buic-foreground-body:         rgba(000, 000, 000, 0.85);\n  --buic-foreground-body-reverse: rgba(255, 255, 255, 0.85);\n  --buic-foreground-muted:        rgba(000, 000, 000, 0.55);\n  --buic-foreground-disabled:     rgba(000, 000, 000, 0.44);\n  --buic-foreground-activehover:  rgba(000, 000, 000, 1.00);\n  --buic-foreground-accessory:    rgb(255, 255, 255);\n  --buic-foreground-primary:      rgb(000, 139, 225);\n  --buic-foreground-success:      rgb(086, 169, 028);\n  --buic-foreground-alert:        rgb(211, 010, 010);\n  --buic-foreground-warning:      rgb(241, 139, 018);\n  --buic-foreground-primary-tint: rgb(165, 215, 245);\n  --buic-foreground-success-tint: rgb(195, 225, 175);\n  --buic-foreground-alert-tint:   rgb(239, 169, 169);\n  --buic-foreground-warning-tint: rgb(249, 215, 171);\n  --buic-foreground-primary-tone: rgb(000, 128, 206);\n  --buic-row-selection:           rgb(102, 196, 255);\n  --buic-row-hover:               rgb(200, 232, 252);\n  --buic-inputs-border:           rgb(199, 204, 209);\n  --buic-inputs-focus-boxshadow-gradient1:  rgba(000, 000, 000, 0);\n  --buic-inputs-focus-boxshadow-gradient2:  rgba(000, 139, 225, 0.1);\n  --buic-inputs-boxshadow:        rgba(000, 000, 000, 0.075 );\n  --buic-button-gradient1:        rgba(000, 000, 000, 0);\n  --buic-button-gradient2:        rgba(000, 000, 000, 0.22); }\n\nhtml[data-theme=\"dark\"] {\n  --buic-background-1:            rgb(090, 105, 115);\n  --buic-background-2:            rgb(079, 093, 101);\n  --buic-background-3:            rgb(068, 080, 088);\n  --buic-background-4:            rgb(056, 068, 074);\n  --buic-background-5:            rgb(045, 055, 060);\n  --buic-background-tooltip:      rgb(045, 055, 060, 0.90);\n  --buic-background-scrollbar:    rgb(155, 165, 174);\n  --buic-background-toolbutton-stroke:  rgb(045, 055, 060);\n  --buic-foreground-body:         rgba(255, 255, 255, 0.85);\n  --buic-foreground-body-reverse: rgba(000, 000, 000, 0.85);\n  --buic-foreground-muted:        rgba(255, 255, 255, 0.66);\n  --buic-foreground-disabled:     rgba(255, 255, 255, 0.44);\n  --buic-foreground-activehover:  rgba(255, 255, 255, 1.00);\n  --buic-foreground-accessory:    rgba(255, 255, 255, 0.85);\n  --buic-foreground-primary:      rgb(118, 197, 247);\n  --buic-foreground-success:      rgb(153, 224, 105);\n  --buic-foreground-alert:        rgb(236, 111, 111);\n  --buic-foreground-warning:      rgb(235, 177, 101);\n  --buic-foreground-primary-tint: rgb(165, 215, 245);\n  --buic-foreground-success-tint: rgb(195, 225, 175);\n  --buic-foreground-alert-tint:   rgb(239, 169, 169);\n  --buic-foreground-warning-tint: rgb(249, 215, 171);\n  --buic-foreground-primary-tone: rgb(69, 165, 224);\n  --buic-row-selection:           rgb(000, 128, 206);\n  --buic-row-hover:               rgb(071, 150, 199);\n  --buic-inputs-border:           rgb(199, 204, 209);\n  --buic-inputs-focus-boxshadow-gradient1:  rgba(199, 204, 209, 0);\n  --buic-inputs-focus-boxshadow-gradient2:  rgba(000, 139, 225, 0.1);\n  --buic-inputs-boxshadow:        rgba(199, 204, 209, 0.075 );\n  --buic-button-gradient1:        rgba(000, 000, 000, 0);\n  --buic-button-gradient2:        rgba(000, 000, 000, 0.22); }\n\nhtml.theme-transition,\nhtml.theme-transition *,\nhtml.theme-transition *:before,\nhtml.theme-transition *:after {\n  -webkit-transition: all 300ms !important;\n  -o-transition: all 300ms !important;\n  transition: all 300ms !important;\n  -webkit-transition-delay: 0 !important;\n       -o-transition-delay: 0 !important;\n          transition-delay: 0 !important; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/contextmenu/ContextMenu.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/contextmenu/ContextMenu.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*\n  $counter: 0;\n  @function step($step) {\n    $counter: $counter + $step !global;\n    @return $counter;\n  }\n  uicore-map-from-array($array, step, 1000);\n*/\n/*\n  @function step($counter) {\n    @return $counter + 1000;\n  }\n  uicore-map-from-array-with-result-arg($array, step, 0);\n*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.core-context-menu-global {\n  position: fixed;\n  width: 0px;\n  height: 0px;\n  z-index: 9999; }\n\n.core-context-menu {\n  color: var(--buic-foreground-body);\n  width: 0px;\n  height: 0px;\n  position: relative;\n  z-index: 9999; }\n  .core-context-menu:hover {\n    color: var(--buic-foreground-activehover);\n    cursor: auto; }\n  .core-context-menu .core-context-menu-container {\n    position: absolute;\n    border-radius: 3px;\n    padding: 4px 0;\n    -webkit-box-shadow: 0px 3px 5px 0 rgba(0, 0, 0, 0.2);\n            box-shadow: 0px 3px 5px 0 rgba(0, 0, 0, 0.2);\n    background-color: var(--buic-background-1);\n    -o-text-overflow: ellipsis;\n       text-overflow: ellipsis;\n    min-width: 120px;\n    max-width: 350px;\n    visibility: hidden;\n    -webkit-transform: scaleY(0);\n        -ms-transform: scaleY(0);\n            transform: scaleY(0);\n    display: table;\n    border: 1px solid var(--buic-background-control-stroke);\n    -webkit-box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 1px;\n            box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 1px; }\n    .core-context-menu .core-context-menu-container.floating {\n      position: fixed; }\n    .core-context-menu .core-context-menu-container.opened {\n      visibility: inherit;\n      -webkit-transform-origin: top;\n          -ms-transform-origin: top;\n              transform-origin: top;\n      -webkit-transform: scaleY(1);\n          -ms-transform: scaleY(1);\n              transform: scaleY(1); }\n    .core-context-menu .core-context-menu-container.center {\n      -webkit-transform: translate(-50%, -50%);\n          -ms-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n    .core-context-menu .core-context-menu-container.right {\n      -webkit-transform: translate(0%, -50%);\n          -ms-transform: translate(0%, -50%);\n              transform: translate(0%, -50%); }\n    .core-context-menu .core-context-menu-container.left {\n      -webkit-transform: translate(-100%, -50%);\n          -ms-transform: translate(-100%, -50%);\n              transform: translate(-100%, -50%); }\n    .core-context-menu .core-context-menu-container.top {\n      -webkit-transform: translate(-50%, -100%);\n          -ms-transform: translate(-50%, -100%);\n              transform: translate(-50%, -100%); }\n      .core-context-menu .core-context-menu-container.top.right {\n        -webkit-transform: translate(0%, -100%);\n            -ms-transform: translate(0%, -100%);\n                transform: translate(0%, -100%); }\n      .core-context-menu .core-context-menu-container.top.left {\n        -webkit-transform: translate(-100%, -100%);\n            -ms-transform: translate(-100%, -100%);\n                transform: translate(-100%, -100%); }\n    .core-context-menu .core-context-menu-container.bottom {\n      -webkit-transform: translate(-50%, 0%);\n          -ms-transform: translate(-50%, 0%);\n              transform: translate(-50%, 0%); }\n      .core-context-menu .core-context-menu-container.bottom.right {\n        -webkit-transform: translate(0%, 0%);\n            -ms-transform: translate(0%, 0%);\n                transform: translate(0%, 0%); }\n      .core-context-menu .core-context-menu-container.bottom.left {\n        -webkit-transform: translate(-100%, 0%);\n            -ms-transform: translate(-100%, 0%);\n                transform: translate(-100%, 0%); }\n    .core-context-menu .core-context-menu-container .core-context-menu-item {\n      display: -ms-flexbox;\n      display: flex;\n      cursor: default;\n      padding: 5.5px 10px;\n      width: calc(100% - 2 * 10px);\n      -ms-flex-align: center;\n          align-items: center; }\n      .core-context-menu .core-context-menu-container .core-context-menu-item:hover {\n        background-color: var(--buic-row-hover); }\n      .core-context-menu .core-context-menu-container .core-context-menu-item.is-selected {\n        background-color: var(--buic-row-selection); }\n      .core-context-menu .core-context-menu-container .core-context-menu-item.disabled {\n        color: var(--buic-foreground-disabled); }\n      .core-context-menu .core-context-menu-container .core-context-menu-item > .core-context-menu-icon {\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n        width: 16px;\n        height: 22px;\n        font-size: 16px;\n        line-height: 22px;\n        text-align: center;\n        margin-right: 11px;\n        opacity: 0.85; }\n      .core-context-menu .core-context-menu-container .core-context-menu-item > .core-context-menu-content {\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n        font-size: 14px; }\n    .core-context-menu .core-context-menu-container:focus {\n      border: 1px solid var(--buic-inputs-border);\n      -webkit-box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 1px;\n              box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 1px;\n      outline: 0px; }\n      .core-context-menu .core-context-menu-container:focus > .core-context-menu-item.is-selected,\n      .core-context-menu .core-context-menu-container:focus > .context-submenu > .core-context-menu-item.is-selected {\n        background-color: var(--buic-row-hover); }\n    .core-context-menu .core-context-menu-container .core-context-submenu {\n      display: -ms-flexbox;\n      display: flex; }\n      .core-context-menu .core-context-menu-container .core-context-submenu.top {\n        -ms-flex-direction: column;\n            flex-direction: column;\n        -ms-flex-align: center;\n            align-items: center; }\n      .core-context-menu .core-context-menu-container .core-context-submenu.left {\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n        -ms-flex-align: center;\n            align-items: center; }\n      .core-context-menu .core-context-menu-container .core-context-submenu.right {\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-align: center;\n            align-items: center; }\n      .core-context-menu .core-context-menu-container .core-context-submenu.center {\n        -ms-flex-direction: column;\n            flex-direction: column;\n        -ms-flex-align: center;\n            align-items: center; }\n      .core-context-menu .core-context-menu-container .core-context-submenu.top.left {\n        -ms-flex-direction: column;\n            flex-direction: column;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n      .core-context-menu .core-context-menu-container .core-context-submenu.top.right {\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n      .core-context-menu .core-context-menu-container .core-context-submenu.bottom.left {\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n      .core-context-menu .core-context-menu-container .core-context-submenu.bottom.right {\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n      .core-context-menu .core-context-menu-container .core-context-submenu .core-context-submenucontainer .core-context-submenuarrow {\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n        margin-left: 11px;\n        width: 16px;\n        height: 22px;\n        font-size: 8px;\n        line-height: 22px;\n        text-align: center; }\n  .core-context-menu .core-context-menu-divider {\n    border-bottom: 1px solid var(--buic-background-divider);\n    height: 0px; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/cube/Cube.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/cube/Cube.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n.core-cube-css3d {\n  width: 128px;\n  height: 128px;\n  -webkit-perspective: 300px;\n          perspective: 300px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n  .core-cube-css3d .face {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    -webkit-backface-visibility: inherit;\n            backface-visibility: inherit; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/dialog/Dialog.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/dialog/Dialog.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*\n  $counter: 0;\n  @function step($step) {\n    $counter: $counter + $step !global;\n    @return $counter;\n  }\n  uicore-map-from-array($array, step, 1000);\n*/\n/*\n  @function step($counter) {\n    @return $counter + 1000;\n  }\n  uicore-map-from-array-with-result-arg($array, step, 0);\n*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.core-dialog {\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  display: none;\n  position: fixed;\n  z-index: 9000;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background: rgba(0, 0, 0, 0.4); }\n  .core-dialog.opened {\n    display: block; }\n  .core-dialog.core-dialog-hidden {\n    width: 0;\n    height: 0; }\n  .core-dialog .core-dialog-container {\n    position: fixed;\n    margin: auto;\n    width: 60%;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column; }\n    .core-dialog .core-dialog-container.top-left {\n      top: 0;\n      left: 0; }\n    .core-dialog .core-dialog-container.top {\n      top: 0;\n      left: 0;\n      right: 0; }\n    .core-dialog .core-dialog-container.top-right {\n      top: 0;\n      right: 0; }\n    .core-dialog .core-dialog-container.left {\n      top: 0;\n      bottom: 0;\n      left: 0; }\n    .core-dialog .core-dialog-container.center {\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0; }\n    .core-dialog .core-dialog-container.right {\n      top: 0;\n      bottom: 0;\n      right: 0; }\n    .core-dialog .core-dialog-container.bottom-left {\n      bottom: 0;\n      left: 0; }\n    .core-dialog .core-dialog-container.bottom {\n      bottom: 0;\n      left: 0;\n      right: 0; }\n    .core-dialog .core-dialog-container.bottom-right {\n      bottom: 0;\n      right: 0; }\n    .core-dialog .core-dialog-container .core-dialog-area {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      border: 1px solid var(--buic-background-dialog-stroke);\n      border-radius: 3px;\n      background-color: var(--buic-background-dialog);\n      color: var(--buic-foreground-body);\n      padding: 0; }\n      .core-dialog .core-dialog-container .core-dialog-area > .core-dialog-head {\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n        -ms-flex-align: center;\n            align-items: center;\n        background-color: var(--buic-background-titlebar);\n        color: var(--buic-foreground-body);\n        display: -ms-flexbox;\n        display: flex;\n        padding: 4px;\n        /* padding: $uicore-unbordered-padding; */ }\n        .core-dialog .core-dialog-container .core-dialog-area > .core-dialog-head.core-dialog-movable {\n          cursor: move; }\n        .core-dialog .core-dialog-container .core-dialog-area > .core-dialog-head > .core-dialog-title {\n          -ms-flex: 1 1;\n              flex: 1 1;\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 22px;\n          color: var(--buic-foreground-body);\n          padding: 0;\n          margin: 0 0 22px;\n          margin: 0;\n          margin-left: 4px; }\n        .core-dialog .core-dialog-container .core-dialog-area > .core-dialog-head > .core-dialog-close {\n          cursor: pointer;\n          height: 24px;\n          width: 24px;\n          line-height: 24px;\n          -ms-flex: 0 0 32px;\n              flex: 0 0 32px;\n          text-align: center;\n          color: var(--buic-foreground-muted); }\n          .core-dialog .core-dialog-container .core-dialog-area > .core-dialog-head > .core-dialog-close:hover {\n            color: var(--buic-foreground-activehover); }\n      .core-dialog .core-dialog-container .core-dialog-area > .core-dialog-content {\n        overflow: auto;\n        -ms-flex: 1 1;\n            flex: 1 1;\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 22px;\n        color: var(--buic-foreground-body);\n        padding: 0;\n        margin: 0 0 22px;\n        padding: 11px; }\n        @supports (-webkit-overflow-scrolling: touch) {\n          .core-dialog .core-dialog-container .core-dialog-area > .core-dialog-content {\n            overflow-y: scroll;\n            /* overflow-y has to be scroll, not auto */\n            -webkit-overflow-scrolling: touch; } }\n        .core-dialog .core-dialog-container .core-dialog-area > .core-dialog-content::-webkit-scrollbar {\n          width: 12px;\n          height: 12px; }\n        .core-dialog .core-dialog-container .core-dialog-area > .core-dialog-content::-webkit-scrollbar-thumb {\n          border-radius: 12px;\n          background-color: var(--buic-background-scrollbar);\n          background-clip: content-box;\n          border-style: solid;\n          border-color: transparent;\n          border-width: 2px; }\n        .core-dialog .core-dialog-container .core-dialog-area > .core-dialog-content::-webkit-scrollbar-corner {\n          background-color: transparent; }\n        .core-dialog .core-dialog-container .core-dialog-area > .core-dialog-content::-webkit-scrollbar-track-piece:corner-present {\n          margin-bottom: -4px;\n          margin-right: -4px; }\n        .core-dialog .core-dialog-container .core-dialog-area > .core-dialog-content.core-dialog-content-no-inset {\n          margin: 0;\n          padding: 0; }\n      .core-dialog .core-dialog-container .core-dialog-area > .core-dialog-footer {\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n        padding: 11px; }\n        .core-dialog .core-dialog-container .core-dialog-area > .core-dialog-footer > .core-dialog-buttons {\n          display: -ms-flexbox;\n          display: flex;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n          .core-dialog .core-dialog-container .core-dialog-area > .core-dialog-footer > .core-dialog-buttons > * {\n            min-width: 80px;\n            padding-top: 2px;\n            padding-bottom: 2px; }\n            .core-dialog .core-dialog-container .core-dialog-area > .core-dialog-footer > .core-dialog-buttons > *:not(:first-child) {\n              margin-left: 3px; }\n    .core-dialog .core-dialog-container .core-dialog-drag {\n      position: absolute;\n      z-index: auto;\n      padding: 0px; }\n      .core-dialog .core-dialog-container .core-dialog-drag:not(.core-dialog-drag-enabled) {\n        display: none; }\n      .core-dialog .core-dialog-container .core-dialog-drag.core-dialog-drag-right {\n        right: -4px;\n        width: 8px;\n        height: 100%;\n        cursor: ew-resize; }\n      .core-dialog .core-dialog-container .core-dialog-drag.core-dialog-drag-bottom-mid {\n        bottom: -4px;\n        height: 8px;\n        width: 100%;\n        cursor: ns-resize; }\n      .core-dialog .core-dialog-container .core-dialog-drag.core-dialog-drag-bottom-right {\n        right: -4px;\n        bottom: -4px;\n        height: 8px;\n        width: 8px;\n        cursor: nwse-resize; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/elementseparator/ElementSeparator.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/elementseparator/ElementSeparator.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*\n  $counter: 0;\n  @function step($step) {\n    $counter: $counter + $step !global;\n    @return $counter;\n  }\n  uicore-map-from-array($array, step, 1000);\n*/\n/*\n  @function step($counter) {\n    @return $counter + 1000;\n  }\n  uicore-map-from-array-with-result-arg($array, step, 0);\n*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.core-element-separator {\n  -ms-touch-action: none;\n      touch-action: none;\n  display: inline-block;\n  background: transparent;\n  border-style: none;\n  padding: 0px;\n  z-index: 1000; }\n  .core-element-separator--vertical {\n    width: 100%;\n    cursor: row-resize; }\n    .core-element-separator--vertical:hover {\n      background: -webkit-linear-gradient(top, transparent calc(50% - 3px), var(--buic-foreground-disabled) calc(50%), transparent calc(50% + 3px));\n      background: -o-linear-gradient(top, transparent calc(50% - 3px), var(--buic-foreground-disabled) calc(50%), transparent calc(50% + 3px));\n      background: linear-gradient(to bottom, transparent calc(50% - 3px), var(--buic-foreground-disabled) calc(50%), transparent calc(50% + 3px)); }\n  .core-element-separator--horizontal {\n    height: 100%;\n    cursor: col-resize; }\n    .core-element-separator--horizontal:hover {\n      background: -webkit-linear-gradient(left, transparent calc(50% - 3px), var(--buic-foreground-disabled) calc(50%), transparent calc(50% + 3px));\n      background: -o-linear-gradient(left, transparent calc(50% - 3px), var(--buic-foreground-disabled) calc(50%), transparent calc(50% + 3px));\n      background: linear-gradient(to right, transparent calc(50% - 3px), var(--buic-foreground-disabled) calc(50%), transparent calc(50% + 3px)); }\n  .core-element-separator:focus {\n    outline: none; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/expandable/ExpandableBlock.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/expandable/ExpandableBlock.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*\n  $counter: 0;\n  @function step($step) {\n    $counter: $counter + $step !global;\n    @return $counter;\n  }\n  uicore-map-from-array($array, step, 1000);\n*/\n/*\n  @function step($counter) {\n    @return $counter + 1000;\n  }\n  uicore-map-from-array-with-result-arg($array, step, 0);\n*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.uicore-expandable-blocks-block {\n  background-color: var(--buic-background-control);\n  border: solid 1px var(--buic-background-control-stroke);\n  border-radius: 3px;\n  position: relative; }\n  .uicore-expandable-blocks-block > .header {\n    padding: 4px 2px;\n    background: var(--buic-background-control);\n    -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n    -o-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n    cursor: pointer; }\n    .uicore-expandable-blocks-block > .header > .icon-container {\n      line-height: 22px;\n      width: 22px;\n      height: 22px;\n      font-size: 10px;\n      float: left;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n          align-items: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n      margin-right: 2px;\n      color: var(--buic-foreground-body);\n      -webkit-transition: 0.15s ease-in-out;\n      -o-transition: 0.15s ease-in-out;\n      transition: 0.15s ease-in-out; }\n    .uicore-expandable-blocks-block > .header > .caption {\n      text-decoration: none;\n      color: var(--buic-foreground-body);\n      font-size: 12px;\n      font-weight: 400;\n      line-height: 22px;\n      color: var(--buic-foreground-body);\n      display: block;\n      color: var(--buic-foreground-muted);\n      white-space: nowrap;\n      overflow: hidden;\n      -o-text-overflow: ellipsis;\n         text-overflow: ellipsis; }\n      .uicore-expandable-blocks-block > .header > .caption:link, .uicore-expandable-blocks-block > .header > .caption:visited, .uicore-expandable-blocks-block > .header > .caption:hover, .uicore-expandable-blocks-block > .header > .caption:active {\n        color: var(--buic-foreground-body);\n        text-decoration: none; }\n    .uicore-expandable-blocks-block > .header > .title {\n      text-decoration: none;\n      color: var(--buic-foreground-body);\n      font-size: 18px;\n      font-weight: 400;\n      line-height: 33px;\n      color: var(--buic-foreground-body);\n      font-size: 14px;\n      line-height: 23px;\n      display: block;\n      margin: 0;\n      color: var(--buic-foreground-body);\n      white-space: nowrap;\n      overflow: hidden;\n      -o-text-overflow: ellipsis;\n         text-overflow: ellipsis;\n      -webkit-transition: 0.15s ease-in-out;\n      -o-transition: 0.15s ease-in-out;\n      transition: 0.15s ease-in-out; }\n      .uicore-expandable-blocks-block > .header > .title:link, .uicore-expandable-blocks-block > .header > .title:visited, .uicore-expandable-blocks-block > .header > .title:hover, .uicore-expandable-blocks-block > .header > .title:active {\n        color: var(--buic-foreground-body);\n        text-decoration: none; }\n  .uicore-expandable-blocks-block > .content {\n    padding: 0;\n    margin: 0;\n    border: 0 none transparent;\n    -webkit-transition: padding-top 0.15s ease-in-out,\r padding-bottom 0.15s ease-in-out;\n    -o-transition: padding-top 0.15s ease-in-out,\r padding-bottom 0.15s ease-in-out;\n    transition: padding-top 0.15s ease-in-out,\r padding-bottom 0.15s ease-in-out; }\n  .uicore-expandable-blocks-block.with-caption > .header > .icon-container {\n    margin-top: 11px; }\n  .uicore-expandable-blocks-block.is-collapsed > .content > * {\n    display: none; }\n  .uicore-expandable-blocks-block:hover > .header > .icon-container {\n    color: var(--buic-foreground-activehover); }\n  .uicore-expandable-blocks-block:hover > .header > .caption,\n  .uicore-expandable-blocks-block:hover > .header > .title {\n    color: var(--buic-foreground-activehover); }\n  .uicore-expandable-blocks-block.is-expanded {\n    border-top: 1px solid var(--buic-foreground-primary); }\n    .uicore-expandable-blocks-block.is-expanded > .header {\n      -webkit-transition: 0.15s ease-in-out;\n      -o-transition: 0.15s ease-in-out;\n      transition: 0.15s ease-in-out; }\n      .uicore-expandable-blocks-block.is-expanded > .header > .icon-container,\n      .uicore-expandable-blocks-block.is-expanded > .header > .caption,\n      .uicore-expandable-blocks-block.is-expanded > .header > .title {\n        color: var(--buic-foreground-primary); }\n      .uicore-expandable-blocks-block.is-expanded > .header > .icon-container {\n        -webkit-transform: rotate(90deg);\n            -ms-transform: rotate(90deg);\n                transform: rotate(90deg);\n        -webkit-transform-origin: center;\n            -ms-transform-origin: center;\n                transform-origin: center; }\n      .uicore-expandable-blocks-block.is-expanded > .header > .title {\n        -webkit-transition: 0.15s ease-in-out;\n        -o-transition: 0.15s ease-in-out;\n        transition: 0.15s ease-in-out; }\n    .uicore-expandable-blocks-block.is-expanded:hover > .header > .icon-container,\n    .uicore-expandable-blocks-block.is-expanded:hover > .header > .title {\n      color: var(--buic-foreground-primary); }\n    .uicore-expandable-blocks-block.is-expanded > .content {\n      padding: 0;\n      background-color: var(--buic-background-control);\n      border-style: none; }\n    .uicore-expandable-blocks-block.is-expanded:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      height: 1px;\n      width: 100%;\n      background: var(--buic-foreground-primary);\n      z-index: 1; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/expandable/ExpandableList.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/expandable/ExpandableList.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.BwcExpandableBlocksList > div {\n  -webkit-transition: margin 0.15s ease-in-out;\n  -o-transition: margin 0.15s ease-in-out;\n  transition: margin 0.15s ease-in-out; }\n  .BwcExpandableBlocksList > div > .header {\n    border-color: #dce0e3 transparent transparent; }\n  .BwcExpandableBlocksList > div:first-child > .header {\n    border-top-color: transparent; }\n\n.BwcExpandableBlocksList > .is-expanded + div > .header {\n  border-top-color: transparent; }\n\n.BwcExpandableBlocksList > .is-expanded + div.is-expanded > .header {\n  border-top-color: #008be1; }\n\n.BwcExpandableBlocksList > .is-expanded + .is-expanded {\n  margin-top: 0; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/icons/SvgSprite.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/icons/SvgSprite.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.core-icons-svgSprite {\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: transparent;\n  border: none;\n  padding: auto;\n  overflow: hidden;\n  vertical-align: top;\n  fill: currentColor;\n  stroke: transparent; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/icons/WebFontIcon.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/icons/WebFontIcon.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.bui-webfont-icon {\n  font-family: bentley-icons-generic-webfont !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal !important;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/imagecheckbox/ImageCheckBox.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/imagecheckbox/ImageCheckBox.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.core-image-checkbox {\n  display: inline-block;\n  font-size: 16px;\n  position: relative;\n  height: 1em;\n  cursor: pointer;\n  /* accessibility */ }\n  .core-image-checkbox input[type=\"checkbox\"]:not(:checked),\n  .core-image-checkbox input[type=\"checkbox\"]:checked {\n    position: absolute;\n    z-index: -1;\n    opacity: 0; }\n  .core-image-checkbox input[type=\"checkbox\"]:checked + .image {\n    color: #008be1; }\n  .core-image-checkbox input[type=\"checkbox\"]:not(:checked) + .image {\n    color: #677480; }\n  .core-image-checkbox input[type=\"checkbox\"] + .image {\n    opacity: .85; }\n    .core-image-checkbox input[type=\"checkbox\"] + .image:hover {\n      opacity: 1; }\n  .core-image-checkbox input[type=\"checkbox\"]:disabled:not(:checked) + .image,\n  .core-image-checkbox input[type=\"checkbox\"]:disabled:checked + .image {\n    opacity: .25; }\n  .core-image-checkbox [type=\"checkbox\"]:checked:focus + .image:before,\n  .core-image-checkbox [type=\"checkbox\"]:not(:checked):focus + .image:before {\n    outline: 1px dotted #008be1; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/inputs/numericinput/NumericInput.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/inputs/numericinput/NumericInput.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*\n  $counter: 0;\n  @function step($step) {\n    $counter: $counter + $step !global;\n    @return $counter;\n  }\n  uicore-map-from-array($array, step, 1000);\n*/\n/*\n  @function step($counter) {\n    @return $counter + 1000;\n  }\n  uicore-map-from-array-with-result-arg($array, step, 0);\n*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.core-numeric-input .react-numeric-input input {\n  display: block !important;\n  width: 100% !important;\n  padding: 7px 10px !important;\n  margin: 0 0 !important;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif !important;\n  font-size: 14px !important;\n  line-height: 22px !important;\n  color: var(--buic-foreground-body) !important;\n  background-color: var(--buic-background-control) !important;\n  background-image: none !important;\n  border: 1px solid var(--buic-inputs-border) !important;\n  border-radius: 3px !important;\n  -webkit-box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset !important;\n          box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset !important;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out !important;\n  transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out !important;\n  -o-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out !important; }\n  .core-numeric-input .react-numeric-input input:focus {\n    border-color: var(--buic-inputs-border) !important;\n    outline: 0px !important;\n    -webkit-box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, var(--buic-inputs-focus-boxshadow-gradient2) 0px 0px 0px 2px !important;\n            box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, var(--buic-inputs-focus-boxshadow-gradient2) 0px 0px 0px 2px !important; }\n\n.core-numeric-input .react-numeric-input b:nth-of-type(1) i {\n  border-color: transparent transparent var(--buic-foreground-muted) !important; }\n\n.core-numeric-input .react-numeric-input b:nth-of-type(2) i {\n  border-color: var(--buic-foreground-muted) transparent transparent !important; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/loading/LoadingBar.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/loading/LoadingBar.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* #c7ccd1; */\n/* #000; */\n/* #008be1; */\n.core-lb {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center; }\n  .core-lb > .lb-container {\n    background-color: var(--buic-background-window);\n    -ms-flex: 1 1;\n        flex: 1 1; }\n    .core-lb > .lb-container > .fill {\n      height: 100%;\n      background-color: var(--buic-foreground-primary);\n      -webkit-transition: width .3s linear;\n      -o-transition: width .3s linear;\n      transition: width .3s linear; }\n  .core-lb > .percent {\n    -ms-flex: initial;\n        flex: initial;\n    opacity: 0.85;\n    width: 3em;\n    font-size: .9em;\n    margin-left: .3em; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/loading/LoadingPrompt.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/loading/LoadingPrompt.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.core-loadingprompt {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n  .core-loadingprompt .title {\n    font-size: 32px;\n    font-weight: 600;\n    margin-bottom: 10px;\n    color: var(--buic-foreground-body);\n    /* rgba(black, 0.75); */ }\n  .core-loadingprompt .message {\n    font-size: 14px;\n    margin-bottom: 1.75em;\n    color: var(--buic-foreground-body);\n    /* rgba(black, 0.85); */ }\n\n/* cancel button */\n.loading-prompt-cancel {\n  display: inline-block;\n  padding: 8px 11px;\n  margin: 3px 0;\n  border-radius: 3px;\n  line-height: 22px;\n  outline: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  text-decoration: none;\n  cursor: pointer;\n  margin-top: 2em; }\n  .loading-prompt-cancel:hover {\n    text-decoration: none; }\n  .loading-prompt-cancel:active, .loading-prompt-cancel:focus {\n    outline: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    text-decoration: none; }\n  .loading-prompt-cancel[disabled], .loading-prompt-cancel[disabled]:hover, .loading-prompt-cancel[disabled]:active, .loading-prompt-cancel[disabled]:focus {\n    opacity: 0.4;\n    background-color: #9ba5ae;\n    border: 0;\n    color: #fff;\n    cursor: not-allowed; }\n  .loading-prompt-cancel, .loading-prompt-cancel:active, .loading-prompt-cancel:focus {\n    padding: 7px 10px;\n    border: 1px solid var(--buic-foreground-muted);\n    background-color: transparent;\n    color: var(--buic-foreground-body); }\n  .loading-prompt-cancel:hover {\n    background-color: transparent;\n    border-color: var(--buic-foreground-body);\n    color: var(--buic-foreground-activehover); }\n  .loading-prompt-cancel[disabled], .loading-prompt-cancel[disabled]:hover, .loading-prompt-cancel[disabled]:active, .loading-prompt-cancel[disabled]:focus {\n    padding: 8px 11px; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/loading/LoadingSpinner.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/loading/LoadingSpinner.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.core-ls {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n  .core-ls .ls-message-top {\n    margin-bottom: 12px; }\n  .core-ls .ls-message-bottom {\n    margin-top: 12px; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/loading/LoadingStatus.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/loading/LoadingStatus.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.loading-status-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  opacity: 0.85;\n  font-size: 12px; }\n\n.loading-status-message {\n  -ms-flex: 1 1;\n      flex: 1 1; }\n\n.loading-status-percent {\n  -ms-flex: initial;\n      flex: initial;\n  margin-right: auto; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/loading/Spinner.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/loading/Spinner.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.core-spinner {\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  z-index: 2; }\n  .core-spinner .fill {\n    stroke: var(--buic-background-control-stroke);\n    /*$uicore-gray-9;*/\n    -webkit-animation: dash 1.5s ease-in-out infinite;\n            animation: dash 1.5s ease-in-out infinite; }\n  .core-spinner .shape {\n    stroke: var(--buic-foreground-primary);\n    /*$uicore-blue;*/ }\n\n@-webkit-keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0; }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35; }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124; } }\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0; }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35; }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124; } }\n\n.core-spinner-small {\n  width: 1rem;\n  height: 1rem; }\n\n.core-spinner-medium {\n  width: 2rem;\n  height: 2rem; }\n\n.core-spinner-large {\n  width: 4rem;\n  height: 4rem; }\n\n.core-spinner-xlarge {\n  width: 6rem;\n  height: 6rem; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/messagebox/MessageBox.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/messagebox/MessageBox.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*\n  $counter: 0;\n  @function step($step) {\n    $counter: $counter + $step !global;\n    @return $counter;\n  }\n  uicore-map-from-array($array, step, 1000);\n*/\n/*\n  @function step($counter) {\n    @return $counter + 1000;\n  }\n  uicore-map-from-array-with-result-arg($array, step, 0);\n*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.core-message-box-container {\n  display: -ms-flexbox;\n  display: flex;\n  color: var(--buic-foreground-body); }\n  .core-message-box-container .core-message-box-icon {\n    -ms-flex: 0 0;\n        flex: 0 0;\n    font-size: 32px;\n    padding: 0 11px 11px 11px;\n    margin-top: 10px; }\n  .core-message-box-container .core-message-box-content {\n    -ms-flex: 1 1;\n        flex: 1 1; }\n\n.core-message-box-success {\n  color: var(--buic-foreground-success); }\n\n.core-message-box-information {\n  color: var(--buic-foreground-primary); }\n\n.core-message-box-question {\n  color: #ffcf00; }\n\n.core-message-box-warning {\n  color: var(--buic-foreground-warning); }\n\n.core-message-box-error, .core-message-box-fatal {\n  color: var(--buic-foreground-alert); }\n\n.notifymessage-icon {\n  margin-right: 6px; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/popup/Popup.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/popup/Popup.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.core-popup {\n  top: 0;\n  left: 0;\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  border-radius: 4px;\n  z-index: 100;\n  border: 1px solid var(--buic-background-panel-stroke);\n  background: #fff;\n  -webkit-animation-duration: .2s;\n          animation-duration: .2s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  cursor: default; }\n\n.core-popup.arrow::after, .core-popup.arrow::before {\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none; }\n\n.core-popup.core-popup-bottom-left.arrow::after,\n.core-popup.core-popup-bottom-left.arrow::before {\n  bottom: 100%;\n  left: 25%; }\n\n.core-popup.core-popup-bottom-right.arrow::after,\n.core-popup.core-popup-bottom-right.arrow::before {\n  bottom: 100%;\n  left: 75%; }\n\n.core-popup.core-popup-bottom.arrow::after,\n.core-popup.core-popup-bottom.arrow::before {\n  bottom: 100%;\n  left: 50%; }\n\n.core-popup.core-popup-top.arrow::after,\n.core-popup.core-popup-top.arrow::before {\n  top: 100%;\n  left: 50%; }\n\n.core-popup.core-popup-top-left.arrow::after,\n.core-popup.core-popup-top-left.arrow::before {\n  top: 100%;\n  left: 25%; }\n\n.core-popup.core-popup-top-right.arrow::after,\n.core-popup.core-popup-top-right.arrow::before {\n  top: 100%;\n  left: 75%; }\n\n.core-popup.core-popup-left.arrow::after,\n.core-popup.core-popup-left.arrow::before {\n  top: 50%;\n  left: 100%; }\n\n.core-popup.core-popup-right.arrow::after,\n.core-popup.core-popup-right.arrow::before {\n  top: 50%;\n  right: 100%; }\n\n.core-popup.core-popup-bottom.arrow::before,\n.core-popup.core-popup-bottom-left.arrow::before,\n.core-popup.core-popup-bottom-right.arrow::before {\n  border-bottom-color: inherit;\n  border-width: 9px;\n  margin-left: -9px; }\n\n.core-popup.core-popup-top.arrow::before,\n.core-popup.core-popup-top-left.arrow::before,\n.core-popup.core-popup-top-right.arrow::before {\n  border-top-color: inherit;\n  border-width: 9px;\n  margin-left: -9px; }\n\n.core-popup.core-popup-left.arrow::before {\n  border-left-color: inherit;\n  border-width: 9px;\n  margin-top: -9px; }\n\n.core-popup.core-popup-right.arrow::before {\n  border-right-color: inherit;\n  border-width: 9px;\n  margin-top: -9px; }\n\n.core-popup.core-popup-bottom.arrow::after,\n.core-popup.core-popup-bottom-left.arrow::after,\n.core-popup.core-popup-bottom-right.arrow::after {\n  border-bottom-color: currentColor;\n  border-width: 8px;\n  margin-left: -8px; }\n\n.core-popup.core-popup-top.arrow::after,\n.core-popup.core-popup-top-left.arrow::after,\n.core-popup.core-popup-top-right.arrow::after {\n  border-top-color: currentColor;\n  border-width: 8px;\n  margin-left: -8px; }\n\n.core-popup.core-popup-left.arrow::after {\n  border-left-color: currentColor;\n  border-width: 8px;\n  margin-top: -8px; }\n\n.core-popup.core-popup-right.arrow::after {\n  border-right-color: currentColor;\n  border-width: 8px;\n  margin-top: -8px; }\n\n.core-popup-shadow {\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);\n  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);\n  background-clip: padding-box; }\n\n.core-popup-top-left {\n  -webkit-transform-origin: left bottom 0px;\n      -ms-transform-origin: left bottom 0px;\n          transform-origin: left bottom 0px;\n  -webkit-animation-name: animate-corner;\n          animation-name: animate-corner; }\n\n.core-popup-top-right {\n  -webkit-transform-origin: right bottom 0px;\n      -ms-transform-origin: right bottom 0px;\n          transform-origin: right bottom 0px;\n  -webkit-animation-name: animate-corner;\n          animation-name: animate-corner; }\n\n.core-popup-bottom-left {\n  -webkit-transform-origin: left top 0px;\n      -ms-transform-origin: left top 0px;\n          transform-origin: left top 0px;\n  -webkit-animation-name: animate-corner;\n          animation-name: animate-corner; }\n\n.core-popup-bottom-right {\n  -webkit-transform-origin: right top 0px;\n      -ms-transform-origin: right top 0px;\n          transform-origin: right top 0px;\n  -webkit-animation-name: animate-corner;\n          animation-name: animate-corner; }\n\n.core-popup-left {\n  -webkit-transform-origin: right;\n      -ms-transform-origin: right;\n          transform-origin: right;\n  -webkit-animation-name: animate-horizontal;\n          animation-name: animate-horizontal; }\n\n.core-popup-right {\n  -webkit-transform-origin: left;\n      -ms-transform-origin: left;\n          transform-origin: left;\n  -webkit-animation-name: animate-horizontal;\n          animation-name: animate-horizontal; }\n\n.core-popup-top {\n  -webkit-transform-origin: bottom;\n      -ms-transform-origin: bottom;\n          transform-origin: bottom;\n  -webkit-animation-name: animate-vertical;\n          animation-name: animate-vertical; }\n\n.core-popup-bottom {\n  -webkit-transform-origin: top;\n      -ms-transform-origin: top;\n          transform-origin: top;\n  -webkit-animation-name: animate-vertical;\n          animation-name: animate-vertical; }\n\n@-webkit-keyframes animate-vertical {\n  from {\n    visibility: hidden;\n    -webkit-transform: scale(1, 0.5);\n            transform: scale(1, 0.5); }\n  to {\n    visibility: visible;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes animate-vertical {\n  from {\n    visibility: hidden;\n    -webkit-transform: scale(1, 0.5);\n            transform: scale(1, 0.5); }\n  to {\n    visibility: visible;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes animate-corner {\n  from {\n    visibility: hidden;\n    -webkit-transform: scale(0.5, 0.5);\n            transform: scale(0.5, 0.5); }\n  to {\n    visibility: visible;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); } }\n\n@keyframes animate-corner {\n  from {\n    visibility: hidden;\n    -webkit-transform: scale(0.5, 0.5);\n            transform: scale(0.5, 0.5); }\n  to {\n    visibility: visible;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); } }\n\n@-webkit-keyframes animate-horizontal {\n  from {\n    visibility: hidden;\n    -webkit-transform: scale(0.5, 1);\n            transform: scale(0.5, 1); }\n  to {\n    visibility: visible;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); } }\n\n@keyframes animate-horizontal {\n  from {\n    visibility: hidden;\n    -webkit-transform: scale(0.5, 1);\n            transform: scale(0.5, 1); }\n  to {\n    visibility: visible;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); } }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/radialmenu/RadialMenu.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/radialmenu/RadialMenu.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*\n  $counter: 0;\n  @function step($step) {\n    $counter: $counter + $step !global;\n    @return $counter;\n  }\n  uicore-map-from-array($array, step, 1000);\n*/\n/*\n  @function step($counter) {\n    @return $counter + 1000;\n  }\n  uicore-map-from-array-with-result-arg($array, step, 0);\n*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.core-radial-menu {\n  visibility: hidden;\n  position: fixed;\n  z-index: 9999; }\n  .core-radial-menu.opened {\n    visibility: inherit; }\n  .core-radial-menu > .core-radial-menu-container {\n    margin-left: -50%;\n    margin-top: -50%; }\n    .core-radial-menu > .core-radial-menu-container .core-radial-menu-sector {\n      stroke: var(--buic-background-panel-stroke);\n      fill: var(--buic-background-control);\n      stroke-width: 1px; }\n      .core-radial-menu > .core-radial-menu-container .core-radial-menu-sector.selected {\n        fill: var(--buic-row-selection); }\n    .core-radial-menu > .core-radial-menu-container .core-radial-menu-button-svg .core-radial-menu-button-container {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-align: center;\n          align-items: center; }\n      .core-radial-menu > .core-radial-menu-container .core-radial-menu-button-svg .core-radial-menu-button-container .core-radial-menu-button-icon {\n        height: 16px;\n        width: 16px;\n        line-height: 16px;\n        color: var(--buic-foreground-body); }\n      .core-radial-menu > .core-radial-menu-container .core-radial-menu-button-svg .core-radial-menu-button-container .core-radial-menu-button-content {\n        cursor: default;\n        color: var(--buic-foreground-body);\n        font-size: 12px;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/searchbox/SearchBox.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/searchbox/SearchBox.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*\n  $counter: 0;\n  @function step($step) {\n    $counter: $counter + $step !global;\n    @return $counter;\n  }\n  uicore-map-from-array($array, step, 1000);\n*/\n/*\n  @function step($counter) {\n    @return $counter + 1000;\n  }\n  uicore-map-from-array-with-result-arg($array, step, 0);\n*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.core-searchbox {\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  position: relative;\n  height: 34px;\n  width: 12em;\n  font-size: 14px;\n  color: var(--buic-foreground-body); }\n  .core-searchbox input {\n    display: block;\n    width: 100%;\n    padding: 7px 10px;\n    margin: 3px 0;\n    font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    line-height: 22px;\n    color: var(--buic-foreground-body);\n    background-color: var(--buic-background-control);\n    background-image: none;\n    border: 1px solid var(--buic-inputs-border);\n    border-radius: 3px;\n    -webkit-box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset;\n            box-shadow: var(--buic-inputs-boxshadow) 0px 1px 1px inset;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n    -o-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n    padding: 0 2em 0 12px;\n    height: 100%;\n    margin: 0;\n    color: inherit;\n    font-size: inherit;\n    box-sizing: border-box; }\n    .core-searchbox input:-ms-input-placeholder {\n      color: var(--buic-foreground-disabled); }\n    .core-searchbox input::-webkit-input-placeholder {\n      color: var(--buic-foreground-disabled); }\n    .core-searchbox input::-moz-placeholder {\n      color: var(--buic-foreground-disabled); }\n    .core-searchbox input::-ms-input-placeholder {\n      color: var(--buic-foreground-disabled); }\n    .core-searchbox input::placeholder {\n      color: var(--buic-foreground-disabled); }\n    .core-searchbox input[disabled], .core-searchbox input[readonly] {\n      background-color: var(--buic-background-control-disabled);\n      color: var(--buic-foreground-muted);\n      cursor: not-allowed; }\n    .core-searchbox input:focus {\n      border-color: var(--buic-inputs-border);\n      outline: 0px;\n      -webkit-box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, var(--buic-inputs-focus-boxshadow-gradient2) 0px 0px 0px 2px;\n              box-shadow: var(--buic-inputs-focus-boxshadow-gradient1) 0px 1px 1px inset, var(--buic-inputs-focus-boxshadow-gradient2) 0px 0px 0px 2px; }\n  .core-searchbox div {\n    position: absolute;\n    height: 100%;\n    right: 0;\n    width: 2em;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    overflow: hidden;\n    cursor: pointer; }\n  .core-searchbox div:hover span {\n    color: var(--buic-foreground-primary);\n    /*$uicore-icons-blue;*/ }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/splitbutton/SplitButton.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/splitbutton/SplitButton.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*\n  $counter: 0;\n  @function step($step) {\n    $counter: $counter + $step !global;\n    @return $counter;\n  }\n  uicore-map-from-array($array, step, 1000);\n*/\n/*\n  @function step($counter) {\n    @return $counter + 1000;\n  }\n  uicore-map-from-array-with-result-arg($array, step, 0);\n*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.core-split-button {\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  display: inline-block;\n  padding: 8px 11px;\n  margin: 3px 0;\n  border-radius: 3px;\n  line-height: 22px;\n  outline: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  text-decoration: none;\n  cursor: pointer;\n  cursor: pointer;\n  margin: 0;\n  display: -ms-flexbox;\n  display: flex;\n  color: var(--buic-foreground-body);\n  background-color: var(--buic-background-control); }\n  .core-split-button:hover {\n    text-decoration: none; }\n  .core-split-button:active, .core-split-button:focus {\n    outline: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    text-decoration: none; }\n  .core-split-button[disabled], .core-split-button[disabled]:hover, .core-split-button[disabled]:active, .core-split-button[disabled]:focus {\n    opacity: 0.4;\n    background-color: #9ba5ae;\n    border: 0;\n    color: #fff;\n    cursor: not-allowed; }\n  .core-split-button > .core-split-button-label {\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 22px;\n    color: var(--buic-foreground-body); }\n    .core-split-button > .core-split-button-label:hover {\n      color: var(--buic-foreground-primary); }\n  .core-split-button > .core-split-button-arrow {\n    width: 22px;\n    height: 22px;\n    margin-left: 4px; }\n    .core-split-button > .core-split-button-arrow:focus {\n      border: none;\n      -webkit-box-shadow: none;\n              box-shadow: none;\n      outline: 0px; }\n      .core-split-button > .core-split-button-arrow:focus > .core-split-button-arrow-icon {\n        color: var(--buic-foreground-primary); }\n    .core-split-button > .core-split-button-arrow > .core-split-button-arrow-icon {\n      -webkit-transition: -webkit-transform .2s;\n      transition: -webkit-transform .2s;\n      -o-transition: transform .2s;\n      transition: transform .2s;\n      transition: transform .2s, -webkit-transform .2s;\n      text-align: center;\n      font-size: 16px;\n      line-height: 22px; }\n      .core-split-button > .core-split-button-arrow > .core-split-button-arrow-icon:hover {\n        color: var(--buic-foreground-primary); }\n    .core-split-button > .core-split-button-arrow > .context-menu {\n      top: 7px; }\n  .core-split-button.expanded > .core-split-button-arrow > .core-split-button-arrow-icon {\n    -webkit-transform: scaleY(-1);\n        -ms-transform: scaleY(-1);\n            transform: scaleY(-1); }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/toggle/Toggle.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/toggle/Toggle.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.core-toggle {\n  width: 64px;\n  height: 34px;\n  position: relative;\n  display: inline-block;\n  border-radius: 3px;\n  color: #fff;\n  vertical-align: middle;\n  overflow: hidden;\n  font-size: 14px;\n  cursor: pointer; }\n\n.core-toggle-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0; }\n\n.core-toggle-label {\n  position: relative;\n  display: block;\n  height: inherit;\n  background: #85929d;\n  color: #fff;\n  border-radius: inherit; }\n\n/* Blue (default) */\n.core-toggle-input:checked + .core-toggle-label {\n  background: #008be1; }\n\n/* Green (primary) */\n.core-toggle-primary > .core-toggle-input:checked ~ .core-toggle-label {\n  background: #56aa1c; }\n\n.core-toggle-handle {\n  position: absolute;\n  background: #FFF;\n  border-radius: 3px;\n  -webkit-transition: transform 0.2s ease-out;\n  -o-transition: transform 0.2s ease-out;\n  -webkit-transition: -webkit-transform 0.2s ease-out;\n  transition: -webkit-transform 0.2s ease-out;\n  transition: transform 0.2s ease-out;\n  transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out; }\n\n/* Disabled toggle */\n.core-toggle.disabled {\n  opacity: .4;\n  cursor: default; }\n\n.core-toggle.rounded .core-toggle-handle {\n  border-radius: 50%; }\n\n.core-toggle-checkmark {\n  position: absolute;\n  left: 0px;\n  top: 50%;\n  opacity: 0;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n  -webkit-transition: left .2s ease-out;\n  -o-transition: left .2s ease-out;\n  transition: left .2s ease-out; }\n\n.core-toggle-input:checked ~ .core-toggle-checkmark.visible {\n  opacity: 1;\n  color: #fff;\n  font-size: inherit;\n  left: 15%; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/tree/Branch.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/tree/Branch.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n.core-tree-branch {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0 0 0 20px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 100%; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/tree/ExpansionToggle.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/tree/ExpansionToggle.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n.core-tree-expansionToggle > .toggle {\n  display: block;\n  width: 24px;\n  height: 24px;\n  padding: 7px;\n  font-size: 12px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-transform: rotate(0);\n      -ms-transform: rotate(0);\n          transform: rotate(0);\n  -webkit-transition: -webkit-transform 100ms ease;\n  transition: -webkit-transform 100ms ease;\n  -o-transition: transform 100ms ease;\n  transition: transform 100ms ease;\n  transition: transform 100ms ease, -webkit-transform 100ms ease;\n  color: var(--buic-foreground-body); }\n\n.core-tree-expansionToggle.is-expanded > .toggle {\n  -webkit-transform: rotate(90deg);\n      -ms-transform: rotate(90deg);\n          transform: rotate(90deg); }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/tree/Node.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/tree/Node.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*\n  $counter: 0;\n  @function step($step) {\n    $counter: $counter + $step !global;\n    @return $counter;\n  }\n  uicore-map-from-array($array, step, 1000);\n*/\n/*\n  @function step($counter) {\n    @return $counter + 1000;\n  }\n  uicore-map-from-array-with-result-arg($array, step, 0);\n*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.core-tree-node {\n  /* Rules applied to the <be-tree-node> itself */\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 100%;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  color: var(--buic-foreground-body);\n  white-space: nowrap;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n  cursor: default;\n  min-height: 24px; }\n  .core-tree-node > .contents {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center; }\n    .core-tree-node > .contents > .loader {\n      margin: auto 4px; }\n    .core-tree-node > .contents > .expansion-toggle {\n      display: inline-block;\n      margin-top: auto;\n      margin-bottom: auto; }\n    .core-tree-node > .contents .core-checkbox {\n      display: inline-block;\n      padding: 0;\n      margin: 0;\n      margin-right: 5px;\n      background: transparent; }\n      .core-tree-node > .contents .core-checkbox > input {\n        position: relative;\n        left: 0px;\n        height: auto;\n        line-height: unset; }\n  .core-tree-node-icon {\n    width: 16px;\n    height: 24px;\n    display: inline-block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 5px 0;\n    margin-right: 5px; }\n  .core-tree-node.is-focused, .core-tree-node:focus {\n    outline: 1px dotted #000; }\n  .core-tree-node:not(.is-hover-disabled):not(.is-selected):hover {\n    background: var(--buic-row-hover); }\n  .core-tree-node.is-selected {\n    background: var(--buic-row-selection);\n    outline: none; }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/tree/Placeholder.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/tree/Placeholder.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/* Backgrounds and strokes */\n/** Text and icons */\n/** Themed colors */\n/** Static colors */\n/** Widget Opacity */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/** iModel.js Visualization Colors */\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n/*---------------------------------------------------------------------------------------------\r\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\r\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\r\n*--------------------------------------------------------------------------------------------*/\n.core-tree-placeholder {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 24px;\n  padding-top: 3px;\n  padding-bottom: 3px; }\n  .core-tree-placeholder > .contents {\n    margin-left: 24px;\n    height: 18px;\n    background-color: var(--buic-background-placeholder); }\n", ""]);



/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/tree/Tree.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./lib/ui-core/tree/Tree.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*---------------------------------------------------------------------------------------------\n* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.\n* Licensed under the MIT License. See LICENSE.md in the project root for license terms.\n*--------------------------------------------------------------------------------------------*/\n.core-tree {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  height: 100%; }\n  .core-tree:focus {\n    outline: none; }\n  .core-tree > * {\n    position: relative;\n    display: block;\n    padding: 0; }\n", ""]);



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

/***/ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/url-escape.js":
/*!*****************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/runtime/url-escape.js ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/object-assign/4.1.1/node_modules/object-assign/index.js":
/*!**************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/object-assign/4.1.1/node_modules/object-assign/index.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/prop-types/15.7.2/node_modules/prop-types/checkPropTypes.js":
/*!******************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/prop-types/15.7.2/node_modules/prop-types/checkPropTypes.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../common/temp/node_modules/.registry.npmjs.org/prop-types/15.7.2/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/prop-types/15.7.2/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!***************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/prop-types/15.7.2/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../../common/temp/node_modules/.registry.npmjs.org/react-is/16.8.6/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../../common/temp/node_modules/.registry.npmjs.org/object-assign/4.1.1/node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../common/temp/node_modules/.registry.npmjs.org/prop-types/15.7.2/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../../common/temp/node_modules/.registry.npmjs.org/prop-types/15.7.2/node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/prop-types/15.7.2/node_modules/prop-types/index.js":
/*!*********************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/prop-types/15.7.2/node_modules/prop-types/index.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../../common/temp/node_modules/.registry.npmjs.org/react-is/16.8.6/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../../common/temp/node_modules/.registry.npmjs.org/prop-types/15.7.2/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/prop-types/15.7.2/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!****************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/prop-types/15.7.2/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/react-is/16.8.6/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/react-is/16.8.6/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/react-is/16.8.6/node_modules/react-is/index.js":
/*!*****************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/react-is/16.8.6/node_modules/react-is/index.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../../common/temp/node_modules/.registry.npmjs.org/react-is/16.8.6/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../../common/temp/node_modules/.registry.npmjs.org/react-numeric-input/2.2.3/react@16.8.6/node_modules/react-numeric-input/index.js":
/*!***************************************************************************************************************************************************!*\
  !*** D:/vsts_b/5/s/common/temp/node_modules/.registry.npmjs.org/react-numeric-input/2.2.3/react@16.8.6/node_modules/react-numeric-input/index.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var KEYCODE_UP = 38;
	var KEYCODE_DOWN = 40;
	var IS_BROWSER = typeof document != 'undefined';
	var RE_NUMBER = /^[+-]?((\.\d+)|(\d+(\.\d+)?))$/;
	var RE_INCOMPLETE_NUMBER = /^([+-]|\.0*|[+-]\.0*|[+-]?\d+\.)?$/;

	function addClass(element, className) {
	    if (element.classList) {
	        return element.classList.add(className);
	    }
	    if (!element.className.search(new RegExp("\\b" + className + "\\b"))) {
	        element.className = " " + className;
	    }
	}

	function removeClass(element, className) {
	    if (element.className) {
	        if (element.classList) {
	            return element.classList.remove(className);
	        }

	        element.className = element.className.replace(new RegExp("\\b" + className + "\\b", "g"), "");
	    }
	}

	function access(object, prop, defaultValue) {
	    var result = object[prop];
	    if (typeof result == "function") {
	        for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	            args[_key - 3] = arguments[_key];
	        }

	        result = result.apply(undefined, args);
	    }
	    return result === undefined ? defaultValue : result;
	}

	var NumericInput = function (_Component) {
	    _inherits(NumericInput, _Component);

	    function NumericInput() {
	        var _ref;

	        _classCallCheck(this, NumericInput);

	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	        }

	        var _this = _possibleConstructorReturn(this, (_ref = NumericInput.__proto__ || Object.getPrototypeOf(NumericInput)).call.apply(_ref, [this].concat(args)));

	        _this._isStrict = !!_this.props.strict;

	        _this.state = _extends({
	            btnDownHover: false,
	            btnDownActive: false,
	            btnUpHover: false,
	            btnUpActive: false,
	            stringValue: ""
	        }, _this._propsToState(_this.props));
	        _this.stop = _this.stop.bind(_this);
	        _this.onTouchEnd = _this.onTouchEnd.bind(_this);
	        _this.refsInput = {};
	        _this.refsWrapper = {};
	        return _this;
	    }

	    _createClass(NumericInput, [{
	        key: '_propsToState',
	        value: function _propsToState(props) {
	            var out = {};

	            if (props.hasOwnProperty("value")) {
	                out.stringValue = String(props.value || props.value === 0 ? props.value : '').trim();

	                out.value = out.stringValue !== '' ? this._parse(props.value) : null;
	            } else if (!this._isMounted && props.hasOwnProperty("defaultValue")) {
	                out.stringValue = String(props.defaultValue || props.defaultValue === 0 ? props.defaultValue : '').trim();

	                out.value = props.defaultValue !== '' ? this._parse(props.defaultValue) : null;
	            }

	            return out;
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(props) {
	            var _this2 = this;

	            this._isStrict = !!props.strict;
	            var nextState = this._propsToState(props);
	            if (Object.keys(nextState).length) {
	                this._ignoreValueChange = true;
	                this.setState(nextState, function () {
	                    _this2._ignoreValueChange = false;
	                });
	            }
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {
	            this.saveSelection();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            if (!this._ignoreValueChange && prevState.value !== this.state.value && (!isNaN(this.state.value) || this.state.value === null)) {
	                    this._invokeEventCallback("onChange", this.state.value, this.refsInput.value, this.refsInput);
	                }

	            if (this._inputFocus) {
	                this.refsInput.focus();

	                if (this.state.selectionStart || this.state.selectionStart === 0) {
	                    this.refsInput.selectionStart = this.state.selectionStart;
	                }

	                if (this.state.selectionEnd || this.state.selectionEnd === 0) {
	                    this.refsInput.selectionEnd = this.state.selectionEnd;
	                }
	            }

	            this.checkValidity();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this._isMounted = false;
	            this.stop();
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this3 = this;

	            this._isMounted = true;
	            this.refsInput.getValueAsNumber = function () {
	                return _this3.state.value || 0;
	            };

	            this.refsInput.setValue = function (value) {
	                _this3.setState({
	                    value: _this3._parse(value),
	                    stringValue: value
	                });
	            };

	            if (!this._inputFocus && IS_BROWSER && document.activeElement === this.refsInput) {
	                this._inputFocus = true;
	                this.refsInput.focus();
	                this._invokeEventCallback("onFocus", {
	                    target: this.refsInput,
	                    type: "focus"
	                });
	            }

	            this.checkValidity();
	        }
	    }, {
	        key: 'saveSelection',
	        value: function saveSelection() {
	            this.state.selectionStart = this.refsInput.selectionStart;
	            this.state.selectionEnd = this.refsInput.selectionEnd;
	        }
	    }, {
	        key: 'checkValidity',
	        value: function checkValidity() {
	            var valid = void 0,
	                validationError = "";

	            var supportsValidation = !!this.refsInput.checkValidity;

	            var noValidate = !!(this.props.noValidate && this.props.noValidate != "false");

	            this.refsInput.noValidate = noValidate;

	            valid = noValidate || !supportsValidation;

	            if (valid) {
	                validationError = "";
	            } else {
	                if (this.refsInput.pattern === "") {
	                    this.refsInput.pattern = this.props.required ? ".+" : ".*";
	                }

	                if (supportsValidation) {
	                    this.refsInput.checkValidity();
	                    valid = this.refsInput.validity.valid;

	                    if (!valid) {
	                        validationError = this.refsInput.validationMessage;
	                    }
	                }

	                if (valid && supportsValidation && this.props.maxLength) {
	                    if (this.refsInput.value.length > this.props.maxLength) {
	                        validationError = "This value is too long";
	                    }
	                }
	            }

	            validationError = validationError || (valid ? "" : this.refsInput.validationMessage || "Unknown Error");

	            var validStateChanged = this._valid !== validationError;
	            this._valid = validationError;
	            if (validationError) {
	                addClass(this.refsWrapper, "has-error");
	                if (validStateChanged) {
	                    this._invokeEventCallback("onInvalid", validationError, this.state.value, this.refsInput.value);
	                }
	            } else {
	                removeClass(this.refsWrapper, "has-error");
	                if (validStateChanged) {
	                    this._invokeEventCallback("onValid", this.state.value, this.refsInput.value);
	                }
	            }
	        }
	    }, {
	        key: '_toNumber',
	        value: function _toNumber(x) {
	            var n = parseFloat(x);
	            if (isNaN(n) || !isFinite(n)) {
	                n = 0;
	            }

	            if (this._isStrict) {
	                var precision = access(this.props, "precision", null, this);
	                var q = Math.pow(10, precision === null ? 10 : precision);
	                var _min = +access(this.props, "min", NumericInput.defaultProps.min, this);
	                var _max = +access(this.props, "max", NumericInput.defaultProps.max, this);
	                n = Math.min(Math.max(n, _min), _max);
	                n = Math.round(n * q) / q;
	            }

	            return n;
	        }
	    }, {
	        key: '_parse',
	        value: function _parse(x) {
	            x = String(x);
	            if (typeof this.props.parse == 'function') {
	                return parseFloat(this.props.parse(x));
	            }
	            return parseFloat(x);
	        }
	    }, {
	        key: '_format',
	        value: function _format(n) {
	            var _n = this._toNumber(n);
	            var precision = access(this.props, "precision", null, this);
	            if (precision !== null) {
	                _n = n.toFixed(precision);
	            }

	            _n += "";

	            if (this.props.format) {
	                return this.props.format(_n);
	            }

	            return _n;
	        }
	    }, {
	        key: '_step',
	        value: function _step(n, callback) {
	            var _isStrict = this._isStrict;
	            this._isStrict = true;

	            var _step = +access(this.props, "step", NumericInput.defaultProps.step, this, n > 0 ? NumericInput.DIRECTION_UP : NumericInput.DIRECTION_DOWN);

	            var _n = this._toNumber((this.state.value || 0) + _step * n);

	            if (this.props.snap) {
	                _n = Math.round(_n / _step) * _step;
	            }

	            this._isStrict = _isStrict;

	            if (_n !== this.state.value) {
	                this.setState({ value: _n, stringValue: _n + "" }, callback);
	                return true;
	            }

	            return false;
	        }
	    }, {
	        key: '_onKeyDown',
	        value: function _onKeyDown() {
	            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	                args[_key3] = arguments[_key3];
	            }

	            args[0].persist();
	            this._invokeEventCallback.apply(this, ["onKeyDown"].concat(args));
	            var e = args[0];
	            if (!e.isDefaultPrevented()) {
	                if (e.keyCode === KEYCODE_UP) {
	                    e.preventDefault();
	                    this._step(e.ctrlKey || e.metaKey ? 0.1 : e.shiftKey ? 10 : 1);
	                } else if (e.keyCode === KEYCODE_DOWN) {
	                    e.preventDefault();
	                    this._step(e.ctrlKey || e.metaKey ? -0.1 : e.shiftKey ? -10 : -1);
	                } else {
	                    var _value = this.refsInput.value,
	                        length = _value.length;
	                    if (e.keyCode === 8) {
	                        if (this.refsInput.selectionStart == this.refsInput.selectionEnd && this.refsInput.selectionEnd > 0 && _value.length && _value.charAt(this.refsInput.selectionEnd - 1) === ".") {
	                            e.preventDefault();
	                            this.refsInput.selectionStart = this.refsInput.selectionEnd = this.refsInput.selectionEnd - 1;
	                        }
	                    } else if (e.keyCode === 46) {
	                        if (this.refsInput.selectionStart == this.refsInput.selectionEnd && this.refsInput.selectionEnd < length + 1 && _value.length && _value.charAt(this.refsInput.selectionEnd) === ".") {
	                            e.preventDefault();
	                            this.refsInput.selectionStart = this.refsInput.selectionEnd = this.refsInput.selectionEnd + 1;
	                        }
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'stop',
	        value: function stop() {
	            if (this._timer) {
	                clearTimeout(this._timer);
	            }
	        }
	    }, {
	        key: 'increase',
	        value: function increase() {
	            var _this4 = this;

	            var _recursive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	            var callback = arguments[1];

	            this.stop();
	            this._step(1, callback);
	            var _max = +access(this.props, "max", NumericInput.defaultProps.max, this);
	            if (isNaN(this.state.value) || +this.state.value < _max) {
	                this._timer = setTimeout(function () {
	                    _this4.increase(true);
	                }, _recursive ? NumericInput.SPEED : NumericInput.DELAY);
	            }
	        }
	    }, {
	        key: 'decrease',
	        value: function decrease() {
	            var _this5 = this;

	            var _recursive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	            var callback = arguments[1];

	            this.stop();
	            this._step(-1, callback);
	            var _min = +access(this.props, "min", NumericInput.defaultProps.min, this);
	            if (isNaN(this.state.value) || +this.state.value > _min) {
	                this._timer = setTimeout(function () {
	                    _this5.decrease(true);
	                }, _recursive ? NumericInput.SPEED : NumericInput.DELAY);
	            }
	        }
	    }, {
	        key: 'onMouseDown',
	        value: function onMouseDown(dir, callback) {
	            if (dir == 'down') {
	                this.decrease(false, callback);
	            } else if (dir == 'up') {
	                this.increase(false, callback);
	            }
	        }
	    }, {
	        key: 'onTouchStart',
	        value: function onTouchStart(dir, e) {
	            e.preventDefault();
	            if (dir == 'down') {
	                this.decrease();
	            } else if (dir == 'up') {
	                this.increase();
	            }
	        }
	    }, {
	        key: 'onTouchEnd',
	        value: function onTouchEnd(e) {
	            e.preventDefault();
	            this.stop();
	        }
	    }, {
	        key: '_invokeEventCallback',
	        value: function _invokeEventCallback(callbackName) {
	            if (typeof this.props[callbackName] == "function") {
	                var _props$callbackName;

	                for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	                    args[_key4 - 1] = arguments[_key4];
	                }

	                (_props$callbackName = this.props[callbackName]).call.apply(_props$callbackName, [null].concat(args));
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this6 = this;

	            var props = this.props;
	            var state = this.state;
	            var css = {};

	            var _props = this.props,
	                step = _props.step,
	                min = _props.min,
	                max = _props.max,
	                precision = _props.precision,
	                parse = _props.parse,
	                format = _props.format,
	                mobile = _props.mobile,
	                snap = _props.snap,
	                componentClass = _props.componentClass,
	                value = _props.value,
	                type = _props.type,
	                style = _props.style,
	                defaultValue = _props.defaultValue,
	                onInvalid = _props.onInvalid,
	                onValid = _props.onValid,
	                strict = _props.strict,
	                noStyle = _props.noStyle,
	                rest = _objectWithoutProperties(_props, ['step', 'min', 'max', 'precision', 'parse', 'format', 'mobile', 'snap', 'componentClass', 'value', 'type', 'style', 'defaultValue', 'onInvalid', 'onValid', 'strict', 'noStyle']);

	            noStyle = noStyle || style === false;

	            for (var x in NumericInput.style) {
	                css[x] = _extends({}, NumericInput.style[x], style ? style[x] || {} : {});
	            }

	            var hasFormControl = props.className && /\bform-control\b/.test(props.className);

	            if (mobile == 'auto') {
	                mobile = IS_BROWSER && 'ontouchstart' in document;
	            }

	            if (typeof mobile == "function") {
	                mobile = mobile.call(this);
	            }
	            mobile = !!mobile;

	            var attrs = {
	                wrap: {
	                    style: noStyle ? null : css.wrap,
	                    className: 'react-numeric-input',
	                    ref: function ref(e) {
	                        if (e != null && e != undefined) {
	                            _this6.refsWrapper = e;
	                        }
	                    },
	                    onMouseUp: undefined,
	                    onMouseLeave: undefined
	                },
	                input: _extends({
	                    ref: function ref(e) {
	                        if (e != null && e != undefined) {
	                            _this6.refsInput = e;
	                        }
	                    },
	                    type: 'text',
	                    style: noStyle ? null : _extends({}, css.input, !hasFormControl ? css['input:not(.form-control)'] : {}, this._inputFocus ? css['input:focus'] : {})
	                }, rest),
	                btnUp: {
	                    onMouseEnter: undefined,
	                    onMouseDown: undefined,
	                    onMouseUp: undefined,
	                    onMouseLeave: undefined,
	                    onTouchStart: undefined,
	                    onTouchEnd: undefined,
	                    style: noStyle ? null : _extends({}, css.btn, css.btnUp, props.disabled || props.readOnly ? css['btn:disabled'] : state.btnUpActive ? css['btn:active'] : state.btnUpHover ? css['btn:hover'] : {})
	                },
	                btnDown: {
	                    onMouseEnter: undefined,
	                    onMouseDown: undefined,
	                    onMouseUp: undefined,
	                    onMouseLeave: undefined,
	                    onTouchStart: undefined,
	                    onTouchEnd: undefined,
	                    style: noStyle ? null : _extends({}, css.btn, css.btnDown, props.disabled || props.readOnly ? css['btn:disabled'] : state.btnDownActive ? css['btn:active'] : state.btnDownHover ? css['btn:hover'] : {})
	                }
	            };

	            var stringValue = String(state.stringValue || (state.value || state.value === 0 ? state.value : "") || "");

	            var loose = !this._isStrict && (this._inputFocus || !this._isMounted);

	            if (loose && RE_INCOMPLETE_NUMBER.test(stringValue)) {
	                attrs.input.value = stringValue;
	            } else if (loose && stringValue && !RE_NUMBER.test(stringValue)) {
	                    attrs.input.value = stringValue;
	                } else if (state.value || state.value === 0) {
	                        attrs.input.value = this._format(state.value);
	                    } else {
	                            attrs.input.value = "";
	                        }

	            if (hasFormControl && !noStyle) {
	                _extends(attrs.wrap.style, css['wrap.hasFormControl']);
	            }

	            if (mobile && !noStyle) {
	                _extends(attrs.input.style, css['input.mobile']);
	                _extends(attrs.btnUp.style, css['btnUp.mobile']);
	                _extends(attrs.btnDown.style, css['btnDown.mobile']);
	            }

	            if (!props.disabled && !props.readOnly) {
	                _extends(attrs.wrap, {
	                    onMouseUp: this.stop,
	                    onMouseLeave: this.stop
	                });

	                _extends(attrs.btnUp, {
	                    onTouchStart: this.onTouchStart.bind(this, 'up'),
	                    onTouchEnd: this.onTouchEnd,
	                    onMouseEnter: function onMouseEnter() {
	                        _this6.setState({
	                            btnUpHover: true
	                        });
	                    },
	                    onMouseLeave: function onMouseLeave() {
	                        _this6.stop();
	                        _this6.setState({
	                            btnUpHover: false,
	                            btnUpActive: false
	                        });
	                    },
	                    onMouseUp: function onMouseUp() {
	                        _this6.setState({
	                            btnUpHover: true,
	                            btnUpActive: false
	                        });
	                    },
	                    onMouseDown: function onMouseDown() {
	                        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	                            args[_key5] = arguments[_key5];
	                        }

	                        args[0].preventDefault();
	                        args[0].persist();
	                        _this6._inputFocus = true;
	                        _this6.setState({
	                            btnUpHover: true,
	                            btnUpActive: true
	                        }, function () {
	                            _this6._invokeEventCallback.apply(_this6, ["onFocus"].concat(args));
	                            _this6.onMouseDown('up');
	                        });
	                    }
	                });

	                _extends(attrs.btnDown, {
	                    onTouchStart: this.onTouchStart.bind(this, 'down'),
	                    onTouchEnd: this.onTouchEnd,
	                    onMouseEnter: function onMouseEnter() {
	                        _this6.setState({
	                            btnDownHover: true
	                        });
	                    },
	                    onMouseLeave: function onMouseLeave() {
	                        _this6.stop();
	                        _this6.setState({
	                            btnDownHover: false,
	                            btnDownActive: false
	                        });
	                    },
	                    onMouseUp: function onMouseUp() {
	                        _this6.setState({
	                            btnDownHover: true,
	                            btnDownActive: false
	                        });
	                    },
	                    onMouseDown: function onMouseDown() {
	                        for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	                            args[_key6] = arguments[_key6];
	                        }

	                        args[0].preventDefault();
	                        args[0].persist();
	                        _this6._inputFocus = true;
	                        _this6.setState({
	                            btnDownHover: true,
	                            btnDownActive: true
	                        }, function () {
	                            _this6._invokeEventCallback.apply(_this6, ["onFocus"].concat(args));
	                            _this6.onMouseDown('down');
	                        });
	                    }
	                });

	                _extends(attrs.input, {
	                    onChange: function onChange(e) {
	                        var original = e.target.value;
	                        var val = _this6._parse(original);
	                        if (isNaN(val)) {
	                            val = null;
	                        }
	                        _this6.setState({
	                            value: _this6._isStrict ? _this6._toNumber(val) : val,
	                            stringValue: original
	                        });
	                    },
	                    onKeyDown: this._onKeyDown.bind(this),
	                    onInput: function onInput() {
	                        for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	                            args[_key7] = arguments[_key7];
	                        }

	                        _this6.saveSelection();
	                        _this6._invokeEventCallback.apply(_this6, ["onInput"].concat(args));
	                    },
	                    onSelect: function onSelect() {
	                        for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	                            args[_key8] = arguments[_key8];
	                        }

	                        _this6.saveSelection();
	                        _this6._invokeEventCallback.apply(_this6, ["onSelect"].concat(args));
	                    },
	                    onFocus: function onFocus() {
	                        for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	                            args[_key9] = arguments[_key9];
	                        }

	                        args[0].persist();
	                        _this6._inputFocus = true;
	                        var val = _this6._parse(args[0].target.value);
	                        _this6.setState({
	                            value: val,
	                            stringValue: val || val === 0 ? val + "" : ""
	                        }, function () {
	                            _this6._invokeEventCallback.apply(_this6, ["onFocus"].concat(args));
	                        });
	                    },
	                    onBlur: function onBlur() {
	                        for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
	                            args[_key10] = arguments[_key10];
	                        }

	                        var _isStrict = _this6._isStrict;
	                        _this6._isStrict = true;
	                        args[0].persist();
	                        _this6._inputFocus = false;
	                        var val = _this6._parse(args[0].target.value);
	                        _this6.setState({
	                            value: val
	                        }, function () {
	                            _this6._invokeEventCallback.apply(_this6, ["onBlur"].concat(args));
	                            _this6._isStrict = _isStrict;
	                        });
	                    }
	                });
	            } else {
	                if (!noStyle && props.disabled) {
	                    _extends(attrs.input.style, css['input:disabled']);
	                }
	            }

	            var InputTag = componentClass || 'input';

	            if (mobile) {
	                return _react2.default.createElement(
	                    'span',
	                    attrs.wrap,
	                    _react2.default.createElement(InputTag, attrs.input),
	                    _react2.default.createElement(
	                        'b',
	                        attrs.btnUp,
	                        _react2.default.createElement('i', { style: noStyle ? null : css.minus }),
	                        _react2.default.createElement('i', { style: noStyle ? null : css.plus })
	                    ),
	                    _react2.default.createElement(
	                        'b',
	                        attrs.btnDown,
	                        _react2.default.createElement('i', { style: noStyle ? null : css.minus })
	                    )
	                );
	            }

	            return _react2.default.createElement(
	                'span',
	                attrs.wrap,
	                _react2.default.createElement(InputTag, attrs.input),
	                _react2.default.createElement(
	                    'b',
	                    attrs.btnUp,
	                    _react2.default.createElement('i', { style: noStyle ? null : css.arrowUp })
	                ),
	                _react2.default.createElement(
	                    'b',
	                    attrs.btnDown,
	                    _react2.default.createElement('i', { style: noStyle ? null : css.arrowDown })
	                )
	            );
	        }
	    }]);

	    return NumericInput;
	}(_react.Component);

	NumericInput.propTypes = {
	    step: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
	    min: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
	    max: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
	    precision: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
	    maxLength: _propTypes2.default.number,
	    parse: _propTypes2.default.func,
	    format: _propTypes2.default.func,
	    className: _propTypes2.default.string,
	    disabled: _propTypes2.default.bool,
	    readOnly: _propTypes2.default.bool,
	    required: _propTypes2.default.bool,
	    snap: _propTypes2.default.bool,
	    noValidate: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
	    style: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
	    noStyle: _propTypes2.default.bool,
	    type: _propTypes2.default.string,
	    pattern: _propTypes2.default.string,
	    onFocus: _propTypes2.default.func,
	    onBlur: _propTypes2.default.func,
	    onKeyDown: _propTypes2.default.func,
	    onChange: _propTypes2.default.func,
	    onInvalid: _propTypes2.default.func,
	    onValid: _propTypes2.default.func,
	    onInput: _propTypes2.default.func,
	    onSelect: _propTypes2.default.func,
	    size: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
	    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
	    defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
	    strict: _propTypes2.default.bool,
	    componentClass: _propTypes2.default.string,
	    mobile: function mobile(props, propName) {
	        var prop = props[propName];
	        if (prop !== true && prop !== false && prop !== 'auto' && typeof prop != 'function') {
	            return new Error('The "mobile" prop must be true, false, "auto" or a function');
	        }
	    }
	};
	NumericInput.defaultProps = {
	    step: 1,
	    min: Number.MIN_SAFE_INTEGER || -9007199254740991,
	    max: Number.MAX_SAFE_INTEGER || 9007199254740991,
	    precision: null,
	    parse: null,
	    format: null,
	    mobile: 'auto',
	    strict: false,
	    componentClass: "input",
	    style: {}
	};
	NumericInput.style = {
	    wrap: {
	        position: 'relative',
	        display: 'inline-block'
	    },

	    'wrap.hasFormControl': {
	        display: 'block'
	    },

	    arrowUp: {
	        position: 'absolute',
	        top: '50%',
	        left: '50%',
	        width: 0,
	        height: 0,
	        borderWidth: '0 0.6ex 0.6ex 0.6ex',
	        borderColor: 'transparent transparent rgba(0, 0, 0, 0.7)',
	        borderStyle: 'solid',
	        margin: '-0.3ex 0 0 -0.56ex'
	    },

	    arrowDown: {
	        position: 'absolute',
	        top: '50%',
	        left: '50%',
	        width: 0,
	        height: 0,
	        borderWidth: '0.6ex 0.6ex 0 0.6ex',
	        borderColor: 'rgba(0, 0, 0, 0.7) transparent transparent',
	        borderStyle: 'solid',
	        margin: '-0.3ex 0 0 -0.56ex'
	    },

	    plus: {
	        position: 'absolute',
	        top: '50%',
	        left: '50%',
	        width: 2,
	        height: 10,
	        background: 'rgba(0,0,0,.7)',
	        margin: '-5px 0 0 -1px'
	    },

	    minus: {
	        position: 'absolute',
	        top: '50%',
	        left: '50%',
	        width: 10,
	        height: 2,
	        background: 'rgba(0,0,0,.7)',
	        margin: '-1px 0 0 -5px'
	    },

	    btn: {
	        position: 'absolute',
	        right: 2,
	        width: '2.26ex',
	        borderColor: 'rgba(0,0,0,.1)',
	        borderStyle: 'solid',
	        textAlign: 'center',
	        cursor: 'default',
	        transition: 'all 0.1s',
	        background: 'rgba(0,0,0,.1)',
	        boxShadow: '-1px -1px 3px rgba(0,0,0,.1) inset,' + '1px 1px 3px rgba(255,255,255,.7) inset'
	    },

	    btnUp: {
	        top: 2,
	        bottom: '50%',
	        borderRadius: '2px 2px 0 0',
	        borderWidth: '1px 1px 0 1px'
	    },

	    'btnUp.mobile': {
	        width: '3.3ex',
	        bottom: 2,
	        boxShadow: 'none',
	        borderRadius: 2,
	        borderWidth: 1
	    },

	    btnDown: {
	        top: '50%',
	        bottom: 2,
	        borderRadius: '0 0 2px 2px',
	        borderWidth: '0 1px 1px 1px'
	    },

	    'btnDown.mobile': {
	        width: '3.3ex',
	        bottom: 2,
	        left: 2,
	        top: 2,
	        right: 'auto',
	        boxShadow: 'none',
	        borderRadius: 2,
	        borderWidth: 1
	    },

	    'btn:hover': {
	        background: 'rgba(0,0,0,.2)'
	    },

	    'btn:active': {
	        background: 'rgba(0,0,0,.3)',
	        boxShadow: '0 1px 3px rgba(0,0,0,.2) inset,' + '-1px -1px 4px rgba(255,255,255,.5) inset'
	    },

	    'btn:disabled': {
	        opacity: 0.5,
	        boxShadow: 'none',
	        cursor: 'not-allowed'
	    },

	    input: {
	        paddingRight: '3ex',
	        boxSizing: 'border-box',
	        fontSize: 'inherit'
	    },

	    'input:not(.form-control)': {
	        border: '1px solid #ccc',
	        borderRadius: 2,
	        paddingLeft: 4,
	        display: 'block',
	        WebkitAppearance: 'none',
	        lineHeight: 'normal'
	    },

	    'input.mobile': {
	        paddingLeft: ' 3.4ex',
	        paddingRight: '3.4ex',
	        textAlign: 'center'
	    },

	    'input:focus': {},

	    'input:disabled': {
	        color: 'rgba(0, 0, 0, 0.3)',
	        textShadow: '0 1px 0 rgba(255, 255, 255, 0.8)'
	    }
	};
	NumericInput.SPEED = 50;
	NumericInput.DELAY = 500;
	NumericInput.DIRECTION_UP = "up";
	NumericInput.DIRECTION_DOWN = "down";


	module.exports = NumericInput;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __webpack_require__(/*! react */ "react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __webpack_require__(/*! prop-types */ "../../common/temp/node_modules/.registry.npmjs.org/prop-types/15.7.2/node_modules/prop-types/index.js");

/***/ })
/******/ ]);

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

/***/ "./lib/ui-core.js":
/*!************************!*\
  !*** ./lib/ui-core.js ***!
  \************************/
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
__export(__webpack_require__(/*! ./ui-core/UiCore */ "./lib/ui-core/UiCore.js"));
__export(__webpack_require__(/*! ./ui-core/base/Div */ "./lib/ui-core/base/Div.js"));
__export(__webpack_require__(/*! ./ui-core/base/Centered */ "./lib/ui-core/base/Centered.js"));
__export(__webpack_require__(/*! ./ui-core/base/FillCentered */ "./lib/ui-core/base/FillCentered.js"));
__export(__webpack_require__(/*! ./ui-core/base/ScrollView */ "./lib/ui-core/base/ScrollView.js"));
__export(__webpack_require__(/*! ./ui-core/base/FlexWrapContainer */ "./lib/ui-core/base/FlexWrapContainer.js"));
__export(__webpack_require__(/*! ./ui-core/checklistbox/CheckListBox */ "./lib/ui-core/checklistbox/CheckListBox.js"));
__export(__webpack_require__(/*! ./ui-core/contextmenu/ContextMenu */ "./lib/ui-core/contextmenu/ContextMenu.js"));
__export(__webpack_require__(/*! ./ui-core/cube/Cube */ "./lib/ui-core/cube/Cube.js"));
__export(__webpack_require__(/*! ./ui-core/dialog/Dialog */ "./lib/ui-core/dialog/Dialog.js"));
__export(__webpack_require__(/*! ./ui-core/elementseparator/ElementSeparator */ "./lib/ui-core/elementseparator/ElementSeparator.js"));
__export(__webpack_require__(/*! ./ui-core/enums/Alignment */ "./lib/ui-core/enums/Alignment.js"));
__export(__webpack_require__(/*! ./ui-core/enums/CheckBoxState */ "./lib/ui-core/enums/CheckBoxState.js"));
__export(__webpack_require__(/*! ./ui-core/enums/DateFormat */ "./lib/ui-core/enums/DateFormat.js"));
__export(__webpack_require__(/*! ./ui-core/enums/Orientation */ "./lib/ui-core/enums/Orientation.js"));
__export(__webpack_require__(/*! ./ui-core/enums/SortDirection */ "./lib/ui-core/enums/SortDirection.js"));
__export(__webpack_require__(/*! ./ui-core/enums/TimeFormat */ "./lib/ui-core/enums/TimeFormat.js"));
__export(__webpack_require__(/*! ./ui-core/expandable/ExpandableList */ "./lib/ui-core/expandable/ExpandableList.js"));
__export(__webpack_require__(/*! ./ui-core/expandable/ExpandableBlock */ "./lib/ui-core/expandable/ExpandableBlock.js"));
__export(__webpack_require__(/*! ./ui-core/hocs/withIsPressed */ "./lib/ui-core/hocs/withIsPressed.js"));
__export(__webpack_require__(/*! ./ui-core/hocs/withOnOutsideClick */ "./lib/ui-core/hocs/withOnOutsideClick.js"));
__export(__webpack_require__(/*! ./ui-core/hocs/withTimeout */ "./lib/ui-core/hocs/withTimeout.js"));
__export(__webpack_require__(/*! ./ui-core/icons/SvgPath */ "./lib/ui-core/icons/SvgPath.js"));
__export(__webpack_require__(/*! ./ui-core/icons/SvgSprite */ "./lib/ui-core/icons/SvgSprite.js"));
__export(__webpack_require__(/*! ./ui-core/icons/WebFontIcon */ "./lib/ui-core/icons/WebFontIcon.js"));
__export(__webpack_require__(/*! ./ui-core/messagebox/MessageBox */ "./lib/ui-core/messagebox/MessageBox.js"));
__export(__webpack_require__(/*! ./ui-core/popup/Popup */ "./lib/ui-core/popup/Popup.js"));
__export(__webpack_require__(/*! ./ui-core/radialmenu/RadialMenu */ "./lib/ui-core/radialmenu/RadialMenu.js"));
__export(__webpack_require__(/*! ./ui-core/radialmenu/Annulus */ "./lib/ui-core/radialmenu/Annulus.js"));
// cSpell:ignore imagecheckbox
__export(__webpack_require__(/*! ./ui-core/imagecheckbox/ImageCheckBox */ "./lib/ui-core/imagecheckbox/ImageCheckBox.js"));
__export(__webpack_require__(/*! ./ui-core/searchbox/SearchBox */ "./lib/ui-core/searchbox/SearchBox.js"));
__export(__webpack_require__(/*! ./ui-core/splitbutton/SplitButton */ "./lib/ui-core/splitbutton/SplitButton.js"));
__export(__webpack_require__(/*! ./ui-core/loading/LoadingBar */ "./lib/ui-core/loading/LoadingBar.js"));
__export(__webpack_require__(/*! ./ui-core/loading/LoadingPrompt */ "./lib/ui-core/loading/LoadingPrompt.js"));
__export(__webpack_require__(/*! ./ui-core/loading/LoadingSpinner */ "./lib/ui-core/loading/LoadingSpinner.js"));
__export(__webpack_require__(/*! ./ui-core/loading/LoadingStatus */ "./lib/ui-core/loading/LoadingStatus.js"));
__export(__webpack_require__(/*! ./ui-core/loading/Spinner */ "./lib/ui-core/loading/Spinner.js"));
__export(__webpack_require__(/*! ./ui-core/toggle/Toggle */ "./lib/ui-core/toggle/Toggle.js"));
var ExpansionToggle_1 = __webpack_require__(/*! ./ui-core/tree/ExpansionToggle */ "./lib/ui-core/tree/ExpansionToggle.js");
exports.ExpansionToggle = ExpansionToggle_1.ExpansionToggle;
var Branch_1 = __webpack_require__(/*! ./ui-core/tree/Branch */ "./lib/ui-core/tree/Branch.js");
exports.TreeBranch = Branch_1.TreeBranch;
var Node_1 = __webpack_require__(/*! ./ui-core/tree/Node */ "./lib/ui-core/tree/Node.js");
exports.TreeNode = Node_1.TreeNode;
var Tree_1 = __webpack_require__(/*! ./ui-core/tree/Tree */ "./lib/ui-core/tree/Tree.js");
exports.Tree = Tree_1.Tree;
var Placeholder_1 = __webpack_require__(/*! ./ui-core/tree/Placeholder */ "./lib/ui-core/tree/Placeholder.js");
exports.TreeNodePlaceholder = Placeholder_1.TreeNodePlaceholder;
__export(__webpack_require__(/*! ./ui-core/uisettings/UiSettings */ "./lib/ui-core/uisettings/UiSettings.js"));
__export(__webpack_require__(/*! ./ui-core/uisettings/LocalUiSettings */ "./lib/ui-core/uisettings/LocalUiSettings.js"));
__export(__webpack_require__(/*! ./ui-core/uisettings/SessionUiSettings */ "./lib/ui-core/uisettings/SessionUiSettings.js"));
__export(__webpack_require__(/*! ./ui-core/utils/Timer */ "./lib/ui-core/utils/Timer.js"));
__export(__webpack_require__(/*! ./ui-core/utils/UiError */ "./lib/ui-core/utils/UiError.js"));
__export(__webpack_require__(/*! ./ui-core/utils/UiEvent */ "./lib/ui-core/utils/UiEvent.js"));
__export(__webpack_require__(/*! ./ui-core/utils/flattenChildren */ "./lib/ui-core/utils/flattenChildren.js"));
__export(__webpack_require__(/*! ./ui-core/utils/getClassName */ "./lib/ui-core/utils/getClassName.js"));
__export(__webpack_require__(/*! ./ui-core/utils/getDisplayName */ "./lib/ui-core/utils/getDisplayName.js"));
__export(__webpack_require__(/*! ./ui-core/utils/getUserColor */ "./lib/ui-core/utils/getUserColor.js"));
__export(__webpack_require__(/*! ./ui-core/utils/shallowDiffers */ "./lib/ui-core/utils/shallowDiffers.js"));
__export(__webpack_require__(/*! ./ui-core/utils/isPromiseLike */ "./lib/ui-core/utils/isPromiseLike.js"));
__export(__webpack_require__(/*! ./ui-core/button/Button */ "./lib/ui-core/button/Button.js"));
__export(__webpack_require__(/*! ./ui-core/button/UnderlinedButton */ "./lib/ui-core/button/UnderlinedButton.js"));
__export(__webpack_require__(/*! ./ui-core/inputs/checkbox/Checkbox */ "./lib/ui-core/inputs/checkbox/Checkbox.js"));
__export(__webpack_require__(/*! ./ui-core/inputs/Input */ "./lib/ui-core/inputs/Input.js"));
__export(__webpack_require__(/*! ./ui-core/inputs/InputStatus */ "./lib/ui-core/inputs/InputStatus.js"));
__export(__webpack_require__(/*! ./ui-core/inputs/LabeledInput */ "./lib/ui-core/inputs/LabeledInput.js"));
__export(__webpack_require__(/*! ./ui-core/inputs/LabeledSelect */ "./lib/ui-core/inputs/LabeledSelect.js"));
__export(__webpack_require__(/*! ./ui-core/inputs/LabeledTextarea */ "./lib/ui-core/inputs/LabeledTextarea.js"));
__export(__webpack_require__(/*! ./ui-core/inputs/numericinput/NumericInput */ "./lib/ui-core/inputs/numericinput/NumericInput.js"));
__export(__webpack_require__(/*! ./ui-core/inputs/Radio */ "./lib/ui-core/inputs/Radio.js"));
__export(__webpack_require__(/*! ./ui-core/inputs/Select */ "./lib/ui-core/inputs/Select.js"));
__export(__webpack_require__(/*! ./ui-core/inputs/Textarea */ "./lib/ui-core/inputs/Textarea.js"));
__export(__webpack_require__(/*! ./ui-core/tabs/HorizontalTabs */ "./lib/ui-core/tabs/HorizontalTabs.js"));
__export(__webpack_require__(/*! ./ui-core/text/BodyText */ "./lib/ui-core/text/BodyText.js"));
__export(__webpack_require__(/*! ./ui-core/text/Headline */ "./lib/ui-core/text/Headline.js"));
__export(__webpack_require__(/*! ./ui-core/text/LeadingText */ "./lib/ui-core/text/LeadingText.js"));
__export(__webpack_require__(/*! ./ui-core/text/LeadingText2 */ "./lib/ui-core/text/LeadingText2.js"));
__export(__webpack_require__(/*! ./ui-core/text/MutedText */ "./lib/ui-core/text/MutedText.js"));
__export(__webpack_require__(/*! ./ui-core/text/SmallText */ "./lib/ui-core/text/SmallText.js"));
__export(__webpack_require__(/*! ./ui-core/text/Subheading */ "./lib/ui-core/text/Subheading.js"));
__export(__webpack_require__(/*! ./ui-core/text/Subheading2 */ "./lib/ui-core/text/Subheading2.js"));
__export(__webpack_require__(/*! ./ui-core/text/StyledText */ "./lib/ui-core/text/StyledText.js"));
__export(__webpack_require__(/*! ./ui-core/text/Title */ "./lib/ui-core/text/Title.js"));
__export(__webpack_require__(/*! ./ui-core/text/Title2 */ "./lib/ui-core/text/Title2.js"));
// istanbul ignore if
if (( true) && (typeof window !== "undefined") && window) {
    if (!window.iModelJsVersions)
        window.iModelJsVersions = new Map();
    window.iModelJsVersions.set("ui-core", "1.0.0");
}
/** @docs-package-description
 * The ui-core package contains general purpose React components, such as Dialog, MessageBox, SearchBox, RadialMenu and SplitButton.
 * For more information, see [learning about ui-core]($docs/learning/core/index.md).
 */
/**
 * @docs-group-description Base
 * Low-level classes and components for building application UI.
 */
/**
 * @docs-group-description Button
 * Classes for working with various Buttons.
 */
/**
 * @docs-group-description CheckListBox
 * Classes for working with a Check listbox.
 */
/**
 * @docs-group-description Common
 * Common classes used across various UI components.
 */
/**
 * @docs-group-description ContextMenu
 * Classes for working with a Context Menu.
 */
/**
 * @docs-group-description Cube
 * Component for 3D Cube.
 */
/**
 * @docs-group-description Dialog
 * Classes for working with a Dialog or MessageBox.
 */
/**
 * @docs-group-description ElementSeparator
 * Classes for working with a ElementSeparator.
 */
/**
 * @docs-group-description Expandable
 * Classes for working with a ExpandableBlock or ExpandableList.
 */
/**
 * @docs-group-description Icon
 * Component that renders ui-core icon when given an icon name.
 */
/**
 * @docs-group-description Inputs
 * Classes for working with input controls, such as Input, Radio, Checkbox, Select and Toggle.
 */
/**
 * @docs-group-description Loading
 * Classes for working with Loading spinner and progress indicator.
 */
/**
 * @docs-group-description Popup
 * Classes for working with a Popup.
 */
/**
 * @docs-group-description RadialMenu
 * Classes for working with a RadialMenu.
 */
/**
 * @docs-group-description SearchBox
 * Classes for working with a SearchBox.
 */
/**
 * @docs-group-description SplitButton
 * Classes for working with a SplitButton.
 */
/**
 * @docs-group-description Tabs
 * Classes for working with horizontal tabs.
 */
/**
 * @docs-group-description Text
 * Classes for working with different text controls.
 */
/**
 * @docs-group-description Tree
 * Presentation React components for working with a Tree.
 */
/**
 * @docs-group-description UiSettings
 * Interfaces for working with persistent UI settings.
 */
/**
 * @docs-group-description Utilities
 * Various utility classes for working with a UI.
 */


/***/ }),

/***/ "./lib/ui-core/UiCore.js":
/*!*******************************!*\
  !*** ./lib/ui-core/UiCore.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Utilities */
Object.defineProperty(exports, "__esModule", { value: true });
const getClassName_1 = __webpack_require__(/*! ./utils/getClassName */ "./lib/ui-core/utils/getClassName.js");
/** Import color themes and Sass classes barrel file */
__webpack_require__(/*! ./colorthemes.scss */ "./lib/ui-core/colorthemes.scss");
__webpack_require__(/*! ./classes.scss */ "./lib/ui-core/classes.scss");
const UiError_1 = __webpack_require__(/*! ./utils/UiError */ "./lib/ui-core/utils/UiError.js");
/**
 * Entry point for static initialization required by various
 * components used in the package.
 * @public
 */
class UiCore {
    /**
     * Called by IModelApp to initialize the UiCore
     * @param i18n The internationalization service created by the IModelApp.
     */
    static async initialize(i18n) {
        UiCore._i18n = i18n;
        await UiCore._i18n.registerNamespace(UiCore.i18nNamespace).readFinished;
    }
    /** Unregisters the UiCore internationalization service namespace */
    static terminate() {
        if (UiCore._i18n)
            UiCore._i18n.unregisterNamespace(UiCore.i18nNamespace);
        UiCore._i18n = undefined;
    }
    /** The internationalization service created by the IModelApp. */
    static get i18n() {
        if (!UiCore._i18n)
            throw new UiError_1.UiError(UiCore.loggerCategory(this), "UiCore not initialized");
        return UiCore._i18n;
    }
    /** The internationalization service namespace. */
    static get i18nNamespace() {
        return "UiCore";
    }
    /** Calls i18n.translateWithNamespace with the "UiCore" namespace. Do NOT include the namespace in the key.
     * @internal
     */
    static translate(key, options) {
        return UiCore.i18n.translateWithNamespace(UiCore.i18nNamespace, key, options);
    }
    /** @internal */
    static get packageName() {
        return "ui-core";
    }
    /** @internal */
    static loggerCategory(obj) {
        const className = getClassName_1.getClassName(obj);
        const category = UiCore.packageName + (className ? `.${className}` : "");
        return category;
    }
}
exports.UiCore = UiCore;


/***/ }),

/***/ "./lib/ui-core/base/Centered.js":
/*!**************************************!*\
  !*** ./lib/ui-core/base/Centered.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Base */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Div_1 = __webpack_require__(/*! ./Div */ "./lib/ui-core/base/Div.js");
/** Centered React functional component
 * @public
 */
// tslint:disable-next-line:variable-name
exports.Centered = (props) => {
    return React.createElement(Div_1.Div, Object.assign({}, props, { mainClassName: "uicore-centered" }));
};


/***/ }),

/***/ "./lib/ui-core/base/Div.js":
/*!*********************************!*\
  !*** ./lib/ui-core/base/Div.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Base */
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
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
/** Base div element
 * @internal
 */
class Div extends React.PureComponent {
    render() {
        const _a = this.props, { mainClassName, className, style, children } = _a, props = __rest(_a, ["mainClassName", "className", "style", "children"]);
        return (React.createElement("div", Object.assign({}, props, { className: classnames(mainClassName, className), style: style }), children));
    }
}
exports.Div = Div;


/***/ }),

/***/ "./lib/ui-core/base/FillCentered.js":
/*!******************************************!*\
  !*** ./lib/ui-core/base/FillCentered.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Base */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Div_1 = __webpack_require__(/*! ./Div */ "./lib/ui-core/base/Div.js");
/** Full height & width and centered React functional component
 * @public
 */
// tslint:disable-next-line:variable-name
exports.FillCentered = (props) => {
    return React.createElement(Div_1.Div, Object.assign({}, props, { mainClassName: "uicore-fill-centered" }));
};


/***/ }),

/***/ "./lib/ui-core/base/FlexWrapContainer.js":
/*!***********************************************!*\
  !*** ./lib/ui-core/base/FlexWrapContainer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Base */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Div_1 = __webpack_require__(/*! ./Div */ "./lib/ui-core/base/Div.js");
/** Flex Wrap Container React functional component
 * @public
 */
// tslint:disable-next-line:variable-name
exports.FlexWrapContainer = (props) => {
    return React.createElement(Div_1.Div, Object.assign({}, props, { mainClassName: "uicore-flex-wrap-container" }));
};


/***/ }),

/***/ "./lib/ui-core/base/ScrollView.js":
/*!****************************************!*\
  !*** ./lib/ui-core/base/ScrollView.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Base */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Div_1 = __webpack_require__(/*! ./Div */ "./lib/ui-core/base/Div.js");
/** Scroll View React functional component
 * @public
 */
// tslint:disable-next-line:variable-name
exports.ScrollView = (props) => {
    return React.createElement(Div_1.Div, Object.assign({}, props, { mainClassName: "uicore-scrollview" }));
};


/***/ }),

/***/ "./lib/ui-core/button/Button.js":
/*!**************************************!*\
  !*** ./lib/ui-core/button/Button.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Button */
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
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
/** Sizes for [[Button]] component
 * @public
 */
var ButtonSize;
(function (ButtonSize) {
    ButtonSize["Default"] = "";
    ButtonSize["Large"] = "large";
})(ButtonSize = exports.ButtonSize || (exports.ButtonSize = {}));
/** Types for [[Button]] component
 * @public
 */
var ButtonType;
(function (ButtonType) {
    ButtonType["Primary"] = "primary";
    ButtonType["Blue"] = "blue";
    ButtonType["Disabled"] = "disabled";
    ButtonType["Hollow"] = "hollow";
})(ButtonType = exports.ButtonType || (exports.ButtonType = {}));
/** Generic button component
 * @public
 */
class Button extends React.PureComponent {
    render() {
        const _a = this.props, { buttonType, size, className, style, onClick } = _a, props = __rest(_a, ["buttonType", "size", "className", "style", "onClick"]);
        let typeClassName = "";
        switch (buttonType) {
            case ButtonType.Blue:
                typeClassName = "uicore-buttons-blue";
                break;
            case ButtonType.Disabled:
                typeClassName = "uicore-buttons-disabled";
                break;
            case ButtonType.Hollow:
                typeClassName = "uicore-buttons-hollow";
                break;
            case ButtonType.Primary:
            default:
                typeClassName = "uicore-buttons-blue";
                break;
        }
        if (size === ButtonSize.Large)
            typeClassName += "-large";
        return React.createElement("button", Object.assign({}, props, { className: classnames(typeClassName, className), style: style, onClick: onClick }));
    }
}
exports.Button = Button;


/***/ }),

/***/ "./lib/ui-core/button/UnderlinedButton.js":
/*!************************************************!*\
  !*** ./lib/ui-core/button/UnderlinedButton.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Button */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const classnames_1 = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
__webpack_require__(/*! ./UnderlinedButton.scss */ "./lib/ui-core/button/UnderlinedButton.scss");
/** A React component that makes text clickable and underlined
 * @public
 */
function UnderlinedButton(props) {
    const className = classnames_1.default("core-underlined-button", props.className ? props.className : undefined);
    return (React.createElement("span", { className: className, title: props.title, onClick: props.onClick }, props.children));
}
exports.UnderlinedButton = UnderlinedButton;


/***/ }),

/***/ "./lib/ui-core/button/UnderlinedButton.scss":
/*!**************************************************!*\
  !*** ./lib/ui-core/button/UnderlinedButton.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./UnderlinedButton.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/button/UnderlinedButton.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/checklistbox/CheckListBox.js":
/*!**************************************************!*\
  !*** ./lib/ui-core/checklistbox/CheckListBox.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module CheckListBox */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
const Checkbox_1 = __webpack_require__(/*! ../inputs/checkbox/Checkbox */ "./lib/ui-core/inputs/checkbox/Checkbox.js");
__webpack_require__(/*! ./CheckListBox.scss */ "./lib/ui-core/checklistbox/CheckListBox.scss");
/** Item with a checkbox added to a [[CheckListBox]].
 * @beta
 */
class CheckListBoxItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this._onClick = () => {
            // istanbul ignore else
            if (this.props.onClick) {
                this.props.onClick();
            }
        };
    }
    render() {
        const className = classnames("core-chk-listboxitem-checkbox", this.props.className);
        return (React.createElement("li", null,
            React.createElement(Checkbox_1.Checkbox, { checked: this.props.checked, disabled: this.props.disabled, inputClassName: className, style: this.props.style, label: this.props.label, onClick: this._onClick })));
    }
}
exports.CheckListBoxItem = CheckListBoxItem;
/** Separator added to a [[CheckListBox]].
 * @beta
 */
// tslint:disable-next-line:variable-name
exports.CheckListBoxSeparator = () => {
    return (React.createElement("div", { className: "core-chk-listbox-separator" }));
};
/** React component showing a list of Checkbox items.
 * @beta
 */
class CheckListBox extends React.PureComponent {
    render() {
        const className = classnames("core-chk-listbox", this.props.className);
        return (React.createElement("ul", { className: className, style: this.props.style }, this.props.children));
    }
}
exports.CheckListBox = CheckListBox;


/***/ }),

/***/ "./lib/ui-core/checklistbox/CheckListBox.scss":
/*!****************************************************!*\
  !*** ./lib/ui-core/checklistbox/CheckListBox.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./CheckListBox.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/checklistbox/CheckListBox.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/classes.scss":
/*!**********************************!*\
  !*** ./lib/ui-core/classes.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./classes.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/classes.scss");

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

/***/ "./lib/ui-core/colorthemes.scss":
/*!**************************************!*\
  !*** ./lib/ui-core/colorthemes.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./colorthemes.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/colorthemes.scss");

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

/***/ "./lib/ui-core/contextmenu/ContextMenu.js":
/*!************************************************!*\
  !*** ./lib/ui-core/contextmenu/ContextMenu.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module ContextMenu */
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
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
__webpack_require__(/*! ./ContextMenu.scss */ "./lib/ui-core/contextmenu/ContextMenu.scss");
const withOnOutsideClick_1 = __webpack_require__(/*! ../hocs/withOnOutsideClick */ "./lib/ui-core/hocs/withOnOutsideClick.js");
const DivWithOutsideClick = withOnOutsideClick_1.withOnOutsideClick((props) => (React.createElement("div", Object.assign({}, props)))); // tslint:disable-line:variable-name
/** Enum to specify where a [[ContextMenu]] should anchor to its parent element
 * @public
 */
var ContextMenuDirection;
(function (ContextMenuDirection) {
    ContextMenuDirection["None"] = "";
    ContextMenuDirection["TopLeft"] = "top left";
    ContextMenuDirection["Top"] = "top";
    ContextMenuDirection["TopRight"] = "top right";
    ContextMenuDirection["Left"] = "left";
    ContextMenuDirection["Center"] = "center";
    ContextMenuDirection["Right"] = "right";
    ContextMenuDirection["BottomLeft"] = "bottom left";
    ContextMenuDirection["Bottom"] = "bottom";
    ContextMenuDirection["BottomRight"] = "bottom right";
})(ContextMenuDirection = exports.ContextMenuDirection || (exports.ContextMenuDirection = {}));
/**
 * A context menu populated with [[ContextMenuItem]] components.
 * Can be nested using [[ContextSubMenu]] component.
 * @public
 */
class ContextMenu extends React.PureComponent {
    constructor(props) {
        super(props);
        this._rootElement = null;
        this._menuElement = null;
        this._selectedElement = null;
        this._length = 0;
        this._hotKeyMap = new Map();
        this._lastDir = ContextMenuDirection.BottomRight;
        this._lastSelectedIndex = 0;
        this._handleHotKeyParsed = (index, hotKey) => {
            this._hotKeyMap.set(index, hotKey);
        };
        this._injectMenuItemProps = (children, direction, selectedIndex) => {
            let index = 0;
            // add inheritance data to submenu children
            const ch = React.Children.map(children, (child) => {
                // Capture only ContextSubMenus and ContextMenuItems.
                if (child && typeof child === "object" && "props" in child && !child.props.disabled && (child.type === ContextSubMenu || child.type === ContextMenuItem)) {
                    const id = index; // get separate id variable so value stays the same when onHover is called later.
                    const onHover = () => {
                        this.setState({ selectedIndex: id });
                        this.focus();
                    };
                    const ref = (el) => {
                        if (selectedIndex === id) // only save to this._selectedElement if previously captured bool is true
                            this._selectedElement = el;
                    };
                    const boundHandleHotKeyParse = this._handleHotKeyParsed.bind(this, id); // bind local callback for specific index
                    const childProps = {
                        parentMenu: this,
                        ref,
                        onHover,
                        isSelected: selectedIndex === id,
                        onHotKeyParsed: boundHandleHotKeyParse,
                    };
                    if (child.type === ContextSubMenu) { // add direction only to sub-menus
                        childProps.direction = child.props.direction || direction;
                    }
                    index++;
                    return React.cloneElement(child, childProps);
                }
                else
                    return child; // Else, pass through unmodified
            });
            this._length = index;
            return ch;
        };
        this._rootRef = (el) => {
            this._rootElement = el;
        };
        this._menuRef = (el) => {
            this._menuElement = el;
        };
        this.focus = () => {
            // istanbul ignore else
            if (this._menuElement)
                this._menuElement.focus();
        };
        this.blur = () => {
            // istanbul ignore else
            if (this._menuElement)
                this._menuElement.blur();
        };
        this.getRect = () => {
            // istanbul ignore else
            if (this._menuElement) {
                return this._menuElement.getBoundingClientRect();
            }
            return { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 };
        };
        this._handleFocusChange = (event) => {
            if (this._rootElement && this.props.opened && event.target instanceof Node && this.props.onOutsideClick && !this._rootElement.contains(event.target))
                this.props.onOutsideClick(event);
        };
        this._handleClick = (event) => {
            if (this.props.onSelect)
                this.props.onSelect(event);
        };
        this._handleKeyUp = (event) => {
            if (event.key) {
                for (const [key, value] of this._hotKeyMap) {
                    if (!this.props.hotkeySelect && key > this.state.selectedIndex) { // Start search at current index.
                        if (event.key.toUpperCase() === value) {
                            this.setState({ selectedIndex: key });
                            return;
                        }
                    }
                }
                for (const [key, value] of this._hotKeyMap) {
                    if (event.key.toUpperCase() === value) {
                        this.setState({ selectedIndex: key }, () => {
                            if (this.props.hotkeySelect && this._selectedElement) {
                                this._selectedElement.select();
                            }
                        });
                        return;
                    }
                }
            }
            if (event.keyCode === 37) /*<Left>*/ {
                event.stopPropagation();
                if (this.props.parentMenu && this.props.parentSubmenu) {
                    this.props.parentSubmenu.close();
                    this.props.parentMenu.focus();
                }
                if (this.props.onEsc)
                    this.props.onEsc(event);
            }
            if (event.keyCode === 27 /*<Esc>*/) {
                if (this.props.onEsc)
                    this.props.onEsc(event);
            }
            if ((event.keyCode === 13 /*<Return>*/ || event.keyCode === 39 /*<Right>*/) && this._selectedElement) {
                event.stopPropagation();
                if (event.keyCode === 13 || this._selectedElement instanceof ContextSubMenu) {
                    if (this._selectedElement.select)
                        this._selectedElement.select();
                }
            }
            let { selectedIndex } = this.state;
            if (event.keyCode === 38 /*<Up>*/ || event.keyCode === 40 /*<Down>*/) {
                event.stopPropagation();
                if (selectedIndex === -1) {
                    selectedIndex = 0;
                }
                else {
                    if (event.keyCode === 38) /*<Up>*/ {
                        if (this.state.selectedIndex === 0)
                            selectedIndex = this._length - 1;
                        else
                            selectedIndex--;
                    }
                    if (event.keyCode === 40) /*<Down>*/ {
                        if (this.state.selectedIndex === this._length - 1)
                            selectedIndex = 0;
                        else
                            selectedIndex++;
                    }
                }
            }
            this.setState({ selectedIndex });
        };
        this.state = {
            selectedIndex: this.props.selectedIndex,
            direction: props.direction,
        };
    }
    render() {
        const _a = this.props, { opened, direction, onOutsideClick, onSelect, onEsc, autoflip, edgeLimit, hotkeySelect, selectedIndex, floating, parentMenu, parentSubmenu, children } = _a, props = __rest(_a, ["opened", "direction", "onOutsideClick", "onSelect", "onEsc", "autoflip", "edgeLimit", "hotkeySelect", "selectedIndex", "floating", "parentMenu", "parentSubmenu", "children"]);
        let dir = parentMenu === undefined ? this.state.direction : direction;
        // check if menu should flip
        if (autoflip && parentMenu === undefined) {
            const menuRect = this.getRect();
            dir = ContextMenu.autoFlip(dir, menuRect, window.innerWidth, window.innerHeight);
            if (dir !== this.state.direction)
                this.setState({ direction: dir });
        }
        if (this._lastChildren !== children || this._lastDir !== dir || this._lastSelectedIndex !== this.state.selectedIndex) {
            this._injectedChildren = this._injectMenuItemProps(children, dir, this.state.selectedIndex);
            this._lastChildren = children;
            this._lastDir = dir;
            this._lastSelectedIndex = this.state.selectedIndex;
        }
        return (React.createElement("div", Object.assign({ className: classnames("core-context-menu", this.props.className), onKeyUp: this._handleKeyUp, onClick: this._handleClick, "data-testid": "core-context-menu-root" }, props, { ref: this._rootRef }),
            React.createElement(DivWithOutsideClick, { onOutsideClick: onOutsideClick },
                React.createElement("div", { ref: this._menuRef, tabIndex: 0, "data-testid": "core-context-menu-container", className: classnames("core-context-menu-container", { opened, floating }, dir) }, this._injectedChildren))));
    }
    /** @internal */
    componentDidMount() {
        window.addEventListener("focus", this._handleFocusChange);
        window.addEventListener("mouseup", this._handleFocusChange);
    }
    /** @internal */
    componentWillUnmount() {
        window.removeEventListener("focus", this._handleFocusChange);
        window.removeEventListener("mouseup", this._handleFocusChange);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.selectedIndex !== this.props.selectedIndex) {
            this.setState((_prevState, props) => ({ selectedIndex: props.selectedIndex }));
        }
        if (!prevProps.opened && this.props.opened) {
            this.setState((_prevState, props) => ({ selectedIndex: props.selectedIndex }));
        }
        if (!this.props.parentMenu) {
            const direction = this.props.direction;
            if ((!this.props.opened && prevProps.opened && direction !== this.state.direction) || prevProps.direction !== direction)
                this.setState({ direction });
        }
    }
}
ContextMenu.defaultProps = {
    direction: ContextMenuDirection.BottomRight,
    autoflip: true,
    edgeLimit: true,
    hotkeySelect: true,
    selectedIndex: -1,
    floating: true,
};
/** @internal */
ContextMenu.autoFlip = (dir, rect, windowWidth, windowHeight) => {
    if (rect.right > windowWidth) {
        switch (dir) {
            case ContextMenuDirection.TopRight:
                dir = ContextMenuDirection.TopLeft;
                break;
            case ContextMenuDirection.Right:
                dir = ContextMenuDirection.Left;
                break;
            case ContextMenuDirection.BottomRight:
                dir = ContextMenuDirection.BottomLeft;
                break;
        }
    }
    if (rect.left < 0) {
        switch (dir) {
            case ContextMenuDirection.TopLeft:
                dir = ContextMenuDirection.TopRight;
                break;
            case ContextMenuDirection.Left:
                dir = ContextMenuDirection.Right;
                break;
            case ContextMenuDirection.BottomLeft:
                dir = ContextMenuDirection.BottomRight;
                break;
        }
    }
    if (rect.bottom > windowHeight) {
        switch (dir) {
            case ContextMenuDirection.BottomLeft:
                dir = ContextMenuDirection.TopLeft;
                break;
            case ContextMenuDirection.Bottom:
                dir = ContextMenuDirection.Top;
                break;
            case ContextMenuDirection.BottomRight:
                dir = ContextMenuDirection.TopRight;
                break;
        }
    }
    if (rect.top < 0) {
        switch (dir) {
            case ContextMenuDirection.TopLeft:
                dir = ContextMenuDirection.BottomLeft;
                break;
            case ContextMenuDirection.Top:
                dir = ContextMenuDirection.Bottom;
                break;
            case ContextMenuDirection.TopRight:
                dir = ContextMenuDirection.BottomRight;
                break;
        }
    }
    return dir;
};
exports.ContextMenu = ContextMenu;
/** GlobalContextMenu React component used to display a [[ContextMenu]] at the cursor
 * @public
 */
class GlobalContextMenu extends React.PureComponent {
    constructor(props) {
        super(props);
        this._container = document.createElement("div");
        this._container.id = props.identifier !== undefined ? `core-context-menu-${props.identifier}` : "core-context-menu";
        let rt = document.getElementById("core-context-menu-root");
        if (!rt) {
            rt = document.createElement("div");
            rt.id = "core-context-menu-root";
            document.body.appendChild(rt);
        }
        rt.appendChild(this._container);
    }
    componentWillUnmount() {
        // istanbul ignore else
        if (this._container.parentElement) { // cleanup
            this._container.parentElement.removeChild(this._container);
        }
        const rt = document.getElementById("core-context-menu-root");
        if (rt && rt.parentElement !== null && rt.children.length === 0) {
            rt.parentElement.removeChild(rt);
        }
    }
    render() {
        const _a = this.props, { x, y, identifier, contextMenuComponent } = _a, props = __rest(_a, ["x", "y", "identifier", "contextMenuComponent"]);
        const positioningStyle = {
            left: x,
            top: y,
        };
        const CtxMenu = contextMenuComponent || ContextMenu; // tslint:disable-line:variable-name
        return ReactDOM.createPortal(React.createElement("div", { className: "core-context-menu-global", style: positioningStyle },
            React.createElement(CtxMenu, Object.assign({}, props))), this._container);
    }
}
exports.GlobalContextMenu = GlobalContextMenu;
/**
 * Menu Item class for use within a [[ContextMenu]] component.
 * @public
 */
class ContextMenuItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this._root = null;
        /** @internal */
        this.state = {};
        this._updateHotkey = (node) => {
            const hotKey = TildeFinder.findAfterTilde(node).character;
            if (hotKey && hotKey !== this.state.hotKey) {
                this.setState({ hotKey });
                this.props.onHotKeyParsed(hotKey);
            }
        };
        this._handleFocus = (event) => {
            event.stopPropagation();
        };
        this._handleMouseOver = (_event) => {
            if (this._root && this._root.style.visibility !== "hidden" && this.props.onHover) {
                this.props.onHover();
            }
        };
        this.select = () => {
            if (this._root) {
                this._root.click();
                if (this.props.parentMenu && this.props.parentMenu.props.parentSubmenu)
                    this.props.parentMenu.props.parentSubmenu.close(true);
            }
        };
        this._handleClick = (event) => {
            if (this.props.onClick)
                this.props.onClick(event);
            if (this.props.onSelect)
                this.props.onSelect(event);
        };
        this._handleKeyUp = (event) => {
            if (event.keyCode === 13 && this.props.onSelect !== undefined) {
                this.props.onSelect(event);
            }
        };
    }
    render() {
        const _a = this.props, { onClick, className, style, onSelect, icon, disabled, onHover, isSelected, parentMenu, onHotKeyParsed } = _a, props = __rest(_a, ["onClick", "className", "style", "onSelect", "icon", "disabled", "onHover", "isSelected", "parentMenu", "onHotKeyParsed"]);
        if (this._lastChildren !== this.props.children) {
            this._parsedChildren = TildeFinder.findAfterTilde(this.props.children).node;
            this._lastChildren = this.props.children;
        }
        return (React.createElement("div", Object.assign({}, props, { ref: (el) => { this._root = el; }, onClick: this._handleClick, style: style, onFocus: this._handleFocus, onKeyUp: this._handleKeyUp, onMouseOver: this._handleMouseOver, "data-testid": "core-context-menu-item", className: classnames("core-context-menu-item", className, { disabled, "is-selected": isSelected }) }),
            React.createElement("div", { className: classnames("core-context-menu-icon", "icon", typeof icon === "string" ? icon : undefined) }, typeof icon !== "string" ? icon : undefined),
            React.createElement("div", { className: "core-context-menu-content" }, this._parsedChildren)));
    }
    componentDidMount() {
        this._updateHotkey(this.props.children);
    }
    componentDidUpdate(prevProps) {
        if (this.props.children !== prevProps.children) {
            this._updateHotkey(this.props.children);
        }
    }
}
/** @internal */
ContextMenuItem.defaultProps = {
    disabled: false,
    isSelected: false,
};
exports.ContextMenuItem = ContextMenuItem;
/**
 * Menu Divider for [[ContextMenu]]. Inserts a line between items, used for list item grouping.
 * @public
 */
class ContextMenuDivider extends React.PureComponent {
    render() {
        const _a = this.props, { className } = _a, props = __rest(_a, ["className"]);
        return (React.createElement("div", Object.assign({}, props, { "data-testid": "core-context-menu-divider", className: classnames("core-context-menu-divider", className) })));
    }
}
exports.ContextMenuDivider = ContextMenuDivider;
/**
 * Submenu wrapper class for use within a [[ContextMenu]] component.
 * @public
 */
class ContextSubMenu extends React.Component {
    constructor(props) {
        super(props);
        this._menuElement = null;
        this._subMenuElement = null;
        this._menuButtonElement = null;
        this._updateHotkey = (node) => {
            const hotKey = TildeFinder.findAfterTilde(node).character;
            if (hotKey && hotKey !== this.state.hotKey) {
                this.setState({ hotKey });
                this.props.onHotKeyParsed(hotKey);
            }
        };
        this.select = () => {
            this.setState({ opened: true }, () => {
                if (this._menuElement)
                    this._menuElement.focus();
                if (this.props.onSelect !== undefined)
                    this.props.onSelect(undefined);
            });
        };
        this.close = (propagate) => {
            this.setState({ opened: false }, () => {
                if (this._menuElement)
                    this._menuElement.blur();
            });
            if (propagate && this.props.parentMenu && this.props.parentMenu.props.parentSubmenu) {
                this.props.parentMenu.props.parentSubmenu.close(true);
            }
        };
        this._handleMouseOver = (_event) => {
            if (this._menuButtonElement && this._menuButtonElement.style.visibility !== "hidden" && this.props.onHover) {
                this.props.onHover();
            }
        };
        this._handleClick = (event) => {
            event.stopPropagation();
            if (!this.props.disabled) {
                if (this.props.onClick !== undefined)
                    this.props.onClick(event);
                if (this.props.opened)
                    this.close();
                else
                    this.select();
            }
        };
        this._handleClickGlobal = (event) => {
            if (this._subMenuElement && !this._subMenuElement.contains(event.target))
                this.setState((_prevState) => ({ opened: false }));
        };
        this.state = {
            opened: false,
            direction: props.direction,
        };
    }
    render() {
        const _a = this.props, { label, opened, direction, onOutsideClick, onEsc, autoflip, edgeLimit, selectedIndex, floating, parentMenu, parentSubmenu, onSelect, icon, disabled, onHover, isSelected, onHotKeyParsed, children, onClick, className } = _a, props = __rest(_a, ["label", "opened", "direction", "onOutsideClick", "onEsc", "autoflip", "edgeLimit", "selectedIndex", "floating", "parentMenu", "parentSubmenu", "onSelect", "icon", "disabled", "onHover", "isSelected", "onHotKeyParsed", "children", "onClick", "className"]);
        const contextMenuProps = { onOutsideClick, onSelect, onEsc, autoflip, edgeLimit, selectedIndex, floating, parentMenu };
        let dir = this.state.direction;
        if (autoflip && this._menuElement) {
            const menuRect = this._menuElement.getRect();
            dir = ContextMenu.autoFlip(dir, menuRect, window.innerWidth, window.innerHeight);
            if (dir !== this.state.direction)
                this.setState({ direction: dir });
        }
        if (this._lastLabel !== label) {
            this._parsedLabel = TildeFinder.findAfterTilde(label).node;
            this._lastLabel = label;
        }
        return (React.createElement("div", Object.assign({ className: classnames("core-context-submenu", dir, className), onMouseOver: this._handleMouseOver, ref: (el) => { this._subMenuElement = el; } }, props),
            React.createElement("div", { onClick: this._handleClick, ref: (el) => { this._menuButtonElement = el; }, className: classnames("core-context-menu-item", "core-context-submenucontainer", { disabled, "is-selected": isSelected }) },
                React.createElement("div", { className: classnames("core-context-menu-icon", "icon", icon) }),
                React.createElement("div", { className: "core-context-menu-content" }, this._parsedLabel),
                React.createElement("div", { className: classnames("core-context-submenuarrow", "icon", "icon-caret-right") })),
            React.createElement(ContextMenu, Object.assign({ ref: (el) => { this._menuElement = el; }, opened: this.state.opened, selectedIndex: 0, direction: dir, parentSubmenu: this }, contextMenuProps), children)));
    }
    componentDidMount() {
        document.addEventListener("click", this._handleClickGlobal);
        this._updateHotkey(this.props.label);
    }
    componentWillUnmount() {
        document.removeEventListener("click", this._handleClickGlobal);
    }
    componentDidUpdate(prevProps, prevState) {
        const direction = this.props.direction;
        if ((this.state.opened !== prevState.opened && direction !== this.state.direction) || prevProps.direction !== direction)
            this.setState({ direction });
        if (this.props.children !== prevProps.children) {
            this._updateHotkey(this.props.label);
        }
    }
}
ContextSubMenu.defaultProps = {
    direction: ContextMenuDirection.BottomRight,
    disabled: false,
    autoflip: true,
    isSelected: false,
    selectedIndex: 0,
};
exports.ContextSubMenu = ContextSubMenu;
/** Finds a tilde character in ContextMenu item label for hot key support
 * @internal
 */
class TildeFinder {
}
/**
 * Find character following a tilde character within a React.ReactNode.
 * @param node react node to search within for a tilde.
 * @returns character that was found, and the same node with tilde removed, and following character with an underline.
 */
TildeFinder.findAfterTilde = (node) => {
    if (typeof node === "string") {
        // String
        const tildeIndex = node.indexOf("~");
        if (tildeIndex !== -1 && tildeIndex <= node.length - 2) {
            const ch = node.charAt(tildeIndex + 1);
            const s1 = node.substring(0, tildeIndex);
            const n = React.createElement("u", { key: "hotkey" }, ch);
            const s2 = node.substring(tildeIndex + 2);
            return { character: ch.toUpperCase(), node: [s1, n, s2] };
        }
    }
    else if (node && typeof node === "object") {
        if (Array.isArray(node)) {
            // Array
            let ret = { character: undefined, node };
            node = node.map((child) => {
                const r = TildeFinder.findAfterTilde(child);
                if (r.character) { // if character is found, modify node instead of returning unmodified child.
                    ret = r;
                    return r.node;
                }
                return child;
            });
            if (ret.character) {
                return { character: ret.character, node };
            }
        }
        else if ("props" in node) {
            // React Node
            const ret = { character: undefined, node };
            ret.node = React.cloneElement(node, {
                children: React.Children.map(node.props.children, (child) => {
                    const r = TildeFinder.findAfterTilde(child);
                    if (r.character) { // if character is found, modify node instead of returning unmodified child.
                        ret.character = r.character;
                        return r.node;
                    }
                    return child;
                }),
            });
            if (ret.character) {
                return ret;
            }
        }
    }
    return { character: undefined, node };
};
exports.TildeFinder = TildeFinder;


/***/ }),

/***/ "./lib/ui-core/contextmenu/ContextMenu.scss":
/*!**************************************************!*\
  !*** ./lib/ui-core/contextmenu/ContextMenu.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./ContextMenu.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/contextmenu/ContextMenu.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/cube/Cube.js":
/*!**********************************!*\
  !*** ./lib/ui-core/cube/Cube.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Cube */
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
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
__webpack_require__(/*! ./Cube.scss */ "./lib/ui-core/cube/Cube.scss");
const geometry_core_1 = __webpack_require__(/*! @bentley/geometry-core */ "@bentley/geometry-core");
/** Cube Face enumeration
 * @beta
 */
var Face;
(function (Face) {
    Face["None"] = "";
    Face["Left"] = "left";
    Face["Right"] = "right";
    Face["Back"] = "back";
    Face["Front"] = "front";
    Face["Bottom"] = "bottom";
    Face["Top"] = "top";
})(Face = exports.Face || (exports.Face = {}));
/** Cube React component used by the 3d Cube Navigation Aid
 * @beta
 */
class Cube extends React.PureComponent {
    render() {
        const _a = this.props, { faces, rotMatrix, className } = _a, props = __rest(_a, ["faces", "rotMatrix", "className"]);
        return (React.createElement("div", Object.assign({ className: classnames("core-cube-css3d", className), "data-testid": "core-cube" }, props), [Face.Front, Face.Back, Face.Right, Face.Left, Face.Top, Face.Bottom]
            .map((face) => {
            const content = faces && faces[face];
            return (React.createElement(CubeFace, { key: face, rotMatrix: rotMatrix, face: face }, content));
        })));
    }
}
exports.Cube = Cube;
/** @internal */
class CubeFace extends React.Component {
    constructor() {
        super(...arguments);
        this._faceWidth = 0;
    }
    render() {
        const _a = this.props, { rotMatrix, face, style, children } = _a, props = __rest(_a, ["rotMatrix", "face", "style", "children"]);
        if (face === Face.None)
            return null;
        const classes = classnames("face", face);
        // orient face (flip because of y axis reversal, rotate as necessary)
        let reorient = geometry_core_1.Matrix3d.createRowValues(1, 0, 0, 0, -1, 0, 0, 0, 1);
        // Position face correctly (applies to rotation, as well as translation)
        let reposition = geometry_core_1.Matrix3d.createIdentity();
        switch (this.props.face) {
            case Face.Bottom:
                reposition = geometry_core_1.Matrix3d.createRowValues(-1, 0, 0, 0, 1, 0, 0, 0, -1);
                reorient = geometry_core_1.Matrix3d.createRowValues(-1, 0, 0, 0, 1, 0, 0, 0, 1);
                break;
            case Face.Right:
                reposition = geometry_core_1.Matrix3d.createRowValues(0, 0, 1, 0, 1, 0, -1, 0, 0);
                reorient = geometry_core_1.Matrix3d.createRowValues(0, 1, 0, 1, 0, 0, 0, 0, 1);
                break;
            case Face.Left:
                reposition = geometry_core_1.Matrix3d.createRowValues(0, 0, -1, 0, 1, 0, 1, 0, 0);
                reorient = geometry_core_1.Matrix3d.createRowValues(0, -1, 0, -1, 0, 0, 0, 0, 1);
                break;
            case Face.Back:
                reposition = geometry_core_1.Matrix3d.createRowValues(1, 0, 0, 0, 0, 1, 0, -1, 0);
                reorient = geometry_core_1.Matrix3d.createRowValues(-1, 0, 0, 0, 1, 0, 0, 0, 1);
                break;
            case Face.Front:
                reposition = geometry_core_1.Matrix3d.createRowValues(1, 0, 0, 0, 0, -1, 0, 1, 0);
                reorient = geometry_core_1.Matrix3d.createRowValues(1, 0, 0, 0, -1, 0, 0, 0, 1);
                break;
        }
        const repositioned = rotMatrix.multiplyMatrixMatrix(reposition);
        const vect = repositioned.multiplyXYZ(0, 0, this._faceWidth);
        const m = repositioned.multiplyMatrixMatrix(reorient);
        const list = [
            m.at(0, 0), -m.at(1, 0), m.at(2, 0), 0,
            m.at(0, 1), -m.at(1, 1), m.at(2, 1), 0,
            m.at(0, 2), -m.at(1, 2), m.at(2, 2), 0,
            vect.at(0), -vect.at(1), vect.at(2) - this._faceWidth /* move back faceWidth so face is on screen level */, 1,
        ];
        const transform = `matrix3d(${list.join(", ")})`;
        const s = Object.assign({ transform, WebkitTransform: transform }, style);
        return (React.createElement("div", Object.assign({ style: s, "data-testid": "core-cube-face-" + face, className: classes, ref: (e) => { this._faceWidth = (e && e.clientWidth / 2) || 0; } }, props), children));
    }
}
exports.CubeFace = CubeFace;


/***/ }),

/***/ "./lib/ui-core/cube/Cube.scss":
/*!************************************!*\
  !*** ./lib/ui-core/cube/Cube.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./Cube.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/cube/Cube.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/dialog/Dialog.js":
/*!**************************************!*\
  !*** ./lib/ui-core/dialog/Dialog.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Dialog */
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
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
const withOnOutsideClick_1 = __webpack_require__(/*! ../hocs/withOnOutsideClick */ "./lib/ui-core/hocs/withOnOutsideClick.js");
const DivWithOutsideClick = withOnOutsideClick_1.withOnOutsideClick((props) => (React.createElement("div", Object.assign({}, props)))); // tslint:disable-line:variable-name
const UiCore_1 = __webpack_require__(/*! ../UiCore */ "./lib/ui-core/UiCore.js");
__webpack_require__(/*! ./Dialog.scss */ "./lib/ui-core/dialog/Dialog.scss");
/** Enum for button types. Determines button label, and default button style.
 * @public
 */
var DialogButtonType;
(function (DialogButtonType) {
    DialogButtonType["None"] = "";
    DialogButtonType["Close"] = "close";
    DialogButtonType["OK"] = "ok";
    DialogButtonType["Cancel"] = "cancel";
    DialogButtonType["Yes"] = "yes";
    DialogButtonType["No"] = "no";
    DialogButtonType["Retry"] = "retry";
})(DialogButtonType = exports.DialogButtonType || (exports.DialogButtonType = {}));
/** Enum for button style.
 * @public
 */
var DialogButtonStyle;
(function (DialogButtonStyle) {
    DialogButtonStyle["None"] = "";
    DialogButtonStyle["Primary"] = "uicore-buttons-primary";
    DialogButtonStyle["Hollow"] = "uicore-buttons-hollow";
    DialogButtonStyle["Blue"] = "uicore-buttons-blue";
})(DialogButtonStyle = exports.DialogButtonStyle || (exports.DialogButtonStyle = {}));
/** Enum for dialog alignment
 * @public
 */
var DialogAlignment;
(function (DialogAlignment) {
    DialogAlignment["TopLeft"] = "top-left";
    DialogAlignment["Top"] = "top";
    DialogAlignment["TopRight"] = "top-right";
    DialogAlignment["Left"] = "left";
    DialogAlignment["Center"] = "center";
    DialogAlignment["Right"] = "right";
    DialogAlignment["BottomLeft"] = "bottom-left";
    DialogAlignment["Bottom"] = "bottom";
    DialogAlignment["BottomRight"] = "bottom-right";
})(DialogAlignment = exports.DialogAlignment || (exports.DialogAlignment = {}));
/**
 * Dialog React component with optional resizing and dragging functionality
 * @public
 */
class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this._containerRef = React.createRef();
        this._handleKeyUp = (event) => {
            if (event.key === "Escape" && this.props.opened && this.props.onEscape) {
                this.props.onEscape();
            }
        };
        this._handleContainerPointerDown = (event) => {
            if (!this.props.modal) {
                if (this.props.onModelessPointerDown && this.props.modelessId)
                    this.props.onModelessPointerDown(event, this.props.modelessId);
            }
        };
        this._handleStartResizeRight = (event) => {
            event.preventDefault();
            this.setState({ rightResizing: true });
        };
        this._handleStartResizeDown = (event) => {
            event.preventDefault();
            this.setState({ downResizing: true });
        };
        this._handleStartResizeDownRight = (event) => {
            event.preventDefault();
            this.setState({ downResizing: true, rightResizing: true });
        };
        this._handleStartMove = (event) => {
            if (!this.props.movable)
                return;
            event.preventDefault();
            // istanbul ignore else
            if (this._containerRef.current) {
                const rect = this._containerRef.current.getBoundingClientRect();
                const grabOffsetX = event.clientX - rect.left;
                const grabOffsetY = event.clientY - rect.top;
                this.setState({
                    grabOffsetX,
                    grabOffsetY,
                    moving: true,
                });
            }
        };
        this._handlePointerMove = (event) => {
            if ((!this.props.resizable && !this.props.movable) || !this._containerRef.current)
                return;
            const { minWidth, maxWidth, minHeight, maxHeight, movable } = this.props;
            let { x, y, width, height } = this.state;
            // istanbul ignore else
            if (x === undefined) { // if x is undefined, so is y, width, and height
                const rect = this._containerRef.current.getBoundingClientRect();
                width = rect.width, height = rect.height, x = rect.left, y = rect.top;
            }
            if (this.props.resizable) {
                if (this.state.rightResizing) {
                    const centerX = event.clientX;
                    width = movable ? (centerX - x) : ((centerX - window.innerWidth / 2) * 2);
                    width = Math.max(width, minWidth);
                    if (maxWidth !== undefined)
                        width = Math.min(width, maxWidth);
                    this.setState({ width });
                }
                if (this.state.downResizing) {
                    const centerY = event.clientY;
                    height = movable ? (centerY - y) : ((centerY - window.innerHeight / 2) * 2);
                    height = Math.max(height, minHeight);
                    if (maxHeight !== undefined)
                        height = Math.min(height, maxHeight);
                    this.setState({ height });
                }
            }
            if (movable && this.state.moving) {
                x = event.clientX - this.state.grabOffsetX;
                y = event.clientY - this.state.grabOffsetY;
                this.setState({ x, y });
            }
        };
        this._handlePointerUp = (_event) => {
            if (!this.props.movable && !this.props.resizable)
                return;
            this.setState({
                rightResizing: false,
                downResizing: false,
                moving: false,
                grabOffsetX: 0,
                grabOffsetY: 0,
            });
        };
        this.state = {
            rightResizing: false,
            downResizing: false,
            moving: false,
            grabOffsetX: 0,
            grabOffsetY: 0,
        };
    }
    render() {
        const _a = this.props, { opened, title, footer, buttonCluster, onClose, onEscape, onOutsideClick, minWidth, minHeight, x, y, width, height, maxHeight, maxWidth, backgroundStyle, titleStyle, footerStyle, style, contentStyle, contentClassName, modal, resizable, movable, className, alignment, inset, modelessId, onModelessPointerDown } = _a, props = __rest(_a, ["opened", "title", "footer", "buttonCluster", "onClose", "onEscape", "onOutsideClick", "minWidth", "minHeight", "x", "y", "width", "height", "maxHeight", "maxWidth", "backgroundStyle", "titleStyle", "footerStyle", "style", "contentStyle", "contentClassName", "modal", "resizable", "movable", "className", "alignment", "inset", "modelessId", "onModelessPointerDown"]);
        const containerStyle = {
            margin: "",
            left: x, top: y,
            width, height,
        };
        if (movable && (this.state.x !== undefined || this.state.y !== undefined)) {
            // istanbul ignore else
            if (this.state.x !== undefined) {
                containerStyle.marginLeft = "0";
                containerStyle.marginRight = "0";
                containerStyle.left = this.state.x;
            }
            // istanbul ignore else
            if (this.state.y !== undefined) {
                containerStyle.marginTop = "0";
                containerStyle.marginBottom = "0";
                containerStyle.top = this.state.y;
            }
        }
        if (resizable && (this.state.width !== undefined || this.state.height !== undefined)) {
            if (this.state.width !== undefined)
                containerStyle.width = this.state.width;
            if (this.state.height !== undefined)
                containerStyle.height = this.state.height;
        }
        const buttons = this.getFooterButtons(this.props);
        const footerElement = footer || (buttons.length > 0 && React.createElement("div", { className: "core-dialog-buttons" }, buttons));
        const divStyle = Object.assign({}, backgroundStyle, style);
        return (React.createElement("div", Object.assign({ className: classnames("core-dialog", { "core-dialog-hidden": !modal, opened }, className), style: divStyle, "data-testid": "core-dialog-root" }, props), opened &&
            React.createElement(DivWithOutsideClick, { onOutsideClick: onOutsideClick },
                React.createElement("div", { className: classnames("core-dialog-container", alignment), style: containerStyle, "data-testid": "core-dialog-container", onPointerDown: this._handleContainerPointerDown },
                    React.createElement("div", { className: "core-dialog-area", ref: this._containerRef },
                        React.createElement("div", { className: classnames("core-dialog-head", { "core-dialog-movable": movable }), "data-testid": "core-dialog-head", onPointerDown: this._handleStartMove },
                            React.createElement("div", { className: "core-dialog-title" }, title),
                            React.createElement("span", { className: "core-dialog-close icon icon-close", "data-testid": "core-dialog-close", onClick: onClose })),
                        React.createElement("div", { className: classnames("core-dialog-content", { "core-dialog-content-no-inset": !inset }, contentClassName), style: contentStyle }, this.props.children),
                        footerElement &&
                            React.createElement("div", { className: "core-dialog-footer", style: footerStyle }, footerElement)),
                    React.createElement("div", { className: classnames("core-dialog-drag", "core-dialog-drag-right", { "core-dialog-drag-enabled": resizable }), "data-testid": "core-dialog-drag-right", onPointerDown: this._handleStartResizeRight }),
                    React.createElement("div", { className: classnames("core-dialog-drag", "core-dialog-drag-bottom-mid", { "core-dialog-drag-enabled": resizable }), "data-testid": "core-dialog-drag-bottom", onPointerDown: this._handleStartResizeDown }, " "),
                    React.createElement("div", { className: classnames("core-dialog-drag", "core-dialog-drag-bottom-right", { "core-dialog-drag-enabled": resizable }), "data-testid": "core-dialog-drag-bottom-right", onPointerDown: this._handleStartResizeDownRight })))));
    }
    getFooterButtons(props) {
        const buttons = [];
        if (props.buttonCluster) {
            props.buttonCluster.forEach((button, index) => {
                let buttonText = "";
                let buttonClass = classnames("core-dialog-button", `dialog-button-${button.type}`, button.className);
                switch (button.type) {
                    case DialogButtonType.OK:
                        buttonText = UiCore_1.UiCore.translate("dialog.ok");
                        buttonClass = classnames(buttonClass, button.buttonStyle || "uicore-buttons-primary");
                        break;
                    case DialogButtonType.Retry:
                        buttonText = UiCore_1.UiCore.translate("dialog.retry");
                        buttonClass = classnames(buttonClass, button.buttonStyle || "uicore-buttons-primary");
                        break;
                    case DialogButtonType.Yes:
                        buttonText = UiCore_1.UiCore.translate("dialog.yes");
                        buttonClass = classnames(buttonClass, button.buttonStyle || "uicore-buttons-primary");
                        break;
                    case DialogButtonType.No:
                        buttonText = UiCore_1.UiCore.translate("dialog.no");
                        buttonClass = classnames(buttonClass, button.buttonStyle || "uicore-buttons-hollow");
                        break;
                    case DialogButtonType.Cancel:
                        buttonText = UiCore_1.UiCore.translate("dialog.cancel");
                        buttonClass = classnames(buttonClass, button.buttonStyle || "uicore-buttons-hollow");
                        break;
                    case DialogButtonType.Close:
                        buttonText = UiCore_1.UiCore.translate("dialog.close");
                        buttonClass = classnames(buttonClass, button.buttonStyle || "uicore-buttons-hollow");
                        break;
                }
                if (button.label)
                    buttonText = button.label;
                buttons.push(React.createElement("button", { className: buttonClass, disabled: button.disabled, key: index.toString(), onClick: button.onClick }, buttonText));
            });
        }
        return buttons;
    }
    componentDidMount() {
        window.addEventListener("pointerup", this._handlePointerUp, true);
        window.addEventListener("pointermove", this._handlePointerMove, true);
        document.addEventListener("keyup", this._handleKeyUp, true);
    }
    componentWillUnmount() {
        window.removeEventListener("pointerup", this._handlePointerUp, true);
        window.removeEventListener("pointermove", this._handlePointerMove, true);
        document.removeEventListener("keyup", this._handleKeyUp, true);
    }
}
Dialog.defaultProps = {
    alignment: DialogAlignment.Center,
    minWidth: 400,
    minHeight: 400,
    width: "50%",
    resizable: false,
    movable: false,
    modal: true,
    inset: true,
};
exports.Dialog = Dialog;
/** GlobalDialog React component used to display a [[Dialog]] on the top of screen
 * @public
 */
class GlobalDialog extends React.Component {
    constructor(props) {
        super(props);
        this._container = document.createElement("div");
        this._container.id = props.identifier !== undefined ? `dialog-${props.identifier}` : "core-dialog";
        let rt = document.getElementById("core-dialog-root");
        if (!rt) {
            rt = document.createElement("div");
            rt.id = "core-dialog-root";
            document.body.appendChild(rt);
        }
        rt.appendChild(this._container);
    }
    componentWillUnmount() {
        // istanbul ignore else
        if (this._container.parentElement) { // cleanup
            this._container.parentElement.removeChild(this._container);
        }
    }
    render() {
        const _a = this.props, { identifier } = _a, props = __rest(_a, ["identifier"]);
        return ReactDOM.createPortal(React.createElement(Dialog, Object.assign({}, props)), this._container);
    }
}
exports.GlobalDialog = GlobalDialog;


/***/ }),

/***/ "./lib/ui-core/dialog/Dialog.scss":
/*!****************************************!*\
  !*** ./lib/ui-core/dialog/Dialog.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./Dialog.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/dialog/Dialog.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/elementseparator/ElementSeparator.js":
/*!**********************************************************!*\
  !*** ./lib/ui-core/elementseparator/ElementSeparator.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module ElementSeparator */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
__webpack_require__(/*! ./ElementSeparator.scss */ "./lib/ui-core/elementseparator/ElementSeparator.scss");
const Orientation_1 = __webpack_require__(/*! ../enums/Orientation */ "./lib/ui-core/enums/Orientation.js");
/** A movable button, which allows to change the ratio between left element and right element
 * @public
 */
class ElementSeparator extends React.PureComponent {
    constructor() {
        super(...arguments);
        this._dragStarted = false;
        this._initialGlobalPosition = 0;
        // How big must ratio difference be to trigger a rerender. In pixels
        this._updateThreshold = 3;
        this._onPointerUp = () => {
            this.stopDrag();
        };
        this._onPointerDown = (e) => {
            if (!this._dragStarted) {
                this.startDrag(e);
            }
            else {
                this.stopDrag();
            }
        };
        this._onPointerMove = (e) => {
            if (!this.props.movableArea) {
                this.stopDrag();
                return;
            }
            const positionChange = this.getCurrentGlobalPosition(e) - this._initialGlobalPosition;
            // Limit update count
            if (Math.abs(positionChange) < this._updateThreshold)
                return;
            const currentLocalPosition = this.props.movableArea * this.props.ratio + positionChange;
            const ratio = currentLocalPosition / this.props.movableArea;
            this._initialGlobalPosition = this.getCurrentGlobalPosition(e);
            this.props.onRatioChanged(ratio);
        };
    }
    getCurrentGlobalPosition(e) {
        return this.props.orientation === Orientation_1.Orientation.Horizontal ? e.clientX : e.clientY;
    }
    startDrag(e) {
        this._dragStarted = true;
        this._initialGlobalPosition = this.getCurrentGlobalPosition(e);
        document.addEventListener("pointerup", this._onPointerUp);
        document.addEventListener("pointermove", this._onPointerMove);
    }
    stopDrag() {
        this._dragStarted = false;
        document.removeEventListener("pointerup", this._onPointerUp);
        document.removeEventListener("pointermove", this._onPointerMove);
    }
    getStyle(orientation) {
        if (orientation === Orientation_1.Orientation.Horizontal)
            return {
                width: this.props.separatorSize,
                margin: `1px ${-Math.floor(this.props.separatorSize / 2)}px`,
            };
        return {
            height: this.props.separatorSize,
            margin: `${-Math.floor(this.props.separatorSize / 2)}px 1px`,
        };
    }
    render() {
        const classNames = classnames("core-element-separator", (this.props.orientation === Orientation_1.Orientation.Horizontal) ? "core-element-separator--horizontal" : "core-element-separator--vertical", this.props.className);
        const styles = Object.assign({}, this.getStyle(this.props.orientation), this.props.style);
        return (React.createElement("button", { style: styles, className: classNames, onPointerDown: this._onPointerDown }));
    }
}
ElementSeparator.defaultProps = {
    separatorSize: 30,
};
exports.ElementSeparator = ElementSeparator;


/***/ }),

/***/ "./lib/ui-core/elementseparator/ElementSeparator.scss":
/*!************************************************************!*\
  !*** ./lib/ui-core/elementseparator/ElementSeparator.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./ElementSeparator.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/elementseparator/ElementSeparator.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/enums/Alignment.js":
/*!****************************************!*\
  !*** ./lib/ui-core/enums/Alignment.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Common */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Enumeration for horizontal alignment.
 * @public
 */
var HorizontalAlignment;
(function (HorizontalAlignment) {
    HorizontalAlignment[HorizontalAlignment["Left"] = 1] = "Left";
    HorizontalAlignment[HorizontalAlignment["Center"] = 2] = "Center";
    HorizontalAlignment[HorizontalAlignment["Right"] = 3] = "Right";
    HorizontalAlignment[HorizontalAlignment["Justify"] = 4] = "Justify";
})(HorizontalAlignment = exports.HorizontalAlignment || (exports.HorizontalAlignment = {}));
/**
 * Enumeration for vertical alignment.
 * @public
 */
var VerticalAlignment;
(function (VerticalAlignment) {
    VerticalAlignment[VerticalAlignment["Top"] = 1] = "Top";
    VerticalAlignment[VerticalAlignment["Middle"] = 2] = "Middle";
    VerticalAlignment[VerticalAlignment["Bottom"] = 3] = "Bottom";
})(VerticalAlignment = exports.VerticalAlignment || (exports.VerticalAlignment = {}));


/***/ }),

/***/ "./lib/ui-core/enums/CheckBoxState.js":
/*!********************************************!*\
  !*** ./lib/ui-core/enums/CheckBoxState.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Common */
Object.defineProperty(exports, "__esModule", { value: true });
/** State of a checkbox
 * @public
 */
var CheckBoxState;
(function (CheckBoxState) {
    CheckBoxState[CheckBoxState["Off"] = 0] = "Off";
    CheckBoxState[CheckBoxState["On"] = 1] = "On";
    CheckBoxState[CheckBoxState["Partial"] = 2] = "Partial";
})(CheckBoxState = exports.CheckBoxState || (exports.CheckBoxState = {}));


/***/ }),

/***/ "./lib/ui-core/enums/DateFormat.js":
/*!*****************************************!*\
  !*** ./lib/ui-core/enums/DateFormat.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Common */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Enumeration of date formats.
 * @public
 */
var DateFormat;
(function (DateFormat) {
    DateFormat[DateFormat["None"] = 0] = "None";
    DateFormat[DateFormat["Short"] = 1] = "Short";
    DateFormat[DateFormat["Medium"] = 2] = "Medium";
    DateFormat[DateFormat["Long"] = 3] = "Long";
})(DateFormat = exports.DateFormat || (exports.DateFormat = {}));


/***/ }),

/***/ "./lib/ui-core/enums/Orientation.js":
/*!******************************************!*\
  !*** ./lib/ui-core/enums/Orientation.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Common */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Enumeration of orientation.
 * @public
 */
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Horizontal"] = 0] = "Horizontal";
    Orientation[Orientation["Vertical"] = 1] = "Vertical";
})(Orientation = exports.Orientation || (exports.Orientation = {}));


/***/ }),

/***/ "./lib/ui-core/enums/SortDirection.js":
/*!********************************************!*\
  !*** ./lib/ui-core/enums/SortDirection.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Common */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Enumeration for sorting direction.
 * @public
 */
var SortDirection;
(function (SortDirection) {
    SortDirection[SortDirection["NoSort"] = 0] = "NoSort";
    SortDirection[SortDirection["Ascending"] = 1] = "Ascending";
    SortDirection[SortDirection["Descending"] = 2] = "Descending";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));


/***/ }),

/***/ "./lib/ui-core/enums/TimeFormat.js":
/*!*****************************************!*\
  !*** ./lib/ui-core/enums/TimeFormat.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Common */
Object.defineProperty(exports, "__esModule", { value: true });
/** Enumeration of time formats.
 * @public
 */
var TimeFormat;
(function (TimeFormat) {
    TimeFormat[TimeFormat["None"] = 0] = "None";
    TimeFormat[TimeFormat["Short"] = 1] = "Short";
    TimeFormat[TimeFormat["Long"] = 2] = "Long";
})(TimeFormat = exports.TimeFormat || (exports.TimeFormat = {}));


/***/ }),

/***/ "./lib/ui-core/expandable/ExpandableBlock.js":
/*!***************************************************!*\
  !*** ./lib/ui-core/expandable/ExpandableBlock.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Expandable */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
__webpack_require__(/*! ./ExpandableBlock.scss */ "./lib/ui-core/expandable/ExpandableBlock.scss");
/** ExpandableBlock is a React component that shows and hides child content.
 * @public
 */
class ExpandableBlock extends React.PureComponent {
    render() {
        const cName = classnames("uicore-expandable-blocks-block", this.props.caption && "with-caption", this.props.isExpanded ? "is-expanded" : "is-collapsed", this.props.className);
        const ariaExpanded = this.props.isExpanded ? "true" : "false";
        return (React.createElement("div", { className: cName, style: this.props.style },
            React.createElement("div", { "aria-expanded": ariaExpanded, className: "header", onClick: this.props.onClick, onKeyPress: this.props.onKeyPress, tabIndex: this.props.onKeyPress ? 0 : undefined },
                React.createElement("div", { className: "icon-container" },
                    React.createElement("i", { className: "icon icon-chevron-right" })),
                this.props.caption &&
                    React.createElement("div", { className: "caption", title: this.props.caption }, this.props.caption),
                React.createElement("div", { className: "title", title: this.props.title }, this.props.title)),
            React.createElement("div", { className: "content" }, this.props.isExpanded && this.props.children)));
    }
}
exports.ExpandableBlock = ExpandableBlock;


/***/ }),

/***/ "./lib/ui-core/expandable/ExpandableBlock.scss":
/*!*****************************************************!*\
  !*** ./lib/ui-core/expandable/ExpandableBlock.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./ExpandableBlock.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/expandable/ExpandableBlock.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/expandable/ExpandableList.js":
/*!**************************************************!*\
  !*** ./lib/ui-core/expandable/ExpandableList.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Expandable */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
__webpack_require__(/*! ./ExpandableList.scss */ "./lib/ui-core/expandable/ExpandableList.scss");
/**
 * ExpandableList React component
 * @public
 */
class ExpandableList extends React.PureComponent {
    constructor(props) {
        super(props);
        // set active block
        this._handleBlockClick = (index, onClick) => {
            this.setState({ activeBlock: index });
            // istanbul ignore else
            if (onClick) {
                onClick(); // fire the ExpandableBlock onClick
            }
        };
        this.state = { activeBlock: this.props.defaultActiveBlock };
    }
    renderBlocks() {
        return React.Children.map(this.props.children, (child, i) => {
            return React.cloneElement(child, {
                key: i,
                isExpanded: (this.props.singleExpandOnly) ? i === this.state.activeBlock : child.props.isExpanded,
                onClick: this._handleBlockClick.bind(this, i, child.props.onClick),
            });
        });
    }
    render() {
        return (React.createElement("div", { className: classnames("BwcExpandableBlocksList", this.props.className), style: this.props.style }, this.renderBlocks()));
    }
}
ExpandableList.defaultProps = {
    singleExpandOnly: false,
    defaultActiveBlock: 0,
};
exports.ExpandableList = ExpandableList;


/***/ }),

/***/ "./lib/ui-core/expandable/ExpandableList.scss":
/*!****************************************************!*\
  !*** ./lib/ui-core/expandable/ExpandableList.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./ExpandableList.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/expandable/ExpandableList.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/hocs/withIsPressed.js":
/*!*******************************************!*\
  !*** ./lib/ui-core/hocs/withIsPressed.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Common */
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
/** withIsPressed is a React higher-order component that adds pointer and mouse events.
 * @public
 */
exports.withIsPressed = (
// tslint:disable-next-line:variable-name
Component) => {
    return class WithIsPressed extends React.PureComponent {
        constructor() {
            super(...arguments);
            this.handleOnPointerDown = () => {
                this.changeIsPressed(true);
            };
            this.handleOnPointerUp = () => {
                this.changeIsPressed(false);
            };
            this.handleOnMouseLeave = () => {
                this.changeIsPressed(false);
            };
            this.changeIsPressed = (isPressed) => {
                if (this.props.isPressed === isPressed)
                    return;
                this.props.onIsPressedChange && this.props.onIsPressedChange(isPressed);
            };
        }
        render() {
            const _a = this.props, { isPressed, onIsPressedChange } = _a, props = __rest(_a, ["isPressed", "onIsPressedChange"]); // todo: better solution to rest object of intersected type
            return (React.createElement("div", { className: "withispressed-wrapper", onMouseDown: this.handleOnPointerDown, onMouseUp: this.handleOnPointerUp, onTouchStart: this.handleOnPointerDown, onTouchEnd: this.handleOnPointerUp, onMouseLeave: this.handleOnMouseLeave },
                React.createElement(Component, Object.assign({}, props, this.state))));
        }
    };
};


/***/ }),

/***/ "./lib/ui-core/hocs/withOnOutsideClick.js":
/*!************************************************!*\
  !*** ./lib/ui-core/hocs/withOnOutsideClick.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Common */
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
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
/** withOnOutsideClick is a React higher-order component that adds outside click support.
 * @public
 */
exports.withOnOutsideClick = (
// tslint:disable-next-line:variable-name
Component, defaultOnOutsideClick, useCapture = true) => {
    return class WithOnOutsideClick extends React.PureComponent {
        constructor() {
            super(...arguments);
            this.handleDocumentClick = (e) => {
                if (!this.ref)
                    return;
                const componentElement = ReactDOM.findDOMNode(this.ref);
                if (componentElement && componentElement instanceof Element && !componentElement.contains(e.target))
                    if (this.props.onOutsideClick)
                        return this.props.onOutsideClick(e);
                    else if (defaultOnOutsideClick)
                        return defaultOnOutsideClick(e);
            };
            this.setRef = (element) => {
                this.ref = element;
            };
        }
        componentDidMount() {
            document.addEventListener("click", this.handleDocumentClick, useCapture);
        }
        componentWillUnmount() {
            document.removeEventListener("click", this.handleDocumentClick, useCapture);
        }
        render() {
            const _a = this.props, { onOutsideClick } = _a, props = __rest(_a, ["onOutsideClick"]); // todo: better solution to rest object of intersected type
            return (React.createElement("div", { ref: this.setRef },
                React.createElement(Component, Object.assign({}, props, this.state))));
        }
    };
};


/***/ }),

/***/ "./lib/ui-core/hocs/withTimeout.js":
/*!*****************************************!*\
  !*** ./lib/ui-core/hocs/withTimeout.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Common */
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
const Timer_1 = __webpack_require__(/*! ../utils/Timer */ "./lib/ui-core/utils/Timer.js");
/** withTimeout is a React higher-order component that adds timeout support.
 * @public
 */
exports.withTimeout = (
// tslint:disable-next-line:variable-name
Component) => {
    return class WithTimeout extends React.PureComponent {
        constructor() {
            super(...arguments);
            this.timer = new Timer_1.Timer(0);
        }
        componentDidMount() {
            this.timer.setOnExecute(() => this.props.onTimeout && this.props.onTimeout());
            this.startTimer(this.props.timeout);
        }
        componentDidUpdate(_prevProps) {
            this.startTimer(this.props.timeout);
        }
        componentWillUnmount() {
            this.timer.stop();
        }
        render() {
            const _a = this.props, { timeout, onTimeout } = _a, props = __rest(_a, ["timeout", "onTimeout"]);
            return (React.createElement(Component, Object.assign({}, props, this.state)));
        }
        startTimer(timeout) {
            if (this.timer.isRunning)
                return;
            this.timer.delay = timeout;
            this.timer.start();
        }
    };
};


/***/ }),

/***/ "./lib/ui-core/icons/SvgPath.js":
/*!**************************************!*\
  !*** ./lib/ui-core/icons/SvgPath.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Icon */
Object.defineProperty(exports, "__esModule", { value: true });
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./SvgSprite.scss */ "./lib/ui-core/icons/SvgSprite.scss");
/** Svg element wrapper with specified Svg paths.
 * @public
 */
class SvgPath extends React.PureComponent {
    render() {
        const className = classnames("core-icons-svgSprite", this.props.className);
        const viewBox = "0 0 " + this.props.viewBoxWidth + " " + this.props.viewBoxHeight;
        return (React.createElement("svg", { className: className, style: this.props.style, width: "100%", height: "100%", viewBox: viewBox },
            React.createElement("g", null, this.props.paths.map((path, index) => {
                return (React.createElement("path", { d: path, key: index }));
            }))));
    }
}
exports.SvgPath = SvgPath;


/***/ }),

/***/ "./lib/ui-core/icons/SvgSprite.js":
/*!****************************************!*\
  !*** ./lib/ui-core/icons/SvgSprite.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Icon */
Object.defineProperty(exports, "__esModule", { value: true });
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./SvgSprite.scss */ "./lib/ui-core/icons/SvgSprite.scss");
/** Svg element wrapper.
 * @public
 */
class SvgSprite extends React.PureComponent {
    render() {
        const className = classnames("core-icons-svgSprite", this.props.className);
        return (React.createElement("svg", { className: className, style: this.props.style, width: "100%", height: "100%" },
            React.createElement("use", { xmlnsXlink: "http://www.w3.org/1999/xlink", xlinkHref: this.props.src })));
    }
}
exports.SvgSprite = SvgSprite;


/***/ }),

/***/ "./lib/ui-core/icons/SvgSprite.scss":
/*!******************************************!*\
  !*** ./lib/ui-core/icons/SvgSprite.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./SvgSprite.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/icons/SvgSprite.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/icons/WebFontIcon.js":
/*!******************************************!*\
  !*** ./lib/ui-core/icons/WebFontIcon.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Icon */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
__webpack_require__(/*! ./WebFontIcon.scss */ "./lib/ui-core/icons/WebFontIcon.scss");
__webpack_require__(/*! @bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css */ "../../common/temp/node_modules/.npm.bentley.com/@bentley/icons-generic-webfont/0.0.22/node_modules/@bentley/icons-generic-webfont/dist/bentley-icons-generic-webfont.css");
/** WebFontIcon React component
 * @public
 */
// tslint:disable-next-line:variable-name
exports.WebFontIcon = (props) => {
    const className = classnames("bui-webfont-icon", props.iconName, props.iconSize ? `uicore-icons-${props.iconSize}` : undefined, props.className);
    return (React.createElement("span", { className: className, title: props.title, style: props.style, onClick: props.onClick }));
};


/***/ }),

/***/ "./lib/ui-core/icons/WebFontIcon.scss":
/*!********************************************!*\
  !*** ./lib/ui-core/icons/WebFontIcon.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./WebFontIcon.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/icons/WebFontIcon.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/imagecheckbox/ImageCheckBox.js":
/*!****************************************************!*\
  !*** ./lib/ui-core/imagecheckbox/ImageCheckBox.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Inputs */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
__webpack_require__(/*! ./ImageCheckBox.scss */ "./lib/ui-core/imagecheckbox/ImageCheckBox.scss");
/**
 * ImageCheckBox React component
 * Component to show a checked or unchecked image'
 * @beta
 */
class ImageCheckBox extends React.PureComponent {
    constructor() {
        super(...arguments);
        this._onChange = (e) => {
            if (e.stopPropagation)
                e.stopPropagation();
            if (this.props.onClick) {
                this.props.onClick(e.target.checked);
            }
        };
        this._onInputClick = (e) => {
            e.stopPropagation();
        };
        this._onLabelClick = (e) => {
            e.stopPropagation();
        };
    }
    /** @internal */
    render() {
        const checkBoxClass = classnames("core-image-checkbox", this.props.className);
        const imageClass = classnames("image icon", this.props.checked ? this.props.imageOn : this.props.imageOff);
        return (React.createElement("label", { className: checkBoxClass, style: this.props.style, onClick: this._onLabelClick, title: this.props.tooltip },
            React.createElement("input", { type: "checkbox", className: this.props.inputClassName, style: this.props.inputStyle, checked: this.props.checked, disabled: this.props.disabled, onChange: this._onChange, onClick: this._onInputClick }),
            React.createElement("span", { className: imageClass })));
    }
}
exports.ImageCheckBox = ImageCheckBox;


/***/ }),

/***/ "./lib/ui-core/imagecheckbox/ImageCheckBox.scss":
/*!******************************************************!*\
  !*** ./lib/ui-core/imagecheckbox/ImageCheckBox.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./ImageCheckBox.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/imagecheckbox/ImageCheckBox.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/inputs/Input.js":
/*!*************************************!*\
  !*** ./lib/ui-core/inputs/Input.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Inputs */
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
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
/** Basic text input
 * @public
 */
class Input extends React.PureComponent {
    render() {
        const _a = this.props, { className, style } = _a, props = __rest(_a, ["className", "style"]);
        return (React.createElement("input", Object.assign({}, props, { className: classnames("uicore-inputs-input", className), style: style })));
    }
}
exports.Input = Input;


/***/ }),

/***/ "./lib/ui-core/inputs/InputStatus.js":
/*!*******************************************!*\
  !*** ./lib/ui-core/inputs/InputStatus.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Inputs */
Object.defineProperty(exports, "__esModule", { value: true });
/** Enum for Input status
 * @public
 */
var InputStatus;
(function (InputStatus) {
    InputStatus["Success"] = "success";
    InputStatus["Warning"] = "warning";
    InputStatus["Error"] = "error";
})(InputStatus = exports.InputStatus || (exports.InputStatus = {}));


/***/ }),

/***/ "./lib/ui-core/inputs/LabeledInput.js":
/*!********************************************!*\
  !*** ./lib/ui-core/inputs/LabeledInput.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Inputs */
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
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
const Input_1 = __webpack_require__(/*! ./Input */ "./lib/ui-core/inputs/Input.js");
/** Text input wrapper that provides additional styling and labeling
 * @public
 */
class LabeledInput extends React.PureComponent {
    render() {
        const _a = this.props, { label, status, className, style, inputClassName, inputStyle, labelClassName, labelStyle, message, messageClassName, messageStyle } = _a, props = __rest(_a, ["label", "status", "className", "style", "inputClassName", "inputStyle", "labelClassName", "labelStyle", "message", "messageClassName", "messageStyle"]);
        return (React.createElement("label", { style: style, className: classnames("uicore-inputs-labeled-input", { disabled: this.props.disabled }, status, className) },
            label &&
                React.createElement("div", { className: classnames("label", labelClassName) },
                    " ",
                    label,
                    " "),
            React.createElement("div", { className: classnames("input", { "with-icon": !!status }) },
                React.createElement(Input_1.Input, Object.assign({ disabled: this.props.disabled, className: inputClassName, style: inputStyle }, props)),
                status &&
                    React.createElement("i", { className: classnames("icon", `icon-status-${status}`) })),
            message &&
                React.createElement("div", { className: classnames("message", messageClassName), style: messageStyle }, message)));
    }
}
exports.LabeledInput = LabeledInput;


/***/ }),

/***/ "./lib/ui-core/inputs/LabeledSelect.js":
/*!*********************************************!*\
  !*** ./lib/ui-core/inputs/LabeledSelect.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Inputs */
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
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
const Select_1 = __webpack_require__(/*! ./Select */ "./lib/ui-core/inputs/Select.js");
/** Dropdown wrapper that allows for additional styling and labelling
 * @public
 */
class LabeledSelect extends React.PureComponent {
    render() {
        const _a = this.props, { label, status, className, style, inputClassName, inputStyle, labelClassName, labelStyle, message, messageClassName, messageStyle } = _a, props = __rest(_a, ["label", "status", "className", "style", "inputClassName", "inputStyle", "labelClassName", "labelStyle", "message", "messageClassName", "messageStyle"]);
        return (React.createElement("label", { style: style, className: classnames("uicore-inputs-labeled-select", { disabled: this.props.disabled }, status, className) },
            label &&
                React.createElement("div", { className: classnames("label", labelClassName) },
                    " ",
                    label,
                    " "),
            React.createElement(Select_1.Select, Object.assign({ disabled: this.props.disabled, className: inputClassName, style: inputStyle }, props)),
            message &&
                React.createElement("div", { className: classnames("message", messageClassName), style: messageStyle }, message)));
    }
}
exports.LabeledSelect = LabeledSelect;


/***/ }),

/***/ "./lib/ui-core/inputs/LabeledTextarea.js":
/*!***********************************************!*\
  !*** ./lib/ui-core/inputs/LabeledTextarea.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Inputs */
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
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
const Textarea_1 = __webpack_require__(/*! ./Textarea */ "./lib/ui-core/inputs/Textarea.js");
/** Textarea wrapper that allows for additional styling and labelling
 * @public
 */
class LabeledTextarea extends React.PureComponent {
    render() {
        const _a = this.props, { label, status, className, style, inputClassName, inputStyle, labelClassName, labelStyle, message, messageClassName, messageStyle } = _a, props = __rest(_a, ["label", "status", "className", "style", "inputClassName", "inputStyle", "labelClassName", "labelStyle", "message", "messageClassName", "messageStyle"]);
        return (React.createElement("label", { style: this.props.style, className: classnames("uicore-inputs-labeled-textarea", { disabled: this.props.disabled }, this.props.status, this.props.className) },
            label &&
                React.createElement("div", { className: classnames("label", labelClassName) },
                    " ",
                    label,
                    " "),
            React.createElement(Textarea_1.Textarea, Object.assign({ disabled: this.props.disabled, className: inputClassName, style: inputStyle }, props)),
            message &&
                React.createElement("div", { className: classnames("message", messageClassName), style: messageStyle }, message)));
    }
}
exports.LabeledTextarea = LabeledTextarea;


/***/ }),

/***/ "./lib/ui-core/inputs/Radio.js":
/*!*************************************!*\
  !*** ./lib/ui-core/inputs/Radio.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Inputs */
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
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
/** Basic radio input component
 * @public
 */
class Radio extends React.PureComponent {
    render() {
        const _a = this.props, { label, disabled, status, className, style, inputStyle, inputClassName } = _a, props = __rest(_a, ["label", "disabled", "status", "className", "style", "inputStyle", "inputClassName"]);
        return (React.createElement("label", { style: style, className: classnames("uicore-inputs-radio", disabled && "disabled", status, className) },
            React.createElement("input", Object.assign({ disabled: this.props.disabled, type: "radio", className: inputClassName, style: inputStyle }, props)),
            label &&
                React.createElement("span", { className: "label" },
                    " ",
                    this.props.label,
                    " ")));
    }
}
exports.Radio = Radio;


/***/ }),

/***/ "./lib/ui-core/inputs/Select.js":
/*!**************************************!*\
  !*** ./lib/ui-core/inputs/Select.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Inputs */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
/** Basic select component
 * @public
 */
class Select extends React.PureComponent {
    render() {
        const showPlaceholder = !!this.props.placeholder && !this.props.value && !this.props.defaultValue;
        const defaultValue = this.props.defaultValue || // first try this.props.defaultValue
            (this.props.value + "") || // else use current value
            showPlaceholder + "" && ""; // otherwise, if placeholder should show, show nothing
        const required = showPlaceholder || this.props.required;
        const options = this.props.options;
        return (React.createElement("select", Object.assign({}, this.props, { defaultValue: defaultValue, required: required, className: classnames("uicore-inputs-select", this.props.className), style: this.props.style }),
            showPlaceholder &&
                React.createElement("option", { className: "placeholder", disabled: true, key: "", value: "" }, this.props.placeholder),
            options instanceof Array ?
                options.map((value, index) => React.createElement("option", { key: index, value: value }, value))
                :
                    Object.keys(options).map((key) => React.createElement("option", { key: key, value: key }, options[key]))));
    }
}
exports.Select = Select;


/***/ }),

/***/ "./lib/ui-core/inputs/Textarea.js":
/*!****************************************!*\
  !*** ./lib/ui-core/inputs/Textarea.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Inputs */
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
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
/** Basic textarea component
 * @public
 */
class Textarea extends React.PureComponent {
    render() {
        const _a = this.props, { className, style } = _a, props = __rest(_a, ["className", "style"]);
        return (React.createElement("textarea", Object.assign({}, props, { rows: this.props.rows, className: classnames("uicore-inputs-textarea", className), style: style })));
    }
}
Textarea.defaultProps = {
    rows: 3,
};
exports.Textarea = Textarea;


/***/ }),

/***/ "./lib/ui-core/inputs/checkbox/Checkbox.js":
/*!*************************************************!*\
  !*** ./lib/ui-core/inputs/checkbox/Checkbox.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Inputs */
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
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
/** A React component that renders a simple checkbox with label
 * @public
 */
// tslint:disable-next-line:variable-name
exports.Checkbox = (props) => {
    const { label, status, className, style, inputClassName, inputStyle, labelClassName, labelStyle } = props, inputProps = __rest(props, ["label", "status", "className", "style", "inputClassName", "inputStyle", "labelClassName", "labelStyle"]);
    const classNames = classnames("core-checkbox", inputProps.disabled && "disabled", status, className);
    return (React.createElement("span", { className: classNames, style: style },
        React.createElement("input", Object.assign({ className: inputClassName, style: inputStyle }, inputProps, { type: "checkbox" })),
        label && React.createElement("span", { className: classnames("core-checkbox-label", labelClassName), style: labelStyle },
            " ",
            label,
            " ")));
};


/***/ }),

/***/ "./lib/ui-core/inputs/numericinput/NumericInput.js":
/*!*********************************************************!*\
  !*** ./lib/ui-core/inputs/numericinput/NumericInput.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Inputs */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
const ReactNumericInput = __webpack_require__(/*! react-numeric-input */ "../../common/temp/node_modules/.registry.npmjs.org/react-numeric-input/2.2.3/react@16.8.6/node_modules/react-numeric-input/index.js");
__webpack_require__(/*! ./NumericInput.scss */ "./lib/ui-core/inputs/numericinput/NumericInput.scss");
/** @alpha */
class NumericInput extends React.Component {
    constructor() {
        super(...arguments);
        this._step = (_component, direction) => {
            let result;
            if (this.props.step !== undefined) {
                if (typeof this.props.step === "number")
                    result = this.props.step;
                else
                    result = this.props.step(direction);
            }
            return result;
        };
    }
    render() {
        return (React.createElement("span", { className: classnames("core-numeric-input", this.props.className), style: this.props.style, "data-testid": "core-numeric-input" },
            React.createElement(ReactNumericInput, { componentClass: this.props.componentClass, defaultValue: this.props.defaultValue, format: this.props.format, max: this.props.max, maxLength: this.props.maxLength, min: this.props.min, mobile: this.props.mobile, noValidate: this.props.noValidate, onBlur: this.props.onBlur, onChange: this.props.onChange, onFocus: this.props.onFocus, onInput: this.props.onInput, onInvalid: this.props.onInvalid, onKeyDown: this.props.onKeyDown, onSelect: this.props.onSelect, onValid: this.props.onValid, parse: this.props.parse, precision: this.props.precision, snap: this.props.snap, step: this._step, strict: this.props.strict, value: this.props.value })));
    }
}
exports.NumericInput = NumericInput;


/***/ }),

/***/ "./lib/ui-core/inputs/numericinput/NumericInput.scss":
/*!***********************************************************!*\
  !*** ./lib/ui-core/inputs/numericinput/NumericInput.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./NumericInput.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/inputs/numericinput/NumericInput.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/loading/LoadingBar.js":
/*!*******************************************!*\
  !*** ./lib/ui-core/loading/LoadingBar.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Loading */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
__webpack_require__(/*! ./LoadingBar.scss */ "./lib/ui-core/loading/LoadingBar.scss");
/**
 * A loading bar with optional percentage text.
 * @beta
 */
class LoadingBar extends React.PureComponent {
    // sanity check to keep percentage between 0 & 100
    inRange(percent) {
        let value = Math.min(percent, 100);
        value = Math.max(value, 0);
        return value;
    }
    render() {
        const percent = this.inRange(this.props.percent) + "%";
        const containerClass = classnames(this.props.className, "core-lb");
        return (React.createElement("div", { className: containerClass, style: this.props.style },
            React.createElement("div", { className: "lb-container", style: { height: this.props.barHeight } },
                React.createElement("div", { className: "fill", style: { width: percent } })),
            this.props.showPercentage && React.createElement("span", { className: "percent" }, percent)));
    }
}
LoadingBar.defaultProps = {
    barHeight: 4,
};
exports.LoadingBar = LoadingBar;


/***/ }),

/***/ "./lib/ui-core/loading/LoadingBar.scss":
/*!*********************************************!*\
  !*** ./lib/ui-core/loading/LoadingBar.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./LoadingBar.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/loading/LoadingBar.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/loading/LoadingPrompt.js":
/*!**********************************************!*\
  !*** ./lib/ui-core/loading/LoadingPrompt.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Loading */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const LoadingBar_1 = __webpack_require__(/*! ./LoadingBar */ "./lib/ui-core/loading/LoadingBar.js");
const LoadingSpinner_1 = __webpack_require__(/*! ./LoadingSpinner */ "./lib/ui-core/loading/LoadingSpinner.js");
const LoadingStatus_1 = __webpack_require__(/*! ./LoadingStatus */ "./lib/ui-core/loading/LoadingStatus.js");
__webpack_require__(/*! ./LoadingPrompt.scss */ "./lib/ui-core/loading/LoadingPrompt.scss");
/**
 * A component to display during loading.
 * @beta
 */
class LoadingPrompt extends React.PureComponent {
    render() {
        return (React.createElement("div", { className: "core-loadingprompt" },
            React.createElement("span", { className: "title" }, this.props.title),
            React.createElement("span", { className: "message" }, this.props.message),
            this.props.isDeterministic && React.createElement(LoadingBar_1.LoadingBar, { style: { width: "100%" }, percent: this.props.percent, showPercentage: this.props.showPercentage }),
            (this.props.isDeterministic && this.props.showStatus) &&
                React.createElement(LoadingStatus_1.LoadingStatus, { style: { marginTop: ".5em", width: "100%", fontSize: ".75em" }, percent: this.props.percent, message: this.props.message }),
            !this.props.isDeterministic && React.createElement(LoadingSpinner_1.LoadingSpinner, null),
            this.props.showCancel && React.createElement("button", { className: "loading-prompt-cancel", type: "button", onClick: this.props.onCancel }, "Cancel")));
    }
}
LoadingPrompt.defaultProps = {
    showPercentage: false,
    showStatus: false,
    showCancel: false,
    isDeterministic: false,
    percent: 0,
    status: "",
};
exports.LoadingPrompt = LoadingPrompt;


/***/ }),

/***/ "./lib/ui-core/loading/LoadingPrompt.scss":
/*!************************************************!*\
  !*** ./lib/ui-core/loading/LoadingPrompt.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./LoadingPrompt.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/loading/LoadingPrompt.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/loading/LoadingSpinner.js":
/*!***********************************************!*\
  !*** ./lib/ui-core/loading/LoadingSpinner.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Loading */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./LoadingSpinner.scss */ "./lib/ui-core/loading/LoadingSpinner.scss");
const Spinner_1 = __webpack_require__(/*! ./Spinner */ "./lib/ui-core/loading/Spinner.js");
/**
 * A loading spinner component.
 * @beta
 */
class LoadingSpinner extends React.PureComponent {
    render() {
        return (React.createElement("div", { className: "core-ls" },
            (this.props.message && this.props.messageOnTop) && React.createElement("span", { className: "ls-message-top" }, this.props.message),
            React.createElement(Spinner_1.Spinner, { size: this.props.size, sizeClass: this.props.sizeClass }),
            (this.props.message && !this.props.messageOnTop) && React.createElement("span", { className: "ls-message-bottom" }, this.props.message)));
    }
}
LoadingSpinner.defaultProps = {
    messageOnTop: false,
};
exports.LoadingSpinner = LoadingSpinner;


/***/ }),

/***/ "./lib/ui-core/loading/LoadingSpinner.scss":
/*!*************************************************!*\
  !*** ./lib/ui-core/loading/LoadingSpinner.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./LoadingSpinner.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/loading/LoadingSpinner.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/loading/LoadingStatus.js":
/*!**********************************************!*\
  !*** ./lib/ui-core/loading/LoadingStatus.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Loading */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
__webpack_require__(/*! ./LoadingStatus.scss */ "./lib/ui-core/loading/LoadingStatus.scss");
/**
 * A loading indicator that shows status text along with the percentage.
 * @beta
 */
class LoadingStatus extends React.PureComponent {
    // sanity check to keep percentage between 0 & 100
    inRange(percent) {
        let value = Math.min(percent, 100);
        value = Math.max(value, 0);
        return value;
    }
    render() {
        const percent = this.inRange(this.props.percent) + "%";
        const containerClass = classnames(this.props.className, "loading-status-container");
        return (React.createElement("div", { className: containerClass, style: this.props.style },
            React.createElement("span", { className: "loading-status-message" }, this.props.message),
            React.createElement("span", { className: "loading-status-percent" }, percent)));
    }
}
LoadingStatus.defaultProps = {
    message: "",
    percent: 0,
};
exports.LoadingStatus = LoadingStatus;


/***/ }),

/***/ "./lib/ui-core/loading/LoadingStatus.scss":
/*!************************************************!*\
  !*** ./lib/ui-core/loading/LoadingStatus.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./LoadingStatus.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/loading/LoadingStatus.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/loading/Spinner.js":
/*!****************************************!*\
  !*** ./lib/ui-core/loading/Spinner.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Loading */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./Spinner.scss */ "./lib/ui-core/loading/Spinner.scss");
const classnames_1 = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
/** Size for [[Spinner]] component
 * @public
 */
var SpinnerSize;
(function (SpinnerSize) {
    SpinnerSize[SpinnerSize["Small"] = 0] = "Small";
    SpinnerSize[SpinnerSize["Medium"] = 1] = "Medium";
    SpinnerSize[SpinnerSize["Large"] = 2] = "Large";
    SpinnerSize[SpinnerSize["XLarge"] = 3] = "XLarge";
})(SpinnerSize = exports.SpinnerSize || (exports.SpinnerSize = {}));
/**
 * A spinner component.
 * @public
 */
class Spinner extends React.PureComponent {
    render() {
        let sizeClass = "core-spinner-medium";
        if (this.props.sizeClass)
            sizeClass = this.props.sizeClass;
        else {
            switch (this.props.size) {
                case SpinnerSize.Small:
                    sizeClass = "core-spinner-small";
                    break;
                case SpinnerSize.Large:
                    sizeClass = "core-spinner-large";
                    break;
                case SpinnerSize.XLarge:
                    sizeClass = "core-spinner-xlarge";
                    break;
                case SpinnerSize.Medium:
                default:
                    sizeClass = "core-spinner-medium";
                    break;
            }
        }
        const svgClassName = classnames_1.default("core-spinner", sizeClass);
        return (React.createElement("svg", { className: svgClassName, viewBox: "0 0 50 50" },
            React.createElement("circle", { className: "shape", cx: "25", cy: "25", r: "20", fill: "none", strokeWidth: "4" }),
            React.createElement("circle", { className: "fill", cx: "25", cy: "25", r: "20", fill: "none", strokeWidth: "4" })));
    }
}
exports.Spinner = Spinner;


/***/ }),

/***/ "./lib/ui-core/loading/Spinner.scss":
/*!******************************************!*\
  !*** ./lib/ui-core/loading/Spinner.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./Spinner.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/loading/Spinner.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/messagebox/MessageBox.js":
/*!**********************************************!*\
  !*** ./lib/ui-core/messagebox/MessageBox.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Dialog */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
__webpack_require__(/*! ./MessageBox.scss */ "./lib/ui-core/messagebox/MessageBox.scss");
const Dialog_1 = __webpack_require__(/*! ../dialog/Dialog */ "./lib/ui-core/dialog/Dialog.js");
/** Message Severity enum.
 * @public
 */
var MessageSeverity;
(function (MessageSeverity) {
    MessageSeverity[MessageSeverity["None"] = 0] = "None";
    MessageSeverity[MessageSeverity["Information"] = 1] = "Information";
    MessageSeverity[MessageSeverity["Question"] = 2] = "Question";
    MessageSeverity[MessageSeverity["Warning"] = 3] = "Warning";
    MessageSeverity[MessageSeverity["Error"] = 4] = "Error";
    MessageSeverity[MessageSeverity["Fatal"] = 5] = "Fatal";
})(MessageSeverity = exports.MessageSeverity || (exports.MessageSeverity = {}));
/** Message Box React component.
 * @public
 */
class MessageBox extends React.PureComponent {
    render() {
        return (React.createElement(Dialog_1.Dialog, { title: this.props.title, buttonCluster: this.props.buttonCluster, opened: this.props.opened, width: this.props.width, onClose: this.props.onClose, onEscape: this.props.onEscape, modal: this.props.modal, className: this.props.className, style: this.props.style },
            React.createElement(MessageContainer, { severity: this.props.severity, className: this.props.contentClassName, style: this.props.contentStyle }, this.props.children)));
    }
}
MessageBox.defaultProps = {
    minWidth: 400,
    minHeight: 400,
    width: "512px",
    modal: true,
};
exports.MessageBox = MessageBox;
/** Message Container React component.
 * @public
 */
class MessageContainer extends React.PureComponent {
    static getIconClassName(severity, hollow) {
        let iconClassName = "";
        switch (severity) {
            case MessageSeverity.Information:
                iconClassName = hollow ? "icon-info-hollow" : "icon-info" + " core-message-box-information";
                break;
            case MessageSeverity.Question:
                iconClassName = hollow ? "icon-help-hollow" : "icon-help" + " core-message-box-question";
                break;
            case MessageSeverity.Warning:
                iconClassName = hollow ? "icon-status-warning" : "icon-status-warning" + " core-message-box-warning"; // TODO - need icon-status-warning-hollow icon
                break;
            case MessageSeverity.Error:
                iconClassName = hollow ? "icon-status-error-hollow" : "icon-status-error" + " core-message-box-error";
                break;
            case MessageSeverity.Fatal:
                iconClassName = hollow ? "icon-status-rejected" : "icon-status-rejected" + " core-message-box-fatal"; // TODO - need icon-status-rejected-hollow icon
                break;
        }
        return iconClassName;
    }
    render() {
        const iconClassName = classnames("icon", "core-message-box-icon", MessageContainer.getIconClassName(this.props.severity));
        return (React.createElement("div", { className: "core-message-box-container" },
            React.createElement("div", { className: iconClassName }),
            React.createElement("div", { className: classnames("core-message-box-content", this.props.className), style: this.props.style }, this.props.children)));
    }
}
exports.MessageContainer = MessageContainer;


/***/ }),

/***/ "./lib/ui-core/messagebox/MessageBox.scss":
/*!************************************************!*\
  !*** ./lib/ui-core/messagebox/MessageBox.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./MessageBox.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/messagebox/MessageBox.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/popup/Popup.js":
/*!************************************!*\
  !*** ./lib/ui-core/popup/Popup.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Popup */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
__webpack_require__(/*! ./Popup.scss */ "./lib/ui-core/popup/Popup.scss");
/** Position of the popup relative to its target
 * @beta
 */
var Position;
(function (Position) {
    Position[Position["TopLeft"] = 0] = "TopLeft";
    Position[Position["TopRight"] = 1] = "TopRight";
    Position[Position["BottomLeft"] = 2] = "BottomLeft";
    Position[Position["BottomRight"] = 3] = "BottomRight";
    Position[Position["Top"] = 4] = "Top";
    Position[Position["Bottom"] = 5] = "Bottom";
    Position[Position["Left"] = 6] = "Left";
    Position[Position["Right"] = 7] = "Right";
})(Position = exports.Position || (exports.Position = {}));
/** Popup React component
 * @beta
 */
class Popup extends React.Component {
    constructor(props) {
        super(props);
        this._popup = null;
        this._isAnimating = true;
        this._bindWindowEvents = () => {
            window.addEventListener("mousedown", this._handleOutsideClick);
            // window.addEventListener("touchstart", this._handleOutsideClick);
            // window.addEventListener("click", this._onBodyClick);
            window.addEventListener("resize", this._hide);
            window.addEventListener("contextmenu", this._hide);
            window.addEventListener("scroll", this._hide);
            window.addEventListener("wheel", this._handleWheel);
            window.addEventListener("keydown", this._handleKeyboard);
        };
        this._unBindWindowEvents = () => {
            window.removeEventListener("mousedown", this._handleOutsideClick);
            // window.removeEventListener("touchstart", this._handleOutsideClick);
            // window.removeEventListener("click", this._handleOutsideClick);
            window.removeEventListener("resize", this._hide);
            window.removeEventListener("contextmenu", this._hide);
            window.removeEventListener("scroll", this._hide);
            window.removeEventListener("wheel", this._handleWheel);
            window.removeEventListener("keydown", this._handleKeyboard);
        };
        this._handleWheel = (event) => {
            if (this._popup && this._popup.contains(event.target))
                return;
            this._hide();
        };
        this._handleOutsideClick = (event) => {
            if (this._popup && this._popup.contains(event.target))
                return;
            if (this.props.onOutsideClick)
                return this.props.onOutsideClick(event);
            // istanbul ignore if
            if (this.props.target && this.props.target.contains(event.target))
                return;
            this._onClose();
        };
        this._handleKeyboard = (event) => {
            if (event.key === "Escape" || event.key === "Enter") {
                this._onClose();
            }
        };
        this._hide = () => {
            this._onClose();
        };
        this._getPosition = (position) => {
            const { target, offset, top, left } = this.props;
            const offsetArrow = (this.props.showArrow) ? 6 : 0;
            // absolute position
            if (this._isPositionAbsolute())
                return { x: left, y: top };
            // sanity check
            const point = { x: 0, y: 0 };
            if (!this._popup || !target)
                return point;
            // relative position
            const scrollY = (window.scrollY !== undefined) ? window.scrollY : window.pageYOffset;
            const scrollX = (window.scrollX !== undefined) ? window.scrollX : window.pageXOffset;
            // const popupRect = this._popup.getBoundingClientRect();
            const targetRect = target.getBoundingClientRect();
            const { popupWidth, popupHeight } = this._getPopupDimensions();
            switch (position) {
                case Position.Top:
                    point.y = scrollY + targetRect.top - popupHeight - offset - offsetArrow;
                    point.x = scrollX + targetRect.left + (targetRect.width / 2) - (popupWidth / 2);
                    break;
                case Position.TopLeft:
                    point.y = scrollY + targetRect.top - popupHeight - offset - offsetArrow;
                    point.x = scrollX + targetRect.left;
                    break;
                case Position.TopRight:
                    point.y = scrollY + targetRect.top - popupHeight - offset - offsetArrow;
                    point.x = scrollX + targetRect.right - popupWidth;
                    break;
                case Position.Bottom:
                    point.y = scrollY + targetRect.bottom + offset + offsetArrow;
                    point.x = scrollX + targetRect.left + (targetRect.width / 2) - (popupWidth / 2);
                    break;
                case Position.BottomLeft:
                    point.y = scrollY + targetRect.bottom + offset + offsetArrow;
                    point.x = scrollX + targetRect.left;
                    break;
                case Position.BottomRight:
                    point.y = scrollY + targetRect.bottom + offset + offsetArrow;
                    point.x = scrollX + targetRect.right - popupWidth;
                    break;
                case Position.Left:
                    point.y = scrollY + targetRect.top + (targetRect.height / 2) - (popupHeight / 2);
                    point.x = scrollX + targetRect.left - popupWidth - offset - offsetArrow;
                    break;
                case Position.Right:
                    point.y = scrollY + targetRect.top + (targetRect.height / 2) - (popupHeight / 2);
                    point.x = scrollX + targetRect.right + offset + offsetArrow;
                    break;
                default:
                    break;
            }
            return point;
        };
        // fit the popup within the extents of the view port
        this._fitPopup = (point) => {
            const fittedPoint = point;
            if (!this._popup) {
                return fittedPoint;
            }
            // const popupRect = this._popup.getBoundingClientRect();
            const { popupWidth, popupHeight } = this._getPopupDimensions();
            const { innerWidth, innerHeight } = window;
            if (fittedPoint.y + popupHeight > innerHeight) {
                fittedPoint.y = innerHeight - popupHeight;
            }
            if (fittedPoint.x + popupWidth > innerWidth) {
                fittedPoint.x = innerWidth - popupWidth;
            }
            if (fittedPoint.y < 0) {
                fittedPoint.y = 0;
            }
            if (fittedPoint.x < 0) {
                fittedPoint.x = 0;
            }
            return fittedPoint;
        };
        this._handleAnimationEnd = () => {
            this._isAnimating = false;
        };
        this.state = { isOpen: this.props.isOpen, top: 0, left: 0, position: this.props.position };
    }
    componentDidMount() {
        if (this.props.isOpen) {
            this._onShow();
        }
    }
    componentDidUpdate(previousProps) {
        if (this.props.isOpen === previousProps.isOpen) {
            if (this.props.isOpen) {
                const position = this._toggleRelativePosition();
                const point = this._fitPopup(this._getPosition(position));
                if (this.state.left === point.x &&
                    this.state.top === point.y &&
                    this.state.position === position)
                    return;
                this.setState({
                    left: point.x,
                    top: point.y,
                    position,
                });
            }
            return;
        }
        if (this.props.isOpen) {
            this._onShow();
        }
        else {
            this._onClose();
        }
    }
    componentWillUnmount() {
        this._unBindWindowEvents();
    }
    _onShow() {
        this._bindWindowEvents();
        const position = this._toggleRelativePosition();
        const point = this._fitPopup(this._getPosition(position));
        this.setState({ left: point.x, top: point.y, isOpen: true, position }, () => {
            if (this.props.onOpen)
                this.props.onOpen();
        });
    }
    _onClose() {
        if (!this.state.isOpen) {
            return;
        }
        this._unBindWindowEvents();
        this.setState({ isOpen: false }, () => {
            this._isAnimating = true;
            if (this.props.onClose)
                this.props.onClose();
        });
    }
    _isPositionAbsolute() {
        return (this.props.top !== -1 && this.props.left !== -1);
    }
    _getClassNameByPosition(position) {
        if (!this._isPositionAbsolute()) {
            switch (position) {
                case Position.TopLeft:
                    return "core-popup-top-left";
                case Position.TopRight:
                    return "core-popup-top-right";
                case Position.BottomLeft:
                    return "core-popup-bottom-left";
                case Position.BottomRight:
                    return "core-popup-bottom-right";
                case Position.Top:
                    return "core-popup-top";
                case Position.Left:
                    return "core-popup-left";
                case Position.Right:
                    return "core-popup-right";
                case Position.Bottom:
                    return "core-popup-bottom";
            }
        }
        return "";
    }
    _getPopupDimensions() {
        let popupWidth = 0;
        let popupHeight = 0;
        if (this._popup) {
            const popupRect = this._popup.getBoundingClientRect();
            switch (this.props.position) {
                case Position.Top:
                case Position.Bottom:
                    popupWidth = popupRect.width;
                    popupHeight = this._isAnimating ? popupRect.height * 2 : popupRect.height;
                    break;
                case Position.TopLeft:
                case Position.BottomLeft:
                    popupWidth = this._isAnimating ? popupRect.width * 2 : popupRect.width;
                    popupHeight = this._isAnimating ? popupRect.height * 2 : popupRect.height;
                    break;
                case Position.TopRight:
                case Position.BottomRight:
                    popupWidth = this._isAnimating ? popupRect.width * 2 : popupRect.width;
                    popupHeight = this._isAnimating ? popupRect.height * 2 : popupRect.height;
                    break;
                case Position.Left:
                case Position.Right:
                    popupWidth = this._isAnimating ? popupRect.width * 2 : popupRect.width;
                    popupHeight = this._isAnimating ? popupRect.height : popupRect.height;
                    break;
            }
        }
        return { popupWidth, popupHeight };
    }
    _toggleRelativePosition() {
        const { target, position, offset } = this.props;
        if (!this._popup || !target)
            return position;
        // istanbul ignore if
        if (this._isPositionAbsolute())
            return position;
        let newPosition = position;
        // Note: Cannot use DOMRect yet since it's experimental and not available in all browsers (Nov. 2018)
        const viewportRect = { left: window.scrollX, top: window.scrollY, right: window.scrollX + window.innerWidth, bottom: window.scrollY + window.innerHeight };
        const targetRect = target.getBoundingClientRect();
        const { popupWidth, popupHeight } = this._getPopupDimensions();
        const containerStyle = window.getComputedStyle(target);
        const offsetArrow = (this.props.showArrow) ? 10 : 2;
        const bottomMargin = containerStyle.marginBottom ? parseFloat(containerStyle.marginBottom) : 0;
        if ((targetRect.bottom + popupHeight + bottomMargin + offsetArrow + offset) > viewportRect.bottom) {
            if (newPosition === Position.Bottom)
                newPosition = Position.Top;
            else if (newPosition === Position.BottomLeft)
                newPosition = Position.TopLeft;
            else if (newPosition === Position.BottomRight)
                newPosition = Position.TopRight;
        }
        const topMargin = containerStyle.marginTop ? parseFloat(containerStyle.marginTop) : 0;
        if ((targetRect.top - popupHeight - topMargin - offsetArrow - offset) < viewportRect.top) {
            if (newPosition === Position.Top)
                newPosition = Position.Bottom;
            else if (newPosition === Position.TopLeft)
                newPosition = Position.BottomLeft;
            else if (newPosition === Position.TopRight)
                newPosition = Position.BottomRight;
        }
        const leftMargin = containerStyle.marginLeft ? parseFloat(containerStyle.marginLeft) : 0;
        if ((targetRect.left - popupWidth - leftMargin - offsetArrow - offset) < viewportRect.left) {
            if (newPosition === Position.Left)
                newPosition = Position.Right;
        }
        const rightMargin = containerStyle.marginRight ? parseFloat(containerStyle.marginRight) : 0;
        if ((targetRect.right + popupWidth + rightMargin + offsetArrow + offset) > viewportRect.right) {
            if (newPosition === Position.Right)
                newPosition = Position.Left;
        }
        return newPosition;
    }
    render() {
        const className = classnames("core-popup", this._getClassNameByPosition(this.state.position), this.props.showShadow && "core-popup-shadow", this.props.showArrow && "arrow", this.props.className);
        const style = Object.assign({ top: this.state.top, left: this.state.left }, this.props.style);
        if (!this.props.isOpen) {
            return null;
        }
        return ReactDOM.createPortal((React.createElement("div", { className: className, "data-testid": "core-popup", onAnimationEnd: this._handleAnimationEnd, ref: (element) => { this._popup = element; }, style: style }, this.props.children)), document.body);
    }
}
Popup.defaultProps = {
    position: Position.Bottom,
    showShadow: true,
    showArrow: false,
    isOpen: false,
    offset: 4,
    top: -1,
    left: -1,
};
exports.Popup = Popup;


/***/ }),

/***/ "./lib/ui-core/popup/Popup.scss":
/*!**************************************!*\
  !*** ./lib/ui-core/popup/Popup.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./Popup.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/popup/Popup.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/radialmenu/Annulus.js":
/*!*******************************************!*\
  !*** ./lib/ui-core/radialmenu/Annulus.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RadialMenu */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 2D Point
 * @internal
 */
class Point {
    constructor(x, y) {
        this.x = 0;
        this.y = 0;
        /**
         * Calculates the 2D Euclidean distance between this point and the parameter p
         */
        this.distTo = (p) => {
            const dx = this.x - p.x;
            const dy = this.y - p.y;
            return Math.sqrt(dx * dx + dy * dy);
        };
        /** checks for equality with the components of this, and point parameter */
        this.equals = (point) => this.x === point.x && this.y === point.y;
        this.x = x || 0;
        this.y = y || 0;
    }
}
exports.Point = Point;
/**
 * 2D Line consisting of a start point, and an end point
 * @internal
 */
class Line {
    constructor(p1, p2) {
        /** checks for equality with the components of this, and line parameter */
        this.equals = (line) => this.p1.equals(line.p1) && this.p2.equals(line.p2);
        this.p1 = p1 || new Point();
        this.p2 = p2 || new Point();
    }
}
exports.Line = Line;
/** @internal
 * 2D Circle
 */
class Circle {
    constructor(center, radius) {
        this.center = center || new Point();
        this.radius = radius || 0;
    }
}
exports.Circle = Circle;
/** @internal
 * 2D Annulus (2D doughnut shape/flattened torus) defined by an inner and outer circle with a shared center point.
 */
class Annulus {
    constructor(center, innerRadius, outerRadius) {
        this.center = center || new Point();
        this.inner = new Circle(center, innerRadius);
        this.outer = new Circle(center, outerRadius);
    }
}
exports.Annulus = Annulus;
/** @internal
 * 2D Sector of an Annulus, defined by both a parent annulus, a startAngle, and an endAngle.
 */
class AnnularSector {
    /**
     * initialize AnnularSector on parent annulus, and generate SVG Path to store in this.path
     * @param parent parent annulus to initialize sector on.
     * @param startAngle angle to begin the annular sector on.
     * @param endAngle angle to end the annular sector on.
     */
    constructor(parent, startAngle, endAngle) {
        this.parent = parent;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        // adapted from https://gist.github.com/buschtoens/4190516
        const { x: cx, y: cy } = parent.center;
        const inner = parent.inner.radius;
        const outer = parent.outer.radius;
        this.innerStart = new Point(cx + inner * Math.cos(startAngle), cy + inner * Math.sin(startAngle));
        this.outerStart = new Point(cx + outer * Math.cos(startAngle), cy + outer * Math.sin(startAngle));
        this.start = new Line(this.innerStart, this.outerStart);
        this.outerEnd = new Point(cx + outer * Math.cos(endAngle), cy + outer * Math.sin(endAngle));
        this.innerEnd = new Point(cx + inner * Math.cos(endAngle), cy + inner * Math.sin(endAngle));
        this.end = new Line(this.outerEnd, this.innerEnd);
        const angleDiff = endAngle - startAngle;
        const largeArc = (angleDiff % (Math.PI * 2)) > Math.PI ? 1 : 0;
        const sectorCommands = [];
        sectorCommands.push(`M${this.innerStart.x},${this.innerStart.y}`); // moveTo
        sectorCommands.push(`L${this.outerStart.x},${this.outerStart.y}`); // lineTo
        sectorCommands.push(`A${outer},${outer} 0 ${largeArc} 1 ${this.outerEnd.x},${this.outerEnd.y}`); // arcTo
        sectorCommands.push(`L${this.innerEnd.x},${this.innerEnd.y}`); // lineTo
        sectorCommands.push(`A${inner},${inner} 0 ${largeArc} 0 ${this.innerStart.x},${this.innerStart.y}`); // arcTo
        sectorCommands.push(`z`); // closePath
        this.path = sectorCommands.join(" ");
    }
}
exports.AnnularSector = AnnularSector;


/***/ }),

/***/ "./lib/ui-core/radialmenu/RadialMenu.js":
/*!**********************************************!*\
  !*** ./lib/ui-core/radialmenu/RadialMenu.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module RadialMenu */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
const Annulus_1 = __webpack_require__(/*! ./Annulus */ "./lib/ui-core/radialmenu/Annulus.js");
__webpack_require__(/*! ./RadialMenu.scss */ "./lib/ui-core/radialmenu/RadialMenu.scss");
/**
 * A context menu arranged in a radial layout.
 * @beta
 */
class RadialMenu extends React.Component {
    constructor(props) {
        super(props);
        this._root = null;
        this._selectedButton = null;
        /** @internal */
        this.state = {
            sectors: [],
        };
        this._handleKeyUp = (event) => {
            if (event.keyCode === 27 /*<Esc>*/ && this.props.onEsc)
                this.props.onEsc(event);
        };
        this._handleClick = (event) => {
            if (event.target instanceof HTMLElement && this._root && !event.target.contains(this._root) && this.props.onBlur)
                this.props.onBlur(event);
        };
        /** Manually call onSelect of highlighted button. */
        this.select = () => {
            if (this._selectedButton)
                this._selectedButton.select();
        };
        this._generateAnnularSectors = () => {
            const n = React.Children.count(this.props.children);
            const angle = 2 * Math.PI / n;
            const outer = this.props.outerRadius;
            const inner = this.props.innerRadius;
            const offset = -Math.PI / 8;
            const annulus = new Annulus_1.Annulus(new Annulus_1.Point(outer + 1, outer + 1), inner + 1, outer - 1);
            const sectors = [];
            for (let i = 0; i < n; i++) {
                sectors.push(new Annulus_1.AnnularSector(annulus, angle * i + offset, angle * (i + 1) + offset));
            }
            this.setState({ sectors });
        };
    }
    render() {
        const width = 2 * (this.props.outerRadius + 1);
        let x = this.props.left, y = this.props.top;
        if (this.props.left && this.props.top && typeof this.props.left === "number" && typeof this.props.top === "number") {
            x = this.props.left;
            y = this.props.top;
            if (x < 0)
                x = 0;
            if (x > window.innerWidth - width)
                x = window.innerWidth - width;
            if (y < 0)
                y = 0;
            if (y > window.innerHeight - width)
                y = window.innerHeight - width;
        }
        const divStyle = Object.assign({ left: x, top: y }, this.props.style);
        return (React.createElement("div", { ref: (el) => { this._root = el; }, className: classnames("core-radial-menu", { opened: this.props.opened }, this.props.className), style: divStyle },
            React.createElement("svg", { xmlns: "http://w3.org/2000/svg", version: "1.1", width: width, height: width, className: "core-radial-menu-container" }, React.Children.map(this.props.children, (child, index) => {
                if (!child || typeof child !== "object" || !("props" in child))
                    return child;
                const childElement = child;
                return React.cloneElement(childElement, {
                    key: index,
                    ref: (el) => {
                        if (this.props.selected === index)
                            this._selectedButton = el;
                    },
                    selected: index === this.props.selected,
                    labelRotate: childElement.props.labelRotate || this.props.labelRotate,
                    annularSector: this.state.sectors[index],
                });
            }))));
    }
    componentDidMount() {
        this._generateAnnularSectors();
        window.addEventListener("keyup", this._handleKeyUp);
        window.addEventListener("mouseup", this._handleClick);
    }
    componentWillUnmount() {
        window.removeEventListener("keyup", this._handleKeyUp);
        window.removeEventListener("mouseup", this._handleClick);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.innerRadius !== this.props.innerRadius || prevProps.outerRadius !== this.props.outerRadius) {
            this._generateAnnularSectors();
        }
    }
}
RadialMenu.defaultProps = {
    labelRotate: false,
    selected: -1,
};
exports.RadialMenu = RadialMenu;
/**
 * Button for use within a [[RadialMenu]]
 * @beta
 */
class RadialButton extends React.Component {
    constructor(props) {
        super(props);
        /** @internal */
        this.state = { hover: this.props.selected || false };
        /** Manually call this.props.onSelect */
        this.select = () => {
            if (this.props.onSelect)
                this.props.onSelect(undefined);
        };
        this._handleClick = (event) => {
            if (this.props.onSelect)
                this.props.onSelect(event);
        };
        this._handleMouseOver = (_event) => {
            this.setState({ hover: true });
        };
        this._handleMouseOut = (_event) => {
            this.setState({ hover: false });
        };
    }
    render() {
        const sector = this.props.annularSector;
        let p = new Annulus_1.Point();
        let size = 0;
        let t = "";
        let path = "";
        if (sector) {
            size = sector.start.p1.distTo(sector.end.p2) * 2;
            path = sector.path;
            const parent = sector.parent;
            const { x: cx, y: cy } = parent.center;
            const r = (parent.inner.radius + parent.outer.radius) / 2;
            const angle = (sector.startAngle + sector.endAngle) / 2;
            p = new Annulus_1.Point(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
            if (this.props.labelRotate) {
                let a = angle * 180 / Math.PI + 90;
                while (a > 180)
                    a -= 360;
                while (a < -180)
                    a += 360;
                if (a > 90)
                    a -= 180;
                if (a < -90)
                    a += 180;
                t = `rotate(${a} ${p.x}, ${p.y})`;
            }
        }
        return (React.createElement("g", { onMouseOver: this._handleMouseOver, onMouseOut: this._handleMouseOut, onClick: this._handleClick },
            React.createElement("path", { className: classnames("core-radial-menu-sector", { selected: this.state.hover }, this.props.className), style: this.props.style, d: path }),
            React.createElement("foreignObject", { transform: t, x: p.x - size / 2, y: p.y - 16, width: size, height: size, className: "core-radial-menu-button-svg" },
                React.createElement("div", Object.assign({}, { xmlns: "http://www.w3.org/1999/xhtml" }, { className: "core-radial-menu-button-container" }),
                    React.createElement("div", { className: classnames("core-radial-menu-button-icon", "icon", this.props.icon) }),
                    React.createElement("div", { className: "core-radial-menu-button-content" }, this.props.children)))));
    }
}
exports.RadialButton = RadialButton;


/***/ }),

/***/ "./lib/ui-core/radialmenu/RadialMenu.scss":
/*!************************************************!*\
  !*** ./lib/ui-core/radialmenu/RadialMenu.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./RadialMenu.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/radialmenu/RadialMenu.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/searchbox/SearchBox.js":
/*!********************************************!*\
  !*** ./lib/ui-core/searchbox/SearchBox.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module SearchBox */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
const UiCore_1 = __webpack_require__(/*! ../UiCore */ "./lib/ui-core/UiCore.js");
__webpack_require__(/*! ./SearchBox.scss */ "./lib/ui-core/searchbox/SearchBox.scss");
/**
 * Input box with builtin icon right justified bounded by the SearchBox
 * @public
 */
class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this._inputElement = null;
        this._timeoutId = 0;
        /** @internal */
        this.state = { value: this.props.initialValue || "" };
        this._trackChange = (_event) => {
            let value = "";
            // istanbul ignore else
            if (this._inputElement)
                value = this._inputElement.value;
            this.setState((_prevState) => {
                return {
                    value,
                };
            }, () => {
                if (this.props.valueChangedDelay) {
                    this._unsetTimeout();
                    this._timeoutId = window.setTimeout(() => { this.props.onValueChanged(this.state.value); }, this.props.valueChangedDelay);
                }
                else {
                    this.props.onValueChanged(this.state.value);
                }
            });
        };
        this._handleKeyDown = (e) => {
            switch (e.key) {
                case "Escape":
                    // istanbul ignore else
                    if (this.props.onEscPressed)
                        this.props.onEscPressed();
                    break;
                case "Enter":
                    // istanbul ignore else
                    if (this.props.onEnterPressed)
                        this.props.onEnterPressed();
                    break;
            }
        };
        this._handleIconClick = (_event) => {
            // istanbul ignore else
            if (this._inputElement) {
                const clear = this.state.value !== "";
                this._inputElement.value = "";
                // istanbul ignore else
                if (clear && this.props.onClear)
                    this.props.onClear();
                this._inputElement.focus();
            }
            this._trackChange();
        };
        this._unsetTimeout = () => {
            if (this._timeoutId) {
                window.clearTimeout(this._timeoutId);
                this._timeoutId = 0;
            }
        };
    }
    /** @internal */
    render() {
        const searchClassName = classnames("core-searchbox", this.props.className);
        const emptyString = this.state.value === "";
        const iconClassName = classnames("core-searchbox-icon", "icon", {
            "icon-search": emptyString,
            "icon-close": !emptyString,
        });
        return (React.createElement("div", { className: searchClassName, style: this.props.style },
            React.createElement("input", { ref: (el) => { this._inputElement = el; }, onChange: this._trackChange, onKeyDown: this._handleKeyDown, onPaste: this._trackChange, onCut: this._trackChange, placeholder: this.props.placeholder ? this.props.placeholder : UiCore_1.UiCore.translate("searchbox.search") }),
            React.createElement("div", { className: "core-searchbox-button", onClick: this._handleIconClick },
                React.createElement("span", { className: iconClassName }))));
    }
    componentWillUnmount() {
        this._unsetTimeout();
    }
    focus() {
        if (this._inputElement)
            this._inputElement.focus();
    }
}
exports.SearchBox = SearchBox;


/***/ }),

/***/ "./lib/ui-core/searchbox/SearchBox.scss":
/*!**********************************************!*\
  !*** ./lib/ui-core/searchbox/SearchBox.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./SearchBox.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/searchbox/SearchBox.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/splitbutton/SplitButton.js":
/*!************************************************!*\
  !*** ./lib/ui-core/splitbutton/SplitButton.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module SplitButton */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const classnames_1 = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
const ContextMenu_1 = __webpack_require__(/*! ../contextmenu/ContextMenu */ "./lib/ui-core/contextmenu/ContextMenu.js");
__webpack_require__(/*! ./SplitButton.scss */ "./lib/ui-core/splitbutton/SplitButton.scss");
// TODO: implement
/** @internal */
var SplitButtonActionType;
(function (SplitButtonActionType) {
    SplitButtonActionType[SplitButtonActionType["ContextMenu"] = 0] = "ContextMenu";
    SplitButtonActionType[SplitButtonActionType["List"] = 1] = "List";
})(SplitButtonActionType = exports.SplitButtonActionType || (exports.SplitButtonActionType = {}));
/**
 * SplitButton with a button on the left and a context menu on the right.
 * @beta
 */
class SplitButton extends React.Component {
    constructor(props) {
        super(props);
        this._arrowElement = null;
        this._menu = null;
        this._closing = false;
        /** @internal */
        this.state = { expanded: false };
        this._handleKeyUp = (event) => {
            if ((event.keyCode === 13 /*<Return>*/ || event.keyCode === 40 /*<Down>*/) && !this.state.expanded) {
                this._closing = false;
                this._open();
            }
        };
        this._open = () => {
            if (!this.state.expanded && !this._closing) {
                this.setState({ expanded: true }, () => {
                    if (this._menu && this.state.expanded)
                        this._menu.focus();
                });
            }
            else {
                this._closing = false;
            }
        };
        this._handleClick = (event) => {
            if (this.state.expanded) {
                event.stopPropagation();
                this.setState({ expanded: false });
            }
            else {
                this._open();
            }
        };
        this._handleClose = (event) => {
            if (this._arrowElement) {
                if (this.state.expanded && "target" in event && this._arrowElement.contains(event.target))
                    this._closing = true;
                this.setState((_prevState) => ({ expanded: false }));
                this._arrowElement.focus();
            }
        };
    }
    render() {
        let icon = (React.createElement(React.Fragment, null));
        if (this.props.icon !== undefined) {
            icon = (React.createElement("span", { className: classnames_1.default("icon", this.props.icon) }));
        }
        return (React.createElement("div", { "data-testid": "core-split-button-root", className: classnames_1.default("core-split-button", this.props.className, { expanded: this.state.expanded }), style: this.props.style },
            React.createElement("div", { "data-testid": "core-split-button-label", onClick: this.props.onClick, className: "core-split-button-label" },
                icon,
                " ",
                this.props.label),
            React.createElement("div", { className: "core-split-button-arrow", ref: (el) => { this._arrowElement = el; }, onClick: this._handleClick, tabIndex: 0, onKeyUp: this._handleKeyUp },
                React.createElement("div", { className: classnames_1.default("core-split-button-arrow-icon", "icon", "icon-chevron-down") }),
                React.createElement(ContextMenu_1.ContextMenu, { ref: (el) => { this._menu = el; }, selectedIndex: 0, onSelect: this._handleClose, onOutsideClick: this._handleClose, onEsc: this._handleClose, opened: this.state.expanded, autoflip: false }, this.props.children))));
    }
}
exports.SplitButton = SplitButton;


/***/ }),

/***/ "./lib/ui-core/splitbutton/SplitButton.scss":
/*!**************************************************!*\
  !*** ./lib/ui-core/splitbutton/SplitButton.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./SplitButton.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/splitbutton/SplitButton.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/tabs/HorizontalTabs.js":
/*!********************************************!*\
  !*** ./lib/ui-core/tabs/HorizontalTabs.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Tabs */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
/** Horizontal tabs meant to represent the current position in a page/section
 * @beta
 */
class HorizontalTabs extends React.PureComponent {
    render() {
        const ulClassNames = classnames("uicore-tabs-horizontal", this.props.green && "uicore-tabs-green", this.props.className);
        return (React.createElement("ul", { className: ulClassNames, style: this.props.style }, this.props.labels.map((label, index) => React.createElement("li", { key: index, className: classnames({ active: index === this.props.activeIndex }) },
            React.createElement("a", { onClick: () => { this.props.onClickLabel && this.props.onClickLabel(index); } }, label)))));
    }
}
exports.HorizontalTabs = HorizontalTabs;


/***/ }),

/***/ "./lib/ui-core/text/BodyText.js":
/*!**************************************!*\
  !*** ./lib/ui-core/text/BodyText.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Text */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const StyledText_1 = __webpack_require__(/*! ./StyledText */ "./lib/ui-core/text/StyledText.js");
/** Styled body text React functional component
 * @public
 */
exports.BodyText = (props) => {
    return React.createElement(StyledText_1.StyledText, Object.assign({}, props, { mainClassName: "uicore-text-block" }));
};


/***/ }),

/***/ "./lib/ui-core/text/Headline.js":
/*!**************************************!*\
  !*** ./lib/ui-core/text/Headline.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Text */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const StyledText_1 = __webpack_require__(/*! ./StyledText */ "./lib/ui-core/text/StyledText.js");
/** Styled headline text React functional component
 * @public
 */
exports.Headline = (props) => {
    return React.createElement(StyledText_1.StyledText, Object.assign({}, props, { mainClassName: "uicore-text-headline" }));
};


/***/ }),

/***/ "./lib/ui-core/text/LeadingText.js":
/*!*****************************************!*\
  !*** ./lib/ui-core/text/LeadingText.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Text */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const StyledText_1 = __webpack_require__(/*! ./StyledText */ "./lib/ui-core/text/StyledText.js");
/** Styled leading text React functional component
 * @public
 */
exports.LeadingText = (props) => {
    return React.createElement(StyledText_1.StyledText, Object.assign({}, props, { mainClassName: "uicore-text-leading" }));
};


/***/ }),

/***/ "./lib/ui-core/text/LeadingText2.js":
/*!******************************************!*\
  !*** ./lib/ui-core/text/LeadingText2.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Text */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const StyledText_1 = __webpack_require__(/*! ./StyledText */ "./lib/ui-core/text/StyledText.js");
/** Styled leading text React functional component
 * @public
 */
exports.LeadingText2 = (props) => {
    return React.createElement(StyledText_1.StyledText, Object.assign({}, props, { mainClassName: "uicore-text-leading-2" }));
};


/***/ }),

/***/ "./lib/ui-core/text/MutedText.js":
/*!***************************************!*\
  !*** ./lib/ui-core/text/MutedText.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Text */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const StyledText_1 = __webpack_require__(/*! ./StyledText */ "./lib/ui-core/text/StyledText.js");
/** Styled muted/gray text React functional component
 * @public
 */
exports.MutedText = (props) => {
    return React.createElement(StyledText_1.StyledText, Object.assign({}, props, { mainClassName: "uicore-text-muted" }));
};


/***/ }),

/***/ "./lib/ui-core/text/SmallText.js":
/*!***************************************!*\
  !*** ./lib/ui-core/text/SmallText.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Text */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const StyledText_1 = __webpack_require__(/*! ./StyledText */ "./lib/ui-core/text/StyledText.js");
/** Styled small text React functional component
 * @public
 */
exports.SmallText = (props) => {
    return React.createElement(StyledText_1.StyledText, Object.assign({}, props, { mainClassName: "uicore-text-small" }));
};


/***/ }),

/***/ "./lib/ui-core/text/StyledText.js":
/*!****************************************!*\
  !*** ./lib/ui-core/text/StyledText.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Text */
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
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
/** Styled text
 * @internal
 */
class StyledText extends React.PureComponent {
    render() {
        const _a = this.props, { mainClassName, className, style, children } = _a, props = __rest(_a, ["mainClassName", "className", "style", "children"]);
        return (React.createElement("span", Object.assign({}, props, { className: classnames(mainClassName, className), style: style }), children));
    }
}
exports.StyledText = StyledText;


/***/ }),

/***/ "./lib/ui-core/text/Subheading.js":
/*!****************************************!*\
  !*** ./lib/ui-core/text/Subheading.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Text */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const StyledText_1 = __webpack_require__(/*! ./StyledText */ "./lib/ui-core/text/StyledText.js");
/** Styled subheading text React functional component
 * @public
 */
exports.Subheading = (props) => {
    return React.createElement(StyledText_1.StyledText, Object.assign({}, props, { mainClassName: "uicore-text-subheading" }));
};


/***/ }),

/***/ "./lib/ui-core/text/Subheading2.js":
/*!*****************************************!*\
  !*** ./lib/ui-core/text/Subheading2.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Text */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const StyledText_1 = __webpack_require__(/*! ./StyledText */ "./lib/ui-core/text/StyledText.js");
/** Styled subheading text React functional component
 * @public
 */
exports.Subheading2 = (props) => {
    return React.createElement(StyledText_1.StyledText, Object.assign({}, props, { mainClassName: "uicore-text-subheading-2" }));
};


/***/ }),

/***/ "./lib/ui-core/text/Title.js":
/*!***********************************!*\
  !*** ./lib/ui-core/text/Title.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Text */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const StyledText_1 = __webpack_require__(/*! ./StyledText */ "./lib/ui-core/text/StyledText.js");
/** Styled title text React functional component
 * @public
 */
exports.Title = (props) => {
    return React.createElement(StyledText_1.StyledText, Object.assign({}, props, { mainClassName: "uicore-text-title" }));
};


/***/ }),

/***/ "./lib/ui-core/text/Title2.js":
/*!************************************!*\
  !*** ./lib/ui-core/text/Title2.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Text */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const StyledText_1 = __webpack_require__(/*! ./StyledText */ "./lib/ui-core/text/StyledText.js");
/** Styled title text React functional component
 * @public
 */
exports.Title2 = (props) => {
    return React.createElement(StyledText_1.StyledText, Object.assign({}, props, { mainClassName: "uicore-text-title-2" }));
};


/***/ }),

/***/ "./lib/ui-core/toggle/Toggle.js":
/*!**************************************!*\
  !*** ./lib/ui-core/toggle/Toggle.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Inputs */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
__webpack_require__(/*! ./Toggle.scss */ "./lib/ui-core/toggle/Toggle.scss");
/** Toggle display types
 * @public
 */
var ToggleButtonType;
(function (ToggleButtonType) {
    /** Primary (green) background */
    ToggleButtonType[ToggleButtonType["Primary"] = 0] = "Primary";
    /** Blue background */
    ToggleButtonType[ToggleButtonType["Blue"] = 1] = "Blue";
})(ToggleButtonType = exports.ToggleButtonType || (exports.ToggleButtonType = {}));
/**
 * Toggle React component to show an "on" or "off state
 * @public
 */
class Toggle extends React.PureComponent {
    constructor(props) {
        super(props);
        this._padding = 2;
        this._handleChange = () => {
            this.setState({ checked: !this.state.checked }, () => { this.props.onChange && this.props.onChange(this.state.checked); });
        };
        this._handleBlur = (event) => {
            // istanbul ignore else
            if (this.props.onBlur)
                this.props.onBlur(event);
        };
        this._setHeight = (newHeight, newWidth) => {
            if (this.state.height !== newHeight || this.state.width !== newWidth) {
                this.setState({ height: newHeight, width: newWidth });
            }
        };
        this.state = { height: 0, width: 0, checked: this.props.isOn };
    }
    componentDidUpdate(prevProps) {
        if (this.props.isOn !== prevProps.isOn) {
            this.setState({ checked: this.props.isOn ? true : false });
            return;
        }
        if (this.props.disabled !== prevProps.disabled)
            this.forceUpdate();
    }
    _getOffset() {
        return (this.state.checked) ? this.state.width - this.state.height : 0;
    }
    render() {
        const halfHeight = this.state.height / 2;
        const checkmarkClassName = classnames("core-toggle-checkmark", "icon", "icon-checkmark", this.props.showCheckmark && "visible");
        const toggleStyle = Object.assign({ borderRadius: this.props.rounded ? halfHeight : 3, fontSize: halfHeight }, this.props.style);
        const toggleClassName = classnames("core-toggle", this.props.buttonType === ToggleButtonType.Primary && "core-toggle-primary", this.props.rounded && "rounded", this.props.disabled && "disabled", this.props.className);
        const toggleHandleStyle = {
            width: this.state.height - (this._padding * 2),
            transform: "translateX(" + this._getOffset() + "px)",
            top: this._padding,
            bottom: this._padding,
            left: this._padding,
        };
        return (React.createElement("label", { ref: (el) => { if (el)
                this._setHeight(el.clientHeight, el.clientWidth); }, style: toggleStyle, className: toggleClassName },
            React.createElement("input", { checked: this.state.checked, className: "core-toggle-input", disabled: this.props.disabled, type: "checkbox", onChange: this._handleChange, onBlur: this._handleBlur }),
            React.createElement("span", { className: "core-toggle-label" }),
            React.createElement("span", { className: checkmarkClassName }),
            React.createElement("span", { className: "core-toggle-handle", style: toggleHandleStyle })));
    }
}
Toggle.defaultProps = {
    rounded: true,
    isOn: false,
    showCheckmark: false,
    buttonType: ToggleButtonType.Blue,
};
exports.Toggle = Toggle;


/***/ }),

/***/ "./lib/ui-core/toggle/Toggle.scss":
/*!****************************************!*\
  !*** ./lib/ui-core/toggle/Toggle.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./Toggle.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/toggle/Toggle.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/tree/Branch.js":
/*!************************************!*\
  !*** ./lib/ui-core/tree/Branch.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Tree */
Object.defineProperty(exports, "__esModule", { value: true });
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./Branch.scss */ "./lib/ui-core/tree/Branch.scss");
/** Presentation React component for a Tree branch
 * @public
 */
class TreeBranch extends React.PureComponent {
    render() {
        const className = classnames("core-tree-branch", this.props.className);
        return (React.createElement("div", { className: className, style: this.props.style }, this.props.children));
    }
}
exports.TreeBranch = TreeBranch;


/***/ }),

/***/ "./lib/ui-core/tree/Branch.scss":
/*!**************************************!*\
  !*** ./lib/ui-core/tree/Branch.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./Branch.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/tree/Branch.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/tree/ExpansionToggle.js":
/*!*********************************************!*\
  !*** ./lib/ui-core/tree/ExpansionToggle.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Tree */
Object.defineProperty(exports, "__esModule", { value: true });
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! ./ExpansionToggle.scss */ "./lib/ui-core/tree/ExpansionToggle.scss");
/** ExpansionToggle React component used by the [[TreeNode]] component
 * @public
 */
class ExpansionToggle extends React.PureComponent {
    render() {
        const className = classnames("core-tree-expansionToggle", this.props.isExpanded && "is-expanded", this.props.className);
        return (React.createElement("div", { onClick: this.props.onClick, className: className, style: this.props.style, "data-testid": this.props["data-testid"] },
            React.createElement("i", { className: "toggle icon icon-chevron-right" })));
    }
}
exports.ExpansionToggle = ExpansionToggle;


/***/ }),

/***/ "./lib/ui-core/tree/ExpansionToggle.scss":
/*!***********************************************!*\
  !*** ./lib/ui-core/tree/ExpansionToggle.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./ExpansionToggle.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/tree/ExpansionToggle.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/tree/Node.js":
/*!**********************************!*\
  !*** ./lib/ui-core/tree/Node.js ***!
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
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
const React = __webpack_require__(/*! react */ "react");
const Checkbox_1 = __webpack_require__(/*! ../inputs/checkbox/Checkbox */ "./lib/ui-core/inputs/checkbox/Checkbox.js");
const CheckBoxState_1 = __webpack_require__(/*! ../enums/CheckBoxState */ "./lib/ui-core/enums/CheckBoxState.js");
const ExpansionToggle_1 = __webpack_require__(/*! ./ExpansionToggle */ "./lib/ui-core/tree/ExpansionToggle.js");
const Spinner_1 = __webpack_require__(/*! ../loading/Spinner */ "./lib/ui-core/loading/Spinner.js");
__webpack_require__(/*! ./Node.scss */ "./lib/ui-core/tree/Node.scss");
/** Number of pixels the node gets offset per each hierarchy level */
exports.LEVEL_OFFSET = 20;
const EXPANSION_TOGGLE_WIDTH = 24;
/** Presentation React component for a Tree node
 * @public
 */
class TreeNode extends React.Component {
    constructor(props) {
        super(props);
        this._onCheckboxChange = (checked) => {
            if (this.props.checkboxProps && this.props.checkboxProps.onClick && !this.props.checkboxProps.isDisabled)
                this.props.checkboxProps.onClick(checked ? CheckBoxState_1.CheckBoxState.On : CheckBoxState_1.CheckBoxState.Off);
        };
        this._onCheckboxClick = (e) => {
            e.stopPropagation();
        };
        this._onClickExpansionToggle = (e) => {
            e.stopPropagation();
            if (this.props.onClickExpansionToggle)
                this.props.onClickExpansionToggle();
        };
        this._onClick = (e) => {
            e.stopPropagation();
            if (this.props.onClick)
                this.props.onClick(e);
        };
    }
    render() {
        const className = classnames("core-tree-node", this.props.isFocused && "is-focused", this.props.isSelected && "is-selected", this.props.isHoverDisabled && "is-hover-disabled", this.props.className);
        let offset = this.props.level * exports.LEVEL_OFFSET;
        if (!this.props.isLoading && this.props.isLeaf)
            offset += EXPANSION_TOGGLE_WIDTH; // Add expansion toggle/loader width if they're not rendered
        const loader = this.props.isLoading ? (React.createElement("div", { className: "loader" },
            React.createElement(Spinner_1.Spinner, { size: Spinner_1.SpinnerSize.Small }))) : undefined;
        let checkbox;
        if (this.props.checkboxProps) {
            const props = {
                label: "",
                checked: this.props.checkboxProps.state === CheckBoxState_1.CheckBoxState.On,
                disabled: this.props.checkboxProps.isDisabled,
                title: this.props.checkboxProps.tooltip,
                onClick: this._onCheckboxClick,
                onChange: this._onCheckboxChange,
            };
            if (this.props.renderOverrides && this.props.renderOverrides.renderCheckbox) {
                checkbox = this.props.renderOverrides.renderCheckbox(props);
            }
            else {
                checkbox = (React.createElement(Checkbox_1.Checkbox, Object.assign({}, props, { onChange: (e) => this._onCheckboxChange(e.target.checked), "data-testid": this.createSubComponentTestId("checkbox") })));
            }
        }
        const icon = this.props.icon ? (React.createElement("div", { className: "core-tree-node-icon" }, this.props.icon)) : undefined;
        const toggle = (this.props.isLoading || this.props.isLeaf) ? undefined : (React.createElement(ExpansionToggle_1.ExpansionToggle, { className: "expansion-toggle", "data-testid": this.createSubComponentTestId("expansion-toggle"), onClick: this._onClickExpansionToggle, isExpanded: this.props.isExpanded }));
        return (React.createElement("div", { className: className, style: this.props.style, "data-testid": this.props["data-testid"], onClick: this._onClick, onMouseDown: this.props.onMouseDown, onMouseUp: this.props.onMouseUp, onMouseMove: this.props.onMouseMove },
            React.createElement("div", { className: "contents", style: { marginLeft: offset }, "data-testid": this.createSubComponentTestId("contents") },
                loader,
                toggle,
                checkbox,
                icon,
                this.props.label),
            this.props.children));
    }
    createSubComponentTestId(subId) {
        if (!this.props["data-testid"])
            return undefined;
        return `${this.props["data-testid"]}-${subId}`;
    }
}
exports.TreeNode = TreeNode;


/***/ }),

/***/ "./lib/ui-core/tree/Node.scss":
/*!************************************!*\
  !*** ./lib/ui-core/tree/Node.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./Node.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/tree/Node.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/tree/Placeholder.js":
/*!*****************************************!*\
  !*** ./lib/ui-core/tree/Placeholder.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Tree */
Object.defineProperty(exports, "__esModule", { value: true });
const classnames = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
const React = __webpack_require__(/*! react */ "react");
const Node_1 = __webpack_require__(/*! ./Node */ "./lib/ui-core/tree/Node.js");
__webpack_require__(/*! ./Placeholder.scss */ "./lib/ui-core/tree/Placeholder.scss");
/**
 * Presentation React component for a placeholder to be displayed instead of a node while it's being loaded
 * @public
 */
class TreeNodePlaceholder extends React.PureComponent {
    render() {
        const className = classnames("core-tree-placeholder", this.props.className);
        const offset = this.props.level * Node_1.LEVEL_OFFSET;
        const min = (this.props.minWidth || 50);
        const max = (this.props.maxWidth || 200);
        const width = Math.floor(min + Math.random() * (max - min));
        const style = Object.assign({}, this.props.style, { paddingLeft: `${offset}px` });
        return (React.createElement("div", { className: className, style: style, "data-testid": this.props["data-testid"] },
            React.createElement("div", { className: "contents", style: { width: `${width}px` } })));
    }
}
exports.TreeNodePlaceholder = TreeNodePlaceholder;


/***/ }),

/***/ "./lib/ui-core/tree/Placeholder.scss":
/*!*******************************************!*\
  !*** ./lib/ui-core/tree/Placeholder.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./Placeholder.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/tree/Placeholder.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/tree/Tree.js":
/*!**********************************!*\
  !*** ./lib/ui-core/tree/Tree.js ***!
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
const classnames_1 = __webpack_require__(/*! classnames */ "../../common/temp/node_modules/.registry.npmjs.org/classnames/2.2.6/node_modules/classnames/index.js");
const React = __webpack_require__(/*! react */ "react");
const geometry_core_1 = __webpack_require__(/*! @bentley/geometry-core */ "@bentley/geometry-core");
__webpack_require__(/*! ./Tree.scss */ "./lib/ui-core/tree/Tree.scss");
/** Presentation React component for a Tree
 * @public
 */
class Tree extends React.PureComponent {
    constructor() {
        super(...arguments);
        this._treeElement = React.createRef();
    }
    get _scrollableContainer() {
        if (!this._treeElement.current)
            return undefined;
        const isScrollable = (element) => {
            const style = window.getComputedStyle(element);
            return style.overflow === "auto" || style.overflow === "scroll"
                || style.overflowY === "auto" || style.overflowY === "scroll"
                || style.overflowX === "auto" || style.overflowX === "scroll";
        };
        let scrollableContainer = this._treeElement.current;
        while (scrollableContainer && !isScrollable(scrollableContainer))
            scrollableContainer = (scrollableContainer.children.length > 0) ? scrollableContainer.children[0] : undefined;
        return scrollableContainer;
    }
    scrollToElement(element) {
        const container = this._scrollableContainer;
        if (!container)
            return;
        if (!Element.prototype.scrollTo) {
            // workaround for Edge scrollTo issue https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15534521/
            element.scrollIntoView();
            return;
        }
        const elementBox = element.getBoundingClientRect();
        const elementRange = geometry_core_1.Range2d.createXYXY(elementBox.left, elementBox.top, elementBox.right, elementBox.bottom);
        const containerBox = container.getBoundingClientRect();
        const containerRange = geometry_core_1.Range2d.createXYXY(containerBox.left - container.scrollLeft, containerBox.top - container.scrollTop, containerBox.right - container.scrollLeft, containerBox.bottom - container.scrollTop);
        let left;
        if (container.scrollLeft > 0 && elementRange.high.x <= containerRange.high.x) {
            // always attempt to keep horizontal scroll at 0
            left = 0;
        }
        else if (containerRange.low.x <= elementRange.low.x && containerRange.high.x >= elementRange.high.x) {
            // already visible - no need to scroll to
            left = container.scrollLeft;
        }
        else {
            left = elementRange.low.x - containerRange.low.x;
        }
        let top;
        if (containerRange.low.y <= elementRange.low.y && containerRange.high.y >= elementRange.high.y) {
            // already visible - no need to scroll to
            top = container.scrollTop;
        }
        else {
            top = elementRange.low.y - containerRange.low.y;
        }
        container.scrollTo({ left, top });
    }
    getElementsByClassName(className) {
        if (!this._treeElement.current)
            return [];
        const elems = new Array();
        const collection = this._treeElement.current.getElementsByClassName(className);
        for (let i = 0; i < collection.length; ++i)
            elems.push(collection.item(i));
        return elems;
    }
    render() {
        const className = classnames_1.default("core-tree", this.props.className);
        return (React.createElement("div", { ref: this._treeElement, className: className, style: this.props.style, onMouseDown: this.props.onMouseDown, onMouseMove: this.props.onMouseMove, onMouseUp: this.props.onMouseUp }, this.props.children));
    }
}
exports.Tree = Tree;


/***/ }),

/***/ "./lib/ui-core/tree/Tree.scss":
/*!************************************!*\
  !*** ./lib/ui-core/tree/Tree.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib??postcss!../../../../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib??ref--5!./Tree.scss */ "../../common/temp/node_modules/.registry.npmjs.org/css-loader/2.1.1/webpack@4.32.2/node_modules/css-loader/dist/cjs.js?!../../common/temp/node_modules/.registry.npmjs.org/postcss-loader/2.1.6/node_modules/postcss-loader/lib/index.js?!../../common/temp/node_modules/.registry.npmjs.org/fast-sass-loader/1.4.7/node-sass@4.12.0+webpack@4.32.2/node_modules/fast-sass-loader/lib/index.js?!./lib/ui-core/tree/Tree.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js */ "../../common/temp/node_modules/.registry.npmjs.org/style-loader/0.21.0/node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib/ui-core/uisettings/LocalUiSettings.js":
/*!***************************************************!*\
  !*** ./lib/ui-core/uisettings/LocalUiSettings.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module UiSettings */
Object.defineProperty(exports, "__esModule", { value: true });
const UiSettings_1 = __webpack_require__(/*! ./UiSettings */ "./lib/ui-core/uisettings/UiSettings.js");
/**
 * Implementation of [[UiSettings]] using Window.localStorage.
 * @beta
 */
class LocalUiSettings {
    constructor(w = window) {
        this.w = w;
        this.getSetting = (settingNamespace, settingName) => {
            const setting = this.w.localStorage.getItem(`${settingNamespace}.${settingName}`);
            if (setting !== null)
                return { status: UiSettings_1.UiSettingsStatus.Success, setting: JSON.parse(setting) };
            else
                return { status: UiSettings_1.UiSettingsStatus.NotFound };
        };
        this.saveSetting = (settingNamespace, settingName, setting) => {
            this.w.localStorage.setItem(`${settingNamespace}.${settingName}`, JSON.stringify(setting));
            return { status: UiSettings_1.UiSettingsStatus.Success };
        };
        this.deleteSetting = (settingNamespace, settingName) => {
            const name = `${settingNamespace}.${settingName}`;
            const setting = this.w.localStorage.getItem(name);
            if (setting === null)
                return { status: UiSettings_1.UiSettingsStatus.NotFound };
            this.w.localStorage.removeItem(name);
            return { status: UiSettings_1.UiSettingsStatus.Success };
        };
    }
}
exports.LocalUiSettings = LocalUiSettings;


/***/ }),

/***/ "./lib/ui-core/uisettings/SessionUiSettings.js":
/*!*****************************************************!*\
  !*** ./lib/ui-core/uisettings/SessionUiSettings.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module UiSettings */
Object.defineProperty(exports, "__esModule", { value: true });
const UiSettings_1 = __webpack_require__(/*! ./UiSettings */ "./lib/ui-core/uisettings/UiSettings.js");
/**
 * Implementation of [[UiSettings]] using Window.sessionStorage.
 * @beta
 */
class SessionUiSettings {
    constructor(w = window) {
        this.w = w;
        this.getSetting = (settingNamespace, settingName) => {
            const setting = this.w.sessionStorage.getItem(`${settingNamespace}.${settingName}`);
            if (setting !== null)
                return { status: UiSettings_1.UiSettingsStatus.Success, setting: JSON.parse(setting) };
            else
                return { status: UiSettings_1.UiSettingsStatus.NotFound };
        };
        this.saveSetting = (settingNamespace, settingName, setting) => {
            this.w.sessionStorage.setItem(`${settingNamespace}.${settingName}`, JSON.stringify(setting));
            return { status: UiSettings_1.UiSettingsStatus.Success };
        };
        this.deleteSetting = (settingNamespace, settingName) => {
            const name = `${settingNamespace}.${settingName}`;
            const setting = this.w.sessionStorage.getItem(name);
            if (setting === null)
                return { status: UiSettings_1.UiSettingsStatus.NotFound };
            this.w.sessionStorage.removeItem(name);
            return { status: UiSettings_1.UiSettingsStatus.Success };
        };
    }
}
exports.SessionUiSettings = SessionUiSettings;


/***/ }),

/***/ "./lib/ui-core/uisettings/UiSettings.js":
/*!**********************************************!*\
  !*** ./lib/ui-core/uisettings/UiSettings.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module UiSettings */
Object.defineProperty(exports, "__esModule", { value: true });
/** Enum for [[UiSettings]] status.
 * @beta
 */
var UiSettingsStatus;
(function (UiSettingsStatus) {
    UiSettingsStatus[UiSettingsStatus["Success"] = 0] = "Success";
    UiSettingsStatus[UiSettingsStatus["NotFound"] = 1] = "NotFound";
    UiSettingsStatus[UiSettingsStatus["UnknownError"] = 2] = "UnknownError";
})(UiSettingsStatus = exports.UiSettingsStatus || (exports.UiSettingsStatus = {}));


/***/ }),

/***/ "./lib/ui-core/utils/Timer.js":
/*!************************************!*\
  !*** ./lib/ui-core/utils/Timer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Utilities */
Object.defineProperty(exports, "__esModule", { value: true });
/** Notifies handler after a set interval.
 * @public
 */
class Timer {
    /**
     * Creates a new Timer.
     * @param msDelay Time interval in milliseconds after which handler will be notified.
     */
    constructor(msDelay) {
        this._isRunning = false;
        this._timerId = 0;
        this._delay = msDelay;
    }
    /** Indicates whether the timer is running */
    get isRunning() {
        return this._isRunning;
    }
    /** Time interval in milliseconds after which handler will be notified */
    set delay(ms) {
        this._delay = ms;
    }
    /** Time interval in milliseconds after which handler will be notified */
    get delay() {
        return this._delay;
    }
    /** Set handler that is called after a set interval. */
    setOnExecute(onExecute) {
        this._onExecute = onExecute;
    }
    /** Starts this Timer. */
    start() {
        if (this._isRunning)
            this.clearTimeout();
        this._isRunning = true;
        this.setTimeout();
    }
    /** Stops this Timer. */
    stop() {
        if (!this._isRunning)
            return;
        this._isRunning = false;
        this.clearTimeout();
    }
    execute() {
        this._onExecute && this._onExecute();
        this._isRunning = false;
    }
    setTimeout() {
        this._timerId = window.setTimeout(() => this.execute(), this._delay);
    }
    clearTimeout() {
        window.clearTimeout(this._timerId);
    }
}
exports.Timer = Timer;


/***/ }),

/***/ "./lib/ui-core/utils/UiError.js":
/*!**************************************!*\
  !*** ./lib/ui-core/utils/UiError.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Utilities */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
/** iModel.js UI UiError class is a subclass of BentleyError. Errors are logged.
 * @public
 */
class UiError extends bentleyjs_core_1.BentleyError {
    /** Constructs UiError using BentleyError. */
    constructor(category, message, errorNumber = bentleyjs_core_1.BentleyStatus.ERROR, log = bentleyjs_core_1.Logger.logError, getMetaData) {
        super(errorNumber, message, log, category, getMetaData);
    }
}
exports.UiError = UiError;


/***/ }),

/***/ "./lib/ui-core/utils/UiEvent.js":
/*!**************************************!*\
  !*** ./lib/ui-core/utils/UiEvent.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Utilities */
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
/** iModel.js UI UiEvent class is a subclass of BeEvent with argument type safety.
 * @public
 */
class UiEvent extends bentleyjs_core_1.BeEvent {
    /** Calls BeEvent.raiseEvent with type-safe arguments. */
    emit(args) {
        this.raiseEvent(args);
    }
}
exports.UiEvent = UiEvent;


/***/ }),

/***/ "./lib/ui-core/utils/flattenChildren.js":
/*!**********************************************!*\
  !*** ./lib/ui-core/utils/flattenChildren.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Utilities */
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
/** Flattens React fragments.
 * @internal
 */
exports.flattenChildren = (children) => {
    const items = React.Children.map(children, (child) => {
        // istanbul ignore next
        if (!React.isValidElement(child))
            return child;
        if (child.type === React.Fragment) {
            return child.props.children;
        }
        return child;
    });
    return items;
};


/***/ }),

/***/ "./lib/ui-core/utils/getClassName.js":
/*!*******************************************!*\
  !*** ./lib/ui-core/utils/getClassName.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Utilities */
Object.defineProperty(exports, "__esModule", { value: true });
/** Gets the class name for an object.
 * @internal
 */
exports.getClassName = (obj) => {
    let className = "";
    if (obj) {
        if (obj.name)
            className = obj.name;
        else if (obj.constructor && obj.constructor.name)
            className = obj.constructor.name;
    }
    return className;
};


/***/ }),

/***/ "./lib/ui-core/utils/getDisplayName.js":
/*!*********************************************!*\
  !*** ./lib/ui-core/utils/getDisplayName.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Utilities */
Object.defineProperty(exports, "__esModule", { value: true });
/** Gets the display name for a React component.
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

/***/ "./lib/ui-core/utils/getUserColor.js":
/*!*******************************************!*\
  !*** ./lib/ui-core/utils/getUserColor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Utilities */
Object.defineProperty(exports, "__esModule", { value: true });
const COLORS = [
    "#6ab9ec",
    "#b1c854",
    "#f7706c",
    "#4585a5",
    "#ffc335",
    "#f7963e",
    "#73c7c1",
    "#85a9cf",
    "#a3779f",
    "#c8c2b4",
    "#a47854",
];
/** Gets a color based on a given email address. This color is usually displayed in an avatar component.
 * @internal
 */
function getUserColor(email) {
    if (typeof email !== "string") // Test for invalid data
        return COLORS[0];
    const cleanString = email.trim().toLowerCase();
    let hash = 0;
    for (let i = 0; i < cleanString.length; i++) {
        const charCode = cleanString.charCodeAt(i);
        hash = (hash + charCode) % COLORS.length;
    }
    return COLORS[hash];
}
exports.getUserColor = getUserColor;


/***/ }),

/***/ "./lib/ui-core/utils/isPromiseLike.js":
/*!********************************************!*\
  !*** ./lib/ui-core/utils/isPromiseLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Utilities */
Object.defineProperty(exports, "__esModule", { value: true });
/** Checks if the specified argument is a promise
 * @internal
 */
function isPromiseLike(obj) {
    return !!(obj && (typeof obj === "object") && (typeof obj.then === "function"));
}
exports.isPromiseLike = isPromiseLike;


/***/ }),

/***/ "./lib/ui-core/utils/shallowDiffers.js":
/*!*********************************************!*\
  !*** ./lib/ui-core/utils/shallowDiffers.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @module Utilities */
Object.defineProperty(exports, "__esModule", { value: true });
/** Performs a shallow difference check on two objects.
 * @internal
 */
exports.shallowDiffers = (a, b) => {
    if (a === b)
        return false;
    if (a === undefined || b === undefined)
        return true;
    for (const i in a) {
        if (!(i in b))
            return true;
    }
    for (const i in b) {
        if (a[i] !== b[i])
            return true;
    }
    return false;
};


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

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

},[["./lib/ui-core.js","runtime"]]]);
});
//# sourceMappingURL=ui-core.js.map