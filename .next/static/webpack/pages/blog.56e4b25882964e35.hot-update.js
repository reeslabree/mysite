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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_Posts_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Posts.module.css */ \"./styles/components/Posts.module.css\");\n/* harmony import */ var _styles_components_Posts_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Posts_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _PostBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostBox */ \"./components/PostBox.tsx\");\nvar _this = undefined;\n\n\n\n\nvar Posts = function(props) {\n    var _this1 = _this;\n    console.log(props);\n    //@ts-ignore\n    var posts = props.posts;\n    console.log(posts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_Posts_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"posts-container\"]),\n        children: posts.map(function(param, index) {\n            var frontmatter = param.frontmatter;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                index: index,\n                post: frontmatter,\n                href: \"\"\n            }, index, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/Posts.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/Posts.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUEwQjtBQUNpQztBQUMzQjtBQXFCaEMsSUFBTUcsS0FBSyxHQUEyQixTQUFDQyxLQUFLLEVBQUs7O0lBQy9DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO0lBQ2xCLFlBQVk7SUFDWixJQUFNRyxLQUFLLEdBQUdILEtBQUssQ0FBQ0csS0FBSztJQUN6QkYsT0FBTyxDQUFDQyxHQUFHLENBQUNDLEtBQUssQ0FBQztJQUNsQixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVSLCtGQUF5QjtrQkFDdENNLEtBQUssQ0FBQ0csR0FBRyxDQUFDLGdCQUFnQkMsS0FBSztnQkFBbkJDLFdBQVcsU0FBWEEsV0FBVztpQ0FDdEIsOERBQUNWLGdEQUFPO2dCQUFhUyxLQUFLLEVBQUVBLEtBQUs7Z0JBQUVFLElBQUksRUFBRUQsV0FBVztnQkFBRUUsSUFBSSxFQUFDLEVBQUU7ZUFBL0NILEtBQUs7Ozs7c0JBQXFEO1NBQ3pFLENBQUM7Ozs7O2FBQ0UsQ0FDTjtDQUNIO0FBWktSLEtBQUFBLEtBQUs7QUFhWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdHMudHN4P2VmY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvUG9zdHMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFBvc3RCb3ggZnJvbSBcIi4vUG9zdEJveFwiO1xuXG50eXBlIFBvc3QgPSB7XG4gICAgdGl0bGU6IHN0cmluZywgXG4gICAgZGF0ZTogc3RyaW5nLCBcbiAgICBleGNlcnB0OiBzdHJpbmcsIFxuICAgIGltYWdlOiBzdHJpbmcsXG4gICAgaW5kZXg6IG51bWJlcixcbn07XG5cbnR5cGUgUG9zdHNQYXJhbXMgPSB7XG4gIHNsdWc6IHN0cmluZyxcbiAgZnJvbnRtYXR0ZXI6IHtcbiAgICB0aXRsZTogc3RyaW5nLCBcbiAgICBkYXRlOiBzdHJpbmcsIFxuICAgIGV4Y2VycHQ6IHN0cmluZywgXG4gICAgaW1hZ2U6IHN0cmluZyxcbiAgICBpbmRleDogbnVtYmVyLFxuICB9XG59XG5cbmNvbnN0IFBvc3RzOiBSZWFjdC5GQzxQb3N0c1BhcmFtc1tdPj0gKHByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHByb3BzKVxuICAvL0B0cy1pZ25vcmVcbiAgY29uc3QgcG9zdHMgPSBwcm9wcy5wb3N0cyBhcyBQb3N0c1BhcmFtc1tdXG4gIGNvbnNvbGUubG9nKHBvc3RzKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0cy1jb250YWluZXJcIl19PlxuICAgICAge3Bvc3RzLm1hcCgoe2Zyb250bWF0dGVyfSwgaW5kZXgpID0+IChcbiAgICAgICAgPFBvc3RCb3gga2V5PXtpbmRleH0gaW5kZXg9e2luZGV4fSBwb3N0PXtmcm9udG1hdHRlcn0gaHJlZj0nJz48L1Bvc3RCb3g+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQb3N0cztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIlBvc3RCb3giLCJQb3N0cyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBvc3RzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaW5kZXgiLCJmcm9udG1hdHRlciIsInBvc3QiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Posts.tsx\n");

/***/ })

});