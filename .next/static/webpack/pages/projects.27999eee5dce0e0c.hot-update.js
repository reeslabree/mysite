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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TechIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TechIcon */ \"./components/TechIcon.tsx\");\n/* harmony import */ var _styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ProjectCard.module.css */ \"./styles/components/ProjectCard.module.css\");\n/* harmony import */ var _styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar ProjectCard = function(param) {\n    var _post = param.post, title = _post.title, short = _post.short, scope = _post.scope, url = _post.url, description = _post.description, images = _post.images, index1 = param.index;\n    var _this1 = _this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), open = ref[0], setOpen = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: url,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                    children: [\n                        title,\n                        open ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiChevronDoubleUp, {\n                            onClick: setOpen(false)\n                        }, void 0, false, {\n                            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 19\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiChevronDoubleDown, {}, void 0, false, {\n                            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 67\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().subtitle),\n                children: short\n            }, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"tech-container\"]),\n                children: scope.map(function(tech) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"scope-item\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            iconId: tech\n                        }, void 0, false, {\n                            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 15\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: open ? (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"description-open\"]) : (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"description-close\"]),\n                children: description.split(\"\\n\").map(function(value, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            value,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, _this1)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProjectCard, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1E7QUFDK0I7QUFDTzs7QUFjeEUsSUFBTUssV0FBVyxHQUEyQixnQkFHdEM7c0JBRkpDLElBQUksRUFBSUMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsR0FBRyxTQUFIQSxHQUFHLEVBQUVDLFdBQVcsU0FBWEEsV0FBVyxFQUFFQyxNQUFNLFNBQU5BLE1BQU0sRUFDckRDLE1BQUssU0FBTEEsS0FBSzs7O0lBRUwsSUFBd0JiLEdBQXFCLGtCQUFyQkEscURBQWMsQ0FBQyxLQUFLLENBQUMsTUFBdENlLElBQUksR0FBYWYsR0FBcUIsR0FBbEMsRUFBRWdCLE9BQU8sR0FBSWhCLEdBQXFCLEdBQXpCO0lBRXBCLHFCQUNFLDhEQUFDaUIsS0FBRztRQUFDQyxTQUFTLEVBQUVoQiw0RkFBZ0I7OzBCQUM5Qiw4REFBQ2tCLEdBQUM7Z0JBQUNDLElBQUksRUFBRVgsR0FBRzswQkFDViw0RUFBQ1ksTUFBSTtvQkFBQ0osU0FBUyxFQUFFaEIsd0ZBQVk7O3dCQUMxQkssS0FBSzt3QkFDTFEsSUFBSSxpQkFBRyw4REFBQ1gsNkRBQWlCOzRCQUFDbUIsT0FBTyxFQUFFUCxPQUFPLENBQUMsS0FBSyxDQUFDOzs7OztpQ0FBRyxpQkFBRyw4REFBQ2IsK0RBQW1COzs7O2lDQUFHOzs7Ozs7eUJBQzFFOzs7OztxQkFDTDswQkFDSiw4REFBQ21CLE1BQUk7Z0JBQUNKLFNBQVMsRUFBRWhCLDJGQUFlOzBCQUFHTSxLQUFLOzs7OztxQkFBUTswQkFDaEQsOERBQUNpQixJQUFFOzs7O3FCQUFHOzBCQUNOLDhEQUFDUixLQUFHO2dCQUFDQyxTQUFTLEVBQUVoQixvR0FBd0I7MEJBQ3JDTyxLQUFLLENBQUNpQixHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLO29CQUNuQixxQkFDRSw4REFBQ1YsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFaEIsZ0dBQW9CO2tDQUNsQyw0RUFBQ0QsaURBQVE7NEJBQUMyQixNQUFNLEVBQUVELElBQUk7Ozs7O2tDQUFJOzs7Ozs4QkFDdEIsQ0FDTjtpQkFDSCxDQUFDOzs7OztxQkFDRTswQkFDTiw4REFBQ0YsSUFBRTs7OztxQkFBRzswQkFFTiw4REFBQ0gsTUFBSTtnQkFDSEosU0FBUyxFQUNQSCxJQUFJLEdBQUdiLHNHQUEwQixHQUFHQSx1R0FBMkI7MEJBR2hFUyxXQUFXLENBQUNrQixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUNILEdBQUcsQ0FBQyxTQUFDSSxLQUFLLEVBQUVqQixLQUFLLEVBQUs7b0JBQzdDLHFCQUNFLDhEQUFDUyxNQUFJOzs0QkFDRlEsS0FBSzswQ0FDTiw4REFBQ0wsSUFBRTs7OztzQ0FBRzs7dUJBRkdaLEtBQUs7Ozs7OEJBR1QsQ0FDUDtpQkFDSCxDQUFDOzs7OztxQkFDRzs7Ozs7O2FBQ0gsQ0FDTjtDQUNIO0dBM0NLUixXQUFXO0FBQVhBLEtBQUFBLFdBQVc7QUE0Q2pCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC50c3g/YTdiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGVjaEljb24gZnJvbSBcIi4vVGVjaEljb25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL1Byb2plY3RDYXJkLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IEhpQ2hldnJvbkRvdWJsZURvd24sIEhpQ2hldnJvbkRvdWJsZVVwIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XG5cbnR5cGUgUHJvamVjdFByb3BzID0ge1xuICBwb3N0OiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBzaG9ydDogc3RyaW5nO1xuICAgIHNjb3BlOiBzdHJpbmdbXTtcbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBpbWFnZXM/OiBzdHJpbmdbXTtcbiAgfTtcbiAgaW5kZXg6IG51bWJlcjtcbn07XG5cbmNvbnN0IFByb2plY3RDYXJkOiBSZWFjdC5GQzxQcm9qZWN0UHJvcHM+ID0gKHtcbiAgcG9zdDogeyB0aXRsZSwgc2hvcnQsIHNjb3BlLCB1cmwsIGRlc2NyaXB0aW9uLCBpbWFnZXMgfSxcbiAgaW5kZXgsXG59KSA9PiB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxhIGhyZWY9e3VybH0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAge29wZW4gPyA8SGlDaGV2cm9uRG91YmxlVXAgb25DbGljaz17c2V0T3BlbihmYWxzZSl9Lz4gOiA8SGlDaGV2cm9uRG91YmxlRG93biAvPn1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9hPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PntzaG9ydH08L3NwYW4+XG4gICAgICA8YnIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJ0ZWNoLWNvbnRhaW5lclwiXX0+XG4gICAgICAgIHtzY29wZS5tYXAoKHRlY2gpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInNjb3BlLWl0ZW1cIl19PlxuICAgICAgICAgICAgICA8VGVjaEljb24gaWNvbklkPXt0ZWNofSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxiciAvPlxuXG4gICAgICA8c3BhblxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIG9wZW4gPyBzdHlsZXNbXCJkZXNjcmlwdGlvbi1vcGVuXCJdIDogc3R5bGVzW1wiZGVzY3JpcHRpb24tY2xvc2VcIl1cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7ZGVzY3JpcHRpb24uc3BsaXQoXCJcXG5cIikubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUZWNoSWNvbiIsInN0eWxlcyIsIkhpQ2hldnJvbkRvdWJsZURvd24iLCJIaUNoZXZyb25Eb3VibGVVcCIsIlByb2plY3RDYXJkIiwicG9zdCIsInRpdGxlIiwic2hvcnQiLCJzY29wZSIsInVybCIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwiaW5kZXgiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiYSIsImhyZWYiLCJzcGFuIiwib25DbGljayIsInN1YnRpdGxlIiwiYnIiLCJtYXAiLCJ0ZWNoIiwiaWNvbklkIiwic3BsaXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProjectCard.tsx\n");

/***/ })

});