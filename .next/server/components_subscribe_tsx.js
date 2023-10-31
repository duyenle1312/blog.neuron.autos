"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_subscribe_tsx";
exports.ids = ["components_subscribe_tsx"];
exports.modules = {

/***/ "./components/subscribe-form.tsx":
/*!***************************************!*\
  !*** ./components/subscribe-form.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SubscribeForm: () => (/* binding */ SubscribeForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ \"./generated/graphql.ts\");\n/* harmony import */ var _contexts_appContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contexts/appContext */ \"./components/contexts/appContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([graphql_request__WEBPACK_IMPORTED_MODULE_1__]);\ngraphql_request__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst GQL_ENDPOINT = \"https://gql.hashnode.com\";\nconst SubscribeForm = ()=>{\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [requestInProgress, setRequestInProgress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const { publication } = (0,_contexts_appContext__WEBPACK_IMPORTED_MODULE_4__.useAppContext)();\n    const subscribe = async ()=>{\n        const email = inputRef.current?.value;\n        if (!email) return;\n        setRequestInProgress(true);\n        try {\n            const data = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(GQL_ENDPOINT, _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.SubscribeToNewsletterDocument, {\n                input: {\n                    publicationId: publication.id,\n                    email\n                }\n            });\n            setRequestInProgress(false);\n            setStatus(data.subscribeToNewsletter.status);\n        } catch (error) {\n            const message = error.response?.errors?.[0]?.message;\n            if (message) {\n                window.alert(message);\n            }\n            setRequestInProgress(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            !status && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full rounded-full bg-white p-2 dark:bg-neutral-950\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: inputRef,\n                        type: \"email\",\n                        placeholder: \"john@doe.com\",\n                        className: \"focus:outline-primary-600 dark:focus:outline-primary-500 left-3 top-3 w-full rounded-full p-3 text-base text-black outline-none dark:bg-neutral-950 dark:text-neutral-50\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lengomyduyen/Documents/hashnode-guides/packages/blog-starter-kit/themes/enterprise/components/subscribe-form.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: requestInProgress,\n                        onClick: subscribe,\n                        className: \"bg-primary-600 dark:bg-primary-600 absolute right-3 top-3 rounded-full px-3 py-2 text-white disabled:cursor-not-allowed disabled:opacity-80\",\n                        children: \"Subscribe\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lengomyduyen/Documents/hashnode-guides/packages/blog-starter-kit/themes/enterprise/components/subscribe-form.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lengomyduyen/Documents/hashnode-guides/packages/blog-starter-kit/themes/enterprise/components/subscribe-form.tsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, undefined),\n            status === \"PENDING\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full p-2 text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-bold text-green-600 dark:text-green-500\",\n                        children: \"Almost there!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lengomyduyen/Documents/hashnode-guides/packages/blog-starter-kit/themes/enterprise/components/subscribe-form.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-medium text-slate-600 dark:text-neutral-300\",\n                        children: [\n                            \"Check your inbox for a confirmation email and click\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: '\"Confirm and Subscribe\"'\n                            }, void 0, false, {\n                                fileName: \"/Users/lengomyduyen/Documents/hashnode-guides/packages/blog-starter-kit/themes/enterprise/components/subscribe-form.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 7\n                            }, undefined),\n                            \" to complete your subscription. Thanks for joining us!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lengomyduyen/Documents/hashnode-guides/packages/blog-starter-kit/themes/enterprise/components/subscribe-form.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lengomyduyen/Documents/hashnode-guides/packages/blog-starter-kit/themes/enterprise/components/subscribe-form.tsx\",\n                lineNumber: 62,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1YnNjcmliZS1mb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDRztBQU1YO0FBQ3dCO0FBRXRELE1BQU1LLGVBQWVDLDBCQUE2QztBQUUzRCxNQUFNRyxnQkFBZ0I7SUFDNUIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQTtJQUNwQyxNQUFNLENBQUNVLG1CQUFtQkMscUJBQXFCLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzNELE1BQU1ZLFdBQVdiLDZDQUFNQSxDQUFtQjtJQUMxQyxNQUFNLEVBQUVjLFdBQVcsRUFBRSxHQUFHWCxtRUFBYUE7SUFFckMsTUFBTVksWUFBWTtRQUNqQixNQUFNQyxRQUFRSCxTQUFTSSxPQUFPLEVBQUVDO1FBQ2hDLElBQUksQ0FBQ0YsT0FBTztRQUVaSixxQkFBcUI7UUFFckIsSUFBSTtZQUNILE1BQU1PLE9BQU8sTUFBTXBCLDJEQUFPQSxDQUd4QkssY0FBY0YsNkVBQTZCQSxFQUFFO2dCQUM5Q2tCLE9BQU87b0JBQUVDLGVBQWVQLFlBQVlRLEVBQUU7b0JBQUVOO2dCQUFNO1lBQy9DO1lBQ0FKLHFCQUFxQjtZQUNyQkYsVUFBVVMsS0FBS0kscUJBQXFCLENBQUNkLE1BQU07UUFDNUMsRUFBRSxPQUFPZSxPQUFPO1lBQ2YsTUFBTUMsVUFBVSxNQUFlQyxRQUFRLEVBQUVDLFFBQVEsQ0FBQyxFQUFFLEVBQUVGO1lBQ3RELElBQUlBLFNBQVM7Z0JBQ1pHLE9BQU9DLEtBQUssQ0FBQ0o7WUFDZDtZQUNBYixxQkFBcUI7UUFDdEI7SUFDRDtJQUNBLHFCQUNDOztZQUNFLENBQUNILHdCQUNELDhEQUFDcUI7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDWDt3QkFDQVksS0FBS25CO3dCQUNMb0IsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkgsV0FBVTs7Ozs7O2tDQUVYLDhEQUFDSTt3QkFDQUMsVUFBVXpCO3dCQUNWMEIsU0FBU3RCO3dCQUNUZ0IsV0FBVTtrQ0FDVjs7Ozs7Ozs7Ozs7O1lBS0Z0QixXQUFXLDJCQUNYLDhEQUFDcUI7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDTzt3QkFBRVAsV0FBVTtrQ0FBK0M7Ozs7OztrQ0FDNUQsOERBQUNPO3dCQUFFUCxXQUFVOzs0QkFBbUQ7NEJBQ1g7MENBQ3BELDhEQUFDUTswQ0FBTzs7Ozs7OzRCQUEwQzs7Ozs7Ozs7Ozs7Ozs7O0FBT3hELEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3RhcnRlci1raXQvYmxvZy1lbnRlcnByaXNlLy4vY29tcG9uZW50cy9zdWJzY3JpYmUtZm9ybS50c3g/MDVhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG5cdFN1YnNjcmliZVRvTmV3c2xldHRlckRvY3VtZW50LFxuXHRTdWJzY3JpYmVUb05ld3NsZXR0ZXJNdXRhdGlvbixcblx0U3Vic2NyaWJlVG9OZXdzbGV0dGVyTXV0YXRpb25WYXJpYWJsZXMsXG5cdFN1YnNjcmliZVRvTmV3c2xldHRlclBheWxvYWQsXG59IGZyb20gJy4uL2dlbmVyYXRlZC9ncmFwaHFsJztcbmltcG9ydCB7IHVzZUFwcENvbnRleHQgfSBmcm9tICcuL2NvbnRleHRzL2FwcENvbnRleHQnO1xuXG5jb25zdCBHUUxfRU5EUE9JTlQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IQVNITk9ERV9HUUxfRU5EUE9JTlQ7XG5cbmV4cG9ydCBjb25zdCBTdWJzY3JpYmVGb3JtID0gKCkgPT4ge1xuXHRjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGU8U3Vic2NyaWJlVG9OZXdzbGV0dGVyUGF5bG9hZFsnc3RhdHVzJ10+KCk7XG5cdGNvbnN0IFtyZXF1ZXN0SW5Qcm9ncmVzcywgc2V0UmVxdWVzdEluUHJvZ3Jlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblx0Y29uc3QgeyBwdWJsaWNhdGlvbiB9ID0gdXNlQXBwQ29udGV4dCgpO1xuXG5cdGNvbnN0IHN1YnNjcmliZSA9IGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBlbWFpbCA9IGlucHV0UmVmLmN1cnJlbnQ/LnZhbHVlO1xuXHRcdGlmICghZW1haWwpIHJldHVybjtcblxuXHRcdHNldFJlcXVlc3RJblByb2dyZXNzKHRydWUpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0PFxuXHRcdFx0XHRTdWJzY3JpYmVUb05ld3NsZXR0ZXJNdXRhdGlvbixcblx0XHRcdFx0U3Vic2NyaWJlVG9OZXdzbGV0dGVyTXV0YXRpb25WYXJpYWJsZXNcblx0XHRcdD4oR1FMX0VORFBPSU5ULCBTdWJzY3JpYmVUb05ld3NsZXR0ZXJEb2N1bWVudCwge1xuXHRcdFx0XHRpbnB1dDogeyBwdWJsaWNhdGlvbklkOiBwdWJsaWNhdGlvbi5pZCwgZW1haWwgfSxcblx0XHRcdH0pO1xuXHRcdFx0c2V0UmVxdWVzdEluUHJvZ3Jlc3MoZmFsc2UpO1xuXHRcdFx0c2V0U3RhdHVzKGRhdGEuc3Vic2NyaWJlVG9OZXdzbGV0dGVyLnN0YXR1cyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnN0IG1lc3NhZ2UgPSAoZXJyb3IgYXMgYW55KS5yZXNwb25zZT8uZXJyb3JzPy5bMF0/Lm1lc3NhZ2U7XG5cdFx0XHRpZiAobWVzc2FnZSkge1xuXHRcdFx0XHR3aW5kb3cuYWxlcnQobWVzc2FnZSk7XG5cdFx0XHR9XG5cdFx0XHRzZXRSZXF1ZXN0SW5Qcm9ncmVzcyhmYWxzZSk7XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHR7IXN0YXR1cyAmJiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBwLTIgZGFyazpiZy1uZXV0cmFsLTk1MFwiPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0cmVmPXtpbnB1dFJlZn1cblx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImpvaG5AZG9lLmNvbVwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLXByaW1hcnktNjAwIGRhcms6Zm9jdXM6b3V0bGluZS1wcmltYXJ5LTUwMCBsZWZ0LTMgdG9wLTMgdy1mdWxsIHJvdW5kZWQtZnVsbCBwLTMgdGV4dC1iYXNlIHRleHQtYmxhY2sgb3V0bGluZS1ub25lIGRhcms6YmctbmV1dHJhbC05NTAgZGFyazp0ZXh0LW5ldXRyYWwtNTBcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3JlcXVlc3RJblByb2dyZXNzfVxuXHRcdFx0XHRcdFx0b25DbGljaz17c3Vic2NyaWJlfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmctcHJpbWFyeS02MDAgZGFyazpiZy1wcmltYXJ5LTYwMCBhYnNvbHV0ZSByaWdodC0zIHRvcC0zIHJvdW5kZWQtZnVsbCBweC0zIHB5LTIgdGV4dC13aGl0ZSBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS04MFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0U3Vic2NyaWJlXG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHRcdHtzdGF0dXMgPT09ICdQRU5ESU5HJyAmJiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIHAtMiB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWdyZWVuLTYwMCBkYXJrOnRleHQtZ3JlZW4tNTAwXCI+QWxtb3N0IHRoZXJlITwvcD5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTYwMCBkYXJrOnRleHQtbmV1dHJhbC0zMDBcIj5cblx0XHRcdFx0XHRcdENoZWNrIHlvdXIgaW5ib3ggZm9yIGEgY29uZmlybWF0aW9uIGVtYWlsIGFuZCBjbGlja3snICd9XG5cdFx0XHRcdFx0XHQ8c3Ryb25nPiZxdW90O0NvbmZpcm0gYW5kIFN1YnNjcmliZSZxdW90Ozwvc3Ryb25nPiB0byBjb21wbGV0ZSB5b3VyIHN1YnNjcmlwdGlvbi4gVGhhbmtzXG5cdFx0XHRcdFx0XHRmb3Igam9pbmluZyB1cyFcblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8Lz5cblx0KTtcbn07XG4iXSwibmFtZXMiOlsicmVxdWVzdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiU3Vic2NyaWJlVG9OZXdzbGV0dGVyRG9jdW1lbnQiLCJ1c2VBcHBDb250ZXh0IiwiR1FMX0VORFBPSU5UIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0hBU0hOT0RFX0dRTF9FTkRQT0lOVCIsIlN1YnNjcmliZUZvcm0iLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJyZXF1ZXN0SW5Qcm9ncmVzcyIsInNldFJlcXVlc3RJblByb2dyZXNzIiwiaW5wdXRSZWYiLCJwdWJsaWNhdGlvbiIsInN1YnNjcmliZSIsImVtYWlsIiwiY3VycmVudCIsInZhbHVlIiwiZGF0YSIsImlucHV0IiwicHVibGljYXRpb25JZCIsImlkIiwic3Vic2NyaWJlVG9OZXdzbGV0dGVyIiwiZXJyb3IiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJlcnJvcnMiLCJ3aW5kb3ciLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsInAiLCJzdHJvbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/subscribe-form.tsx\n");

