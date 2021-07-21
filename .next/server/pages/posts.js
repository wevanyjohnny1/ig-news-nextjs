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
exports.id = "pages/posts";
exports.ids = ["pages/posts"];
exports.modules = {

/***/ "./src/pages/posts/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/posts/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Posts; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/prismic */ \"./src/services/prismic.ts\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismic-dom */ \"prismic-dom\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/pages/posts/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/johnny/Desktop/projetosweb/ig-news-nextjs/src/pages/posts/index.tsx\";\n\n\n\n\n\nfunction Posts({\n  posts\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Posts | Ignews\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().posts),\n        children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          href: \"#\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n            children: post.updatedAt\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n            children: post.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: post.excerpt\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 15\n          }, this)]\n        }, post.slug, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 13\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nconst getStaticProps = async () => {\n  const prismic = (0,_services_prismic__WEBPACK_IMPORTED_MODULE_3__.getPrismicClient)();\n  const response = await prismic.query([_prismicio_client__WEBPACK_IMPORTED_MODULE_2___default().predicates.at('document.type', 'post')], {\n    fetch: ['post.title', 'post.content'],\n    pageSize: 100\n  });\n  const posts = response.results.map(post => {\n    var _post$data$content$fi, _post$data$content$fi2;\n\n    return {\n      slug: post.uid,\n      title: prismic_dom__WEBPACK_IMPORTED_MODULE_4__.RichText.asText(post.data.title),\n      // O código abaixo é para evitar que o resumo seja uma imagem, caso não tenha ele não retorna nada\n      excerpt: (_post$data$content$fi = (_post$data$content$fi2 = post.data.content.find(content => content.type === 'paragraph')) === null || _post$data$content$fi2 === void 0 ? void 0 : _post$data$content$fi2.text) !== null && _post$data$content$fi !== void 0 ? _post$data$content$fi : '',\n      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {\n        day: '2-digit',\n        month: 'long',\n        year: 'numeric'\n      })\n    };\n  });\n  return {\n    props: {\n      posts\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvaW5kZXgudHN4Pzc2OTUiXSwibmFtZXMiOlsiUG9zdHMiLCJwb3N0cyIsInN0eWxlcyIsIm1hcCIsInBvc3QiLCJ1cGRhdGVkQXQiLCJ0aXRsZSIsImV4Y2VycHQiLCJzbHVnIiwiZ2V0U3RhdGljUHJvcHMiLCJwcmlzbWljIiwiZ2V0UHJpc21pY0NsaWVudCIsInJlc3BvbnNlIiwicXVlcnkiLCJQcmlzbWljIiwiZmV0Y2giLCJwYWdlU2l6ZSIsInJlc3VsdHMiLCJ1aWQiLCJSaWNoVGV4dCIsImRhdGEiLCJjb250ZW50IiwiZmluZCIsInR5cGUiLCJ0ZXh0IiwiRGF0ZSIsImxhc3RfcHVibGljYXRpb25fZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFlLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQztBQUFGLENBQWYsRUFBc0M7QUFDbkQsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBTSxlQUFTLEVBQUVDLHNFQUFqQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUEsa0VBQWhCO0FBQUEsa0JBQ0dELEtBQUssQ0FBQ0UsR0FBTixDQUFVQyxJQUFJLGlCQUNiO0FBQW1CLGNBQUksRUFBQyxHQUF4QjtBQUFBLGtDQUNFO0FBQUEsc0JBQU9BLElBQUksQ0FBQ0M7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxzQkFBU0QsSUFBSSxDQUFDRTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFHRTtBQUFBLHNCQUFJRixJQUFJLENBQUNHO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRjtBQUFBLFdBQVFILElBQUksQ0FBQ0ksSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBLGtCQURGO0FBbUJEO0FBRU0sTUFBTUMsY0FBOEIsR0FBRyxZQUFZO0FBQ3hELFFBQU1DLE9BQU8sR0FBR0MsbUVBQWdCLEVBQWhDO0FBRUEsUUFBTUMsUUFBUSxHQUFHLE1BQU1GLE9BQU8sQ0FBQ0csS0FBUixDQUFjLENBQ25DQyxzRUFBQSxDQUFzQixlQUF0QixFQUF1QyxNQUF2QyxDQURtQyxDQUFkLEVBRXBCO0FBQ0RDLFNBQUssRUFBRSxDQUFDLFlBQUQsRUFBZSxjQUFmLENBRE47QUFFREMsWUFBUSxFQUFFO0FBRlQsR0FGb0IsQ0FBdkI7QUFPQSxRQUFNZixLQUFLLEdBQUdXLFFBQVEsQ0FBQ0ssT0FBVCxDQUFpQmQsR0FBakIsQ0FBcUJDLElBQUksSUFBSTtBQUFBOztBQUN6QyxXQUFPO0FBQ0xJLFVBQUksRUFBRUosSUFBSSxDQUFDYyxHQUROO0FBRUxaLFdBQUssRUFBRWEsd0RBQUEsQ0FBZ0JmLElBQUksQ0FBQ2dCLElBQUwsQ0FBVWQsS0FBMUIsQ0FGRjtBQUdMO0FBQ0FDLGFBQU8scURBQUVILElBQUksQ0FBQ2dCLElBQUwsQ0FBVUMsT0FBVixDQUFrQkMsSUFBbEIsQ0FBdUJELE9BQU8sSUFBSUEsT0FBTyxDQUFDRSxJQUFSLEtBQWlCLFdBQW5ELENBQUYsMkRBQUUsdUJBQWlFQyxJQUFuRSx5RUFBMkUsRUFKN0U7QUFLTG5CLGVBQVMsRUFBRSxJQUFJb0IsSUFBSixDQUFTckIsSUFBSSxDQUFDc0IscUJBQWQsRUFBcUNDLGtCQUFyQyxDQUF3RCxPQUF4RCxFQUFpRTtBQUMxRUMsV0FBRyxFQUFFLFNBRHFFO0FBRTFFQyxhQUFLLEVBQUUsTUFGbUU7QUFHMUVDLFlBQUksRUFBRTtBQUhvRSxPQUFqRTtBQUxOLEtBQVA7QUFXRCxHQVphLENBQWQ7QUFjQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMOUI7QUFESztBQURGLEdBQVA7QUFLRCxDQTdCTSIsImZpbGUiOiIuL3NyYy9wYWdlcy9wb3N0cy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBQcmlzbWljIGZyb20gJ0BwcmlzbWljaW8vY2xpZW50JztcbmltcG9ydCB7IGdldFByaXNtaWNDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcmlzbWljJztcbmltcG9ydCB7IFJpY2hUZXh0IH0gZnJvbSAncHJpc21pYy1kb20nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XG5cbnR5cGUgUG9zdCA9IHtcbiAgc2x1Zzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBleGNlcnB0OiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUG9zdHNQcm9wcyB7XG4gIHBvc3RzOiBQb3N0W11cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoeyBwb3N0cyB9OiBQb3N0c1Byb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UG9zdHMgfCBJZ25ld3M8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RzfT5cbiAgICAgICAgICB7cG9zdHMubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgPGEga2V5PXtwb3N0LnNsdWd9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgIDx0aW1lPntwb3N0LnVwZGF0ZWRBdH08L3RpbWU+XG4gICAgICAgICAgICAgIDxzdHJvbmc+e3Bvc3QudGl0bGV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxwPntwb3N0LmV4Y2VycHR9PC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcHJpc21pYyA9IGdldFByaXNtaWNDbGllbnQoKVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcHJpc21pYy5xdWVyeShbXG4gICAgUHJpc21pYy5wcmVkaWNhdGVzLmF0KCdkb2N1bWVudC50eXBlJywgJ3Bvc3QnKVxuICBdLCB7XG4gICAgZmV0Y2g6IFsncG9zdC50aXRsZScsICdwb3N0LmNvbnRlbnQnXSxcbiAgICBwYWdlU2l6ZTogMTAwXG4gIH0pXG5cbiAgY29uc3QgcG9zdHMgPSByZXNwb25zZS5yZXN1bHRzLm1hcChwb3N0ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2x1ZzogcG9zdC51aWQsXG4gICAgICB0aXRsZTogUmljaFRleHQuYXNUZXh0KHBvc3QuZGF0YS50aXRsZSksXG4gICAgICAvLyBPIGPDs2RpZ28gYWJhaXhvIMOpIHBhcmEgZXZpdGFyIHF1ZSBvIHJlc3VtbyBzZWphIHVtYSBpbWFnZW0sIGNhc28gbsOjbyB0ZW5oYSBlbGUgbsOjbyByZXRvcm5hIG5hZGFcbiAgICAgIGV4Y2VycHQ6IHBvc3QuZGF0YS5jb250ZW50LmZpbmQoY29udGVudCA9PiBjb250ZW50LnR5cGUgPT09ICdwYXJhZ3JhcGgnKT8udGV4dCA/PyAnJyxcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUocG9zdC5sYXN0X3B1YmxpY2F0aW9uX2RhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygncHQtQlInLCB7XG4gICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICB5ZWFyOiAnbnVtZXJpYydcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzXG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts/index.tsx\n");

