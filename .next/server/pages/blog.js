/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blog";
exports.ids = ["pages/blog"];
exports.modules = {

/***/ "./styles/components/PostBox.module.css":
/*!**********************************************!*\
  !*** ./styles/components/PostBox.module.css ***!
  \**********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"post-container\": \"PostBox_post-container__sRPgO\",\n\t\"heading\": \"PostBox_heading__TFSLt\",\n\t\"content\": \"PostBox_content__3OPJU\",\n\t\"date\": \"PostBox_date__033P0\",\n\t\"image\": \"PostBox_image__LGROc\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvY29tcG9uZW50cy9Qb3N0Qm94Lm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZXMvLi9zdHlsZXMvY29tcG9uZW50cy9Qb3N0Qm94Lm1vZHVsZS5jc3M/NTU2YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwb3N0LWNvbnRhaW5lclwiOiBcIlBvc3RCb3hfcG9zdC1jb250YWluZXJfX3NSUGdPXCIsXG5cdFwiaGVhZGluZ1wiOiBcIlBvc3RCb3hfaGVhZGluZ19fVEZTTHRcIixcblx0XCJjb250ZW50XCI6IFwiUG9zdEJveF9jb250ZW50X18zT1BKVVwiLFxuXHRcImRhdGVcIjogXCJQb3N0Qm94X2RhdGVfXzAzM1AwXCIsXG5cdFwiaW1hZ2VcIjogXCJQb3N0Qm94X2ltYWdlX19MR1JPY1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/components/PostBox.module.css\n");

/***/ }),

/***/ "./styles/components/Posts.module.css":
/*!********************************************!*\
  !*** ./styles/components/Posts.module.css ***!
  \********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"posts-container\": \"Posts_posts-container__c5gTJ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvY29tcG9uZW50cy9Qb3N0cy5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVlcy8uL3N0eWxlcy9jb21wb25lbnRzL1Bvc3RzLm1vZHVsZS5jc3M/Nzg1NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwb3N0cy1jb250YWluZXJcIjogXCJQb3N0c19wb3N0cy1jb250YWluZXJfX2M1Z1RKXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/components/Posts.module.css\n");

/***/ }),

