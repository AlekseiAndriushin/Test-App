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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar submitForm = document.querySelector('.add');\nvar addButton = document.querySelector('.add_component');\nvar component = document.querySelector('.components');\nvar findButton = document.querySelector('.findList');\nvar componentsElem = document.getElementById('components');\ndocument.querySelector('.themes').addEventListener('change', function (event) {\n  if (event.target.nodeName === 'INPUT') {\n    document.documentElement.classList.remove('red', 'blue');\n    document.documentElement.classList.add(event.target.value);\n  }\n});\n\nfunction adding() {\n  var result = document.getElementById(this.id);\n  var classChange = document.getElementById(this.id).classList;\n\n  if (classChange.contains('components__card')) {\n    result.classList.remove('components__card');\n    result.classList.add('changedCard');\n  } else {\n    result.classList.remove('changedCard');\n    result.classList.add('components__card');\n  }\n}\n\nvar reverseColor = document.querySelectorAll('.components__card');\nreverseColor.forEach(function (element) {\n  return element.addEventListener('click', adding);\n});\n\nfunction findList() {\n  var searchCompanies = document.querySelectorAll('.changedCard');\n  var findName = document.querySelector('.company');\n\n  if (searchCompanies.length && componentsElem.getElementsByClassName('changedCard')) {\n    var findCompanyName = _toConsumableArray(searchCompanies);\n\n    findCompanyName.forEach(function (child) {\n      console.log('child', child.textContent);\n      console.log(findName.textContent);\n    });\n  } else {\n    console.log('тут пусто');\n  }\n}\n\nvar generateTempalate = function generateTempalate(companyName, address, email, telephone) {\n  var children = component.children.length;\n  var liElement = document.createElement('li');\n  liElement.innerHTML = \"<span class=\\\"company\\\">\\u041D\\u0430\\u0437\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043A\\u043E\\u043C\\u043F\\u0430\\u043D\\u0438\\u0438: \".concat(companyName, \"</span>\\n                     <span>\\u0410\\u0434\\u0440\\u0435\\u0441: \").concat(address, \"</span>\\n                    <span>Email: \").concat(email, \"</span>\\n                    <span>\\u0422\\u0435\\u043B\\u0435\\u0444\\u043E\\u043D: \").concat(telephone, \"</span>\");\n  liElement.classList.add(\"components__card\");\n  liElement.id = \"\".concat(children);\n  liElement.addEventListener('click', adding);\n  component.prepend(liElement);\n  component.addEventListener('click', function (e) {\n    if (e.target === children) {\n      console.log('hello', \"\".concat(children));\n    }\n  });\n};\n\nvar addBlock = function addBlock(e) {\n  e.preventDefault(e);\n  var companyName = submitForm.companyName.value.trim();\n  var address = submitForm.address.value.trim();\n  var email = submitForm.email.value.trim();\n  var telephone = submitForm.telephone.value.trim();\n\n  if (companyName.length && address.length && email.length && telephone.length) {\n    generateTempalate(companyName, address, email, telephone);\n    submitForm.reset();\n  }\n};\n\nsubmitForm.addEventListener('submit', addBlock);\naddButton.addEventListener('click', addBlock);\nfindButton.addEventListener('click', findList);\n\n//# sourceURL=webpack:///./src/index.js?");

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