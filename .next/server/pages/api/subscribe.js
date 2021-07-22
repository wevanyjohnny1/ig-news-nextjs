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
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "./src/pages/api/subscribe.ts":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/fauna */ \"./src/services/fauna.ts\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stripe */ \"./src/services/stripe.ts\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === 'POST') {\n    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n      req\n    });\n    const user = await _services_fauna__WEBPACK_IMPORTED_MODULE_1__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Casefold(session.user.email))));\n    let customerId = user.data.stripe_customer_id;\n\n    if (!customerId) {\n      const stripeCustumer = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.customers.create({\n        email: session.user.email\n      });\n      await _services_fauna__WEBPACK_IMPORTED_MODULE_1__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Update(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Ref(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Collection('users'), user.ref.id), {\n        data: {\n          stripe_customer_id: stripeCustumer.id\n        }\n      }));\n      customerId = stripeCustumer.id;\n    }\n\n    const stripeCheckoutSession = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.checkout.sessions.create({\n      customer: customerId,\n      payment_method_types: ['card'],\n      billing_address_collection: 'required',\n      line_items: [{\n        price: 'price_1JCnU1AeHWBbK2XYjpmIC69s',\n        quantity: 1\n      }],\n      mode: 'subscription',\n      allow_promotion_codes: true,\n      success_url: process.env.STRIPE_SUCCESS_URL,\n      cancel_url: process.env.STRIPE_CANCEL_URL\n    });\n    return res.status(200).json({\n      sessionId: stripeCheckoutSession.id\n    });\n  } else {\n    res.setHeader('Allow', 'POST');\n    res.status(405).end('Method not allowed');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cz81NWE1Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwidXNlciIsImZhdW5hIiwicSIsImVtYWlsIiwiY3VzdG9tZXJJZCIsImRhdGEiLCJzdHJpcGVfY3VzdG9tZXJfaWQiLCJzdHJpcGVDdXN0dW1lciIsInN0cmlwZSIsInJlZiIsImlkIiwic3RyaXBlQ2hlY2tvdXRTZXNzaW9uIiwiY3VzdG9tZXIiLCJwYXltZW50X21ldGhvZF90eXBlcyIsImJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uIiwibGluZV9pdGVtcyIsInByaWNlIiwicXVhbnRpdHkiLCJtb2RlIiwiYWxsb3dfcHJvbW90aW9uX2NvZGVzIiwic3VjY2Vzc191cmwiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NVQ0NFU1NfVVJMIiwiY2FuY2VsX3VybCIsIlNUUklQRV9DQU5DRUxfVVJMIiwic3RhdHVzIiwianNvbiIsInNlc3Npb25JZCIsInNldEhlYWRlciIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0EsK0RBQWUsT0FBT0EsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDbEUsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsVUFBTUMsT0FBTyxHQUFHLE1BQU1DLDREQUFVLENBQUM7QUFBRUo7QUFBRixLQUFELENBQWhDO0FBRUEsVUFBTUssSUFBSSxHQUFHLE1BQU1DLHdEQUFBLENBQ2pCQyw4Q0FBQSxDQUNFQSxnREFBQSxDQUNFQSxnREFBQSxDQUFRLGVBQVIsQ0FERixFQUVFQSxtREFBQSxDQUFXSixPQUFPLENBQUNFLElBQVIsQ0FBYUcsS0FBeEIsQ0FGRixDQURGLENBRGlCLENBQW5CO0FBU0EsUUFBSUMsVUFBVSxHQUFHSixJQUFJLENBQUNLLElBQUwsQ0FBVUMsa0JBQTNCOztBQUVBLFFBQUksQ0FBQ0YsVUFBTCxFQUFpQjtBQUNmLFlBQU1HLGNBQWMsR0FBRyxNQUFNQyxxRUFBQSxDQUF3QjtBQUNuREwsYUFBSyxFQUFFTCxPQUFPLENBQUNFLElBQVIsQ0FBYUc7QUFEK0IsT0FBeEIsQ0FBN0I7QUFJQSxZQUFNRix3REFBQSxDQUNKQyxpREFBQSxDQUNFQSw4Q0FBQSxDQUFNQSxxREFBQSxDQUFhLE9BQWIsQ0FBTixFQUE2QkYsSUFBSSxDQUFDUyxHQUFMLENBQVNDLEVBQXRDLENBREYsRUFFRTtBQUNFTCxZQUFJLEVBQUU7QUFDSkMsNEJBQWtCLEVBQUVDLGNBQWMsQ0FBQ0c7QUFEL0I7QUFEUixPQUZGLENBREksQ0FBTjtBQVdBTixnQkFBVSxHQUFHRyxjQUFjLENBQUNHLEVBQTVCO0FBQ0Q7O0FBRUQsVUFBTUMscUJBQXFCLEdBQUcsTUFBTUgsNkVBQUEsQ0FBZ0M7QUFDbEVJLGNBQVEsRUFBRVIsVUFEd0Q7QUFFbEVTLDBCQUFvQixFQUFFLENBQUMsTUFBRCxDQUY0QztBQUdsRUMsZ0NBQTBCLEVBQUUsVUFIc0M7QUFJbEVDLGdCQUFVLEVBQUUsQ0FDVjtBQUFFQyxhQUFLLEVBQUUsZ0NBQVQ7QUFBMkNDLGdCQUFRLEVBQUU7QUFBckQsT0FEVSxDQUpzRDtBQU9sRUMsVUFBSSxFQUFFLGNBUDREO0FBUWxFQywyQkFBcUIsRUFBRSxJQVIyQztBQVNsRUMsaUJBQVcsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGtCQVR5QztBQVVsRUMsZ0JBQVUsRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHO0FBVjBDLEtBQWhDLENBQXBDO0FBYUEsV0FBTzdCLEdBQUcsQ0FBQzhCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxlQUFTLEVBQUVqQixxQkFBcUIsQ0FBQ0Q7QUFBbkMsS0FBckIsQ0FBUDtBQUNELEdBL0NELE1BK0NPO0FBQ0xkLE9BQUcsQ0FBQ2lDLFNBQUosQ0FBYyxPQUFkLEVBQXVCLE1BQXZCO0FBQ0FqQyxPQUFHLENBQUM4QixNQUFKLENBQVcsR0FBWCxFQUFnQkksR0FBaEIsQ0FBb0Isb0JBQXBCO0FBQ0Q7QUFDRixDQXBERCIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvc3Vic2NyaWJlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCc7XG5pbXBvcnQgeyBmYXVuYSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mYXVuYVwiO1xuaW1wb3J0IHsgcXVlcnkgYXMgcSB9IGZyb20gJ2ZhdW5hZGInO1xuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0cmlwZVwiO1xuXG50eXBlIFVzZXIgPSB7XG4gIHJlZjoge1xuICAgIGlkOiBzdHJpbmc7XG4gIH1cbiAgZGF0YToge1xuICAgIHN0cmlwZV9jdXN0b21lcl9pZDogc3RyaW5nXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBmYXVuYS5xdWVyeTxVc2VyPihcbiAgICAgIHEuR2V0KFxuICAgICAgICBxLk1hdGNoKFxuICAgICAgICAgIHEuSW5kZXgoJ3VzZXJfYnlfZW1haWwnKSxcbiAgICAgICAgICBxLkNhc2Vmb2xkKHNlc3Npb24udXNlci5lbWFpbClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcblxuICAgIGxldCBjdXN0b21lcklkID0gdXNlci5kYXRhLnN0cmlwZV9jdXN0b21lcl9pZFxuXG4gICAgaWYgKCFjdXN0b21lcklkKSB7XG4gICAgICBjb25zdCBzdHJpcGVDdXN0dW1lciA9IGF3YWl0IHN0cmlwZS5jdXN0b21lcnMuY3JlYXRlKHtcbiAgICAgICAgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCxcbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgcS5VcGRhdGUoXG4gICAgICAgICAgcS5SZWYocS5Db2xsZWN0aW9uKCd1c2VycycpLCB1c2VyLnJlZi5pZCksXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBzdHJpcGVfY3VzdG9tZXJfaWQ6IHN0cmlwZUN1c3R1bWVyLmlkLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICBjdXN0b21lcklkID0gc3RyaXBlQ3VzdHVtZXIuaWQ7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaXBlQ2hlY2tvdXRTZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgICBjdXN0b21lcjogY3VzdG9tZXJJZCxcbiAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbJ2NhcmQnXSxcbiAgICAgIGJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiAncmVxdWlyZWQnLFxuICAgICAgbGluZV9pdGVtczogW1xuICAgICAgICB7IHByaWNlOiAncHJpY2VfMUpDblUxQWVIV0JiSzJYWWpwbUlDNjlzJywgcXVhbnRpdHk6IDEgfVxuICAgICAgXSxcbiAgICAgIG1vZGU6ICdzdWJzY3JpcHRpb24nLFxuICAgICAgYWxsb3dfcHJvbW90aW9uX2NvZGVzOiB0cnVlLFxuICAgICAgc3VjY2Vzc191cmw6IHByb2Nlc3MuZW52LlNUUklQRV9TVUNDRVNTX1VSTCxcbiAgICAgIGNhbmNlbF91cmw6IHByb2Nlc3MuZW52LlNUUklQRV9DQU5DRUxfVVJMXG4gICAgfSlcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IHNlc3Npb25JZDogc3RyaXBlQ2hlY2tvdXRTZXNzaW9uLmlkIH0pXG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCAnUE9TVCcpXG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgnTWV0aG9kIG5vdCBhbGxvd2VkJylcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/subscribe.ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": function() { return /* binding */ fauna; }\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n  secret: process.env.FAUNADB_KEY\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvZmF1bmEudHM/OGY0ZCJdLCJuYW1lcyI6WyJmYXVuYSIsIkNsaWVudCIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX0tFWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxLQUFLLEdBQUcsSUFBSUMsMkNBQUosQ0FBVztBQUM5QkMsUUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFEVSxDQUFYLENBQWQiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdmYXVuYWRiJztcblxuZXhwb3J0IGNvbnN0IGZhdW5hID0gbmV3IENsaWVudCh7XG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuRkFVTkFEQl9LRVlcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": function() { return /* binding */ stripe; }\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n  apiVersion: '2020-08-27',\n  appInfo: {\n    name: 'Ignews',\n    version: '0.0.1'\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2Q5NjgiXSwibmFtZXMiOlsic3RyaXBlIiwiU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsK0NBQUosQ0FDcEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxjQURRLEVBRXBCO0FBQ0VDLFlBQVUsRUFBRSxZQURkO0FBRUVDLFNBQU8sRUFBRTtBQUNQQyxRQUFJLEVBQUUsUUFEQztBQUVQQyxXQUFPLEVBQUU7QUFGRjtBQUZYLENBRm9CLENBQWYiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnO1xuXG5leHBvcnQgY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShcbiAgcHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9LRVksXG4gIHtcbiAgICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXG4gICAgYXBwSW5mbzoge1xuICAgICAgbmFtZTogJ0lnbmV3cycsXG4gICAgICB2ZXJzaW9uOiAnMC4wLjEnXG4gICAgfSxcbiAgfVxuKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("faunadb");;

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/subscribe.ts"));
module.exports = __webpack_exports__;

})();