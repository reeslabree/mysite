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

/***/ "./components/Posts.tsx":
/*!******************************!*\
  !*** ./components/Posts.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_Posts_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Posts.module.css */ \"./styles/components/Posts.module.css\");\n/* harmony import */ var _styles_components_Posts_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Posts_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _PostBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostBox */ \"./components/PostBox.tsx\");\nvar _this = undefined;\n\n\n\n\nvar Posts = function(props) {\n    var _this1 = _this;\n    console.log(props);\n    var posts = props.posts;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_Posts_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"posts-container\"]),\n        children: props.map(function(param, index) {\n            var frontmatter = param.frontmatter;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                index: index,\n                post: frontmatter\n            }, index, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/Posts.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/Posts.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUEwQjtBQUNpQztBQUMzQjtBQXFCaEMsSUFBTUcsS0FBSyxHQUEyQixTQUFDQyxLQUFLLEVBQUs7O0lBQy9DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO0lBQ2xCLElBQU1HLEtBQUssR0FBR0gsS0FBSyxDQUFDRyxLQUFLO0lBQ3pCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRVIsK0ZBQXlCO2tCQUN0Q0csS0FBSyxDQUFDTSxHQUFHLENBQUMsZ0JBQWdCQyxLQUFLO2dCQUFuQkMsV0FBVyxTQUFYQSxXQUFXO2lDQUN0Qiw4REFBQ1YsZ0RBQU87Z0JBQWFTLEtBQUssRUFBRUEsS0FBSztnQkFBRUUsSUFBSSxFQUFFRCxXQUFXO2VBQXRDRCxLQUFLOzs7O3NCQUE2QztTQUNqRSxDQUFDOzs7OzthQUNFLENBQ047Q0FDSDtBQVZLUixLQUFBQSxLQUFLO0FBV1gsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RzLnRzeD9lZmNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL1Bvc3RzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBQb3N0Qm94IGZyb20gXCIuL1Bvc3RCb3hcIjtcblxudHlwZSBQb3N0ID0ge1xuICAgIHRpdGxlOiBzdHJpbmcsIFxuICAgIGRhdGU6IHN0cmluZywgXG4gICAgZXhjZXJwdDogc3RyaW5nLCBcbiAgICBpbWFnZTogc3RyaW5nLFxuICAgIGluZGV4OiBudW1iZXIsXG59O1xuXG50eXBlIFBvc3RzUGFyYW1zID0ge1xuICBzbHVnOiBzdHJpbmcsXG4gIGZyb250bWF0dGVyOiB7XG4gICAgdGl0bGU6IHN0cmluZywgXG4gICAgZGF0ZTogc3RyaW5nLCBcbiAgICBleGNlcnB0OiBzdHJpbmcsIFxuICAgIGltYWdlOiBzdHJpbmcsXG4gICAgaW5kZXg6IG51bWJlcixcbiAgfVxufVxuXG5jb25zdCBQb3N0czogUmVhY3QuRkM8UG9zdHNQYXJhbXNbXT49IChwcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZyhwcm9wcylcbiAgY29uc3QgcG9zdHMgPSBwcm9wcy5wb3N0c1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0cy1jb250YWluZXJcIl19PlxuICAgICAge3Byb3BzLm1hcCgoe2Zyb250bWF0dGVyfSwgaW5kZXgpID0+IChcbiAgICAgICAgPFBvc3RCb3gga2V5PXtpbmRleH0gaW5kZXg9e2luZGV4fSBwb3N0PXtmcm9udG1hdHRlcn0+PC9Qb3N0Qm94PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUG9zdHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJQb3N0Qm94IiwiUG9zdHMiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0cyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImluZGV4IiwiZnJvbnRtYXR0ZXIiLCJwb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Posts.tsx\n");

/***/ })

});