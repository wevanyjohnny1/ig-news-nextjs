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

/***/ "./src/pages/api/_lib/manageSubscription.ts":
/*!**************************************************!*\
  !*** ./src/pages/api/_lib/manageSubscription.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveSubscription\": function() { return /* binding */ saveSubscription; }\n/* harmony export */ });\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/fauna */ \"./src/services/fauna.ts\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/stripe */ \"./src/services/stripe.ts\");\n\n\n\nasync function saveSubscription(subscriptionId, customerId, createAction = false) {\n  const userRef = await _services_fauna__WEBPACK_IMPORTED_MODULE_0__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Index('user_by_stripe_customer_id'), customerId))));\n  const subscription = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__.stripe.subscriptions.retrieve(subscriptionId);\n  const subscriptionData = {\n    id: subscription.id,\n    userId: userRef,\n    status: subscription.status,\n    price_id: subscription.items.data[0].price.id\n  };\n\n  if (createAction) {\n    await _services_fauna__WEBPACK_IMPORTED_MODULE_0__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Collection('subscriptions'), {\n      data: subscriptionData\n    }));\n  } else {\n    await _services_fauna__WEBPACK_IMPORTED_MODULE_0__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Replace(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_1__.query.Index('subscription_by_id'), subscriptionId))), {\n      data: subscriptionData\n    }));\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL19saWIvbWFuYWdlU3Vic2NyaXB0aW9uLnRzP2YzMDgiXSwibmFtZXMiOlsic2F2ZVN1YnNjcmlwdGlvbiIsInN1YnNjcmlwdGlvbklkIiwiY3VzdG9tZXJJZCIsImNyZWF0ZUFjdGlvbiIsInVzZXJSZWYiLCJmYXVuYSIsInEiLCJzdWJzY3JpcHRpb24iLCJzdHJpcGUiLCJzdWJzY3JpcHRpb25EYXRhIiwiaWQiLCJ1c2VySWQiLCJzdGF0dXMiLCJwcmljZV9pZCIsIml0ZW1zIiwiZGF0YSIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLGVBQWVBLGdCQUFmLENBQ0xDLGNBREssRUFFTEMsVUFGSyxFQUdMQyxZQUFZLEdBQUcsS0FIVixFQUlMO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLE1BQU1DLHdEQUFBLENBQ3BCQyxpREFBQSxDQUNFLEtBREYsRUFFRUEsOENBQUEsQ0FDRUEsZ0RBQUEsQ0FDRUEsZ0RBQUEsQ0FBUSw0QkFBUixDQURGLEVBRUVKLFVBRkYsQ0FERixDQUZGLENBRG9CLENBQXRCO0FBWUEsUUFBTUssWUFBWSxHQUFHLE1BQU1DLDJFQUFBLENBQThCUCxjQUE5QixDQUEzQjtBQUVBLFFBQU1RLGdCQUFnQixHQUFHO0FBQ3ZCQyxNQUFFLEVBQUVILFlBQVksQ0FBQ0csRUFETTtBQUV2QkMsVUFBTSxFQUFFUCxPQUZlO0FBR3ZCUSxVQUFNLEVBQUVMLFlBQVksQ0FBQ0ssTUFIRTtBQUl2QkMsWUFBUSxFQUFFTixZQUFZLENBQUNPLEtBQWIsQ0FBbUJDLElBQW5CLENBQXdCLENBQXhCLEVBQTJCQyxLQUEzQixDQUFpQ047QUFKcEIsR0FBekI7O0FBT0EsTUFBSVAsWUFBSixFQUFrQjtBQUNoQixVQUFNRSx3REFBQSxDQUNKQyxpREFBQSxDQUNFQSxxREFBQSxDQUFhLGVBQWIsQ0FERixFQUVFO0FBQUVTLFVBQUksRUFBRU47QUFBUixLQUZGLENBREksQ0FBTjtBQU1ELEdBUEQsTUFPTztBQUNMLFVBQU1KLHdEQUFBLENBQ0pDLGtEQUFBLENBQ0VBLGlEQUFBLENBQ0UsS0FERixFQUVFQSw4Q0FBQSxDQUNFQSxnREFBQSxDQUNFQSxnREFBQSxDQUFRLG9CQUFSLENBREYsRUFFRUwsY0FGRixDQURGLENBRkYsQ0FERixFQVVFO0FBQUVjLFVBQUksRUFBRU47QUFBUixLQVZGLENBREksQ0FBTjtBQWNEO0FBQ0YiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL19saWIvbWFuYWdlU3Vic2NyaXB0aW9uLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmF1bmEgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvZmF1bmFcIjtcbmltcG9ydCB7IHF1ZXJ5IGFzIHEgfSBmcm9tICdmYXVuYWRiJztcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9zdHJpcGVcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVTdWJzY3JpcHRpb24oXG4gIHN1YnNjcmlwdGlvbklkOiBzdHJpbmcsXG4gIGN1c3RvbWVySWQ6IHN0cmluZyxcbiAgY3JlYXRlQWN0aW9uID0gZmFsc2Vcbikge1xuICBjb25zdCB1c2VyUmVmID0gYXdhaXQgZmF1bmEucXVlcnkoXG4gICAgcS5TZWxlY3QoXG4gICAgICBcInJlZlwiLFxuICAgICAgcS5HZXQoXG4gICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgcS5JbmRleCgndXNlcl9ieV9zdHJpcGVfY3VzdG9tZXJfaWQnKSxcbiAgICAgICAgICBjdXN0b21lcklkXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIClcblxuICBjb25zdCBzdWJzY3JpcHRpb24gPSBhd2FpdCBzdHJpcGUuc3Vic2NyaXB0aW9ucy5yZXRyaWV2ZShzdWJzY3JpcHRpb25JZCk7XG5cbiAgY29uc3Qgc3Vic2NyaXB0aW9uRGF0YSA9IHtcbiAgICBpZDogc3Vic2NyaXB0aW9uLmlkLFxuICAgIHVzZXJJZDogdXNlclJlZixcbiAgICBzdGF0dXM6IHN1YnNjcmlwdGlvbi5zdGF0dXMsXG4gICAgcHJpY2VfaWQ6IHN1YnNjcmlwdGlvbi5pdGVtcy5kYXRhWzBdLnByaWNlLmlkLFxuICB9XG5cbiAgaWYgKGNyZWF0ZUFjdGlvbikge1xuICAgIGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgICAgcS5DcmVhdGUoXG4gICAgICAgIHEuQ29sbGVjdGlvbignc3Vic2NyaXB0aW9ucycpLFxuICAgICAgICB7IGRhdGE6IHN1YnNjcmlwdGlvbkRhdGEgfVxuICAgICAgKVxuICAgIClcbiAgfSBlbHNlIHtcbiAgICBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgIHEuUmVwbGFjZShcbiAgICAgICAgcS5TZWxlY3QoXG4gICAgICAgICAgXCJyZWZcIixcbiAgICAgICAgICBxLkdldChcbiAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgIHEuSW5kZXgoJ3N1YnNjcmlwdGlvbl9ieV9pZCcpLFxuICAgICAgICAgICAgICBzdWJzY3JpcHRpb25JZFxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgeyBkYXRhOiBzdWJzY3JpcHRpb25EYXRhIH1cbiAgICAgIClcbiAgICApXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/_lib/manageSubscription.ts\n");