/***/ }),

/***/ "./src/services/prismic.ts":
/*!*********************************!*\
  !*** ./src/services/prismic.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPrismicClient\": function() { return /* binding */ getPrismicClient; }\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getPrismicClient(req) {\n  const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default().client(process.env.PRISMIC_ENDPOINT, {\n    req,\n    accessToken: process.env.PRISMIC_ACCESS_TOKEN\n  });\n  return prismic;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvcHJpc21pYy50cz84YzUwIl0sIm5hbWVzIjpbImdldFByaXNtaWNDbGllbnQiLCJyZXEiLCJwcmlzbWljIiwiUHJpc21pYyIsInByb2Nlc3MiLCJlbnYiLCJQUklTTUlDX0VORFBPSU5UIiwiYWNjZXNzVG9rZW4iLCJQUklTTUlDX0FDQ0VTU19UT0tFTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxTQUFTQSxnQkFBVCxDQUEwQkMsR0FBMUIsRUFBeUM7QUFDOUMsUUFBTUMsT0FBTyxHQUFHQywrREFBQSxDQUNkQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBREUsRUFFZDtBQUNFTCxPQURGO0FBRUVNLGVBQVcsRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHO0FBRjNCLEdBRmMsQ0FBaEI7QUFRQSxTQUFPTixPQUFQO0FBQ0QiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvcHJpc21pYy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmlzbWljIGZyb20gJ0BwcmlzbWljaW8vY2xpZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByaXNtaWNDbGllbnQocmVxPzogdW5rbm93bikge1xuICBjb25zdCBwcmlzbWljID0gUHJpc21pYy5jbGllbnQoXG4gICAgcHJvY2Vzcy5lbnYuUFJJU01JQ19FTkRQT0lOVCxcbiAgICB7XG4gICAgICByZXEsXG4gICAgICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuUFJJU01JQ19BQ0NFU1NfVE9LRU5cbiAgICB9XG4gIClcblxuICByZXR1cm4gcHJpc21pYztcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/prismic.ts\n");

/***/ }),

/***/ "./src/pages/posts/styles.module.scss":
/*!********************************************!*\
  !*** ./src/pages/posts/styles.module.scss ***!
  \********************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"styles_container__ly6-1\",\n\t\"posts\": \"styles_posts__165L0\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvc3R5bGVzLm1vZHVsZS5zY3NzPzQyMTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9wYWdlcy9wb3N0cy9zdHlsZXMubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJzdHlsZXNfY29udGFpbmVyX19seTYtMVwiLFxuXHRcInBvc3RzXCI6IFwic3R5bGVzX3Bvc3RzX18xNjVMMFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts/styles.module.scss\n");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/posts/index.tsx"));
module.exports = __webpack_exports__;

})();