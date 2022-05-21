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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Posts */ \"./components/Posts.tsx\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst Blog = (posts)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            fontSize: \"2rem\",\n            display: \"flex\",\n            justifyContent: \"left\",\n            marginTop: \"2rem\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Posts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            ...posts\n        }, void 0, false, {\n            fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/index.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);\n//fetch data at build time\nconst getStaticProps = async ()=>{\n    //gets files from posts directory\n    const files = fs__WEBPACK_IMPORTED_MODULE_3___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_4___default().join(\"posts\"));\n    //get slug & frontmatter from '/posts'\n    const posts = files.map((filename)=>{\n        //create slug\n        const slug = filename.replace(\".md\", \"\");\n        //get frontmatter\n        const mdWithMeta = fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_4___default().join(\"posts\", filename), \"utf-8\");\n        //parse frontmatter\n        const { data: frontmatter  } = gray_matter__WEBPACK_IMPORTED_MODULE_5___default()(mdWithMeta);\n        return {\n            slug,\n            frontmatter\n        };\n    });\n    return {\n        props: {\n            posts\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDaUI7QUFFdkI7QUFDSTtBQUNTO0FBRWpDLE1BQU1LLElBQUksR0FBNEIsQ0FBQ0MsS0FBSyxHQUFLO0lBQy9DLHFCQUNFLDhEQUFDQyxLQUFHO1FBQ0ZDLEtBQUssRUFBRTtZQUNMQyxRQUFRLEVBQUUsTUFBTTtZQUNoQkMsT0FBTyxFQUFFLE1BQU07WUFDZkMsY0FBYyxFQUFFLE1BQU07WUFDdEJDLFNBQVMsRUFBRSxNQUFNO1NBQ2xCO2tCQUVELDRFQUFDWCx5REFBSztZQUFHLEdBQUlLLEtBQUs7Ozs7O3FCQUFLOzs7OztpQkFDbkIsQ0FDTjtDQUNIO0FBQ0QsaUVBQWVELElBQUksRUFBQztBQWFwQiwwQkFBMEI7QUFDbkIsTUFBTVEsY0FBYyxHQUFtQixVQUFZO0lBQ3hELGlDQUFpQztJQUNqQyxNQUFNQyxLQUFLLEdBQUdaLHFEQUFjLENBQUNDLGdEQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFaEQsc0NBQXNDO0lBQ3RDLE1BQU1HLEtBQUssR0FBR1EsS0FBSyxDQUFDRyxHQUFHLENBQUMsQ0FBQ0MsUUFBUSxHQUFLO1FBQ3BDLGFBQWE7UUFDYixNQUFNQyxJQUFJLEdBQUdELFFBQVEsQ0FBQ0UsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7UUFFeEMsaUJBQWlCO1FBQ2pCLE1BQU1DLFVBQVUsR0FBR25CLHNEQUFlLENBQUNDLGdEQUFTLENBQUMsT0FBTyxFQUFFZSxRQUFRLENBQUMsRUFBRSxPQUFPLENBQUM7UUFFekUsbUJBQW1CO1FBQ25CLE1BQU0sRUFBRUssSUFBSSxFQUFFQyxXQUFXLEdBQUUsR0FBR3BCLGtEQUFNLENBQUNpQixVQUFVLENBQUM7UUFFaEQsT0FBTztZQUNMRixJQUFJO1lBQ0pLLFdBQVc7U0FDWixDQUEyQjtLQUM3QixDQUFDO0lBR0YsT0FBTztRQUNMQyxLQUFLLEVBQUU7WUFDTG5CLEtBQUs7U0FDTjtLQUNGLENBQUM7Q0FDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVlcy8uL3BhZ2VzL2Jsb2cvaW5kZXgudHN4P2RlZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvc3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RzXCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcblxuY29uc3QgQmxvZzogUmVhY3QuRkM8UG9zdHNQYXJhbXNbXT4gPSAocG9zdHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBmb250U2l6ZTogXCIycmVtXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJsZWZ0XCIsXG4gICAgICAgIG1hcmdpblRvcDogXCIycmVtXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxQb3N0cyB7IC4uLiBwb3N0cyB9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQmxvZztcblxudHlwZSBQb3N0c1BhcmFtcyA9IHtcbiAgc2x1Zzogc3RyaW5nO1xuICBmcm9udG1hdHRlcjoge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZGF0ZTogc3RyaW5nO1xuICAgIGV4Y2VycHQ6IHN0cmluZztcbiAgICBpbWFnZTogc3RyaW5nO1xuICAgIGluZGV4OiBudW1iZXI7XG4gIH07XG59O1xuXG4vL2ZldGNoIGRhdGEgYXQgYnVpbGQgdGltZVxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgLy9nZXRzIGZpbGVzIGZyb20gcG9zdHMgZGlyZWN0b3J5XG4gIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKFwicG9zdHNcIikpO1xuXG4gIC8vZ2V0IHNsdWcgJiBmcm9udG1hdHRlciBmcm9tICcvcG9zdHMnXG4gIGNvbnN0IHBvc3RzID0gZmlsZXMubWFwKChmaWxlbmFtZSkgPT4ge1xuICAgIC8vY3JlYXRlIHNsdWdcbiAgICBjb25zdCBzbHVnID0gZmlsZW5hbWUucmVwbGFjZShcIi5tZFwiLCBcIlwiKTtcblxuICAgIC8vZ2V0IGZyb250bWF0dGVyXG4gICAgY29uc3QgbWRXaXRoTWV0YSA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oXCJwb3N0c1wiLCBmaWxlbmFtZSksIFwidXRmLThcIik7XG5cbiAgICAvL3BhcnNlIGZyb250bWF0dGVyXG4gICAgY29uc3QgeyBkYXRhOiBmcm9udG1hdHRlciB9ID0gbWF0dGVyKG1kV2l0aE1ldGEpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNsdWcsXG4gICAgICBmcm9udG1hdHRlcixcbiAgICB9IGFzIHVua25vd24gYXMgUG9zdHNQYXJhbXM7XG4gIH0pO1xuXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQb3N0cyIsImZzIiwicGF0aCIsIm1hdHRlciIsIkJsb2ciLCJwb3N0cyIsImRpdiIsInN0eWxlIiwiZm9udFNpemUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJnZXRTdGF0aWNQcm9wcyIsImZpbGVzIiwicmVhZGRpclN5bmMiLCJqb2luIiwibWFwIiwiZmlsZW5hbWUiLCJzbHVnIiwicmVwbGFjZSIsIm1kV2l0aE1ldGEiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwiZnJvbnRtYXR0ZXIiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/index.tsx\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

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