/***/ }),

/***/ "./src/pages/api/webhooks.ts":
/*!***********************************!*\
  !*** ./src/pages/api/webhooks.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": function() { return /* binding */ config; }\n/* harmony export */ });\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var _lib_manageSubscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/manageSubscription */ \"./src/pages/api/_lib/manageSubscription.ts\");\n\n\n\nasync function buffer(readable) {\n  const chunks = [];\n\n  for await (const chunk of readable) {\n    chunks.push(typeof chunk === \"string\" ? Buffer.from(chunk) : chunk);\n  }\n\n  return Buffer.concat(chunks);\n}\n\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\nconst relevantEvents = new Set(['checkout.session.completed', 'checkout.subscription.updated', 'checkout.subscription.deleted']);\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === 'POST') {\n    const buf = await buffer(req);\n    const secret = req.headers['stripe-signature'];\n    let event;\n\n    try {\n      event = _services_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET);\n    } catch (err) {\n      return res.status(400).send(`Webhook error: ${err.message}`);\n    } // checkout.session.completed\n\n\n    const {\n      type\n    } = event;\n\n    if (relevantEvents.has(type)) {\n      try {\n        switch (type) {\n          case 'checkout.subscription.updated':\n          case 'checkout.subscription.deleted':\n            const subscription = event.data.object;\n            await (0,_lib_manageSubscription__WEBPACK_IMPORTED_MODULE_1__.saveSubscription)(subscription.id, subscription.customer.toString(), false);\n            break;\n\n          case 'checkout.session.completed':\n            const checkoutSession = event.data.object;\n            await (0,_lib_manageSubscription__WEBPACK_IMPORTED_MODULE_1__.saveSubscription)(checkoutSession.subscription.toString(), checkoutSession.customer.toString(), true);\n            break;\n\n          default:\n            throw new Error('Unhandled event.');\n        }\n      } catch {\n        return res.json({\n          error: 'Webhook handler failed.'\n        });\n      }\n    }\n\n    res.json({\n      received: true\n    });\n  } else {\n    res.setHeader('Allow', 'POST');\n    res.status(405).end('Method not allowed');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2tzLnRzPzUyOWYiXSwibmFtZXMiOlsiYnVmZmVyIiwicmVhZGFibGUiLCJjaHVua3MiLCJjaHVuayIsInB1c2giLCJCdWZmZXIiLCJmcm9tIiwiY29uY2F0IiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInJlbGV2YW50RXZlbnRzIiwiU2V0IiwicmVxIiwicmVzIiwibWV0aG9kIiwiYnVmIiwic2VjcmV0IiwiaGVhZGVycyIsImV2ZW50Iiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9XRUJIT09LX1NFQ1JFVCIsImVyciIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwidHlwZSIsImhhcyIsInN1YnNjcmlwdGlvbiIsImRhdGEiLCJvYmplY3QiLCJzYXZlU3Vic2NyaXB0aW9uIiwiaWQiLCJjdXN0b21lciIsInRvU3RyaW5nIiwiY2hlY2tvdXRTZXNzaW9uIiwiRXJyb3IiLCJqc29uIiwiZXJyb3IiLCJyZWNlaXZlZCIsInNldEhlYWRlciIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0E7QUFDQTs7QUFFQSxlQUFlQSxNQUFmLENBQXNCQyxRQUF0QixFQUEwQztBQUN4QyxRQUFNQyxNQUFNLEdBQUcsRUFBZjs7QUFFQSxhQUFXLE1BQU1DLEtBQWpCLElBQTBCRixRQUExQixFQUFvQztBQUNsQ0MsVUFBTSxDQUFDRSxJQUFQLENBQ0UsT0FBT0QsS0FBUCxLQUFpQixRQUFqQixHQUE0QkUsTUFBTSxDQUFDQyxJQUFQLENBQVlILEtBQVosQ0FBNUIsR0FBaURBLEtBRG5EO0FBR0Q7O0FBRUQsU0FBT0UsTUFBTSxDQUFDRSxNQUFQLENBQWNMLE1BQWQsQ0FBUDtBQUNEOztBQUVNLE1BQU1NLE1BQU0sR0FBRztBQUNwQkMsS0FBRyxFQUFFO0FBQ0hDLGNBQVUsRUFBRTtBQURUO0FBRGUsQ0FBZjtBQU1QLE1BQU1DLGNBQWMsR0FBRyxJQUFJQyxHQUFKLENBQVEsQ0FDN0IsNEJBRDZCLEVBRTdCLCtCQUY2QixFQUc3QiwrQkFINkIsQ0FBUixDQUF2QjtBQU1BLCtEQUFlLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0FBQ2xFLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQU1DLEdBQUcsR0FBRyxNQUFNaEIsTUFBTSxDQUFDYSxHQUFELENBQXhCO0FBQ0EsVUFBTUksTUFBTSxHQUFHSixHQUFHLENBQUNLLE9BQUosQ0FBWSxrQkFBWixDQUFmO0FBRUEsUUFBSUMsS0FBSjs7QUFFQSxRQUFJO0FBQ0ZBLFdBQUssR0FBR0MsNEVBQUEsQ0FBK0JKLEdBQS9CLEVBQW9DQyxNQUFwQyxFQUE0Q0ksT0FBTyxDQUFDQyxHQUFSLENBQVlDLHFCQUF4RCxDQUFSO0FBQ0QsS0FGRCxDQUVFLE9BQU9DLEdBQVAsRUFBWTtBQUNaLGFBQU9WLEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXNCLGtCQUFpQkYsR0FBRyxDQUFDRyxPQUFRLEVBQW5ELENBQVA7QUFDRCxLQVZ3QixDQVl6Qjs7O0FBQ0EsVUFBTTtBQUFFQztBQUFGLFFBQVdULEtBQWpCOztBQUVBLFFBQUlSLGNBQWMsQ0FBQ2tCLEdBQWYsQ0FBbUJELElBQW5CLENBQUosRUFBOEI7QUFDNUIsVUFBSTtBQUNGLGdCQUFRQSxJQUFSO0FBQ0UsZUFBSywrQkFBTDtBQUNBLGVBQUssK0JBQUw7QUFFRSxrQkFBTUUsWUFBWSxHQUFHWCxLQUFLLENBQUNZLElBQU4sQ0FBV0MsTUFBaEM7QUFFQSxrQkFBTUMseUVBQWdCLENBQ3BCSCxZQUFZLENBQUNJLEVBRE8sRUFFcEJKLFlBQVksQ0FBQ0ssUUFBYixDQUFzQkMsUUFBdEIsRUFGb0IsRUFHcEIsS0FIb0IsQ0FBdEI7QUFNQTs7QUFDRixlQUFLLDRCQUFMO0FBRUUsa0JBQU1DLGVBQWUsR0FBR2xCLEtBQUssQ0FBQ1ksSUFBTixDQUFXQyxNQUFuQztBQUVBLGtCQUFNQyx5RUFBZ0IsQ0FDcEJJLGVBQWUsQ0FBQ1AsWUFBaEIsQ0FBNkJNLFFBQTdCLEVBRG9CLEVBRXBCQyxlQUFlLENBQUNGLFFBQWhCLENBQXlCQyxRQUF6QixFQUZvQixFQUdwQixJQUhvQixDQUF0QjtBQU1BOztBQUNGO0FBQ0Usa0JBQU0sSUFBSUUsS0FBSixDQUFVLGtCQUFWLENBQU47QUF6Qko7QUEyQkQsT0E1QkQsQ0E0QkUsTUFBTTtBQUNOLGVBQU94QixHQUFHLENBQUN5QixJQUFKLENBQVM7QUFBRUMsZUFBSyxFQUFFO0FBQVQsU0FBVCxDQUFQO0FBQ0Q7QUFDRjs7QUFFRDFCLE9BQUcsQ0FBQ3lCLElBQUosQ0FBUztBQUFFRSxjQUFRLEVBQUU7QUFBWixLQUFUO0FBQ0QsR0FsREQsTUFrRE87QUFDTDNCLE9BQUcsQ0FBQzRCLFNBQUosQ0FBYyxPQUFkLEVBQXVCLE1BQXZCO0FBQ0E1QixPQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCa0IsR0FBaEIsQ0FBb0Isb0JBQXBCO0FBQ0Q7QUFFRixDQXhERCIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvd2ViaG9va3MudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IFJlYWRhYmxlIH0gZnJvbSAnc3RyZWFtJztcbmltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiO1xuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0cmlwZVwiO1xuaW1wb3J0IHsgc2F2ZVN1YnNjcmlwdGlvbiB9IGZyb20gXCIuL19saWIvbWFuYWdlU3Vic2NyaXB0aW9uXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGJ1ZmZlcihyZWFkYWJsZTogUmVhZGFibGUpIHtcbiAgY29uc3QgY2h1bmtzID0gW107XG5cbiAgZm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiByZWFkYWJsZSkge1xuICAgIGNodW5rcy5wdXNoKFxuICAgICAgdHlwZW9mIGNodW5rID09PSBcInN0cmluZ1wiID8gQnVmZmVyLmZyb20oY2h1bmspIDogY2h1bmtcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIEJ1ZmZlci5jb25jYXQoY2h1bmtzKVxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHtcbiAgICBib2R5UGFyc2VyOiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IHJlbGV2YW50RXZlbnRzID0gbmV3IFNldChbXG4gICdjaGVja291dC5zZXNzaW9uLmNvbXBsZXRlZCcsXG4gICdjaGVja291dC5zdWJzY3JpcHRpb24udXBkYXRlZCcsXG4gICdjaGVja291dC5zdWJzY3JpcHRpb24uZGVsZXRlZCdcbl0pXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgYnVmID0gYXdhaXQgYnVmZmVyKHJlcSlcbiAgICBjb25zdCBzZWNyZXQgPSByZXEuaGVhZGVyc1snc3RyaXBlLXNpZ25hdHVyZSddXG5cbiAgICBsZXQgZXZlbnQ6IFN0cmlwZS5FdmVudDtcblxuICAgIHRyeSB7XG4gICAgICBldmVudCA9IHN0cmlwZS53ZWJob29rcy5jb25zdHJ1Y3RFdmVudChidWYsIHNlY3JldCwgcHJvY2Vzcy5lbnYuU1RSSVBFX1dFQkhPT0tfU0VDUkVUKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZChgV2ViaG9vayBlcnJvcjogJHtlcnIubWVzc2FnZX1gKVxuICAgIH1cblxuICAgIC8vIGNoZWNrb3V0LnNlc3Npb24uY29tcGxldGVkXG4gICAgY29uc3QgeyB0eXBlIH0gPSBldmVudDtcblxuICAgIGlmIChyZWxldmFudEV2ZW50cy5oYXModHlwZSkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2NoZWNrb3V0LnN1YnNjcmlwdGlvbi51cGRhdGVkJzpcbiAgICAgICAgICBjYXNlICdjaGVja291dC5zdWJzY3JpcHRpb24uZGVsZXRlZCc6XG5cbiAgICAgICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGV2ZW50LmRhdGEub2JqZWN0IGFzIFN0cmlwZS5TdWJzY3JpcHRpb247XG5cbiAgICAgICAgICAgIGF3YWl0IHNhdmVTdWJzY3JpcHRpb24oXG4gICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5pZCxcbiAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmN1c3RvbWVyLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjaGVja291dC5zZXNzaW9uLmNvbXBsZXRlZCc6XG5cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrb3V0U2Vzc2lvbiA9IGV2ZW50LmRhdGEub2JqZWN0IGFzIFN0cmlwZS5DaGVja291dC5TZXNzaW9uXG5cbiAgICAgICAgICAgIGF3YWl0IHNhdmVTdWJzY3JpcHRpb24oXG4gICAgICAgICAgICAgIGNoZWNrb3V0U2Vzc2lvbi5zdWJzY3JpcHRpb24udG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgY2hlY2tvdXRTZXNzaW9uLmN1c3RvbWVyLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5oYW5kbGVkIGV2ZW50LicpXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oeyBlcnJvcjogJ1dlYmhvb2sgaGFuZGxlciBmYWlsZWQuJyB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJlcy5qc29uKHsgcmVjZWl2ZWQ6IHRydWUgfSlcbiAgfSBlbHNlIHtcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsICdQT1NUJylcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKCdNZXRob2Qgbm90IGFsbG93ZWQnKVxuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/webhooks.ts\n");

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