/***/ "./components/PostBox.tsx":
/*!********************************!*\
  !*** ./components/PostBox.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_PostBox_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/PostBox.module.css */ \"./styles/components/PostBox.module.css\");\n/* harmony import */ var _styles_components_PostBox_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_PostBox_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst PostBox = ({ post: { title , date , excerpt , image  } , slug , index ,  })=>{\n    const link = `/blog/${slug}`;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_PostBox_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"post-container\"]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: link,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: (_styles_components_PostBox_module_css__WEBPACK_IMPORTED_MODULE_2___default().date),\n                    children: date\n                }, void 0, false, {\n                    fileName: \"/Users/reeslabree/Documents/personal/mysite/components/PostBox.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/reeslabree/Documents/personal/mysite/components/PostBox.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_components_PostBox_module_css__WEBPACK_IMPORTED_MODULE_2___default().heading),\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/reeslabree/Documents/personal/mysite/components/PostBox.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: (_styles_components_PostBox_module_css__WEBPACK_IMPORTED_MODULE_2___default().image),\n                    src: image,\n                    alt: \"post\"\n                }, void 0, false, {\n                    fileName: \"/Users/reeslabree/Documents/personal/mysite/components/PostBox.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_components_PostBox_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n                    children: excerpt\n                }, void 0, false, {\n                    fileName: \"/Users/reeslabree/Documents/personal/mysite/components/PostBox.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/reeslabree/Documents/personal/mysite/components/PostBox.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/PostBox.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostBox);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RCb3gudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNtQztBQVE3RCxNQUFNRSxPQUFPLEdBQXdCLENBQUMsRUFDcENDLElBQUksRUFBRSxFQUFFQyxLQUFLLEdBQUVDLElBQUksR0FBRUMsT0FBTyxHQUFFQyxLQUFLLEdBQUUsR0FDckNDLElBQUksR0FDSkMsS0FBSyxLQUNOLEdBQUs7SUFDSixNQUFNQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUVGLElBQUksQ0FBQyxDQUFDO0lBQzVCLHFCQUNFLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBRVgsZ0dBQXdCO2tCQUN0Qyw0RUFBQ1ksR0FBQztZQUFDQyxJQUFJLEVBQUVKLElBQUk7OzhCQUNYLDhEQUFDSyxNQUFJO29CQUFDSCxTQUFTLEVBQUVYLG1GQUFjOzhCQUFHSSxJQUFJOzs7Ozs2QkFBUTs4QkFDOUMsOERBQUNXLElBQUU7Ozs7NkJBQUc7OEJBQ04sOERBQUNMLEtBQUc7b0JBQUNDLFNBQVMsRUFBRVgsc0ZBQWlCOzhCQUFHRyxLQUFLOzs7Ozs2QkFBTzs4QkFDaEQsOERBQUNhLEtBQUc7b0JBQUNMLFNBQVMsRUFBRVgsb0ZBQWU7b0JBQUVpQixHQUFHLEVBQUVYLEtBQUs7b0JBQUVZLEdBQUcsRUFBQyxNQUFNOzs7Ozs2QkFBRzs4QkFDMUQsOERBQUNSLEtBQUc7b0JBQUNDLFNBQVMsRUFBRVgsc0ZBQWlCOzhCQUFHSyxPQUFPOzs7Ozs2QkFBTzs7Ozs7O3FCQUNoRDs7Ozs7aUJBQ0EsQ0FDTjtDQUNIO0FBQ0QsaUVBQWVKLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZXMvLi9jb21wb25lbnRzL1Bvc3RCb3gudHN4PzhlNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvUG9zdEJveC5tb2R1bGUuY3NzXCI7XG5cbnR5cGUgUG9zdFByb3BzID0ge1xuICBwb3N0OiB7IHRpdGxlOiBzdHJpbmc7IGRhdGU6IHN0cmluZzsgZXhjZXJwdDogc3RyaW5nOyBpbWFnZTogc3RyaW5nLCBpbmRleDogbnVtYmVyIH07XG4gIHNsdWc6IHN0cmluZyxcbiAgaW5kZXg6IG51bWJlcjtcbn07XG5cbmNvbnN0IFBvc3RCb3g6IFJlYWN0LkZDPFBvc3RQcm9wcz4gPSAoe1xuICBwb3N0OiB7IHRpdGxlLCBkYXRlLCBleGNlcnB0LCBpbWFnZSB9LFxuICBzbHVnLFxuICBpbmRleCxcbn0pID0+IHtcbiAgY29uc3QgbGluayA9IGAvYmxvZy8ke3NsdWd9YFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LWNvbnRhaW5lclwiXX0+XG4gICAgICA8YSBocmVmPXtsaW5rfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbXCJkYXRlXCJdfT57ZGF0ZX08L3NwYW4+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiaGVhZGluZ1wiXX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzW1wiaW1hZ2VcIl19IHNyYz17aW1hZ2V9IGFsdD1cInBvc3RcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wiY29udGVudFwiXX0+e2V4Y2VycHR9PC9kaXY+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUG9zdEJveDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIlBvc3RCb3giLCJwb3N0IiwidGl0bGUiLCJkYXRlIiwiZXhjZXJwdCIsImltYWdlIiwic2x1ZyIsImluZGV4IiwibGluayIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwic3BhbiIsImJyIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostBox.tsx\n");

/***/ }),

