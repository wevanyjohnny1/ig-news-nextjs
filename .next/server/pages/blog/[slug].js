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
exports.id = "pages/blog/[slug]";
exports.ids = ["pages/blog/[slug]"];
exports.modules = {

/***/ "./src/pages/blog/[slug].tsx":
/*!***********************************!*\
  !*** ./src/pages/blog/[slug].tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/prismic */ \"./src/services/prismic.ts\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-dom */ \"prismic-dom\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post.module.scss */ \"./src/pages/blog/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/johnny/Desktop/projetosweb/jwb/src/pages/blog/[slug].tsx\";\n\n\n\n\nfunction Post({\n  post\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [post.title, \" | JWD\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().post),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: post.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n          children: post.updatedAt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_4___default().postContent),\n          dangerouslySetInnerHTML: {\n            __html: post.content\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nconst getServerSideProps = async ({\n  params\n}) => {\n  const prismic = (0,_services_prismic__WEBPACK_IMPORTED_MODULE_1__.getPrismicClient)();\n  const {\n    slug\n  } = params;\n  const response = await prismic.getByUID('post', String(slug), {});\n  const post = {\n    slug,\n    title: prismic_dom__WEBPACK_IMPORTED_MODULE_2__.RichText.asText(response.data.title),\n    content: prismic_dom__WEBPACK_IMPORTED_MODULE_2__.RichText.asHtml(response.data.content),\n    updatedAt: new Date(response.last_publication_date).toLocaleDateString(\"pt-BR\", {\n      day: \"2-digit\",\n      month: \"long\",\n      year: \"numeric\"\n    })\n  };\n  return {\n    props: {\n      post\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qd2IvLi9zcmMvcGFnZXMvYmxvZy9bc2x1Z10udHN4PzVjYmEiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJ0aXRsZSIsInN0eWxlcyIsInVwZGF0ZWRBdCIsIl9faHRtbCIsImNvbnRlbnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwYXJhbXMiLCJwcmlzbWljIiwiZ2V0UHJpc21pY0NsaWVudCIsInNsdWciLCJyZXNwb25zZSIsImdldEJ5VUlEIiwiU3RyaW5nIiwiUmljaFRleHQiLCJkYXRhIiwiRGF0ZSIsImxhc3RfcHVibGljYXRpb25fZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV2UsU0FBU0EsSUFBVCxDQUFjO0FBQUVDO0FBQUYsQ0FBZCxFQUFtQztBQUNoRCxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQSxtQkFBUUEsSUFBSSxDQUFDQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQU0sZUFBUyxFQUFFQyxvRUFBakI7QUFBQSw2QkFDRTtBQUFTLGlCQUFTLEVBQUVBLCtEQUFwQjtBQUFBLGdDQUNFO0FBQUEsb0JBQUtGLElBQUksQ0FBQ0M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxvQkFBT0QsSUFBSSxDQUFDRztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUNFLG1CQUFTLEVBQUVELHNFQURiO0FBRUUsaUNBQXVCLEVBQUU7QUFBQ0Usa0JBQU0sRUFBRUosSUFBSSxDQUFDSztBQUFkO0FBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUEsa0JBREY7QUFpQkQ7QUFFTSxNQUFNQyxrQkFBc0MsR0FBRyxPQUFPO0FBQUNDO0FBQUQsQ0FBUCxLQUFvQjtBQUN4RSxRQUFNQyxPQUFPLEdBQUdDLG1FQUFnQixFQUFoQztBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFXSCxNQUFqQjtBQUVBLFFBQU1JLFFBQVEsR0FBRyxNQUFNSCxPQUFPLENBQUNJLFFBQVIsQ0FBaUIsTUFBakIsRUFBeUJDLE1BQU0sQ0FBQ0gsSUFBRCxDQUEvQixFQUF1QyxFQUF2QyxDQUF2QjtBQUVBLFFBQU1WLElBQUksR0FBRztBQUNYVSxRQURXO0FBRVhULFNBQUssRUFBRWEsd0RBQUEsQ0FBZ0JILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjZCxLQUE5QixDQUZJO0FBR1hJLFdBQU8sRUFBRVMsd0RBQUEsQ0FBZ0JILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjVixPQUE5QixDQUhFO0FBSVhGLGFBQVMsRUFBRSxJQUFJYSxJQUFKLENBQVNMLFFBQVEsQ0FBQ00scUJBQWxCLEVBQXlDQyxrQkFBekMsQ0FDVCxPQURTLEVBRVQ7QUFDRUMsU0FBRyxFQUFFLFNBRFA7QUFFRUMsV0FBSyxFQUFFLE1BRlQ7QUFHRUMsVUFBSSxFQUFFO0FBSFIsS0FGUztBQUpBLEdBQWI7QUFjQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMdEI7QUFESztBQURGLEdBQVA7QUFLRCxDQXpCTSIsImZpbGUiOiIuL3NyYy9wYWdlcy9ibG9nL1tzbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ2V0UHJpc21pY0NsaWVudCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wcmlzbWljXCI7XG5pbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gXCJwcmlzbWljLWRvbVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Bvc3QubW9kdWxlLnNjc3MnO1xuXG5pbnRlcmZhY2UgUG9zdFByb3BzIHtcbiAgcG9zdDoge1xuICAgIHNsdWc6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICB1cGRhdGVkQXQ6IHN0cmluZztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdCB9OiBQb3N0UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cG9zdC50aXRsZX0gfCBKV0Q8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0+XG4gICAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHRpbWU+e3Bvc3QudXBkYXRlZEF0fTwvdGltZT5cbiAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucG9zdENvbnRlbnR9XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcG9zdC5jb250ZW50fX0gXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7cGFyYW1zfSkgPT4ge1xuICBjb25zdCBwcmlzbWljID0gZ2V0UHJpc21pY0NsaWVudCgpO1xuICBjb25zdCB7IHNsdWcgfSA9IHBhcmFtcztcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHByaXNtaWMuZ2V0QnlVSUQoJ3Bvc3QnLCBTdHJpbmcoc2x1ZyksIHt9KTtcblxuICBjb25zdCBwb3N0ID0ge1xuICAgIHNsdWcsXG4gICAgdGl0bGU6IFJpY2hUZXh0LmFzVGV4dChyZXNwb25zZS5kYXRhLnRpdGxlKSxcbiAgICBjb250ZW50OiBSaWNoVGV4dC5hc0h0bWwocmVzcG9uc2UuZGF0YS5jb250ZW50KSxcbiAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKHJlc3BvbnNlLmxhc3RfcHVibGljYXRpb25fZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFxuICAgICAgXCJwdC1CUlwiLFxuICAgICAge1xuICAgICAgICBkYXk6IFwiMi1kaWdpdFwiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgfVxuICAgICksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0LFxuICAgIH0sXG4gIH07XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/blog/[slug].tsx\n");

