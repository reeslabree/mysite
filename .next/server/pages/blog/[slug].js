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
exports.id = "pages/blog/[slug]";
exports.ids = ["pages/blog/[slug]"];
exports.modules = {

/***/ "./styles/pages/Post.module.css":
/*!**************************************!*\
  !*** ./styles/pages/Post.module.css ***!
  \**************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Post_container__an1M_\",\n\t\"image\": \"Post_image__4PsN0\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvcGFnZXMvUG9zdC5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWVzLy4vc3R5bGVzL3BhZ2VzL1Bvc3QubW9kdWxlLmNzcz84OTY0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlBvc3RfY29udGFpbmVyX19hbjFNX1wiLFxuXHRcImltYWdlXCI6IFwiUG9zdF9pbWFnZV9fNFBzTjBcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/pages/Post.module.css\n");

/***/ }),

/***/ "./pages/blog/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/blog/[slug].tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ \"marked\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_pages_Post_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/pages/Post.module.css */ \"./styles/pages/Post.module.css\");\n/* harmony import */ var _styles_pages_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Post_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_3__]);\nmarked__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nconst PostPage = ({ frontmatter: { title , date , image  } , slug , content ,  })=>{\n    console.log(image);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_6__.NextSeo, {\n                title: \"reeslabree.com | Blog\"\n            }, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/[slug].tsx\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_pages_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image,\n                        className: (_styles_pages_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().image),\n                        alt: \"The cover image for this article.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/[slug].tsx\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_pages_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"post-title\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/[slug].tsx\",\n                                lineNumber: 41,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"post-date\",\n                                children: [\n                                    \"Posted on \",\n                                    date\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/[slug].tsx\",\n                                lineNumber: 42,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/[slug].tsx\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_pages_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"post-body\"]),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"image\",\n                            dangerouslySetInnerHTML: {\n                                __html: marked__WEBPACK_IMPORTED_MODULE_3__.marked.parse(content)\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/[slug].tsx\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/[slug].tsx\",\n                        lineNumber: 45,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/[slug].tsx\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);\nconst getStaticPaths = async ()=>{\n    const dirpath = path__WEBPACK_IMPORTED_MODULE_5___default().join(\"posts\");\n    console.log(dirpath);\n    const files = fs__WEBPACK_IMPORTED_MODULE_4___default().readdirSync(dirpath);\n    const paths = files.map((path1)=>{\n        return {\n            params: {\n                slug: path1.replace(\".md\", \"\")\n            }\n        };\n    });\n    return {\n        paths: paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async ({ params  })=>{\n    const mdWithMeta = fs__WEBPACK_IMPORTED_MODULE_4___default().readFileSync(//@ts-ignore\n    path__WEBPACK_IMPORTED_MODULE_5___default().join(\"posts\", params.slug + \".md\"), \"utf-8\");\n    const { data: frontmatter , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(mdWithMeta);\n    return {\n        props: {\n            frontmatter,\n            params,\n            content\n        }\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDTztBQUNEO0FBQ1o7QUFDSTtBQUlnQztBQUNyQjtBQVluQyxNQUFNTyxRQUFRLEdBQTZCLENBQUMsRUFDMUNDLFdBQVcsRUFBRSxFQUFFQyxLQUFLLEdBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFLEdBQ25DQyxJQUFJLEdBQ0pDLE9BQU8sS0FDUixHQUFLO0lBQ0pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFLLENBQUMsQ0FBQztJQUNuQixxQkFDRTs7MEJBQ0EsOERBQUNMLDZDQUFPO2dCQUNORyxLQUFLLEVBQUMsdUJBQXVCOzs7Ozt5QkFDN0I7MEJBQ0YsOERBQUNPLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVosZ0ZBQWdCOztrQ0FDOUIsOERBQUNjLEtBQUc7d0JBQ0ZDLEdBQUcsRUFBRVQsS0FBSzt3QkFDVk0sU0FBUyxFQUFFWiw0RUFBWTt3QkFDdkJnQixHQUFHLEVBQUMsbUNBQW1DOzs7OztpQ0FDdkM7a0NBRUYsOERBQUNMLEtBQUc7d0JBQUNDLFNBQVMsRUFBRVosNkVBQWE7OzBDQUMzQiw4REFBQ2tCLElBQUU7Z0NBQUNOLFNBQVMsRUFBQyxZQUFZOzBDQUFFUixLQUFLOzs7Ozt5Q0FBTTswQ0FDdkMsOERBQUNlLEdBQUM7Z0NBQUNQLFNBQVMsRUFBQyxXQUFXOztvQ0FBQyxZQUFVO29DQUFDUCxJQUFJOzs7Ozs7eUNBQUs7Ozs7OztpQ0FDekM7a0NBRU4sOERBQUNNLEtBQUc7d0JBQUNDLFNBQVMsRUFBRVosbUZBQW1CO2tDQUNqQyw0RUFBQ1csS0FBRzs0QkFDRkMsU0FBUyxFQUFDLE9BQU87NEJBQ2pCUSx1QkFBdUIsRUFBRTtnQ0FBRUMsTUFBTSxFQUFFeEIsZ0RBQVksQ0FBQ1csT0FBTyxDQUFDOzZCQUFFOzs7OztxQ0FDckQ7Ozs7O2lDQUNIOzs7Ozs7eUJBQ0Y7O29CQUNILENBQ0g7Q0FDSDtBQUNELGlFQUFlTixRQUFRLEVBQUM7QUFFakIsTUFBTXFCLGNBQWMsR0FBbUIsVUFBWTtJQUN4RCxNQUFNQyxPQUFPLEdBQUd6QixnREFBUyxDQUFDLE9BQU8sQ0FBQztJQUNsQ1UsT0FBTyxDQUFDQyxHQUFHLENBQUNjLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLE1BQU1FLEtBQUssR0FBRzVCLHFEQUFjLENBQUMwQixPQUFPLENBQUM7SUFFckMsTUFBTUksS0FBSyxHQUFHRixLQUFLLENBQUNHLEdBQUcsQ0FBQyxDQUFDOUIsS0FBSSxHQUFLO1FBQ2hDLE9BQU87WUFDTCtCLE1BQU0sRUFBRTtnQkFDTnZCLElBQUksRUFBRVIsS0FBSSxDQUFDZ0MsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7YUFDOUI7U0FDRixDQUFDO0tBQ0gsQ0FBQztJQUVGLE9BQU87UUFDTEgsS0FBSyxFQUFFQSxLQUFLO1FBQ1pJLFFBQVEsRUFBRSxLQUFLO0tBQ2hCLENBQUM7Q0FDSCxDQUFDO0FBUUssTUFBTUMsY0FBYyxHQUFtQixPQUFPLEVBQUVILE1BQU0sR0FBRSxHQUFLO0lBQ2xFLE1BQU1JLFVBQVUsR0FBR3BDLHNEQUFlLENBQ2hDLFlBQVk7SUFDWkMsZ0RBQVMsQ0FBQyxPQUFPLEVBQUUrQixNQUFNLENBQUN2QixJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQ3ZDLE9BQU8sQ0FDUjtJQUVELE1BQU0sRUFBRTZCLElBQUksRUFBRWpDLFdBQVcsR0FBRUssT0FBTyxHQUFFLEdBQUdaLGtEQUFNLENBQUNzQyxVQUFVLENBQUM7SUFFekQsT0FBTztRQUNMRyxLQUFLLEVBQUU7WUFDTGxDLFdBQVc7WUFDWDJCLE1BQU07WUFDTnRCLE9BQU87U0FDUjtLQUNGLENBQUM7Q0FDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVlcy8uL3BhZ2VzL2Jsb2cvW3NsdWddLnRzeD9hZmI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XG5pbXBvcnQgeyBtYXJrZWQgfSBmcm9tIFwibWFya2VkXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgRmFDaGV2cm9uTGVmdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9wYWdlcy9Qb3N0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIjtcblxudHlwZSBQb3N0UGFnZVBhcmFtcyA9IHtcbiAgZnJvbnRtYXR0ZXI6IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRhdGU6IHN0cmluZztcbiAgICBpbWFnZTogc3RyaW5nO1xuICB9O1xuICBzbHVnOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn07XG5cbmNvbnN0IFBvc3RQYWdlOiBSZWFjdC5GQzxQb3N0UGFnZVBhcmFtcz4gPSAoe1xuICBmcm9udG1hdHRlcjogeyB0aXRsZSwgZGF0ZSwgaW1hZ2UgfSxcbiAgc2x1ZyxcbiAgY29udGVudCxcbn0pID0+IHtcbiAgY29uc29sZS5sb2coaW1hZ2UpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPE5leHRTZW8gXG4gICAgICB0aXRsZT0ncmVlc2xhYnJlZS5jb20gfCBCbG9nJ1xuICAgIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX1cbiAgICAgICAgYWx0PVwiVGhlIGNvdmVyIGltYWdlIGZvciB0aGlzIGFydGljbGUuXCJcbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBvc3QtdGl0bGVcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdC1kYXRlXCI+UG9zdGVkIG9uIHtkYXRlfTwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdC1ib2R5XCJdfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlXCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1hcmtlZC5wYXJzZShjb250ZW50KSB9fVxuICAgICAgICA+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQb3N0UGFnZTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGlycGF0aCA9IHBhdGguam9pbihcInBvc3RzXCIpO1xuICBjb25zb2xlLmxvZyhkaXJwYXRoKTtcbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhkaXJwYXRoKTtcblxuICBjb25zdCBwYXRocyA9IGZpbGVzLm1hcCgocGF0aCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2x1ZzogcGF0aC5yZXBsYWNlKFwiLm1kXCIsIFwiXCIpLFxuICAgICAgfSxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuXG50eXBlIEdldFN0YXRpY1Byb3BzUGFyYW1zID0ge1xuICBwYXJhbXM6IHtcbiAgICBzbHVnOiBzdHJpbmc7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgbWRXaXRoTWV0YSA9IGZzLnJlYWRGaWxlU3luYyhcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBwYXRoLmpvaW4oXCJwb3N0c1wiLCBwYXJhbXMuc2x1ZyArIFwiLm1kXCIpLFxuICAgIFwidXRmLThcIlxuICApO1xuXG4gIGNvbnN0IHsgZGF0YTogZnJvbnRtYXR0ZXIsIGNvbnRlbnQgfSA9IG1hdHRlcihtZFdpdGhNZXRhKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBmcm9udG1hdHRlcixcbiAgICAgIHBhcmFtcyxcbiAgICAgIGNvbnRlbnQsXG4gICAgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtYXR0ZXIiLCJtYXJrZWQiLCJmcyIsInBhdGgiLCJzdHlsZXMiLCJOZXh0U2VvIiwiUG9zdFBhZ2UiLCJmcm9udG1hdHRlciIsInRpdGxlIiwiZGF0ZSIsImltYWdlIiwic2x1ZyIsImNvbnRlbnQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaW1nIiwic3JjIiwiYWx0IiwiaGVhZGVyIiwiaDEiLCJwIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJwYXJzZSIsImdldFN0YXRpY1BhdGhzIiwiZGlycGF0aCIsImpvaW4iLCJmaWxlcyIsInJlYWRkaXJTeW5jIiwicGF0aHMiLCJtYXAiLCJwYXJhbXMiLCJyZXBsYWNlIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsIm1kV2l0aE1ldGEiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/[slug].tsx\n");

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

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = import("marked");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[slug].tsx"));
module.exports = __webpack_exports__;

})();