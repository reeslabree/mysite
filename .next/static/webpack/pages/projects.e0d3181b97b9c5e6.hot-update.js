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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/si */ \"./node_modules/react-icons/si/index.esm.js\");\n/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ti */ \"./node_modules/react-icons/ti/index.esm.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar TechIcon = function(param) {\n    var iconId = param.iconId;\n    var ref;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), hovering = ref1[0], setHovering = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onMouseEnter: function() {\n            return setHovering(true);\n        },\n        onMouseLeave: function() {\n            return setHovering(false);\n        },\n        children: [\n            (ref = TechIcons.find(function(icon) {\n                return icon.id === iconId;\n            })) === null || ref === void 0 ? void 0 : ref.component,\n            hovering && \" \" + iconId\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/TechIcon.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(TechIcon, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = TechIcon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TechIcon);\nvar TechIcons = [\n    {\n        id: \"Rust\",\n        component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiRust, {\n            style: {\n                paddingTop: \"3px\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/TechIcon.tsx\",\n            lineNumber: 35,\n            columnNumber: 16\n        }, undefined)\n    },\n    {\n        id: \"Arduino\",\n        component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiArduino, {\n            style: {\n                paddingTop: \"3px\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/TechIcon.tsx\",\n            lineNumber: 39,\n            columnNumber: 16\n        }, undefined)\n    },\n    {\n        id: \"Typescript\",\n        component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiTypescript, {\n            style: {\n                paddingTop: \"3px\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/TechIcon.tsx\",\n            lineNumber: 43,\n            columnNumber: 16\n        }, undefined)\n    },\n    {\n        id: \"Solidity\",\n        component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiSolidity, {\n            style: {\n                paddingTop: \"3px\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/TechIcon.tsx\",\n            lineNumber: 47,\n            columnNumber: 16\n        }, undefined)\n    },\n    {\n        id: \"React\",\n        component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiReact, {\n            style: {\n                paddingTop: \"3px\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/TechIcon.tsx\",\n            lineNumber: 51,\n            columnNumber: 16\n        }, undefined)\n    },\n    {\n        id: \"Next.js\",\n        component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_si__WEBPACK_IMPORTED_MODULE_2__.SiNextdotjs, {}, void 0, false, {\n            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/TechIcon.tsx\",\n            lineNumber: 55,\n            columnNumber: 16\n        }, undefined)\n    },\n    {\n        id: \"Anchor\",\n        component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ti__WEBPACK_IMPORTED_MODULE_3__.TiAnchor, {}, void 0, false, {\n            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/TechIcon.tsx\",\n            lineNumber: 59,\n            columnNumber: 16\n        }, undefined)\n    }, \n];\nvar _c;\n$RefreshReg$(_c, \"TechIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RlY2hJY29uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQWlDO0FBUVQ7QUFFa0I7O0FBTTFDLElBQU1RLFFBQVEsR0FBNEIsZ0JBQWdCO1FBQWJDLE1BQU0sU0FBTkEsTUFBTTtRQVE1Q0MsR0FBNEM7O0lBUGpELElBQWdDVixJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBakJqRCxRQWlCaUIsR0FBaUJBLElBQWUsR0FBaEMsRUFqQmpCLFdBaUI4QixHQUFJQSxJQUFlLEdBQW5CO0lBRTVCLHFCQUNFLDhEQUFDYSxLQUFHO1FBQ0ZDLFlBQVksRUFBRTttQkFBTUYsV0FBVyxDQUFDLElBQUksQ0FBQztTQUFBO1FBQ3JDRyxZQUFZLEVBQUU7bUJBQU1ILFdBQVcsQ0FBQyxLQUFLLENBQUM7U0FBQTs7WUFFckNGLENBQUFBLEdBQTRDLEdBQTVDQSxTQUFTLENBQUNNLElBQUksQ0FBQyxTQUFDQyxJQUFJO3VCQUFLQSxJQUFJLENBQUNDLEVBQUUsS0FBS1QsTUFBTTthQUFBLENBQUMsY0FBNUNDLEdBQTRDLFdBQVcsR0FBdkRBLEtBQUFBLENBQXVELEdBQXZEQSxHQUE0QyxDQUFFUyxTQUFTO1lBQ3JEUixRQUFRLElBQUksR0FBRyxHQUFHRixNQUFNOzs7Ozs7YUFDdkIsQ0FDTjtDQUNIO0dBWktELFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQWFkLCtEQUFlQSxRQUFRLEVBQUM7QUFFeEIsSUFBTUUsU0FBUyxHQUFHO0lBQ2hCO1FBQ0VRLEVBQUUsRUFBRSxNQUFNO1FBQ1ZDLFNBQVMsZ0JBQUUsOERBQUNsQixrREFBTTtZQUFDbUIsS0FBSyxFQUFFO2dCQUFDQyxVQUFVLEVBQUUsS0FBSzthQUFDOzs7OztxQkFBSTtLQUNsRDtJQUNEO1FBQ0VILEVBQUUsRUFBRSxTQUFTO1FBQ2JDLFNBQVMsZ0JBQUUsOERBQUNqQixxREFBUztZQUFDa0IsS0FBSyxFQUFFO2dCQUFDQyxVQUFVLEVBQUUsS0FBSzthQUFDOzs7OztxQkFBSTtLQUNyRDtJQUNEO1FBQ0VILEVBQUUsRUFBRSxZQUFZO1FBQ2hCQyxTQUFTLGdCQUFFLDhEQUFDaEIsd0RBQVk7WUFBQ2lCLEtBQUssRUFBRTtnQkFBQ0MsVUFBVSxFQUFFLEtBQUs7YUFBQzs7Ozs7cUJBQUk7S0FDeEQ7SUFDRDtRQUNFSCxFQUFFLEVBQUUsVUFBVTtRQUNkQyxTQUFTLGdCQUFFLDhEQUFDZixzREFBVTtZQUFDZ0IsS0FBSyxFQUFFO2dCQUFDQyxVQUFVLEVBQUUsS0FBSzthQUFDOzs7OztxQkFBSTtLQUN0RDtJQUNEO1FBQ0VILEVBQUUsRUFBRSxPQUFPO1FBQ1hDLFNBQVMsZ0JBQUUsOERBQUNkLG1EQUFPO1lBQUNlLEtBQUssRUFBRTtnQkFBQ0MsVUFBVSxFQUFFLEtBQUs7YUFBQzs7Ozs7cUJBQUk7S0FDbkQ7SUFDRDtRQUNFSCxFQUFFLEVBQUUsU0FBUztRQUNiQyxTQUFTLGdCQUFFLDhEQUFDYix1REFBVzs7OztxQkFBRztLQUMzQjtJQUNEO1FBQ0VZLEVBQUUsRUFBRSxRQUFRO1FBQ1pDLFNBQVMsZ0JBQUUsOERBQUNaLG9EQUFROzs7O3FCQUFHO0tBQ3hCO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZWNoSWNvbi50c3g/ZjIxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgU2lSdXN0LFxuICBTaUFyZHVpbm8sXG4gIFNpVHlwZXNjcmlwdCxcbiAgU2lTb2xpZGl0eSxcbiAgU2lSZWFjdCxcbiAgU2lOZXh0ZG90anMsXG59IGZyb20gXCJyZWFjdC1pY29ucy9zaVwiO1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XG5pbXBvcnQgeyBUaUFuY2hvciB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xuXG50eXBlIFRlY2hJY29uUHJvcHMgPSB7XG4gIGljb25JZDogc3RyaW5nO1xufTtcblxuY29uc3QgVGVjaEljb246IFJlYWN0LkZDPFRlY2hJY29uUHJvcHM+ID0gKHsgaWNvbklkIH0pID0+IHtcbiAgY29uc3QgW2hvdmVyaW5nLCBzZXRIb3ZlcmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyaW5nKHRydWUpfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmluZyhmYWxzZSl9XG4gICAgPlxuICAgICAge1RlY2hJY29ucy5maW5kKChpY29uKSA9PiBpY29uLmlkID09PSBpY29uSWQpPy5jb21wb25lbnR9XG4gICAgICAgIHtob3ZlcmluZyAmJiBcIiBcIiArIGljb25JZH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBUZWNoSWNvbjtcblxuY29uc3QgVGVjaEljb25zID0gW1xuICB7XG4gICAgaWQ6IFwiUnVzdFwiLFxuICAgIGNvbXBvbmVudDogPFNpUnVzdCBzdHlsZT17e3BhZGRpbmdUb3A6IFwiM3B4XCJ9fSAvPixcbiAgfSxcbiAge1xuICAgIGlkOiBcIkFyZHVpbm9cIixcbiAgICBjb21wb25lbnQ6IDxTaUFyZHVpbm8gc3R5bGU9e3twYWRkaW5nVG9wOiBcIjNweFwifX0gLz4sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJUeXBlc2NyaXB0XCIsXG4gICAgY29tcG9uZW50OiA8U2lUeXBlc2NyaXB0IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIzcHhcIn19IC8+LFxuICB9LFxuICB7XG4gICAgaWQ6IFwiU29saWRpdHlcIixcbiAgICBjb21wb25lbnQ6IDxTaVNvbGlkaXR5IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIzcHhcIn19IC8+LFxuICB9LFxuICB7XG4gICAgaWQ6IFwiUmVhY3RcIixcbiAgICBjb21wb25lbnQ6IDxTaVJlYWN0IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIzcHhcIn19IC8+LFxuICB9LFxuICB7XG4gICAgaWQ6IFwiTmV4dC5qc1wiLFxuICAgIGNvbXBvbmVudDogPFNpTmV4dGRvdGpzIC8+LFxuICB9LFxuICB7XG4gICAgaWQ6IFwiQW5jaG9yXCIsXG4gICAgY29tcG9uZW50OiA8VGlBbmNob3IgLz4sXG4gIH0sXG5dO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU2lSdXN0IiwiU2lBcmR1aW5vIiwiU2lUeXBlc2NyaXB0IiwiU2lTb2xpZGl0eSIsIlNpUmVhY3QiLCJTaU5leHRkb3RqcyIsIlRpQW5jaG9yIiwiVGVjaEljb24iLCJpY29uSWQiLCJUZWNoSWNvbnMiLCJob3ZlcmluZyIsInNldEhvdmVyaW5nIiwiZGl2Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiZmluZCIsImljb24iLCJpZCIsImNvbXBvbmVudCIsInN0eWxlIiwicGFkZGluZ1RvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TechIcon.tsx\n");

/***/ })

});