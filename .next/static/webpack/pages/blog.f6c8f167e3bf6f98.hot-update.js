"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./components/PostBox.tsx":
/*!********************************!*\
  !*** ./components/PostBox.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_PostBox_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/PostBox.module.css */ \"./styles/components/PostBox.module.css\");\n/* harmony import */ var _styles_components_PostBox_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_PostBox_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar PostBox = function(param) {\n    var _post = param.post, title = _post.title, date = _post.date, excerpt = _post.excerpt, image = _post.image, slug = param.slug, index = param.index;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_PostBox_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"post-container\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_styles_components_PostBox_module_css__WEBPACK_IMPORTED_MODULE_2___default().date),\n                children: date\n            }, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/PostBox.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/PostBox.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_components_PostBox_module_css__WEBPACK_IMPORTED_MODULE_2___default().heading),\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/PostBox.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_styles_components_PostBox_module_css__WEBPACK_IMPORTED_MODULE_2___default().image),\n                src: image,\n                alt: \"post\"\n            }, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/PostBox.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_components_PostBox_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n                children: excerpt\n            }, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/PostBox.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/PostBox.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_c = PostBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostBox);\nvar _c;\n$RefreshReg$(_c, \"PostBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RCb3gudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDbUM7QUFRN0QsSUFBTUUsT0FBTyxHQUF3QixnQkFJL0I7c0JBSEpDLElBQUksRUFBSUMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsS0FBSyxTQUFMQSxLQUFLLEVBQ25DQyxJQUFJLFNBQUpBLElBQUksRUFDSkMsS0FBSyxTQUFMQSxLQUFLO0lBRUwscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFVixnR0FBd0I7OzBCQUN0Qyw4REFBQ1csTUFBSTtnQkFBQ0QsU0FBUyxFQUFFVixtRkFBYzswQkFBR0ksSUFBSTs7Ozs7cUJBQVE7MEJBQzlDLDhEQUFDUSxJQUFFOzs7O3FCQUFHOzBCQUNOLDhEQUFDSCxLQUFHO2dCQUFDQyxTQUFTLEVBQUVWLHNGQUFpQjswQkFBR0csS0FBSzs7Ozs7cUJBQU87MEJBQ2hELDhEQUFDVSxLQUFHO2dCQUFDSCxTQUFTLEVBQUVWLG9GQUFlO2dCQUFFYyxHQUFHLEVBQUVSLEtBQUs7Z0JBQUVTLEdBQUcsRUFBQyxNQUFNOzs7OztxQkFBRzswQkFDMUQsOERBQUNOLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVYsc0ZBQWlCOzBCQUFHSyxPQUFPOzs7OztxQkFBTzs7Ozs7O2FBQzlDLENBQ047Q0FDSDtBQWRLSixLQUFBQSxPQUFPO0FBZWIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RCb3gudHN4PzhlNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvUG9zdEJveC5tb2R1bGUuY3NzXCI7XG5cbnR5cGUgUG9zdFByb3BzID0ge1xuICBwb3N0OiB7IHRpdGxlOiBzdHJpbmc7IGRhdGU6IHN0cmluZzsgZXhjZXJwdDogc3RyaW5nOyBpbWFnZTogc3RyaW5nLCBpbmRleDogbnVtYmVyIH07XG4gIHNsdWc6IHN0cmluZyxcbiAgaW5kZXg6IG51bWJlcjtcbn07XG5cbmNvbnN0IFBvc3RCb3g6IFJlYWN0LkZDPFBvc3RQcm9wcz4gPSAoe1xuICBwb3N0OiB7IHRpdGxlLCBkYXRlLCBleGNlcnB0LCBpbWFnZSB9LFxuICBzbHVnLFxuICBpbmRleCxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC1jb250YWluZXJcIl19PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbXCJkYXRlXCJdfT57ZGF0ZX08L3NwYW4+XG4gICAgICA8YnIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJoZWFkaW5nXCJdfT57dGl0bGV9PC9kaXY+XG4gICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzW1wiaW1hZ2VcIl19IHNyYz17aW1hZ2V9IGFsdD1cInBvc3RcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImNvbnRlbnRcIl19PntleGNlcnB0fTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFBvc3RCb3g7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJQb3N0Qm94IiwicG9zdCIsInRpdGxlIiwiZGF0ZSIsImV4Y2VycHQiLCJpbWFnZSIsInNsdWciLCJpbmRleCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJiciIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostBox.tsx\n");

/***/ })

});