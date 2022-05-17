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

/***/ "./components/ProjectWrapper.tsx":
/*!***************************************!*\
  !*** ./components/ProjectWrapper.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectCard */ \"./components/ProjectCard.tsx\");\n/* harmony import */ var _styles_components_ProjectWrapper_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/ProjectWrapper.module.css */ \"./styles/components/ProjectWrapper.module.css\");\n/* harmony import */ var _styles_components_ProjectWrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ProjectWrapper_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar ProjectWrapper = function() {\n    var _this1 = _this;\n    var projects = [\n        {\n            title: \"Fora\",\n            short: \"A social media network built on the Solana blockchain.\",\n            scope: [\n                \"Rust\",\n                \"Anchor\",\n                \"Typescript\"\n            ],\n            url: \"https://fora.co\",\n            description: \"FORA DESCRIPTION HERE\"\n        },\n        {\n            title: \"PUPpy\",\n            short: \"\",\n            scope: [\n                \"Rust\",\n                \"Solidity\",\n                \"Typescript\"\n            ],\n            description: \"PUPPY DESCRIPTION HERE\"\n        },\n        {\n            title: \"Personal Blog\",\n            scope: [\n                \"Typescript\",\n                \"React\",\n                \"Next.js\"\n            ],\n            url: \"/\",\n            description: \"TALK ABOUT PERSONAL SITE HERE\"\n        },\n        {\n            title: \"Guitar Hero Rebuild\",\n            scope: [\n                \"Arduino\"\n            ],\n            description: \"TALK ABOUT THE ARDUINO PROJECT\",\n            images: [\n                \"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgs.ee-paper.com%2Fimgs%2Fo4YBAF5l3iWAXmD8AAB01vhS9Ec705.jpg&f=1&nofb=1\",\n                \"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flabinapp.com%2Fwp-content%2Fuploads%2F2019%2F09%2FCBS101203_CircuitDiagram.png&f=1&nofb=1\", \n            ]\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_ProjectWrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: projects.map(function(proj, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                index: index,\n                post: proj\n            }, index, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectWrapper.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectWrapper.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, _this);\n};\n_c = ProjectWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectWrapper);\nvar _c;\n$RefreshReg$(_c, \"ProjectWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RXcmFwcGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBd0M7QUFDNEI7QUFFcEUsSUFBTUUsY0FBYyxHQUFHLFdBQU07O0lBQzNCLElBQU1DLFFBQVEsR0FBRztRQUNmO1lBQ0VDLEtBQUssRUFBRyxNQUFJO1lBQ1pDLEtBQUssRUFBRyx3REFBc0Q7WUFDOURDLEtBQUssRUFBRTtnQkFBRSxNQUFJO2dCQUFJLFFBQU07Z0JBQUksWUFBVTthQUFFO1lBQ3ZDQyxHQUFHLEVBQUcsaUJBQWU7WUFDckJDLFdBQVcsRUFBRyx1QkFBcUI7U0FDcEM7UUFDRDtZQUNFSixLQUFLLEVBQUcsT0FBSztZQUNiQyxLQUFLLEVBQUc7WUFDUkMsS0FBSyxFQUFFO2dCQUFFLE1BQUk7Z0JBQUksVUFBUTtnQkFBSSxZQUFVO2FBQUU7WUFDekNFLFdBQVcsRUFBRyx3QkFBc0I7U0FDckM7UUFDRDtZQUNFSixLQUFLLEVBQUcsZUFBYTtZQUNyQkUsS0FBSyxFQUFFO2dCQUFFLFlBQVU7Z0JBQUksT0FBSztnQkFBSSxTQUFPO2FBQUU7WUFDekNDLEdBQUcsRUFBRyxHQUFDO1lBQ1BDLFdBQVcsRUFBRywrQkFBNkI7U0FDNUM7UUFDRDtZQUNFSixLQUFLLEVBQUcscUJBQW1CO1lBQzNCRSxLQUFLLEVBQUU7Z0JBQUUsU0FBTzthQUFFO1lBQ2xCRSxXQUFXLEVBQUcsZ0NBQThCO1lBQzVDQyxNQUFNLEVBQUU7Z0JBQ0wsc0lBQW9JO2dCQUNwSSx1SkFBcUo7YUFDdko7U0FDRjtLQUNGO0lBRUQscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFViwrRkFBZ0I7a0JBQzdCRSxRQUFRLENBQUNVLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEtBQUs7aUNBQ3hCLDhEQUFDZixvREFBVztnQkFBYWUsS0FBSyxFQUFFQSxLQUFLO2dCQUFFQyxJQUFJLEVBQUVGLElBQUk7ZUFBL0JDLEtBQUs7Ozs7c0JBQTBDO1NBQ2xFLENBQUM7Ozs7O2FBQ0UsQ0FDTjtDQUNIO0FBdkNLYixLQUFBQSxjQUFjO0FBd0NwQiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdFdyYXBwZXIudHN4PzQzZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3RDYXJkIGZyb20gXCIuL1Byb2plY3RDYXJkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9Qcm9qZWN0V3JhcHBlci5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IFByb2plY3RXcmFwcGVyID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogYEZvcmFgLFxuICAgICAgc2hvcnQ6IGBBIHNvY2lhbCBtZWRpYSBuZXR3b3JrIGJ1aWx0IG9uIHRoZSBTb2xhbmEgYmxvY2tjaGFpbi5gLFxuICAgICAgc2NvcGU6IFtgUnVzdGAsIGBBbmNob3JgLCBgVHlwZXNjcmlwdGBdLFxuICAgICAgdXJsOiBgaHR0cHM6Ly9mb3JhLmNvYCxcbiAgICAgIGRlc2NyaXB0aW9uOiBgRk9SQSBERVNDUklQVElPTiBIRVJFYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBgUFVQcHlgLFxuICAgICAgc2hvcnQ6IGBgLFxuICAgICAgc2NvcGU6IFtgUnVzdGAsIGBTb2xpZGl0eWAsIGBUeXBlc2NyaXB0YF0sXG4gICAgICBkZXNjcmlwdGlvbjogYFBVUFBZIERFU0NSSVBUSU9OIEhFUkVgLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IGBQZXJzb25hbCBCbG9nYCxcbiAgICAgIHNjb3BlOiBbYFR5cGVzY3JpcHRgLCBgUmVhY3RgLCBgTmV4dC5qc2BdLFxuICAgICAgdXJsOiBgL2AsXG4gICAgICBkZXNjcmlwdGlvbjogYFRBTEsgQUJPVVQgUEVSU09OQUwgU0lURSBIRVJFYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBgR3VpdGFyIEhlcm8gUmVidWlsZGAsXG4gICAgICBzY29wZTogW2BBcmR1aW5vYF0sXG4gICAgICBkZXNjcmlwdGlvbjogYFRBTEsgQUJPVVQgVEhFIEFSRFVJTk8gUFJPSkVDVGAsXG4gICAgICBpbWFnZXM6IFtcbiAgICAgICAgYGh0dHBzOi8vZXh0ZXJuYWwtY29udGVudC5kdWNrZHVja2dvLmNvbS9pdS8/dT1odHRwcyUzQSUyRiUyRmltZ3MuZWUtcGFwZXIuY29tJTJGaW1ncyUyRm80WUJBRjVsM2lXQVhtRDhBQUIwMXZoUzlFYzcwNS5qcGcmZj0xJm5vZmI9MWAsXG4gICAgICAgIGBodHRwczovL2V4dGVybmFsLWNvbnRlbnQuZHVja2R1Y2tnby5jb20vaXUvP3U9aHR0cHMlM0ElMkYlMkZsYWJpbmFwcC5jb20lMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMTklMkYwOSUyRkNCUzEwMTIwM19DaXJjdWl0RGlhZ3JhbS5wbmcmZj0xJm5vZmI9MWAsXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICB7cHJvamVjdHMubWFwKChwcm9qLCBpbmRleCkgPT4gKFxuICAgICAgICA8UHJvamVjdENhcmQga2V5PXtpbmRleH0gaW5kZXg9e2luZGV4fSBwb3N0PXtwcm9qfT48L1Byb2plY3RDYXJkPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFdyYXBwZXI7XG4iXSwibmFtZXMiOlsiUHJvamVjdENhcmQiLCJzdHlsZXMiLCJQcm9qZWN0V3JhcHBlciIsInByb2plY3RzIiwidGl0bGUiLCJzaG9ydCIsInNjb3BlIiwidXJsIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtYXAiLCJwcm9qIiwiaW5kZXgiLCJwb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProjectWrapper.tsx\n");

/***/ })

});