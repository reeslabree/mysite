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

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Post_container__an1M_\",\n\t\"post-container\": \"Post_post-container__7j16L\",\n\t\"image\": \"Post_image__4PsN0\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvcGFnZXMvUG9zdC5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZXMvLi9zdHlsZXMvcGFnZXMvUG9zdC5tb2R1bGUuY3NzPzg5NjQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUG9zdF9jb250YWluZXJfX2FuMU1fXCIsXG5cdFwicG9zdC1jb250YWluZXJcIjogXCJQb3N0X3Bvc3QtY29udGFpbmVyX183ajE2TFwiLFxuXHRcImltYWdlXCI6IFwiUG9zdF9pbWFnZV9fNFBzTjBcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/pages/Post.module.css\n");

/***/ }),

/***/ "./pages/blog/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/blog/[slug].tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ \"marked\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_pages_Post_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/pages/Post.module.css */ \"./styles/pages/Post.module.css\");\n/* harmony import */ var _styles_pages_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Post_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_3__]);\nmarked__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nconst PostPage = ({ frontmatter: { title , date , image  } , slug , content ,  })=>{\n    console.log(image);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_6__.NextSeo, {\n                title: \"reeslabree.com | Blog\"\n            }, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/[slug].tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_pages_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_pages_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"post-container\"]),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: image,\n                            className: (_styles_pages_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().image),\n                            alt: \"The cover image for this article.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/[slug].tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_pages_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"post-title\",\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/[slug].tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"post-date\",\n                                    children: [\n                                        \"Posted on \",\n                                        date\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/[slug].tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/[slug].tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_pages_Post_module_css__WEBPACK_IMPORTED_MODULE_7___default()[\"post-body\"]),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image\",\n                                dangerouslySetInnerHTML: {\n                                    __html: marked__WEBPACK_IMPORTED_MODULE_3__.marked.parse(content)\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/[slug].tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/[slug].tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/[slug].tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/reeslabree/Documents/personal/mysite/pages/blog/[slug].tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);\nconst getStaticPaths = async ()=>{\n    const dirpath = path__WEBPACK_IMPORTED_MODULE_5___default().join(\"posts\");\n    console.log(dirpath);\n    const files = fs__WEBPACK_IMPORTED_MODULE_4___default().readdirSync(dirpath);\n    const paths = files.map((path1)=>{\n        return {\n            params: {\n                slug: path1.replace(\".md\", \"\")\n            }\n        };\n    });\n    return {\n        paths: paths,\n        fallback: false\n    };\n};\nconst getStaticProps = async ({ params  })=>{\n    const mdWithMeta = fs__WEBPACK_IMPORTED_MODULE_4___default().readFileSync(//@ts-ignore\n    path__WEBPACK_IMPORTED_MODULE_5___default().join(\"posts\", params.slug + \".md\"), \"utf-8\");\n    const { data: frontmatter , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(mdWithMeta);\n    return {\n        props: {\n            frontmatter,\n            params,\n            content\n        }\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDTztBQUNEO0FBQ1o7QUFDSTtBQUlnQztBQUNyQjtBQVluQyxNQUFNTyxRQUFRLEdBQTZCLENBQUMsRUFDMUNDLFdBQVcsRUFBRSxFQUFFQyxLQUFLLEdBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFLEdBQ25DQyxJQUFJLEdBQ0pDLE9BQU8sS0FDUixHQUFLO0lBQ0pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFLLENBQUMsQ0FBQztJQUNuQixxQkFDRTs7MEJBQ0UsOERBQUNMLDZDQUFPO2dCQUFDRyxLQUFLLEVBQUMsdUJBQXVCOzs7Ozt5QkFBRzswQkFFekMsOERBQUNPLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVosZ0ZBQWdCOzBCQUM5Qiw0RUFBQ1csS0FBRztvQkFBQ0MsU0FBUyxFQUFFWix3RkFBd0I7O3NDQUN0Qyw4REFBQ2MsS0FBRzs0QkFDRkMsR0FBRyxFQUFFVCxLQUFLOzRCQUNWTSxTQUFTLEVBQUVaLDRFQUFZOzRCQUN2QmdCLEdBQUcsRUFBQyxtQ0FBbUM7Ozs7O3FDQUN2QztzQ0FFRiw4REFBQ0wsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFWiw2RUFBYTs7OENBQzNCLDhEQUFDa0IsSUFBRTtvQ0FBQ04sU0FBUyxFQUFDLFlBQVk7OENBQUVSLEtBQUs7Ozs7OzZDQUFNOzhDQUN2Qyw4REFBQ2UsR0FBQztvQ0FBQ1AsU0FBUyxFQUFDLFdBQVc7O3dDQUFDLFlBQVU7d0NBQUNQLElBQUk7Ozs7Ozs2Q0FBSzs7Ozs7O3FDQUN6QztzQ0FFTiw4REFBQ00sS0FBRzs0QkFBQ0MsU0FBUyxFQUFFWixtRkFBbUI7c0NBQ2pDLDRFQUFDVyxLQUFHO2dDQUNGQyxTQUFTLEVBQUMsT0FBTztnQ0FDakJRLHVCQUF1QixFQUFFO29DQUFFQyxNQUFNLEVBQUV4QixnREFBWSxDQUFDVyxPQUFPLENBQUM7aUNBQUU7Ozs7O3lDQUNyRDs7Ozs7cUNBQ0g7Ozs7Ozs2QkFDRjs7Ozs7eUJBQ0Y7O29CQUNMLENBQ0g7Q0FDSDtBQUNELGlFQUFlTixRQUFRLEVBQUM7QUFFakIsTUFBTXFCLGNBQWMsR0FBbUIsVUFBWTtJQUN4RCxNQUFNQyxPQUFPLEdBQUd6QixnREFBUyxDQUFDLE9BQU8sQ0FBQztJQUNsQ1UsT0FBTyxDQUFDQyxHQUFHLENBQUNjLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLE1BQU1FLEtBQUssR0FBRzVCLHFEQUFjLENBQUMwQixPQUFPLENBQUM7SUFFckMsTUFBTUksS0FBSyxHQUFHRixLQUFLLENBQUNHLEdBQUcsQ0FBQyxDQUFDOUIsS0FBSSxHQUFLO1FBQ2hDLE9BQU87WUFDTCtCLE1BQU0sRUFBRTtnQkFDTnZCLElBQUksRUFBRVIsS0FBSSxDQUFDZ0MsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7YUFDOUI7U0FDRixDQUFDO0tBQ0gsQ0FBQztJQUVGLE9BQU87UUFDTEgsS0FBSyxFQUFFQSxLQUFLO1FBQ1pJLFFBQVEsRUFBRSxLQUFLO0tBQ2hCLENBQUM7Q0FDSCxDQUFDO0FBUUssTUFBTUMsY0FBYyxHQUFtQixPQUFPLEVBQUVILE1BQU0sR0FBRSxHQUFLO0lBQ2xFLE1BQU1JLFVBQVUsR0FBR3BDLHNEQUFlLENBQ2hDLFlBQVk7SUFDWkMsZ0RBQVMsQ0FBQyxPQUFPLEVBQUUrQixNQUFNLENBQUN2QixJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQ3ZDLE9BQU8sQ0FDUjtJQUVELE1BQU0sRUFBRTZCLElBQUksRUFBRWpDLFdBQVcsR0FBRUssT0FBTyxHQUFFLEdBQUdaLGtEQUFNLENBQUNzQyxVQUFVLENBQUM7SUFFekQsT0FBTztRQUNMRyxLQUFLLEVBQUU7WUFDTGxDLFdBQVc7WUFDWDJCLE1BQU07WUFDTnRCLE9BQU87U0FDUjtLQUNGLENBQUM7Q0FDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVlcy8uL3BhZ2VzL2Jsb2cvW3NsdWddLnRzeD9hZmI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XG5pbXBvcnQgeyBtYXJrZWQgfSBmcm9tIFwibWFya2VkXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgRmFDaGV2cm9uTGVmdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9wYWdlcy9Qb3N0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIjtcblxudHlwZSBQb3N0UGFnZVBhcmFtcyA9IHtcbiAgZnJvbnRtYXR0ZXI6IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRhdGU6IHN0cmluZztcbiAgICBpbWFnZTogc3RyaW5nO1xuICB9O1xuICBzbHVnOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn07XG5cbmNvbnN0IFBvc3RQYWdlOiBSZWFjdC5GQzxQb3N0UGFnZVBhcmFtcz4gPSAoe1xuICBmcm9udG1hdHRlcjogeyB0aXRsZSwgZGF0ZSwgaW1hZ2UgfSxcbiAgc2x1ZyxcbiAgY29udGVudCxcbn0pID0+IHtcbiAgY29uc29sZS5sb2coaW1hZ2UpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmV4dFNlbyB0aXRsZT1cInJlZXNsYWJyZWUuY29tIHwgQmxvZ1wiIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtY29udGFpbmVyXCJdfT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9XG4gICAgICAgICAgICBhbHQ9XCJUaGUgY292ZXIgaW1hZ2UgZm9yIHRoaXMgYXJ0aWNsZS5cIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicG9zdC10aXRsZVwiPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdC1kYXRlXCI+UG9zdGVkIG9uIHtkYXRlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJwb3N0LWJvZHlcIl19PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWFya2VkLnBhcnNlKGNvbnRlbnQpIH19XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUG9zdFBhZ2U7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRpcnBhdGggPSBwYXRoLmpvaW4oXCJwb3N0c1wiKTtcbiAgY29uc29sZS5sb2coZGlycGF0aCk7XG4gIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMoZGlycGF0aCk7XG5cbiAgY29uc3QgcGF0aHMgPSBmaWxlcy5tYXAoKHBhdGgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHNsdWc6IHBhdGgucmVwbGFjZShcIi5tZFwiLCBcIlwiKSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufTtcblxudHlwZSBHZXRTdGF0aWNQcm9wc1BhcmFtcyA9IHtcbiAgcGFyYW1zOiB7XG4gICAgc2x1Zzogc3RyaW5nO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IG1kV2l0aE1ldGEgPSBmcy5yZWFkRmlsZVN5bmMoXG4gICAgLy9AdHMtaWdub3JlXG4gICAgcGF0aC5qb2luKFwicG9zdHNcIiwgcGFyYW1zLnNsdWcgKyBcIi5tZFwiKSxcbiAgICBcInV0Zi04XCJcbiAgKTtcblxuICBjb25zdCB7IGRhdGE6IGZyb250bWF0dGVyLCBjb250ZW50IH0gPSBtYXR0ZXIobWRXaXRoTWV0YSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZnJvbnRtYXR0ZXIsXG4gICAgICBwYXJhbXMsXG4gICAgICBjb250ZW50LFxuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWF0dGVyIiwibWFya2VkIiwiZnMiLCJwYXRoIiwic3R5bGVzIiwiTmV4dFNlbyIsIlBvc3RQYWdlIiwiZnJvbnRtYXR0ZXIiLCJ0aXRsZSIsImRhdGUiLCJpbWFnZSIsInNsdWciLCJjb250ZW50IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImltZyIsInNyYyIsImFsdCIsImhlYWRlciIsImgxIiwicCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicGFyc2UiLCJnZXRTdGF0aWNQYXRocyIsImRpcnBhdGgiLCJqb2luIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsInBhdGhzIiwibWFwIiwicGFyYW1zIiwicmVwbGFjZSIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJtZFdpdGhNZXRhIiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/[slug].tsx\n");

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