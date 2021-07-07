/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__) {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wasm_pack_pkg_hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wasm-pack/pkg/hello_wasm_bg.wasm */ \"./wasm-pack/pkg/hello_wasm_bg.wasm\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wasm_pack_pkg_hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_2__]);\n_wasm_pack_pkg_hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst App = () => {\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    (0,_wasm_pack_pkg_hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_2__.greet)();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXNtcGFjay10ZXN0Ly4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiQXBwIiwidXNlRWZmZWN0IiwiZ3JlZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsTUFBTTtBQUNoQkMsa0RBQVMsQ0FBQyxNQUFJO0FBQ1pDLDRFQUFLO0FBQ04sR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLHNCQUFPLDZJQUFQO0FBQ0QsQ0FMRDs7QUFPQSwrREFBZUYsR0FBZixFIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JlZXQgfSBmcm9tIFwiLi4vd2FzbS1wYWNrL3BrZy9oZWxsb193YXNtX2JnLndhc21cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGdyZWV0KClcbiAgfSwgW10pXG4gIHJldHVybiA8PjwvPlxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./wasm-pack/pkg/hello_wasm_bg.js":
/*!****************************************!*\
  !*** ./wasm-pack/pkg/hello_wasm_bg.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__) {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"greet\": function() { return /* binding */ greet; },\n/* harmony export */   \"__wbg_alert_a5a2f68cc09adc6e\": function() { return /* binding */ __wbg_alert_a5a2f68cc09adc6e; }\n/* harmony export */ });\n/* harmony import */ var _hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello_wasm_bg.wasm */ \"./wasm-pack/pkg/hello_wasm_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\nlet cachedTextDecoder = new lTextDecoder('utf-8', {\n  ignoreBOM: true,\n  fatal: true\n});\ncachedTextDecoder.decode();\nlet cachegetUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {\n    cachegetUint8Memory0 = new Uint8Array(_hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n  }\n\n  return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\n\n\nfunction greet() {\n  _hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.greet();\n}\nfunction __wbg_alert_a5a2f68cc09adc6e(arg0, arg1) {\n  alert(getStringFromWasm0(arg0, arg1));\n}\n;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXNtcGFjay10ZXN0Ly4vd2FzbS1wYWNrL3BrZy9oZWxsb193YXNtX2JnLmpzP2QwMDgiXSwibmFtZXMiOlsibFRleHREZWNvZGVyIiwiVGV4dERlY29kZXIiLCJtb2R1bGUiLCJyZXF1aXJlIiwiY2FjaGVkVGV4dERlY29kZXIiLCJpZ25vcmVCT00iLCJmYXRhbCIsImRlY29kZSIsImNhY2hlZ2V0VWludDhNZW1vcnkwIiwiZ2V0VWludDhNZW1vcnkwIiwiYnVmZmVyIiwid2FzbSIsIlVpbnQ4QXJyYXkiLCJnZXRTdHJpbmdGcm9tV2FzbTAiLCJwdHIiLCJsZW4iLCJzdWJhcnJheSIsImdyZWV0IiwiX193YmdfYWxlcnRfYTVhMmY2OGNjMDlhZGM2ZSIsImFyZzAiLCJhcmcxIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFlBQVksR0FBRyxPQUFPQyxXQUFQLEtBQXVCLFdBQXZCLEdBQXFDLENBQUMsR0FBR0MsTUFBTSxDQUFDQyxPQUFYLEVBQW9CLE1BQXBCLEVBQTRCRixXQUFqRSxHQUErRUEsV0FBcEc7QUFFQSxJQUFJRyxpQkFBaUIsR0FBRyxJQUFJSixZQUFKLENBQWlCLE9BQWpCLEVBQTBCO0FBQUVLLFdBQVMsRUFBRSxJQUFiO0FBQW1CQyxPQUFLLEVBQUU7QUFBMUIsQ0FBMUIsQ0FBeEI7QUFFQUYsaUJBQWlCLENBQUNHLE1BQWxCO0FBRUEsSUFBSUMsb0JBQW9CLEdBQUcsSUFBM0I7O0FBQ0EsU0FBU0MsZUFBVCxHQUEyQjtBQUN2QixNQUFJRCxvQkFBb0IsS0FBSyxJQUF6QixJQUFpQ0Esb0JBQW9CLENBQUNFLE1BQXJCLEtBQWdDQyw4REFBckUsRUFBeUY7QUFDckZILHdCQUFvQixHQUFHLElBQUlJLFVBQUosQ0FBZUQsOERBQWYsQ0FBdkI7QUFDSDs7QUFDRCxTQUFPSCxvQkFBUDtBQUNIOztBQUVELFNBQVNLLGtCQUFULENBQTRCQyxHQUE1QixFQUFpQ0MsR0FBakMsRUFBc0M7QUFDbEMsU0FBT1gsaUJBQWlCLENBQUNHLE1BQWxCLENBQXlCRSxlQUFlLEdBQUdPLFFBQWxCLENBQTJCRixHQUEzQixFQUFnQ0EsR0FBRyxHQUFHQyxHQUF0QyxDQUF6QixDQUFQO0FBQ0g7QUFDRDtBQUNBOzs7QUFDTyxTQUFTRSxLQUFULEdBQWlCO0FBQ3BCTix3REFBQTtBQUNIO0FBRU0sU0FBU08sNEJBQVQsQ0FBc0NDLElBQXRDLEVBQTRDQyxJQUE1QyxFQUFrRDtBQUNyREMsT0FBSyxDQUFDUixrQkFBa0IsQ0FBQ00sSUFBRCxFQUFPQyxJQUFQLENBQW5CLENBQUw7QUFDSDtBQUFBLEMiLCJmaWxlIjoiLi93YXNtLXBhY2svcGtnL2hlbGxvX3dhc21fYmcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3YXNtIGZyb20gJy4vaGVsbG9fd2FzbV9iZy53YXNtJztcblxuY29uc3QgbFRleHREZWNvZGVyID0gdHlwZW9mIFRleHREZWNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RGVjb2RlciA6IFRleHREZWNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dERlY29kZXIgPSBuZXcgbFRleHREZWNvZGVyKCd1dGYtOCcsIHsgaWdub3JlQk9NOiB0cnVlLCBmYXRhbDogdHJ1ZSB9KTtcblxuY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKCk7XG5cbmxldCBjYWNoZWdldFVpbnQ4TWVtb3J5MCA9IG51bGw7XG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZ2V0VWludDhNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZ2V0VWludDhNZW1vcnkwLmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0VWludDhNZW1vcnkwID0gbmV3IFVpbnQ4QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0VWludDhNZW1vcnkwO1xufVxuXG5mdW5jdGlvbiBnZXRTdHJpbmdGcm9tV2FzbTAocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgbGVuKSk7XG59XG4vKipcbiovXG5leHBvcnQgZnVuY3Rpb24gZ3JlZXQoKSB7XG4gICAgd2FzbS5ncmVldCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfYWxlcnRfYTVhMmY2OGNjMDlhZGM2ZShhcmcwLCBhcmcxKSB7XG4gICAgYWxlcnQoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./wasm-pack/pkg/hello_wasm_bg.js\n");

/***/ }),

/***/ "./wasm-pack/pkg/hello_wasm_bg.wasm":
/*!******************************************!*\
  !*** ./wasm-pack/pkg/hello_wasm_bg.wasm ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __webpack_instantiate__ = function([WEBPACK_IMPORTED_MODULE_0]) {
	return __webpack_require__.v(exports, module.id, "96b47c04748613345360", {
		"./hello_wasm_bg.js": {
			"__wbg_alert_a5a2f68cc09adc6e": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_a5a2f68cc09adc6e
		}
	});
}
__webpack_require__.a(module, function(__webpack_handle_async_dependencies__) {
	/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./hello_wasm_bg.js */ "./wasm-pack/pkg/hello_wasm_bg.js");
	var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);
	return __webpack_async_dependencies__.then ? __webpack_async_dependencies__.then(__webpack_instantiate__) : __webpack_instantiate__(__webpack_async_dependencies__);
}, 1);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();