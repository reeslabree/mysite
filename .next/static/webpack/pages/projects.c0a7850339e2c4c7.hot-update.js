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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TechIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TechIcon */ \"./components/TechIcon.tsx\");\n/* harmony import */ var _styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ProjectCard.module.css */ \"./styles/components/ProjectCard.module.css\");\n/* harmony import */ var _styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar ProjectCard = function(param) {\n    var _post = param.post, title = _post.title, short = _post.short, scope = _post.scope, url = _post.url, description = _post.description, images = _post.images, index1 = param.index;\n    var _this1 = _this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), open = ref[0], setOpen = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: url\n            }, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                children: [\n                    title,\n                    open ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiChevronDoubleUp, {}, void 0, false, {\n                        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 54\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiChevronDoubleDown, {}, void 0, false, {\n                        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 78\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().subtitle),\n                children: short\n            }, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"tech-container\"]),\n                children: scope.map(function(tech) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"scope-item\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            iconId: tech\n                        }, void 0, false, {\n                            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 15\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: open ? (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"description-open\"]) : (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"description-close\"]),\n                children: description.split(\"\\n\").map(function(value, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            value,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            }, _this1)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 15\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n        lineNumber: 26,\n        columnNumber: 7\n    }, _this);\n};\n_s(ProjectCard, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1E7QUFDK0I7QUFDSTs7QUFjckUsSUFBTUssV0FBVyxHQUEyQixnQkFHdEM7c0JBRkpDLElBQUksRUFBSUMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsR0FBRyxTQUFIQSxHQUFHLEVBQUVDLFdBQVcsU0FBWEEsV0FBVyxFQUFFQyxNQUFNLFNBQU5BLE1BQU0sRUFDckRDLE1BQUssU0FBTEEsS0FBSzs7O0lBRVAsSUFBd0JiLEdBQXFCLGtCQUFyQkEscURBQWMsQ0FBQyxLQUFLLENBQUMsTUFBdENlLElBQUksR0FBYWYsR0FBcUIsR0FBbEMsRUFBRWdCLE9BQU8sR0FBSWhCLEdBQXFCLEdBQXpCO0lBRWxCLHFCQUVJLDhEQUFDaUIsS0FBRztRQUFDQyxTQUFTLEVBQUVoQiw0RkFBZ0I7OzBCQUMxQiw4REFBQ2tCLEdBQUM7Z0JBQUNDLElBQUksRUFBRVgsR0FBRzs7Ozs7cUJBQU07MEJBQ3RCLDhEQUFDWSxNQUFJO2dCQUFDSixTQUFTLEVBQUVoQix3RkFBWTs7b0JBQUdLLEtBQUs7b0JBQUVRLElBQUksaUJBQUUsOERBQUNYLDZEQUFpQjs7Ozs2QkFBRyxpQkFBRyw4REFBQ0QsK0RBQW1COzs7OzZCQUFHOzs7Ozs7cUJBQVE7MEJBQ3BHLDhEQUFDbUIsTUFBSTtnQkFBQ0osU0FBUyxFQUFFaEIsMkZBQWU7MEJBQUdNLEtBQUs7Ozs7O3FCQUFROzBCQUNoRCw4REFBQ2dCLElBQUU7Ozs7cUJBQUc7MEJBQ04sOERBQUNQLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRWhCLG9HQUF3QjswQkFDckNPLEtBQUssQ0FBQ2dCLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUs7b0JBQ25CLHFCQUNFLDhEQUFDVCxLQUFHO3dCQUFDQyxTQUFTLEVBQUVoQixnR0FBb0I7a0NBQ2xDLDRFQUFDRCxpREFBUTs0QkFBQzBCLE1BQU0sRUFBRUQsSUFBSTs7Ozs7a0NBQUk7Ozs7OzhCQUN0QixDQUNOO2lCQUNILENBQUM7Ozs7O3FCQUNFOzBCQUNOLDhEQUFDRixJQUFFOzs7O3FCQUFHOzBCQUVOLDhEQUFDRixNQUFJO2dCQUFDSixTQUFTLEVBQUdILElBQUksR0FBRWIsc0dBQTBCLEdBQUdBLHVHQUEyQjswQkFDN0VTLFdBQVcsQ0FBQ2lCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQ0gsR0FBRyxDQUFDLFNBQUNJLEtBQUssRUFBRWhCLEtBQUssRUFBSztvQkFDN0MscUJBQ0UsOERBQUNTLE1BQUk7OzRCQUNGTyxLQUFLOzBDQUNOLDhEQUFDTCxJQUFFOzs7O3NDQUFHOzt1QkFGR1gsS0FBSzs7Ozs4QkFHVCxDQUNQO2lCQUNILENBQUM7Ozs7O3FCQUNHOzs7Ozs7YUFDSCxDQUVSO0NBQ0g7R0FyQ0tSLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQXNDakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RDYXJkLnRzeD9hN2JmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUZWNoSWNvbiBmcm9tIFwiLi9UZWNoSWNvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvUHJvamVjdENhcmQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHtIaUNoZXZyb25Eb3VibGVEb3duLCBIaUNoZXZyb25Eb3VibGVVcH0gZnJvbSAncmVhY3QtaWNvbnMvaGknXG5cbnR5cGUgUHJvamVjdFByb3BzID0ge1xuICBwb3N0OiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBzaG9ydDogc3RyaW5nO1xuICAgIHNjb3BlOiBzdHJpbmdbXTtcbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBpbWFnZXM/OiBzdHJpbmdbXTtcbiAgfTtcbiAgaW5kZXg6IG51bWJlcjtcbn07XG5cbmNvbnN0IFByb2plY3RDYXJkOiBSZWFjdC5GQzxQcm9qZWN0UHJvcHM+ID0gKHtcbiAgcG9zdDogeyB0aXRsZSwgc2hvcnQsIHNjb3BlLCB1cmwsIGRlc2NyaXB0aW9uLCBpbWFnZXMgfSxcbiAgaW5kZXgsXG59KSA9PiB7XG5jb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblxuICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8YSBocmVmPXt1cmx9PjwvYT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pnt0aXRsZX17b3Blbj8gPEhpQ2hldnJvbkRvdWJsZVVwIC8+IDogPEhpQ2hldnJvbkRvdWJsZURvd24gLz59PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+e3Nob3J0fTwvc3Bhbj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJ0ZWNoLWNvbnRhaW5lclwiXX0+XG4gICAgICAgICAge3Njb3BlLm1hcCgodGVjaCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInNjb3BlLWl0ZW1cIl19PlxuICAgICAgICAgICAgICAgIDxUZWNoSWNvbiBpY29uSWQ9e3RlY2h9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxiciAvPlxuXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17IG9wZW4/IHN0eWxlc1tcImRlc2NyaXB0aW9uLW9wZW5cIl0gOiBzdHlsZXNbXCJkZXNjcmlwdGlvbi1jbG9zZVwiXX0+XG4gICAgICAgICAge2Rlc2NyaXB0aW9uLnNwbGl0KFwiXFxuXCIpLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUZWNoSWNvbiIsInN0eWxlcyIsIkhpQ2hldnJvbkRvdWJsZURvd24iLCJIaUNoZXZyb25Eb3VibGVVcCIsIlByb2plY3RDYXJkIiwicG9zdCIsInRpdGxlIiwic2hvcnQiLCJzY29wZSIsInVybCIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwiaW5kZXgiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiYSIsImhyZWYiLCJzcGFuIiwic3VidGl0bGUiLCJiciIsIm1hcCIsInRlY2giLCJpY29uSWQiLCJzcGxpdCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProjectCard.tsx\n");

/***/ })

});