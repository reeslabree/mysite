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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectCard */ \"./components/ProjectCard.tsx\");\n/* harmony import */ var _styles_components_ProjectWrapper_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/ProjectWrapper.module.css */ \"./styles/components/ProjectWrapper.module.css\");\n/* harmony import */ var _styles_components_ProjectWrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ProjectWrapper_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar ProjectWrapper = function() {\n    var _this1 = _this;\n    var projects = [\n        {\n            title: \"Fora\",\n            short: \"A social media network built on the Solana blockchain.\",\n            scope: [\n                \"Rust\",\n                \"Anchor\",\n                \"Typescript\"\n            ],\n            url: \"https://fora.co\",\n            description: \"FORA DESCRIPTION HERE\"\n        },\n        {\n            title: \"PUPpy\",\n            short: \"A pay-per-use platform built on the Ethereum blockchain.\",\n            scope: [\n                \"Rust\",\n                \"Solidity\",\n                \"Typescript\"\n            ],\n            description: \"PUPPY DESCRIPTION HERE\"\n        },\n        {\n            title: \"Personal Blog\",\n            scope: [\n                \"Typescript\",\n                \"React\",\n                \"Next.js\"\n            ],\n            url: \"/\",\n            description: \"TALK ABOUT PERSONAL SITE HERE\"\n        },\n        {\n            title: \"Guitar Hero Rebuild\",\n            scope: [\n                \"Arduino\"\n            ],\n            description: \"TALK ABOUT THE ARDUINO PROJECT\",\n            images: [\n                \"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgs.ee-paper.com%2Fimgs%2Fo4YBAF5l3iWAXmD8AAB01vhS9Ec705.jpg&f=1&nofb=1\",\n                \"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flabinapp.com%2Fwp-content%2Fuploads%2F2019%2F09%2FCBS101203_CircuitDiagram.png&f=1&nofb=1\", \n            ]\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_ProjectWrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: projects.map(function(proj, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                index: index,\n                post: proj\n            }, index, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectWrapper.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectWrapper.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, _this);\n};\n_c = ProjectWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectWrapper);\nvar _c;\n$RefreshReg$(_c, \"ProjectWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RXcmFwcGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBd0M7QUFDNEI7QUFFcEUsSUFBTUUsY0FBYyxHQUFHLFdBQU07O0lBQzNCLElBQU1DLFFBQVEsR0FBRztRQUNmO1lBQ0VDLEtBQUssRUFBRyxNQUFJO1lBQ1pDLEtBQUssRUFBRyx3REFBc0Q7WUFDOURDLEtBQUssRUFBRTtnQkFBRSxNQUFJO2dCQUFJLFFBQU07Z0JBQUksWUFBVTthQUFFO1lBQ3ZDQyxHQUFHLEVBQUcsaUJBQWU7WUFDckJDLFdBQVcsRUFBRyx1QkFBcUI7U0FDcEM7UUFDRDtZQUNFSixLQUFLLEVBQUcsT0FBSztZQUNiQyxLQUFLLEVBQUcsMERBQXdEO1lBQ2hFQyxLQUFLLEVBQUU7Z0JBQUUsTUFBSTtnQkFBSSxVQUFRO2dCQUFJLFlBQVU7YUFBRTtZQUN6Q0UsV0FBVyxFQUFHLHdCQUFzQjtTQUNyQztRQUNEO1lBQ0VKLEtBQUssRUFBRyxlQUFhO1lBQ3JCRSxLQUFLLEVBQUU7Z0JBQUUsWUFBVTtnQkFBSSxPQUFLO2dCQUFJLFNBQU87YUFBRTtZQUN6Q0MsR0FBRyxFQUFHLEdBQUM7WUFDUEMsV0FBVyxFQUFHLCtCQUE2QjtTQUM1QztRQUNEO1lBQ0VKLEtBQUssRUFBRyxxQkFBbUI7WUFDM0JFLEtBQUssRUFBRTtnQkFBRSxTQUFPO2FBQUU7WUFDbEJFLFdBQVcsRUFBRyxnQ0FBOEI7WUFDNUNDLE1BQU0sRUFBRTtnQkFDTCxzSUFBb0k7Z0JBQ3BJLHVKQUFxSjthQUN2SjtTQUNGO0tBQ0Y7SUFFRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVWLCtGQUFnQjtrQkFDN0JFLFFBQVEsQ0FBQ1UsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsS0FBSztpQ0FDeEIsOERBQUNmLG9EQUFXO2dCQUFhZSxLQUFLLEVBQUVBLEtBQUs7Z0JBQUVDLElBQUksRUFBRUYsSUFBSTtlQUEvQkMsS0FBSzs7OztzQkFBMEM7U0FDbEUsQ0FBQzs7Ozs7YUFDRSxDQUNOO0NBQ0g7QUF2Q0tiLEtBQUFBLGNBQWM7QUF3Q3BCLCtEQUFlQSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0V3JhcHBlci50c3g/NDNlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdENhcmQgZnJvbSBcIi4vUHJvamVjdENhcmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL1Byb2plY3RXcmFwcGVyLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgUHJvamVjdFdyYXBwZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBgRm9yYWAsXG4gICAgICBzaG9ydDogYEEgc29jaWFsIG1lZGlhIG5ldHdvcmsgYnVpbHQgb24gdGhlIFNvbGFuYSBibG9ja2NoYWluLmAsXG4gICAgICBzY29wZTogW2BSdXN0YCwgYEFuY2hvcmAsIGBUeXBlc2NyaXB0YF0sXG4gICAgICB1cmw6IGBodHRwczovL2ZvcmEuY29gLFxuICAgICAgZGVzY3JpcHRpb246IGBGT1JBIERFU0NSSVBUSU9OIEhFUkVgLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IGBQVVBweWAsXG4gICAgICBzaG9ydDogYEEgcGF5LXBlci11c2UgcGxhdGZvcm0gYnVpbHQgb24gdGhlIEV0aGVyZXVtIGJsb2NrY2hhaW4uYCxcbiAgICAgIHNjb3BlOiBbYFJ1c3RgLCBgU29saWRpdHlgLCBgVHlwZXNjcmlwdGBdLFxuICAgICAgZGVzY3JpcHRpb246IGBQVVBQWSBERVNDUklQVElPTiBIRVJFYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBgUGVyc29uYWwgQmxvZ2AsXG4gICAgICBzY29wZTogW2BUeXBlc2NyaXB0YCwgYFJlYWN0YCwgYE5leHQuanNgXSxcbiAgICAgIHVybDogYC9gLFxuICAgICAgZGVzY3JpcHRpb246IGBUQUxLIEFCT1VUIFBFUlNPTkFMIFNJVEUgSEVSRWAsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogYEd1aXRhciBIZXJvIFJlYnVpbGRgLFxuICAgICAgc2NvcGU6IFtgQXJkdWlub2BdLFxuICAgICAgZGVzY3JpcHRpb246IGBUQUxLIEFCT1VUIFRIRSBBUkRVSU5PIFBST0pFQ1RgLFxuICAgICAgaW1hZ2VzOiBbXG4gICAgICAgIGBodHRwczovL2V4dGVybmFsLWNvbnRlbnQuZHVja2R1Y2tnby5jb20vaXUvP3U9aHR0cHMlM0ElMkYlMkZpbWdzLmVlLXBhcGVyLmNvbSUyRmltZ3MlMkZvNFlCQUY1bDNpV0FYbUQ4QUFCMDF2aFM5RWM3MDUuanBnJmY9MSZub2ZiPTFgLFxuICAgICAgICBgaHR0cHM6Ly9leHRlcm5hbC1jb250ZW50LmR1Y2tkdWNrZ28uY29tL2l1Lz91PWh0dHBzJTNBJTJGJTJGbGFiaW5hcHAuY29tJTJGd3AtY29udGVudCUyRnVwbG9hZHMlMkYyMDE5JTJGMDklMkZDQlMxMDEyMDNfQ2lyY3VpdERpYWdyYW0ucG5nJmY9MSZub2ZiPTFgLFxuICAgICAgXSxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAge3Byb2plY3RzLm1hcCgocHJvaiwgaW5kZXgpID0+IChcbiAgICAgICAgPFByb2plY3RDYXJkIGtleT17aW5kZXh9IGluZGV4PXtpbmRleH0gcG9zdD17cHJvan0+PC9Qcm9qZWN0Q2FyZD5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RXcmFwcGVyO1xuIl0sIm5hbWVzIjpbIlByb2plY3RDYXJkIiwic3R5bGVzIiwiUHJvamVjdFdyYXBwZXIiLCJwcm9qZWN0cyIsInRpdGxlIiwic2hvcnQiLCJzY29wZSIsInVybCIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWFwIiwicHJvaiIsImluZGV4IiwicG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProjectWrapper.tsx\n");

/***/ })

});