/***/ }),

/***/ "./src/services/prismic.ts":
/*!*********************************!*\
  !*** ./src/services/prismic.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPrismicClient\": function() { return /* binding */ getPrismicClient; }\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getPrismicClient(req) {\n  const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default().client(process.env.PRISMIC_END_POINT, {\n    req,\n    accessToken: process.env.PRISMIC_ACCESS_TOKEN\n  });\n  return prismic;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qd2IvLi9zcmMvc2VydmljZXMvcHJpc21pYy50cz84YzUwIl0sIm5hbWVzIjpbImdldFByaXNtaWNDbGllbnQiLCJyZXEiLCJwcmlzbWljIiwiUHJpc21pYyIsInByb2Nlc3MiLCJlbnYiLCJQUklTTUlDX0VORF9QT0lOVCIsImFjY2Vzc1Rva2VuIiwiUFJJU01JQ19BQ0NFU1NfVE9LRU4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sU0FBU0EsZ0JBQVQsQ0FBMEJDLEdBQTFCLEVBQXlDO0FBQzlDLFFBQU1DLE9BQU8sR0FBR0MsK0RBQUEsQ0FBZUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGlCQUEzQixFQUNoQjtBQUNFTCxPQURGO0FBRUVNLGVBQVcsRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHO0FBRjNCLEdBRGdCLENBQWhCO0FBTUEsU0FBT04sT0FBUDtBQUNEIiwiZmlsZSI6Ii4vc3JjL3NlcnZpY2VzL3ByaXNtaWMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJpc21pYyBmcm9tIFwiQHByaXNtaWNpby9jbGllbnRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByaXNtaWNDbGllbnQocmVxPzogdW5rbm93bikge1xuICBjb25zdCBwcmlzbWljID0gUHJpc21pYy5jbGllbnQocHJvY2Vzcy5lbnYuUFJJU01JQ19FTkRfUE9JTlQsIFxuICB7XG4gICAgcmVxLFxuICAgIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5QUklTTUlDX0FDQ0VTU19UT0tFTixcbiAgfSk7XG5cbiAgcmV0dXJuIHByaXNtaWM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/prismic.ts\n");

/***/ }),

/***/ "./src/pages/blog/post.module.scss":
/*!*****************************************!*\
  !*** ./src/pages/blog/post.module.scss ***!
  \*****************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"post_container__2jM3U\",\n\t\"post\": \"post_post__33ZP_\",\n\t\"postContent\": \"post_postContent__3njWG\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qd2IvLi9zcmMvcGFnZXMvYmxvZy9wb3N0Lm1vZHVsZS5zY3NzP2ZhMmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2Jsb2cvcG9zdC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInBvc3RfY29udGFpbmVyX18yak0zVVwiLFxuXHRcInBvc3RcIjogXCJwb3N0X3Bvc3RfXzMzWlBfXCIsXG5cdFwicG9zdENvbnRlbnRcIjogXCJwb3N0X3Bvc3RDb250ZW50X18zbmpXR1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/blog/post.module.scss\n");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prismicio/client");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prismic-dom":
/*!******************************!*\
  !*** external "prismic-dom" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("prismic-dom");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/blog/[slug].tsx"));
module.exports = __webpack_exports__;

})();