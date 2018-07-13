webpackJsonp([2],{

/***/ "lVK7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("M4fF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__another_module__ = __webpack_require__("ytZv");


//import print from './print'

function component() {
  var element = document.createElement('div');

  element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Hellojjjj', 'webpack222'], ' ');

  element.onclick = function () {
    __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "MddZ")).then(math => {
      alert(math.square(2))
    })
  }

  return element;
}

document.body.appendChild(component());

/***/ }),

/***/ "ytZv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("M4fF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);


console.log(
  __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Another', 'module', 'loaded!'], ' ')
);

/***/ })

},["lVK7"]);