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

/***/ "./components/TechIcon.tsx":
/*!*********************************!*\
  !*** ./components/TechIcon.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/si */ \"./node_modules/react-icons/si/index.esm.js\");\n/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ti */ \"./node_modules/react-icons/ti/index.esm.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar TechIcon = function(param) {\n    var iconId = param.iconId;\n    var ref;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), hovering = ref1[0], setHovering = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onMouseEnter: function() {\n            return setHovering(true);\n        },\n        onMouseLeave: function() {\n            return setHovering(false);\n        },\n        children: [\n            (ref = TechIcons.find(function(icon) {\n                return icon.id === iconId;\n            })) === null || ref === void 0 ? void 0 : ref.component,\n            hovering && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \" \",\n                    iconId\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/TechIcon.tsx\",\n                lineNumber: 26,\n                columnNumber: 22\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/TechIcon.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(TechIcon, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = TechIcon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TechIcon);\nvar TechIcons = [\n    {\n        id: \"Rust\",\n        component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiRust, {}, void 0, false, {\n            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/TechIcon.tsx\",\n            lineNumber: 35,\n            columnNumber: 16\n        }, undefined)\n    },\n    {\n        id: \"Arduino\",\n        component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiArduino, {}, void 0, false, {\n            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/TechIcon.tsx\",\n            lineNumber: 39,\n            columnNumber: 16\n        }, undefined)\n    },\n    {\n        id: \"Typescript\",\n        component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiTypescript, {}, void 0, false, {\n            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/TechIcon.tsx\",\n            lineNumber: 43,\n            columnNumber: 16\n        }, undefined)\n    },\n    {\n        id: \"Solidity\",\n        component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiSolidity, {}, void 0, false, {\n            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/TechIcon.tsx\",\n            lineNumber: 47,\n            columnNumber: 16\n        }, undefined)\n    },\n    {\n        id: \"React\",\n        component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiReact, {}, void 0, false, {\n            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/TechIcon.tsx\",\n            lineNumber: 51,\n            columnNumber: 16\n        }, undefined)\n    },\n    {\n        id: \"Next.js\",\n        component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiNextdotjs, {}, void 0, false, {\n            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/TechIcon.tsx\",\n            lineNumber: 55,\n            columnNumber: 16\n        }, undefined)\n    },\n    {\n        id: \"Anchor\",\n        component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ti__WEBPACK_IMPORTED_MODULE_3__.TiAnchor, {}, void 0, false, {\n            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/TechIcon.tsx\",\n            lineNumber: 59,\n            columnNumber: 16\n        }, undefined)\n    }, \n];\nvar _c;\n$RefreshReg$(_c, \"TechIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RlY2hJY29uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQWlDO0FBUVQ7QUFFa0I7O0FBTTFDLElBQU1RLFFBQVEsR0FBNEIsZ0JBQWdCO1FBQWJDLE1BQU0sU0FBTkEsTUFBTTtRQVE1Q0MsR0FBNEM7O0lBUGpELElBQWdDVixJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBakJqRCxRQWlCaUIsR0FBaUJBLElBQWUsR0FBaEMsRUFqQmpCLFdBaUI4QixHQUFJQSxJQUFlLEdBQW5CO0lBRTVCLHFCQUNFLDhEQUFDYSxLQUFHO1FBQ0ZDLFlBQVksRUFBRTttQkFBTUYsV0FBVyxDQUFDLElBQUksQ0FBQztTQUFBO1FBQ3JDRyxZQUFZLEVBQUU7bUJBQU1ILFdBQVcsQ0FBQyxLQUFLLENBQUM7U0FBQTs7WUFFckNGLENBQUFBLEdBQTRDLEdBQTVDQSxTQUFTLENBQUNNLElBQUksQ0FBQyxTQUFDQyxJQUFJO3VCQUFLQSxJQUFJLENBQUNDLEVBQUUsS0FBS1QsTUFBTTthQUFBLENBQUMsY0FBNUNDLEdBQTRDLFdBQVcsR0FBdkRBLEtBQUFBLENBQXVELEdBQXZEQSxHQUE0QyxDQUFFUyxTQUFTO1lBQ3JEUixRQUFRLGtCQUFJLDhEQUFDUyxNQUFJOztvQkFBQyxHQUFDO29CQUFDWCxNQUFNOzs7Ozs7cUJBQVE7Ozs7OzthQUNqQyxDQUNOO0NBQ0g7R0FaS0QsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBYWQsK0RBQWVBLFFBQVEsRUFBQztBQUV4QixJQUFNRSxTQUFTLEdBQUc7SUFDaEI7UUFDRVEsRUFBRSxFQUFFLE1BQU07UUFDVkMsU0FBUyxnQkFBRSw4REFBQ2xCLGtEQUFNOzs7O3FCQUFHO0tBQ3RCO0lBQ0Q7UUFDRWlCLEVBQUUsRUFBRSxTQUFTO1FBQ2JDLFNBQVMsZ0JBQUUsOERBQUNqQixxREFBUzs7OztxQkFBRztLQUN6QjtJQUNEO1FBQ0VnQixFQUFFLEVBQUUsWUFBWTtRQUNoQkMsU0FBUyxnQkFBRSw4REFBQ2hCLHdEQUFZOzs7O3FCQUFHO0tBQzVCO0lBQ0Q7UUFDRWUsRUFBRSxFQUFFLFVBQVU7UUFDZEMsU0FBUyxnQkFBRSw4REFBQ2Ysc0RBQVU7Ozs7cUJBQUc7S0FDMUI7SUFDRDtRQUNFYyxFQUFFLEVBQUUsT0FBTztRQUNYQyxTQUFTLGdCQUFFLDhEQUFDZCxtREFBTzs7OztxQkFBRztLQUN2QjtJQUNEO1FBQ0VhLEVBQUUsRUFBRSxTQUFTO1FBQ2JDLFNBQVMsZ0JBQUUsOERBQUNiLHVEQUFXOzs7O3FCQUFHO0tBQzNCO0lBQ0Q7UUFDRVksRUFBRSxFQUFFLFFBQVE7UUFDWkMsU0FBUyxnQkFBRSw4REFBQ1osb0RBQVE7Ozs7cUJBQUc7S0FDeEI7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RlY2hJY29uLnRzeD9mMjExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBTaVJ1c3QsXG4gIFNpQXJkdWlubyxcbiAgU2lUeXBlc2NyaXB0LFxuICBTaVNvbGlkaXR5LFxuICBTaVJlYWN0LFxuICBTaU5leHRkb3Rqcyxcbn0gZnJvbSBcInJlYWN0LWljb25zL3NpXCI7XG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcbmltcG9ydCB7IFRpQW5jaG9yIH0gZnJvbSBcInJlYWN0LWljb25zL3RpXCI7XG5cbnR5cGUgVGVjaEljb25Qcm9wcyA9IHtcbiAgaWNvbklkOiBzdHJpbmc7XG59O1xuXG5jb25zdCBUZWNoSWNvbjogUmVhY3QuRkM8VGVjaEljb25Qcm9wcz4gPSAoeyBpY29uSWQgfSkgPT4ge1xuICBjb25zdCBbaG92ZXJpbmcsIHNldEhvdmVyaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJpbmcodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyaW5nKGZhbHNlKX1cbiAgICA+XG4gICAgICB7VGVjaEljb25zLmZpbmQoKGljb24pID0+IGljb24uaWQgPT09IGljb25JZCk/LmNvbXBvbmVudH1cbiAgICAgICAge2hvdmVyaW5nICYmIDxzcGFuPiB7aWNvbklkfTwvc3Bhbj59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVGVjaEljb247XG5cbmNvbnN0IFRlY2hJY29ucyA9IFtcbiAge1xuICAgIGlkOiBcIlJ1c3RcIixcbiAgICBjb21wb25lbnQ6IDxTaVJ1c3QgLz4sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJBcmR1aW5vXCIsXG4gICAgY29tcG9uZW50OiA8U2lBcmR1aW5vIC8+LFxuICB9LFxuICB7XG4gICAgaWQ6IFwiVHlwZXNjcmlwdFwiLFxuICAgIGNvbXBvbmVudDogPFNpVHlwZXNjcmlwdCAvPixcbiAgfSxcbiAge1xuICAgIGlkOiBcIlNvbGlkaXR5XCIsXG4gICAgY29tcG9uZW50OiA8U2lTb2xpZGl0eSAvPixcbiAgfSxcbiAge1xuICAgIGlkOiBcIlJlYWN0XCIsXG4gICAgY29tcG9uZW50OiA8U2lSZWFjdCAvPixcbiAgfSxcbiAge1xuICAgIGlkOiBcIk5leHQuanNcIixcbiAgICBjb21wb25lbnQ6IDxTaU5leHRkb3RqcyAvPixcbiAgfSxcbiAge1xuICAgIGlkOiBcIkFuY2hvclwiLFxuICAgIGNvbXBvbmVudDogPFRpQW5jaG9yIC8+LFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlNpUnVzdCIsIlNpQXJkdWlubyIsIlNpVHlwZXNjcmlwdCIsIlNpU29saWRpdHkiLCJTaVJlYWN0IiwiU2lOZXh0ZG90anMiLCJUaUFuY2hvciIsIlRlY2hJY29uIiwiaWNvbklkIiwiVGVjaEljb25zIiwiaG92ZXJpbmciLCJzZXRIb3ZlcmluZyIsImRpdiIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImZpbmQiLCJpY29uIiwiaWQiLCJjb21wb25lbnQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TechIcon.tsx\n");

/***/ })

});