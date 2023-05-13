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

/***/ "./src/aboutComponent.js":
/*!*******************************!*\
  !*** ./src/aboutComponent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ aboutComponent)\n/* harmony export */ });\nfunction aboutComponent() {\r\n  const element = document.createElement('div');\r\n\r\n  const test = document.createElement('p');\r\n  test.textContent = 'About content here';\r\n\r\n  element.append(test);\r\n  return element;\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/aboutComponent.js?");

/***/ }),

/***/ "./src/contactComponent.js":
/*!*********************************!*\
  !*** ./src/contactComponent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactComponent)\n/* harmony export */ });\nfunction contactComponent() {\r\n  const element = document.createElement('div');\r\n\r\n  const test = document.createElement('p');\r\n  test.textContent = 'Contact content here';\r\n\r\n  element.append(test);\r\n  return element;\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contactComponent.js?");

/***/ }),

/***/ "./src/footerComponent.js":
/*!********************************!*\
  !*** ./src/footerComponent.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footerComponent)\n/* harmony export */ });\nfunction footerComponent() {\r\n  const footer = document.createElement('footer');\r\n  footer.className = 'footer-container';\r\n  const footerDetails = document.createElement('p');\r\n  footerDetails.textContent = 'Created by debo9210';\r\n  footer.appendChild(footerDetails);\r\n\r\n  return footer;\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/footerComponent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainComponent */ \"./src/mainComponent.js\");\n/* harmony import */ var _navComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navComponent */ \"./src/navComponent.js\");\n/* harmony import */ var _menuComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuComponent */ \"./src/menuComponent.js\");\n/* harmony import */ var _aboutComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutComponent */ \"./src/aboutComponent.js\");\n/* harmony import */ var _contactComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactComponent */ \"./src/contactComponent.js\");\n/* harmony import */ var _footerComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footerComponent */ \"./src/footerComponent.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet component = (0,_mainComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nconst contentEntry = document.querySelector('#content');\r\n\r\ncontentEntry.append((0,_navComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), component, (0,_footerComponent__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\r\n\r\nconst menu = document.querySelector('.menu');\r\nconst brand = document.querySelector('.brand');\r\nconst about = document.querySelector('.about');\r\nconst contact = document.querySelector('.contact');\r\n\r\nbrand.addEventListener('click', () => {\r\n  contentEntry.removeChild(contentEntry.childNodes[1]);\r\n  // contentEntry.append(component);\r\n  contentEntry.insertBefore(component, contentEntry.lastElementChild);\r\n});\r\n\r\nmenu.addEventListener('click', () => {\r\n  contentEntry.removeChild(contentEntry.childNodes[1]);\r\n  contentEntry.insertBefore((0,_menuComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), contentEntry.lastElementChild);\r\n  // contentEntry.append(MenuComponent());\r\n});\r\n\r\nabout.addEventListener('click', () => {\r\n  contentEntry.removeChild(contentEntry.childNodes[1]);\r\n  contentEntry.insertBefore((0,_aboutComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(), contentEntry.lastElementChild);\r\n  // contentEntry.append(AboutComponent());\r\n});\r\n\r\ncontact.addEventListener('click', () => {\r\n  contentEntry.removeChild(contentEntry.childNodes[1]);\r\n  contentEntry.insertBefore((0,_contactComponent__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), contentEntry.lastElementChild);\r\n  // contentEntry.append(ContactComponent());\r\n});\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/mainComponent.js":
/*!******************************!*\
  !*** ./src/mainComponent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ component)\n/* harmony export */ });\n/* harmony import */ var _images_chicken_barbecue_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/chicken-barbecue.jpg */ \"./images/chicken-barbecue.jpg\");\n\r\n\r\nfunction component() {\r\n  const element = document.createElement('div');\r\n  element.className = 'container';\r\n\r\n  const main = document.createElement('main');\r\n  main.className = 'main-container';\r\n\r\n  const mainHeading = document.createElement('div');\r\n  mainHeading.className = 'main-heading';\r\n  const title = document.createElement('h1');\r\n  title.textContent = 'Laquitos';\r\n  const subTitle = document.createElement('h4');\r\n  subTitle.textContent = 'Lorem Ipsum';\r\n  const restaurentDetails = document.createElement('p');\r\n  restaurentDetails.textContent =\r\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';\r\n  mainHeading.append(title, subTitle, restaurentDetails);\r\n\r\n  const imageContainer = document.createElement('div');\r\n  imageContainer.className = 'image-container';\r\n  const image = document.createElement('img');\r\n  image.src = _images_chicken_barbecue_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n  image.alt = 'food-image';\r\n  imageContainer.append(image);\r\n\r\n  main.append(mainHeading, imageContainer);\r\n\r\n  // const footer = document.createElement('footer');\r\n  // footer.className = 'footer-container';\r\n  // const footerDetails = document.createElement('p');\r\n  // footerDetails.textContent = 'Created by debo9210';\r\n  // footer.appendChild(footerDetails);\r\n\r\n  element.append(main);\r\n\r\n  return element;\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/mainComponent.js?");

/***/ }),

/***/ "./src/menuComponent.js":
/*!******************************!*\
  !*** ./src/menuComponent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuComponent)\n/* harmony export */ });\nfunction menuComponent() {\r\n  const element = document.createElement('div');\r\n\r\n  const test = document.createElement('p');\r\n  test.textContent = 'Menu content here';\r\n\r\n  element.append(test);\r\n  return element;\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menuComponent.js?");

/***/ }),

/***/ "./src/navComponent.js":
/*!*****************************!*\
  !*** ./src/navComponent.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navComponent)\n/* harmony export */ });\nfunction navComponent() {\r\n  const nav = document.createElement('nav');\r\n  nav.className = 'nav-container';\r\n\r\n  const brand = document.createElement('div');\r\n  brand.className = 'brand';\r\n  brand.append('Laquitos');\r\n\r\n  const linkContainer = document.createElement('div');\r\n  linkContainer.className = 'link-container';\r\n\r\n  const menu = document.createElement('p');\r\n  menu.className = 'menu';\r\n  menu.textContent = 'Menu';\r\n  const about = document.createElement('p');\r\n  about.textContent = 'About';\r\n  about.className = 'about';\r\n  const contact = document.createElement('p');\r\n  contact.textContent = 'Contact';\r\n  contact.className = 'contact';\r\n  linkContainer.append(menu, about, contact);\r\n\r\n  nav.append(brand, linkContainer);\r\n  return nav;\r\n}\r\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/navComponent.js?");

/***/ }),

/***/ "./images/chicken-barbecue.jpg":
/*!*************************************!*\
  !*** ./images/chicken-barbecue.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ce979560b6dd3104caf.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./images/chicken-barbecue.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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