/***/ "./components/Posts.tsx":
/*!******************************!*\
  !*** ./components/Posts.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_Posts_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Posts.module.css */ \"./styles/components/Posts.module.css\");\n/* harmony import */ var _styles_components_Posts_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Posts_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _PostBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostBox */ \"./components/PostBox.tsx\");\n\n\n\n\nconst Posts = (props)=>{\n    console.log(props);\n    //@ts-ignore\n    const posts = props.posts;\n    console.log(posts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_Posts_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"posts-container\"]),\n        children: posts.map(({ frontmatter , slug  }, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                index: index,\n                slug: slug,\n                post: frontmatter\n            }, index, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/components/Posts.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, undefined)\n        )\n    }, void 0, false, {\n        fileName: \"/Users/reeslabree/Documents/personal/mysite/components/Posts.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ2lDO0FBQzNCO0FBcUJoQyxNQUFNRyxLQUFLLEdBQTJCLENBQUNDLEtBQUssR0FBSztJQUMvQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQztJQUNsQixZQUFZO0lBQ1osTUFBTUcsS0FBSyxHQUFHSCxLQUFLLENBQUNHLEtBQUs7SUFDekJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxLQUFLLENBQUM7SUFDbEIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFUiwrRkFBeUI7a0JBQ3RDTSxLQUFLLENBQUNHLEdBQUcsQ0FBQyxDQUFDLEVBQUNDLFdBQVcsR0FBRUMsSUFBSSxHQUFDLEVBQUVDLEtBQUssaUJBQ3BDLDhEQUFDWCxnREFBTztnQkFBYVcsS0FBSyxFQUFFQSxLQUFLO2dCQUFFRCxJQUFJLEVBQUdBLElBQUk7Z0JBQUVFLElBQUksRUFBRUgsV0FBVztlQUFuREUsS0FBSzs7Ozt5QkFBMEQ7UUFDOUUsQ0FBQzs7Ozs7aUJBQ0UsQ0FDTjtDQUNIO0FBQ0QsaUVBQWVWLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZXMvLi9jb21wb25lbnRzL1Bvc3RzLnRzeD9lZmNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL1Bvc3RzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBQb3N0Qm94IGZyb20gXCIuL1Bvc3RCb3hcIjtcblxudHlwZSBQb3N0ID0ge1xuICAgIHRpdGxlOiBzdHJpbmcsIFxuICAgIGRhdGU6IHN0cmluZywgXG4gICAgZXhjZXJwdDogc3RyaW5nLCBcbiAgICBpbWFnZTogc3RyaW5nLFxuICAgIGluZGV4OiBudW1iZXIsXG59O1xuXG50eXBlIFBvc3RzUGFyYW1zID0ge1xuICBzbHVnOiBzdHJpbmcsXG4gIGZyb250bWF0dGVyOiB7XG4gICAgdGl0bGU6IHN0cmluZywgXG4gICAgZGF0ZTogc3RyaW5nLCBcbiAgICBleGNlcnB0OiBzdHJpbmcsIFxuICAgIGltYWdlOiBzdHJpbmcsXG4gICAgaW5kZXg6IG51bWJlcixcbiAgfVxufVxuXG5jb25zdCBQb3N0czogUmVhY3QuRkM8UG9zdHNQYXJhbXNbXT49IChwcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZyhwcm9wcylcbiAgLy9AdHMtaWdub3JlXG4gIGNvbnN0IHBvc3RzID0gcHJvcHMucG9zdHMgYXMgUG9zdHNQYXJhbXNbXVxuICBjb25zb2xlLmxvZyhwb3N0cylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdHMtY29udGFpbmVyXCJdfT5cbiAgICAgIHtwb3N0cy5tYXAoKHtmcm9udG1hdHRlciwgc2x1Z30sIGluZGV4KSA9PiAoXG4gICAgICAgIDxQb3N0Qm94IGtleT17aW5kZXh9IGluZGV4PXtpbmRleH0gc2x1Zz0ge3NsdWd9IHBvc3Q9e2Zyb250bWF0dGVyfT48L1Bvc3RCb3g+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQb3N0cztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIlBvc3RCb3giLCJQb3N0cyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInBvc3RzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiZnJvbnRtYXR0ZXIiLCJzbHVnIiwiaW5kZXgiLCJwb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Posts.tsx\n");

/***/ }),

