/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/main.ts":
/*!*****************************!*\
  !*** ./application/main.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar test_less_1 = __webpack_require__(/*! ./test.less */ \"./application/test.less\");\nvar test_1 = __webpack_require__(/*! ./test */ \"./application/test.ts\");\nif (typeof window !== \"undefined\") {\n    window.addEventListener(\"load\", function (event) {\n        var div = document.createElement(\"div\");\n        div.setAttribute(\"class\", test_less_1.default.a(\"d\"));\n        div.innerHTML = test_1.default;\n        document.body.appendChild(div);\n    });\n}\n\n\n//# sourceURL=webpack:///./application/main.ts?");

/***/ }),

/***/ "./application/test.less":
/*!*******************************!*\
  !*** ./application/test.less ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rollup_plugin_postcss_exports_module_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rollup-plugin-postcss-exports-module-name */ \"./node_modules/postcss-exports-webpack-plugin/getClass.js\");\n/* harmony import */ var rollup_plugin_postcss_exports_module_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rollup_plugin_postcss_exports_module_name__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({a: rollup_plugin_postcss_exports_module_name__WEBPACK_IMPORTED_MODULE_0___default()({\"base\":\"application_test_a\",\"mods\":{\"c\":\"application_test_a_c\",\"d\":\"application_test_a_d\"}})});\n\n//# sourceURL=webpack:///./application/test.less?");

/***/ }),

/***/ "./application/test.ts":
/*!*****************************!*\
  !*** ./application/test.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = \"HELLO\";\n\n\n//# sourceURL=webpack:///./application/test.ts?");

/***/ }),

/***/ "./node_modules/postcss-exports-webpack-plugin/getClass.js":
/*!*****************************************************************!*\
  !*** ./node_modules/postcss-exports-webpack-plugin/getClass.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = (function (classData) {\n    return function () {\n        var mods = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            mods[_i] = arguments[_i];\n        }\n        var classes = mods.reduce(function (result, mod) {\n            if (classData.mods && classData.mods[mod]) {\n                result.push(classData.mods[mod]);\n            }\n            return result;\n        }, classData.base ? [classData.base] : []);\n        return classes.join(\" \");\n    };\n});\n\n\n//# sourceURL=webpack:///./node_modules/postcss-exports-webpack-plugin/getClass.js?");

/***/ })

/******/ });