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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectCard */ \"./components/ProjectCard.tsx\");\n/* harmony import */ var _styles_components_ProjectWrapper_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/ProjectWrapper.module.css */ \"./styles/components/ProjectWrapper.module.css\");\n/* harmony import */ var _styles_components_ProjectWrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ProjectWrapper_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar ProjectWrapper = function() {\n    var _this1 = _this;\n    var projects = [\n        {\n            title: \"Fora\",\n            short: \"A social media network built on the Solana blockchain.\",\n            scope: [\n                \"Rust\",\n                \"Anchor\",\n                \"Typescript\"\n            ],\n            url: \"https://fora.co\",\n            description: \"Personal passion project in collaboration with my friend. We\\u2019ve been building Fora for the past 4 months since I started work on my capstone project and became increasingly interested in blockchain technology.\\n\\n      We built an uncensorable social media network on the Solana and Arweave blockchains. Solana programs written in Rust using the Anchor Lang wrapper, Arweave contracts and API written in Typescript, frontend built with React.\\n\\n      My contributions are across the entire stack, but mostly on the \\u2018backend\\u2019 of the application. Since Solana programming is relatively new, there isn\\u2019t much documentation or Stack Overflow reference, and as such this project has been a great exercise in independent research and discovery.\\n\\n      This project was submitted to the Solana Riptide hackathon, and won the Arweave Open Web Foundry 6 hackathon.\"\n        },\n        {\n            title: \"PUPpy\",\n            short: \"A pay-per-use platform built on the Ethereum blockchain.\",\n            scope: [\n                \"Rust\",\n                \"Solidity\",\n                \"Typescript\"\n            ],\n            url: \"/blog/puppy-post-mortem\",\n            description: \"For my senior capstone project, we built a full-stack web application to implement pay-per-use functionality for Festo machines using the Ethereum blockchain. Backend written in Rust, Ethereum contracts written in Solidity, Hosted on AWS.\\n\\n      We implemented Agile project management to expedite development process.\\n\\n      I wrote and deployed contract to store machine usage data on the Ethereum blockchain.\\n\\n      I worked with the DZ Bank development team to deploy a contract allowing users to pay in Euros for services rendered via bank transfers.\\n\\n      I built and deployed AWS Lambda functions in Rust to store machine usage data, triggered by incoming MQTT packets.\\n\\n      For more information, check out my post-mortem blog post.\"\n        },\n        {\n            title: \"Personal Site\",\n            short: \"An experiment in React + Next.\",\n            scope: [\n                \"Typescript\",\n                \"React\",\n                \"Next.js\"\n            ],\n            url: \"/\",\n            description: \"This is an ongoing project that I've been working on for way too long, however it has served as a nice foray into learning React.\\n\\n      It started out with a basic React Javascript application, and after building some structure out was refactored as a React Typescript application and then hastily refactored into a Next.js app. I adopted typescript mostly because I enjoy the language, and Next.js came as a suggestion from a friend for easier page routing.\\n\\n      I hope to push updates in the form of new blog posts and project summaries, however for now I can't say I have any larger scale plans for this site.\"\n        },\n        {\n            title: \"Guitar Hero Rebuild\",\n            short: \"The quintessential Covid project.\",\n            scope: [\n                \"Arduino\"\n            ],\n            description: \"Over the first few months of the Covid lockdowns, I discovered the game CloneHero, an open source build of Guitar Hero for PC. I enjoyed playing it on my computer using the keyboard, but naturally I felt like I needed to have a native guitar hero controller to really enjoy it.\\n\\n      There was one main problem, however, that guitars built for the PC were expensive and rare to find. On the other hand, Goodwill was selling PS3 wireless guitars for only a couple bucks, and Amazon sold Arduino Leonardos at 3 for $10.\\n\\n      One day I'll try to throw up my circuit diagram and code snippet (although the code for turning a button press into a gamecontroller press isn't particularly complicated). For now, I'll leave this project summary be, and spend a little time mastering the solo to Van Halen's Panama on exper mode.\",\n            images: [\n                \"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgs.ee-paper.com%2Fimgs%2Fo4YBAF5l3iWAXmD8AAB01vhS9Ec705.jpg&f=1&nofb=1\",\n                \"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flabinapp.com%2Fwp-content%2Fuploads%2F2019%2F09%2FCBS101203_CircuitDiagram.png&f=1&nofb=1\", \n            ]\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_ProjectWrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: projects.map(function(proj, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                index: index,\n                post: proj\n            }, index, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectWrapper.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/ProjectWrapper.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, _this);\n};\n_c = ProjectWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectWrapper);\nvar _c;\n$RefreshReg$(_c, \"ProjectWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RXcmFwcGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBd0M7QUFDNEI7QUFFcEUsSUFBTUUsY0FBYyxHQUFHLFdBQU07O0lBQzNCLElBQU1DLFFBQVEsR0FBRztRQUNmO1lBQ0VDLEtBQUssRUFBRyxNQUFJO1lBQ1pDLEtBQUssRUFBRyx3REFBc0Q7WUFDOURDLEtBQUssRUFBRTtnQkFBRSxNQUFJO2dCQUFJLFFBQU07Z0JBQUksWUFBVTthQUFFO1lBQ3ZDQyxHQUFHLEVBQUcsaUJBQWU7WUFDckJDLFdBQVcsRUFBRyxnM0JBRytGO1NBQzlHO1FBQ0Q7WUFDRUosS0FBSyxFQUFHLE9BQUs7WUFDYkMsS0FBSyxFQUFHLDBEQUF3RDtZQUNoRUMsS0FBSyxFQUFFO2dCQUFFLE1BQUk7Z0JBQUksVUFBUTtnQkFBSSxZQUFVO2FBQUU7WUFDekNDLEdBQUcsRUFBRSx5QkFBeUI7WUFDOUJDLFdBQVcsRUFBRyxrdkJBSzJDO1NBQzFEO1FBQ0Q7WUFDRUosS0FBSyxFQUFHLGVBQWE7WUFDckJDLEtBQUssRUFBRyxnQ0FBOEI7WUFDdENDLEtBQUssRUFBRTtnQkFBRSxZQUFVO2dCQUFJLE9BQUs7Z0JBQUksU0FBTzthQUFFO1lBQ3pDQyxHQUFHLEVBQUcsR0FBQztZQUNQQyxXQUFXLEVBQUcsNm1CQUVzSTtTQUNySjtRQUNEO1lBQ0VKLEtBQUssRUFBRyxxQkFBbUI7WUFDM0JDLEtBQUssRUFBRyxtQ0FBaUM7WUFDekNDLEtBQUssRUFBRTtnQkFBRSxTQUFPO2FBQUU7WUFDbEJFLFdBQVcsRUFBRyw0ekJBRTBSO1lBQ3hTQyxNQUFNLEVBQUU7Z0JBQ0wsc0lBQW9JO2dCQUNwSSx1SkFBcUo7YUFDdko7U0FDRjtLQUNGO0lBRUQscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFViwrRkFBZ0I7a0JBQzdCRSxRQUFRLENBQUNVLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEtBQUs7aUNBQ3hCLDhEQUFDZixvREFBVztnQkFBYWUsS0FBSyxFQUFFQSxLQUFLO2dCQUFFQyxJQUFJLEVBQUVGLElBQUk7ZUFBL0JDLEtBQUs7Ozs7c0JBQTBDO1NBQ2xFLENBQUM7Ozs7O2FBQ0UsQ0FDTjtDQUNIO0FBdERLYixLQUFBQSxjQUFjO0FBdURwQiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdFdyYXBwZXIudHN4PzQzZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3RDYXJkIGZyb20gXCIuL1Byb2plY3RDYXJkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9Qcm9qZWN0V3JhcHBlci5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IFByb2plY3RXcmFwcGVyID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogYEZvcmFgLFxuICAgICAgc2hvcnQ6IGBBIHNvY2lhbCBtZWRpYSBuZXR3b3JrIGJ1aWx0IG9uIHRoZSBTb2xhbmEgYmxvY2tjaGFpbi5gLFxuICAgICAgc2NvcGU6IFtgUnVzdGAsIGBBbmNob3JgLCBgVHlwZXNjcmlwdGBdLFxuICAgICAgdXJsOiBgaHR0cHM6Ly9mb3JhLmNvYCxcbiAgICAgIGRlc2NyaXB0aW9uOiBgUGVyc29uYWwgcGFzc2lvbiBwcm9qZWN0IGluIGNvbGxhYm9yYXRpb24gd2l0aCBteSBmcmllbmQuIFdl4oCZdmUgYmVlbiBidWlsZGluZyBGb3JhIGZvciB0aGUgcGFzdCA0IG1vbnRocyBzaW5jZSBJIHN0YXJ0ZWQgd29yayBvbiBteSBjYXBzdG9uZSBwcm9qZWN0IGFuZCBiZWNhbWUgaW5jcmVhc2luZ2x5IGludGVyZXN0ZWQgaW4gYmxvY2tjaGFpbiB0ZWNobm9sb2d5LlxcblxuICAgICAgV2UgYnVpbHQgYW4gdW5jZW5zb3JhYmxlIHNvY2lhbCBtZWRpYSBuZXR3b3JrIG9uIHRoZSBTb2xhbmEgYW5kIEFyd2VhdmUgYmxvY2tjaGFpbnMuIFNvbGFuYSBwcm9ncmFtcyB3cml0dGVuIGluIFJ1c3QgdXNpbmcgdGhlIEFuY2hvciBMYW5nIHdyYXBwZXIsIEFyd2VhdmUgY29udHJhY3RzIGFuZCBBUEkgd3JpdHRlbiBpbiBUeXBlc2NyaXB0LCBmcm9udGVuZCBidWlsdCB3aXRoIFJlYWN0LlxcblxuICAgICAgTXkgY29udHJpYnV0aW9ucyBhcmUgYWNyb3NzIHRoZSBlbnRpcmUgc3RhY2ssIGJ1dCBtb3N0bHkgb24gdGhlIOKAmGJhY2tlbmTigJkgb2YgdGhlIGFwcGxpY2F0aW9uLiBTaW5jZSBTb2xhbmEgcHJvZ3JhbW1pbmcgaXMgcmVsYXRpdmVseSBuZXcsIHRoZXJlIGlzbuKAmXQgbXVjaCBkb2N1bWVudGF0aW9uIG9yIFN0YWNrIE92ZXJmbG93IHJlZmVyZW5jZSwgYW5kIGFzIHN1Y2ggdGhpcyBwcm9qZWN0IGhhcyBiZWVuIGEgZ3JlYXQgZXhlcmNpc2UgaW4gaW5kZXBlbmRlbnQgcmVzZWFyY2ggYW5kIGRpc2NvdmVyeS5cXG5cbiAgICAgIFRoaXMgcHJvamVjdCB3YXMgc3VibWl0dGVkIHRvIHRoZSBTb2xhbmEgUmlwdGlkZSBoYWNrYXRob24sIGFuZCB3b24gdGhlIEFyd2VhdmUgT3BlbiBXZWIgRm91bmRyeSA2IGhhY2thdGhvbi5gLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IGBQVVBweWAsXG4gICAgICBzaG9ydDogYEEgcGF5LXBlci11c2UgcGxhdGZvcm0gYnVpbHQgb24gdGhlIEV0aGVyZXVtIGJsb2NrY2hhaW4uYCxcbiAgICAgIHNjb3BlOiBbYFJ1c3RgLCBgU29saWRpdHlgLCBgVHlwZXNjcmlwdGBdLFxuICAgICAgdXJsOiAnL2Jsb2cvcHVwcHktcG9zdC1tb3J0ZW0nLFxuICAgICAgZGVzY3JpcHRpb246IGBGb3IgbXkgc2VuaW9yIGNhcHN0b25lIHByb2plY3QsIHdlIGJ1aWx0IGEgZnVsbC1zdGFjayB3ZWIgYXBwbGljYXRpb24gdG8gaW1wbGVtZW50IHBheS1wZXItdXNlIGZ1bmN0aW9uYWxpdHkgZm9yIEZlc3RvIG1hY2hpbmVzIHVzaW5nIHRoZSBFdGhlcmV1bSBibG9ja2NoYWluLiBCYWNrZW5kIHdyaXR0ZW4gaW4gUnVzdCwgRXRoZXJldW0gY29udHJhY3RzIHdyaXR0ZW4gaW4gU29saWRpdHksIEhvc3RlZCBvbiBBV1MuXFxuXG4gICAgICBXZSBpbXBsZW1lbnRlZCBBZ2lsZSBwcm9qZWN0IG1hbmFnZW1lbnQgdG8gZXhwZWRpdGUgZGV2ZWxvcG1lbnQgcHJvY2Vzcy5cXG5cbiAgICAgIEkgd3JvdGUgYW5kIGRlcGxveWVkIGNvbnRyYWN0IHRvIHN0b3JlIG1hY2hpbmUgdXNhZ2UgZGF0YSBvbiB0aGUgRXRoZXJldW0gYmxvY2tjaGFpbi5cXG5cbiAgICAgIEkgd29ya2VkIHdpdGggdGhlIERaIEJhbmsgZGV2ZWxvcG1lbnQgdGVhbSB0byBkZXBsb3kgYSBjb250cmFjdCBhbGxvd2luZyB1c2VycyB0byBwYXkgaW4gRXVyb3MgZm9yIHNlcnZpY2VzIHJlbmRlcmVkIHZpYSBiYW5rIHRyYW5zZmVycy5cXG5cbiAgICAgIEkgYnVpbHQgYW5kIGRlcGxveWVkIEFXUyBMYW1iZGEgZnVuY3Rpb25zIGluIFJ1c3QgdG8gc3RvcmUgbWFjaGluZSB1c2FnZSBkYXRhLCB0cmlnZ2VyZWQgYnkgaW5jb21pbmcgTVFUVCBwYWNrZXRzLlxcblxuICAgICAgRm9yIG1vcmUgaW5mb3JtYXRpb24sIGNoZWNrIG91dCBteSBwb3N0LW1vcnRlbSBibG9nIHBvc3QuYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBgUGVyc29uYWwgU2l0ZWAsXG4gICAgICBzaG9ydDogYEFuIGV4cGVyaW1lbnQgaW4gUmVhY3QgKyBOZXh0LmAsXG4gICAgICBzY29wZTogW2BUeXBlc2NyaXB0YCwgYFJlYWN0YCwgYE5leHQuanNgXSxcbiAgICAgIHVybDogYC9gLFxuICAgICAgZGVzY3JpcHRpb246IGBUaGlzIGlzIGFuIG9uZ29pbmcgcHJvamVjdCB0aGF0IEkndmUgYmVlbiB3b3JraW5nIG9uIGZvciB3YXkgdG9vIGxvbmcsIGhvd2V2ZXIgaXQgaGFzIHNlcnZlZCBhcyBhIG5pY2UgZm9yYXkgaW50byBsZWFybmluZyBSZWFjdC5cXG5cbiAgICAgIEl0IHN0YXJ0ZWQgb3V0IHdpdGggYSBiYXNpYyBSZWFjdCBKYXZhc2NyaXB0IGFwcGxpY2F0aW9uLCBhbmQgYWZ0ZXIgYnVpbGRpbmcgc29tZSBzdHJ1Y3R1cmUgb3V0IHdhcyByZWZhY3RvcmVkIGFzIGEgUmVhY3QgVHlwZXNjcmlwdCBhcHBsaWNhdGlvbiBhbmQgdGhlbiBoYXN0aWx5IHJlZmFjdG9yZWQgaW50byBhIE5leHQuanMgYXBwLiBJIGFkb3B0ZWQgdHlwZXNjcmlwdCBtb3N0bHkgYmVjYXVzZSBJIGVuam95IHRoZSBsYW5ndWFnZSwgYW5kIE5leHQuanMgY2FtZSBhcyBhIHN1Z2dlc3Rpb24gZnJvbSBhIGZyaWVuZCBmb3IgZWFzaWVyIHBhZ2Ugcm91dGluZy5cXG5cbiAgICAgIEkgaG9wZSB0byBwdXNoIHVwZGF0ZXMgaW4gdGhlIGZvcm0gb2YgbmV3IGJsb2cgcG9zdHMgYW5kIHByb2plY3Qgc3VtbWFyaWVzLCBob3dldmVyIGZvciBub3cgSSBjYW4ndCBzYXkgSSBoYXZlIGFueSBsYXJnZXIgc2NhbGUgcGxhbnMgZm9yIHRoaXMgc2l0ZS5gLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IGBHdWl0YXIgSGVybyBSZWJ1aWxkYCxcbiAgICAgIHNob3J0OiBgVGhlIHF1aW50ZXNzZW50aWFsIENvdmlkIHByb2plY3QuYCxcbiAgICAgIHNjb3BlOiBbYEFyZHVpbm9gXSxcbiAgICAgIGRlc2NyaXB0aW9uOiBgT3ZlciB0aGUgZmlyc3QgZmV3IG1vbnRocyBvZiB0aGUgQ292aWQgbG9ja2Rvd25zLCBJIGRpc2NvdmVyZWQgdGhlIGdhbWUgQ2xvbmVIZXJvLCBhbiBvcGVuIHNvdXJjZSBidWlsZCBvZiBHdWl0YXIgSGVybyBmb3IgUEMuIEkgZW5qb3llZCBwbGF5aW5nIGl0IG9uIG15IGNvbXB1dGVyIHVzaW5nIHRoZSBrZXlib2FyZCwgYnV0IG5hdHVyYWxseSBJIGZlbHQgbGlrZSBJIG5lZWRlZCB0byBoYXZlIGEgbmF0aXZlIGd1aXRhciBoZXJvIGNvbnRyb2xsZXIgdG8gcmVhbGx5IGVuam95IGl0LlxcblxuICAgICAgVGhlcmUgd2FzIG9uZSBtYWluIHByb2JsZW0sIGhvd2V2ZXIsIHRoYXQgZ3VpdGFycyBidWlsdCBmb3IgdGhlIFBDIHdlcmUgZXhwZW5zaXZlIGFuZCByYXJlIHRvIGZpbmQuIE9uIHRoZSBvdGhlciBoYW5kLCBHb29kd2lsbCB3YXMgc2VsbGluZyBQUzMgd2lyZWxlc3MgZ3VpdGFycyBmb3Igb25seSBhIGNvdXBsZSBidWNrcywgYW5kIEFtYXpvbiBzb2xkIEFyZHVpbm8gTGVvbmFyZG9zIGF0IDMgZm9yICQxMC5cXG5cbiAgICAgIE9uZSBkYXkgSSdsbCB0cnkgdG8gdGhyb3cgdXAgbXkgY2lyY3VpdCBkaWFncmFtIGFuZCBjb2RlIHNuaXBwZXQgKGFsdGhvdWdoIHRoZSBjb2RlIGZvciB0dXJuaW5nIGEgYnV0dG9uIHByZXNzIGludG8gYSBnYW1lY29udHJvbGxlciBwcmVzcyBpc24ndCBwYXJ0aWN1bGFybHkgY29tcGxpY2F0ZWQpLiBGb3Igbm93LCBJJ2xsIGxlYXZlIHRoaXMgcHJvamVjdCBzdW1tYXJ5IGJlLCBhbmQgc3BlbmQgYSBsaXR0bGUgdGltZSBtYXN0ZXJpbmcgdGhlIHNvbG8gdG8gVmFuIEhhbGVuJ3MgUGFuYW1hIG9uIGV4cGVyIG1vZGUuYCxcbiAgICAgIGltYWdlczogW1xuICAgICAgICBgaHR0cHM6Ly9leHRlcm5hbC1jb250ZW50LmR1Y2tkdWNrZ28uY29tL2l1Lz91PWh0dHBzJTNBJTJGJTJGaW1ncy5lZS1wYXBlci5jb20lMkZpbWdzJTJGbzRZQkFGNWwzaVdBWG1EOEFBQjAxdmhTOUVjNzA1LmpwZyZmPTEmbm9mYj0xYCxcbiAgICAgICAgYGh0dHBzOi8vZXh0ZXJuYWwtY29udGVudC5kdWNrZHVja2dvLmNvbS9pdS8/dT1odHRwcyUzQSUyRiUyRmxhYmluYXBwLmNvbSUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAxOSUyRjA5JTJGQ0JTMTAxMjAzX0NpcmN1aXREaWFncmFtLnBuZyZmPTEmbm9mYj0xYCxcbiAgICAgIF0sXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2osIGluZGV4KSA9PiAoXG4gICAgICAgIDxQcm9qZWN0Q2FyZCBrZXk9e2luZGV4fSBpbmRleD17aW5kZXh9IHBvc3Q9e3Byb2p9PjwvUHJvamVjdENhcmQ+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0V3JhcHBlcjtcbiJdLCJuYW1lcyI6WyJQcm9qZWN0Q2FyZCIsInN0eWxlcyIsIlByb2plY3RXcmFwcGVyIiwicHJvamVjdHMiLCJ0aXRsZSIsInNob3J0Iiwic2NvcGUiLCJ1cmwiLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1hcCIsInByb2oiLCJpbmRleCIsInBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProjectWrapper.tsx\n");

/***/ })

});