/***/ "./pages/blog/index.tsx":
/*!******************************!*\
  !*** ./pages/blog/index.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Posts */ \"./components/Posts.tsx\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst Blog = (posts)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_6__.NextSeo, {\n                title: \"reeslabree.com | Blog\"\n            }, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    fontSize: \"2rem\",\n                    display: \"flex\",\n                    justifyContent: \"left\",\n                    marginTop: \"2rem\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Posts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    ...posts\n                }, void 0, false, {\n                    fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);\n//fetch data at build time\nconst getStaticProps = async ()=>{\n    //gets files from posts directory\n    const files = fs__WEBPACK_IMPORTED_MODULE_3___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_4___default().join(\"posts\"));\n    //get slug & frontmatter from '/posts'\n    const posts = files.map((filename)=>{\n        //create slug\n        const slug = filename.replace(\".md\", \"\");\n        //get frontmatter\n        const mdWithMeta = fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_4___default().join(\"posts\", filename), \"utf-8\");\n        //parse frontmatter\n        const { data: frontmatter  } = gray_matter__WEBPACK_IMPORTED_MODULE_5___default()(mdWithMeta);\n        return {\n            slug,\n            frontmatter\n        };\n    });\n    // sort the posts by index\n    posts.sort((a, b)=>b.frontmatter.index - a.frontmatter.index\n    );\n    return {\n        props: {\n            posts\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNpQjtBQUV2QjtBQUNJO0FBQ1M7QUFDRTtBQUVuQyxNQUFNTSxJQUFJLEdBQTRCLENBQUNDLEtBQUssR0FBSztJQUMvQyxxQkFDRTs7MEJBQ0EsOERBQUNGLDZDQUFPO2dCQUNORyxLQUFLLEVBQUMsdUJBQXVCOzs7Ozt5QkFDN0I7MEJBQ0YsOERBQUNDLEtBQUc7Z0JBQ0ZDLEtBQUssRUFBRTtvQkFDTEMsUUFBUSxFQUFFLE1BQU07b0JBQ2hCQyxPQUFPLEVBQUUsTUFBTTtvQkFDZkMsY0FBYyxFQUFFLE1BQU07b0JBQ3RCQyxTQUFTLEVBQUUsTUFBTTtpQkFDbEI7MEJBRUQsNEVBQUNiLHlEQUFLO29CQUFHLEdBQUlNLEtBQUs7Ozs7OzZCQUFLOzs7Ozt5QkFDbkI7O29CQUNILENBQ0g7Q0FDSDtBQUNELGlFQUFlRCxJQUFJLEVBQUM7QUFhcEIsMEJBQTBCO0FBQ25CLE1BQU1TLGNBQWMsR0FBbUIsVUFBWTtJQUN4RCxpQ0FBaUM7SUFDakMsTUFBTUMsS0FBSyxHQUFHZCxxREFBYyxDQUFDQyxnREFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRWhELHNDQUFzQztJQUN0QyxNQUFNSSxLQUFLLEdBQUdTLEtBQUssQ0FBQ0csR0FBRyxDQUFDLENBQUNDLFFBQVEsR0FBSztRQUNwQyxhQUFhO1FBQ2IsTUFBTUMsSUFBSSxHQUFHRCxRQUFRLENBQUNFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBRXhDLGlCQUFpQjtRQUNqQixNQUFNQyxVQUFVLEdBQUdyQixzREFBZSxDQUFDQyxnREFBUyxDQUFDLE9BQU8sRUFBRWlCLFFBQVEsQ0FBQyxFQUFFLE9BQU8sQ0FBQztRQUV6RSxtQkFBbUI7UUFDbkIsTUFBTSxFQUFFSyxJQUFJLEVBQUVDLFdBQVcsR0FBRSxHQUFHdEIsa0RBQU0sQ0FBQ21CLFVBQVUsQ0FBQztRQUVoRCxPQUFPO1lBQ0xGLElBQUk7WUFDSkssV0FBVztTQUNaLENBQTJCO0tBQzdCLENBQUM7SUFFRiwwQkFBMEI7SUFDMUJuQixLQUFLLENBQUNvQixJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEdBQUtBLENBQUMsQ0FBQ0gsV0FBVyxDQUFDSSxLQUFLLEdBQUdGLENBQUMsQ0FBQ0YsV0FBVyxDQUFDSSxLQUFLO0lBQUEsQ0FBQztJQUUvRCxPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUNMeEIsS0FBSztTQUNOO0tBQ0YsQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWVzLy4vcGFnZXMvYmxvZy9pbmRleC50c3g/ZGVkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9zdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdHNcIjtcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gXCJuZXh0LXNlb1wiO1xuXG5jb25zdCBCbG9nOiBSZWFjdC5GQzxQb3N0c1BhcmFtc1tdPiA9IChwb3N0cykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPE5leHRTZW8gXG4gICAgICB0aXRsZT0ncmVlc2xhYnJlZS5jb20gfCBCbG9nJ1xuICAgIC8+XG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZm9udFNpemU6IFwiMnJlbVwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwibGVmdFwiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiMnJlbVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8UG9zdHMgeyAuLi4gcG9zdHMgfSAvPlxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEJsb2c7XG5cbnR5cGUgUG9zdHNQYXJhbXMgPSB7XG4gIHNsdWc6IHN0cmluZztcbiAgZnJvbnRtYXR0ZXI6IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRhdGU6IHN0cmluZztcbiAgICBleGNlcnB0OiBzdHJpbmc7XG4gICAgaW1hZ2U6IHN0cmluZztcbiAgICBpbmRleDogbnVtYmVyO1xuICB9O1xufTtcblxuLy9mZXRjaCBkYXRhIGF0IGJ1aWxkIHRpbWVcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vZ2V0cyBmaWxlcyBmcm9tIHBvc3RzIGRpcmVjdG9yeVxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbihcInBvc3RzXCIpKTtcblxuICAvL2dldCBzbHVnICYgZnJvbnRtYXR0ZXIgZnJvbSAnL3Bvc3RzJ1xuICBjb25zdCBwb3N0cyA9IGZpbGVzLm1hcCgoZmlsZW5hbWUpID0+IHtcbiAgICAvL2NyZWF0ZSBzbHVnXG4gICAgY29uc3Qgc2x1ZyA9IGZpbGVuYW1lLnJlcGxhY2UoXCIubWRcIiwgXCJcIik7XG5cbiAgICAvL2dldCBmcm9udG1hdHRlclxuICAgIGNvbnN0IG1kV2l0aE1ldGEgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKFwicG9zdHNcIiwgZmlsZW5hbWUpLCBcInV0Zi04XCIpO1xuXG4gICAgLy9wYXJzZSBmcm9udG1hdHRlclxuICAgIGNvbnN0IHsgZGF0YTogZnJvbnRtYXR0ZXIgfSA9IG1hdHRlcihtZFdpdGhNZXRhKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzbHVnLFxuICAgICAgZnJvbnRtYXR0ZXIsXG4gICAgfSBhcyB1bmtub3duIGFzIFBvc3RzUGFyYW1zO1xuICB9KTtcblxuICAvLyBzb3J0IHRoZSBwb3N0cyBieSBpbmRleFxuICBwb3N0cy5zb3J0KChhLCBiKSA9PiBiLmZyb250bWF0dGVyLmluZGV4IC0gYS5mcm9udG1hdHRlci5pbmRleClcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBvc3RzIiwiZnMiLCJwYXRoIiwibWF0dGVyIiwiTmV4dFNlbyIsIkJsb2ciLCJwb3N0cyIsInRpdGxlIiwiZGl2Iiwic3R5bGUiLCJmb250U2l6ZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsImdldFN0YXRpY1Byb3BzIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsImpvaW4iLCJtYXAiLCJmaWxlbmFtZSIsInNsdWciLCJyZXBsYWNlIiwibWRXaXRoTWV0YSIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJmcm9udG1hdHRlciIsInNvcnQiLCJhIiwiYiIsImluZGV4IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/index.tsx\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/index.tsx"));
module.exports = __webpack_exports__;

})();