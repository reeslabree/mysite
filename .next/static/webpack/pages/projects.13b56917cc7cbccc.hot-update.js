"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/ProjectCard.tsx":
/*!************************************!*\
  !*** ./components/ProjectCard.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/ProjectCard.module.css */ \"./styles/components/ProjectCard.module.css\");\n/* harmony import */ var _styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar ProjectCard = function(param) {\n    var _post = param.post, title = _post.title, scope = _post.scope, url = _post.url, description = _post.description, images = _post.images, index = param.index;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: scope.map(function(tech, key) {\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"scope-item\"]),\n                        children: tech\n                    }, void 0, false, {\n                        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, _this1);\n                })\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, _this);\n};\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQTBCO0FBQ3NDO0FBYWhFLElBQU1FLFdBQVcsR0FBMkIsZ0JBS3RDO3NCQUpGQyxJQUFJLEVBQ0FDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsR0FBRyxTQUFIQSxHQUFHLEVBQUVDLFdBQVcsU0FBWEEsV0FBVyxFQUFFQyxNQUFNLFNBQU5BLE1BQU0sRUFFMUNDLEtBQUssU0FBTEEsS0FBSzs7SUFFTCxxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVWLDRGQUFnQjs7MEJBQzVCLDhEQUFDWSxNQUFJO2dCQUFDRixTQUFTLEVBQUVWLHdGQUFZOzBCQUFHRyxLQUFLOzs7OztxQkFBUTswQkFDN0M7MEJBQ0tDLEtBQUssQ0FBQ1MsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsR0FBRyxFQUFLO2tDQUN0Qiw4REFBQ04sS0FBRzt3QkFBQ0MsU0FBUyxFQUFFVixnR0FBb0I7a0NBQUdjLElBQUk7Ozs7OzhCQUFPO2lCQUNyRCxDQUFDOzZCQUNIOzs7Ozs7YUFDRCxDQUNUO0NBQ0o7QUFoQktiLEtBQUFBLFdBQVc7QUFpQmpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC50c3g/YTdiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5tb2R1bGUuY3NzJ1xuXG50eXBlIFByb2plY3RQcm9wcyA9IHtcbiAgICBwb3N0OiB7XG4gICAgICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgICAgIHNjb3BlOiBzdHJpbmdbXSxcbiAgICAgICAgdXJsPzogc3RyaW5nLFxuICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgICAgICBpbWFnZXM/OiBzdHJpbmdbXVxuICAgIH0sXG4gICAgaW5kZXg6IG51bWJlclxufVxuXG5jb25zdCBQcm9qZWN0Q2FyZDogUmVhY3QuRkM8UHJvamVjdFByb3BzPiA9ICh7XG4gICAgcG9zdDoge1xuICAgICAgICB0aXRsZSwgc2NvcGUsIHVybCwgZGVzY3JpcHRpb24sIGltYWdlc1xuICAgIH0sXG4gICAgaW5kZXhcbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAge3Njb3BlLm1hcCgodGVjaCwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJzY29wZS1pdGVtXCJdfT57dGVjaH08L2Rpdj5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59IFxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiUHJvamVjdENhcmQiLCJwb3N0IiwidGl0bGUiLCJzY29wZSIsInVybCIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwiaW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzcGFuIiwibWFwIiwidGVjaCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProjectCard.tsx\n");

/***/ })

});