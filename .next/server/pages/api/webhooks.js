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
exports.id = "pages/api/webhooks";
exports.ids = ["pages/api/webhooks"];
exports.modules = {

/***/ "./src/pages/api/webhooks.ts":
/*!***********************************!*\
  !*** ./src/pages/api/webhooks.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": function() { return /* binding */ config; }\n/* harmony export */ });\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/stripe */ \"./src/services/stripe.ts\");\n\n\nasync function buffer(readable) {\n  const chunks = [];\n\n  for await (const chunk of readable) {\n    chunks.push(typeof chunk === \"string\" ? Buffer.from(chunk) : chunk);\n  }\n\n  return Buffer.concat(chunks);\n}\n\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\nconst relevantEvents = new Set(['checkout.session.completed']);\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === 'POST') {\n    const buf = await buffer(req);\n    const secret = req.headers['stripe-signature'];\n    let event;\n\n    try {\n      event = _services_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET);\n    } catch (err) {\n      return res.status(400).send(`Webhook error: ${err.message}`);\n    } // checkout.session.completed\n\n\n    const {\n      type\n    } = event;\n\n    if (relevantEvents.has(type)) {\n      console.log('Evento recebido', event);\n    }\n\n    res.json({\n      received: true\n    });\n  } else {\n    res.setHeader('Allow', 'POST');\n    res.status(405).end('Method not allowed');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2tzLnRzPzUyOWYiXSwibmFtZXMiOlsiYnVmZmVyIiwicmVhZGFibGUiLCJjaHVua3MiLCJjaHVuayIsInB1c2giLCJCdWZmZXIiLCJmcm9tIiwiY29uY2F0IiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInJlbGV2YW50RXZlbnRzIiwiU2V0IiwicmVxIiwicmVzIiwibWV0aG9kIiwiYnVmIiwic2VjcmV0IiwiaGVhZGVycyIsImV2ZW50Iiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9XRUJIT09LX1NFQ1JFVCIsImVyciIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwidHlwZSIsImhhcyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwicmVjZWl2ZWQiLCJzZXRIZWFkZXIiLCJlbmQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0E7O0FBRUEsZUFBZUEsTUFBZixDQUFzQkMsUUFBdEIsRUFBMEM7QUFDeEMsUUFBTUMsTUFBTSxHQUFHLEVBQWY7O0FBRUEsYUFBVyxNQUFNQyxLQUFqQixJQUEwQkYsUUFBMUIsRUFBb0M7QUFDbENDLFVBQU0sQ0FBQ0UsSUFBUCxDQUNFLE9BQU9ELEtBQVAsS0FBaUIsUUFBakIsR0FBNEJFLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxLQUFaLENBQTVCLEdBQWlEQSxLQURuRDtBQUdEOztBQUVELFNBQU9FLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjTCxNQUFkLENBQVA7QUFDRDs7QUFFTSxNQUFNTSxNQUFNLEdBQUc7QUFDcEJDLEtBQUcsRUFBRTtBQUNIQyxjQUFVLEVBQUU7QUFEVDtBQURlLENBQWY7QUFNUCxNQUFNQyxjQUFjLEdBQUcsSUFBSUMsR0FBSixDQUFRLENBQzdCLDRCQUQ2QixDQUFSLENBQXZCO0FBSUEsK0RBQWUsT0FBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDbEUsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsVUFBTUMsR0FBRyxHQUFHLE1BQU1oQixNQUFNLENBQUNhLEdBQUQsQ0FBeEI7QUFDQSxVQUFNSSxNQUFNLEdBQUdKLEdBQUcsQ0FBQ0ssT0FBSixDQUFZLGtCQUFaLENBQWY7QUFFQSxRQUFJQyxLQUFKOztBQUVBLFFBQUk7QUFDRkEsV0FBSyxHQUFHQyw0RUFBQSxDQUErQkosR0FBL0IsRUFBb0NDLE1BQXBDLEVBQTRDSSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMscUJBQXhELENBQVI7QUFDRCxLQUZELENBRUUsT0FBT0MsR0FBUCxFQUFZO0FBQ1osYUFBT1YsR0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBc0Isa0JBQWlCRixHQUFHLENBQUNHLE9BQVEsRUFBbkQsQ0FBUDtBQUNELEtBVndCLENBWXpCOzs7QUFDQSxVQUFNO0FBQUVDO0FBQUYsUUFBV1QsS0FBakI7O0FBRUEsUUFBSVIsY0FBYyxDQUFDa0IsR0FBZixDQUFtQkQsSUFBbkIsQ0FBSixFQUE4QjtBQUM1QkUsYUFBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JaLEtBQS9CO0FBQ0Q7O0FBRURMLE9BQUcsQ0FBQ2tCLElBQUosQ0FBUztBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUFUO0FBQ0QsR0FwQkQsTUFvQk87QUFDTG5CLE9BQUcsQ0FBQ29CLFNBQUosQ0FBYyxPQUFkLEVBQXVCLE1BQXZCO0FBQ0FwQixPQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCVSxHQUFoQixDQUFvQixvQkFBcEI7QUFDRDtBQUVGLENBMUJEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaS93ZWJob29rcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUmVhZGFibGUgfSBmcm9tICdzdHJlYW0nO1xuaW1wb3J0IFN0cmlwZSBmcm9tIFwic3RyaXBlXCI7XG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc3RyaXBlXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGJ1ZmZlcihyZWFkYWJsZTogUmVhZGFibGUpIHtcbiAgY29uc3QgY2h1bmtzID0gW107XG5cbiAgZm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiByZWFkYWJsZSkge1xuICAgIGNodW5rcy5wdXNoKFxuICAgICAgdHlwZW9mIGNodW5rID09PSBcInN0cmluZ1wiID8gQnVmZmVyLmZyb20oY2h1bmspIDogY2h1bmtcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIEJ1ZmZlci5jb25jYXQoY2h1bmtzKVxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHtcbiAgICBib2R5UGFyc2VyOiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IHJlbGV2YW50RXZlbnRzID0gbmV3IFNldChbXG4gICdjaGVja291dC5zZXNzaW9uLmNvbXBsZXRlZCdcbl0pXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgYnVmID0gYXdhaXQgYnVmZmVyKHJlcSlcbiAgICBjb25zdCBzZWNyZXQgPSByZXEuaGVhZGVyc1snc3RyaXBlLXNpZ25hdHVyZSddXG5cbiAgICBsZXQgZXZlbnQ6IFN0cmlwZS5FdmVudDtcblxuICAgIHRyeSB7XG4gICAgICBldmVudCA9IHN0cmlwZS53ZWJob29rcy5jb25zdHJ1Y3RFdmVudChidWYsIHNlY3JldCwgcHJvY2Vzcy5lbnYuU1RSSVBFX1dFQkhPT0tfU0VDUkVUKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZChgV2ViaG9vayBlcnJvcjogJHtlcnIubWVzc2FnZX1gKVxuICAgIH1cblxuICAgIC8vIGNoZWNrb3V0LnNlc3Npb24uY29tcGxldGVkXG4gICAgY29uc3QgeyB0eXBlIH0gPSBldmVudDtcblxuICAgIGlmIChyZWxldmFudEV2ZW50cy5oYXModHlwZSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFdmVudG8gcmVjZWJpZG8nLCBldmVudClcbiAgICB9XG5cbiAgICByZXMuanNvbih7IHJlY2VpdmVkOiB0cnVlIH0pXG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCAnUE9TVCcpXG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgnTWV0aG9kIG5vdCBhbGxvd2VkJylcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/webhooks.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": function() { return /* binding */ stripe; }\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n  apiVersion: '2020-08-27',\n  appInfo: {\n    name: 'Ignews',\n    version: '0.0.1'\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2Q5NjgiXSwibmFtZXMiOlsic3RyaXBlIiwiU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsK0NBQUosQ0FDcEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxjQURRLEVBRXBCO0FBQ0VDLFlBQVUsRUFBRSxZQURkO0FBRUVDLFNBQU8sRUFBRTtBQUNQQyxRQUFJLEVBQUUsUUFEQztBQUVQQyxXQUFPLEVBQUU7QUFGRjtBQUZYLENBRm9CLENBQWYiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnO1xuXG5leHBvcnQgY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShcbiAgcHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9LRVksXG4gIHtcbiAgICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXG4gICAgYXBwSW5mbzoge1xuICAgICAgbmFtZTogJ0lnbmV3cycsXG4gICAgICB2ZXJzaW9uOiAnMC4wLjEnXG4gICAgfSxcbiAgfVxuKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/webhooks.ts"));
module.exports = __webpack_exports__;

})();