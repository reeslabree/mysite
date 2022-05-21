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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TechIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TechIcon */ \"./components/TechIcon.tsx\");\n/* harmony import */ var _styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ProjectCard.module.css */ \"./styles/components/ProjectCard.module.css\");\n/* harmony import */ var _styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ProjectCard = function(param) {\n    var _post = param.post, title = _post.title, short = _post.short, scope = _post.scope, url = _post.url, description = _post.description, images = _post.images, index1 = param.index;\n    var _this1 = _this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), open = ref[0], setOpen = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: url,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().subtitle),\n                    children: short\n                }, void 0, false, {\n                    fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"tech-container\"]),\n                    children: scope.map(function(tech) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"scope-item\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                iconId: tech\n                            }, void 0, false, {\n                                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 17\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 15\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: open ? (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().description) : (_styles_components_ProjectCard_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"description-close\"]),\n                    children: description.split(\"\\n\").map(function(value, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                value,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 17\n                                }, _this1)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectCard.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProjectCard, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDUTtBQUMrQjs7QUFjakUsSUFBTUcsV0FBVyxHQUEyQixnQkFHdEM7c0JBRkpDLElBQUksRUFBSUMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsR0FBRyxTQUFIQSxHQUFHLEVBQUVDLFdBQVcsU0FBWEEsV0FBVyxFQUFFQyxNQUFNLFNBQU5BLE1BQU0sRUFDckRDLE1BQUssU0FBTEEsS0FBSzs7O0lBRVAsSUFBd0JYLEdBQXFCLGtCQUFyQkEscURBQWMsQ0FBQyxLQUFLLENBQUMsTUFBdENhLElBQUksR0FBYWIsR0FBcUIsR0FBbEMsRUFBRWMsT0FBTyxHQUFJZCxHQUFxQixHQUF6QjtJQUVsQixxQkFDRSw4REFBQ2UsR0FBQztRQUFDQyxJQUFJLEVBQUVSLEdBQUc7a0JBQ1YsNEVBQUNTLEtBQUc7WUFBQ0MsU0FBUyxFQUFFaEIsNEZBQWdCOzs4QkFDOUIsOERBQUNrQixNQUFJO29CQUFDRixTQUFTLEVBQUVoQix3RkFBWTs4QkFBR0csS0FBSzs7Ozs7eUJBQVE7OEJBQzdDLDhEQUFDZSxNQUFJO29CQUFDRixTQUFTLEVBQUVoQiwyRkFBZTs4QkFBR0ksS0FBSzs7Ozs7eUJBQVE7OEJBQ2hELDhEQUFDZ0IsSUFBRTs7Ozt5QkFBRzs4QkFDTiw4REFBQ0wsS0FBRztvQkFBQ0MsU0FBUyxFQUFFaEIsb0dBQXdCOzhCQUNyQ0ssS0FBSyxDQUFDZ0IsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBSzt3QkFDbkIscUJBQ0UsOERBQUNQLEtBQUc7NEJBQUNDLFNBQVMsRUFBRWhCLGdHQUFvQjtzQ0FDbEMsNEVBQUNELGlEQUFRO2dDQUFDd0IsTUFBTSxFQUFFRCxJQUFJOzs7OztzQ0FBSTs7Ozs7a0NBQ3RCLENBQ047cUJBQ0gsQ0FBQzs7Ozs7eUJBQ0U7OEJBQ04sOERBQUNGLElBQUU7Ozs7eUJBQUc7OEJBRU4sOERBQUNGLE1BQUk7b0JBQUNGLFNBQVMsRUFBR0wsSUFBSSxHQUFFWCw4RkFBcUIsR0FBR0EsdUdBQTJCOzhCQUN4RU8sV0FBVyxDQUFDaUIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDSCxHQUFHLENBQUMsU0FBQ0ksS0FBSyxFQUFFaEIsS0FBSyxFQUFLO3dCQUM3QyxxQkFDRSw4REFBQ1MsTUFBSTs7Z0NBQ0ZPLEtBQUs7OENBQ04sOERBQUNMLElBQUU7Ozs7MENBQUc7OzJCQUZHWCxLQUFLOzs7O2tDQUdULENBQ1A7cUJBQ0gsQ0FBQzs7Ozs7eUJBQ0c7Ozs7OztpQkFDSDs7Ozs7YUFDSixDQUNKO0NBQ0g7R0FwQ0tSLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQXFDakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RDYXJkLnRzeD9hN2JmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUZWNoSWNvbiBmcm9tIFwiLi9UZWNoSWNvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvUHJvamVjdENhcmQubW9kdWxlLmNzc1wiO1xuXG50eXBlIFByb2plY3RQcm9wcyA9IHtcbiAgcG9zdDoge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgc2hvcnQ6IHN0cmluZztcbiAgICBzY29wZTogc3RyaW5nW107XG4gICAgdXJsPzogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgaW1hZ2VzPzogc3RyaW5nW107XG4gIH07XG4gIGluZGV4OiBudW1iZXI7XG59O1xuXG5jb25zdCBQcm9qZWN0Q2FyZDogUmVhY3QuRkM8UHJvamVjdFByb3BzPiA9ICh7XG4gIHBvc3Q6IHsgdGl0bGUsIHNob3J0LCBzY29wZSwgdXJsLCBkZXNjcmlwdGlvbiwgaW1hZ2VzIH0sXG4gIGluZGV4LFxufSkgPT4ge1xuY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG5cbiAgcmV0dXJuIChcbiAgICA8YSBocmVmPXt1cmx9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PntzaG9ydH08L3NwYW4+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1widGVjaC1jb250YWluZXJcIl19PlxuICAgICAgICAgIHtzY29wZS5tYXAoKHRlY2gpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJzY29wZS1pdGVtXCJdfT5cbiAgICAgICAgICAgICAgICA8VGVjaEljb24gaWNvbklkPXt0ZWNofSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIgLz5cblxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyBvcGVuPyBzdHlsZXNbXCJkZXNjcmlwdGlvblwiXSA6IHN0eWxlc1tcImRlc2NyaXB0aW9uLWNsb3NlXCJdfT5cbiAgICAgICAgICB7ZGVzY3JpcHRpb24uc3BsaXQoXCJcXG5cIikubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9hPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGVjaEljb24iLCJzdHlsZXMiLCJQcm9qZWN0Q2FyZCIsInBvc3QiLCJ0aXRsZSIsInNob3J0Iiwic2NvcGUiLCJ1cmwiLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsImluZGV4IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImEiLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwic3BhbiIsInN1YnRpdGxlIiwiYnIiLCJtYXAiLCJ0ZWNoIiwiaWNvbklkIiwic3BsaXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProjectCard.tsx\n");

/***/ })

});