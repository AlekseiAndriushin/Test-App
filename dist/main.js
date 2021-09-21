/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n\ndocument.querySelector('.themes').addEventListener('change', function (event) {\n  if (event.target.nodeName === 'INPUT') {\n    document.documentElement.classList.remove('red', 'blue');\n    document.documentElement.classList.add(event.target.value);\n  }\n});\nvar submitForm = document.querySelector('.add');\nvar addButton = document.querySelector('.add_component');\nvar component = document.querySelector('.components');\nvar list = document.querySelectorAll('.components li');\nvar listLenght = list.lenght;\n\nvar generateTempalate = function generateTempalate(companyName, address, email, telephone) {\n  var html = \"<li>\\n                  <label for=\\\"result_\".concat(listLenght, \"\\\">\\n                    <span class=\\\"check\\\"></span>\\n                    \\u041D\\u0430\\u0437\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043A\\u043E\\u043C\\u043F\\u0430\\u043D\\u0438\\u0438: \").concat(companyName, \"\\n                    <br/>\\n                    \\u0410\\u0434\\u0440\\u0435\\u0441: \").concat(address, \"\\n                    <br/>\\n                    Email: \").concat(email, \"\\n                    <br/>\\n                    \\u0422\\u0435\\u043B\\u0435\\u0444\\u043E\\u043D: \").concat(telephone, \"\\n                    <br/>\\n                  </label>\\n                </li>\");\n  component.innerHTML += html;\n};\n\nfunction addBlock(e) {\n  e.preventDefault();\n  var companyName = submitForm.companyName.value.trim();\n  var address = submitForm.address.value.trim();\n  var email = submitForm.email.value.trim();\n  var telephone = submitForm.telephone.value.trim();\n\n  if (companyName.length && address.length && email.length && telephone.length) {\n    listLenght = listLenght + 1;\n    generateTempalate(companyName, address, email, telephone);\n    submitForm.reset();\n  }\n}\n\nsubmitForm.addEventListener('submit', addBlock);\naddButton.addEventListener('click', addBlock);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles/index.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;