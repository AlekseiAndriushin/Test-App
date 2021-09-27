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

/***/ "./src/htmlTemplate.js":
/*!*****************************!*\
  !*** ./src/htmlTemplate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlTemplate\": () => (/* binding */ htmlTemplate)\n/* harmony export */ });\nvar htmlTemplate = function htmlTemplate() {\n  var submitForm = document.querySelector('.add');\n  var addButton = document.querySelector('.add_component');\n\n  var generateTempalate = function generateTempalate(companyName, address, email, telephone) {\n    var children = component.children.length;\n    var liElement = document.createElement('li');\n    liElement.innerHTML = \"<span class=\\\"company\\\">\\u041D\\u0430\\u0437\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043A\\u043E\\u043C\\u043F\\u0430\\u043D\\u0438\\u0438: \".concat(companyName, \"</span>\\n                     <span>\\u0410\\u0434\\u0440\\u0435\\u0441: \").concat(address, \"</span>\\n                    <span>Email: \").concat(email, \"</span>\\n                    <span>\\u0422\\u0435\\u043B\\u0435\\u0444\\u043E\\u043D: \").concat(telephone, \"</span>\");\n    liElement.classList.add(\"components__card\");\n    liElement.id = \"\".concat(children);\n    liElement.addEventListener('click', processCardStyleOnClick);\n    component.prepend(liElement);\n  };\n\n  var addBlock = function addBlock(e) {\n    e.preventDefault(e);\n    var companyName = submitForm.companyName.value.trim();\n    var address = submitForm.address.value.trim();\n    var email = submitForm.email.value.trim();\n    var telephone = submitForm.telephone.value.trim();\n\n    if (companyName.length && address.length && email.length && telephone.length) {\n      generateTempalate(companyName, address, email, telephone);\n      submitForm.reset();\n    }\n  };\n\n  submitForm.addEventListener('submit', addBlock);\n  addButton.addEventListener('click', addBlock);\n};\n\n//# sourceURL=webpack:///./src/htmlTemplate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/htmlTemplate.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;