/***/ }),

/***/ "./components/subscribe.tsx":
/*!**********************************!*\
  !*** ./components/subscribe.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Subscribe: () => (/* binding */ Subscribe)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-popover */ \"@radix-ui/react-popover\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./components/button.tsx\");\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ \"./components/icons/index.js\");\n/* harmony import */ var _subscribe_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribe-form */ \"./components/subscribe-form.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__, _subscribe_form__WEBPACK_IMPORTED_MODULE_4__]);\n([_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__, _subscribe_form__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst Subscribe = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed bottom-10 right-10 z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.Root, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.Trigger, {\n                    asChild: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        label: \"Subscribe\",\n                        type: \"outline\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons__WEBPACK_IMPORTED_MODULE_3__.NewsletterPlusSVG, {\n                            className: \"h-5 w-5 fill-current\"\n                        }, void 0, false, void 0, void 0),\n                        className: \"bg-white\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lengomyduyen/Documents/hashnode-guides/packages/blog-starter-kit/themes/enterprise/components/subscribe.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lengomyduyen/Documents/hashnode-guides/packages/blog-starter-kit/themes/enterprise/components/subscribe.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.Portal, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.Content, {\n                        className: \"w-[350px] rounded-xl border bg-white p-5 shadow-xl dark:border-neutral-800 dark:bg-neutral-900 md:w-[500px]\",\n                        align: \"end\",\n                        sideOffset: 5,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-primary-600 mb-2 text-center text-base font-semibold\",\n                                children: \"Subscribe to our newsletter for updates and changelog.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lengomyduyen/Documents/hashnode-guides/packages/blog-starter-kit/themes/enterprise/components/subscribe.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_subscribe_form__WEBPACK_IMPORTED_MODULE_4__.SubscribeForm, {}, void 0, false, {\n                                fileName: \"/Users/lengomyduyen/Documents/hashnode-guides/packages/blog-starter-kit/themes/enterprise/components/subscribe.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lengomyduyen/Documents/hashnode-guides/packages/blog-starter-kit/themes/enterprise/components/subscribe.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lengomyduyen/Documents/hashnode-guides/packages/blog-starter-kit/themes/enterprise/components/subscribe.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lengomyduyen/Documents/hashnode-guides/packages/blog-starter-kit/themes/enterprise/components/subscribe.tsx\",\n            lineNumber: 9,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lengomyduyen/Documents/hashnode-guides/packages/blog-starter-kit/themes/enterprise/components/subscribe.tsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N1YnNjcmliZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDakI7QUFDVTtBQUNLO0FBRTFDLE1BQU1JLFlBQVk7SUFDeEIscUJBQ0MsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2QsNEVBQUNOLHlEQUFZOzs4QkFDWiw4REFBQ0EsNERBQWU7b0JBQUNTLE9BQU87OEJBQ3ZCLDRFQUFDUiwyQ0FBTUE7d0JBQ05TLE9BQU07d0JBQ05DLE1BQUs7d0JBQ0xDLG9CQUFNLDhEQUFDVixxREFBaUJBOzRCQUFDSSxXQUFVOzt3QkFDbkNBLFdBQVU7Ozs7Ozs7Ozs7OzhCQUdaLDhEQUFDTiwyREFBYzs4QkFDZCw0RUFBQ0EsNERBQWU7d0JBQ2ZNLFdBQVU7d0JBQ1ZTLE9BQU07d0JBQ05DLFlBQVk7OzBDQUVaLDhEQUFDQztnQ0FBR1gsV0FBVTswQ0FBNEQ7Ozs7OzswQ0FHMUUsOERBQUNILDBEQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ac3RhcnRlci1raXQvYmxvZy1lbnRlcnByaXNlLy4vY29tcG9uZW50cy9zdWJzY3JpYmUudHN4PzBhNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUG9wb3ZlciBmcm9tICdAcmFkaXgtdWkvcmVhY3QtcG9wb3Zlcic7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgeyBOZXdzbGV0dGVyUGx1c1NWRyB9IGZyb20gJy4vaWNvbnMnO1xuaW1wb3J0IHsgU3Vic2NyaWJlRm9ybSB9IGZyb20gJy4vc3Vic2NyaWJlLWZvcm0nO1xuXG5leHBvcnQgY29uc3QgU3Vic2NyaWJlID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTEwIHJpZ2h0LTEwIHotNTBcIj5cblx0XHRcdDxQb3BvdmVyLlJvb3Q+XG5cdFx0XHRcdDxQb3BvdmVyLlRyaWdnZXIgYXNDaGlsZD5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlN1YnNjcmliZVwiXG5cdFx0XHRcdFx0XHR0eXBlPVwib3V0bGluZVwiXG5cdFx0XHRcdFx0XHRpY29uPXs8TmV3c2xldHRlclBsdXNTVkcgY2xhc3NOYW1lPVwiaC01IHctNSBmaWxsLWN1cnJlbnRcIiAvPn1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJnLXdoaXRlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BvcG92ZXIuVHJpZ2dlcj5cblx0XHRcdFx0PFBvcG92ZXIuUG9ydGFsPlxuXHRcdFx0XHRcdDxQb3BvdmVyLkNvbnRlbnRcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctWzM1MHB4XSByb3VuZGVkLXhsIGJvcmRlciBiZy13aGl0ZSBwLTUgc2hhZG93LXhsIGRhcms6Ym9yZGVyLW5ldXRyYWwtODAwIGRhcms6YmctbmV1dHJhbC05MDAgbWQ6dy1bNTAwcHhdXCJcblx0XHRcdFx0XHRcdGFsaWduPVwiZW5kXCJcblx0XHRcdFx0XHRcdHNpZGVPZmZzZXQ9ezV9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeS02MDAgbWItMiB0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZFwiPlxuXHRcdFx0XHRcdFx0XHRTdWJzY3JpYmUgdG8gb3VyIG5ld3NsZXR0ZXIgZm9yIHVwZGF0ZXMgYW5kIGNoYW5nZWxvZy5cblx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHQ8U3Vic2NyaWJlRm9ybSAvPlxuXHRcdFx0XHRcdDwvUG9wb3Zlci5Db250ZW50PlxuXHRcdFx0XHQ8L1BvcG92ZXIuUG9ydGFsPlxuXHRcdFx0PC9Qb3BvdmVyLlJvb3Q+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuIl0sIm5hbWVzIjpbIlBvcG92ZXIiLCJCdXR0b24iLCJOZXdzbGV0dGVyUGx1c1NWRyIsIlN1YnNjcmliZUZvcm0iLCJTdWJzY3JpYmUiLCJkaXYiLCJjbGFzc05hbWUiLCJSb290IiwiVHJpZ2dlciIsImFzQ2hpbGQiLCJsYWJlbCIsInR5cGUiLCJpY29uIiwiUG9ydGFsIiwiQ29udGVudCIsImFsaWduIiwic2lkZU9mZnNldCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/subscribe.tsx\n");

/***/ })

};
;