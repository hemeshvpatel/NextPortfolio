/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ \"./src/components/TimeLine/TimeLineStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/hemesh/WebstormProjects/NextPortfolio/src/components/TimeLine/TimeLine.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;\n\nvar Timeline = function Timeline() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      activeItem = _useState[0],\n      setActiveItem = _useState[1];\n\n  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n\n  var scroll = function scroll(node, left) {\n    return node.scrollTo({\n      left: left,\n      behavior: \"smooth\"\n    });\n  };\n\n  var handleClick = function handleClick(e, i) {\n    e.preventDefault();\n\n    if (carouselRef.current) {\n      var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));\n      scroll(carouselRef.current, scrollLeft);\n    }\n  };\n\n  var handleScroll = function handleScroll() {\n    if (carouselRef.current) {\n      var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);\n      setActiveItem(index);\n    }\n  }; // // snap back to beginning of scroll when window is resized\n  // // avoids a bug where content is covered up if coming from smaller screen\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var handleResize = function handleResize() {\n      scroll(carouselRef.current, 0);\n    };\n\n    window.addEventListener(\"resize\", handleResize);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {\n    id: \"about\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {\n      children: \"About Me\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {\n      children: [\"Passionate about how things work and how technology can help solve problems. My career has led me through roles in finance, operations, and most recently software engineering. I love getting to write code and work on projects as much as I can, leveling up my JavaScript and ReactJS skills. \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this), \"Currently, I work as a Front-end Engineer at Hotel Engine, the world\\u2019s largest Lodging Performance Network, established to create a richer, more rewarding business travel experience by connecting a global network of businesses and lodging partners. \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 45\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this), \"When I\\u2019m not coding, you can find me reading articles from my favorite blogs (Engadget, Lifehacker) and watching car reviews on YouTube. Currently reading The Expanse series.\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {\n      ref: carouselRef,\n      onScroll: handleScroll,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {\n            \"final\": index === TOTAL_CAROUSEL_COUNT - 1,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n              index: index,\n              id: \"carousel__item-\".concat(index),\n              active: activeItem,\n              onClick: function onClick(e) {\n                return handleClick(e, index);\n              },\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {\n                children: [item.year, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {\n                  width: \"208\",\n                  height: \"6\",\n                  viewBox: \"0 0 208 6\",\n                  fill: \"none\",\n                  xmlns: \"http://www.w3.org/2000/svg\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    \"fill-rule\": \"evenodd\",\n                    \"clip-rule\": \"evenodd\",\n                    d: \"M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z\",\n                    fill: \"url(#paint0_linear)\",\n                    \"fill-opacity\": \"0.33\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 107,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"linearGradient\", {\n                      id: \"paint0_linear\",\n                      x1: \"-4.30412e-10\",\n                      y1: \"0.5\",\n                      x2: \"208\",\n                      y2: \"0.500295\",\n                      gradientUnits: \"userSpaceOnUse\",\n                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                        \"stop-color\": \"white\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 123,\n                        columnNumber: 25\n                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                        offset: \"0.79478\",\n                        \"stop-color\": \"white\",\n                        \"stop-opacity\": \"0\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 124,\n                        columnNumber: 25\n                      }, _this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 115,\n                      columnNumber: 23\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 114,\n                    columnNumber: 21\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 100,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 98,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {\n                children: item.text\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 133,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 15\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {\n      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {\n          index: index,\n          active: activeItem,\n          onClick: function onClick(e) {\n            return handleClick(e, index);\n          },\n          type: \"button\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {\n            active: activeItem\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 148,\n            columnNumber: 13\n          }, _this)\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 141,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Timeline, \"qE2Y7awmqdFA9rYczLkhjQwwAdI=\");\n\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\n\nvar _c;\n\n$RefreshReg$(_c, \"Timeline\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanM/ODQ5MSJdLCJuYW1lcyI6WyJUT1RBTF9DQVJPVVNFTF9DT1VOVCIsIlRpbWVMaW5lRGF0YSIsIlRpbWVsaW5lIiwidXNlU3RhdGUiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsImNhcm91c2VsUmVmIiwidXNlUmVmIiwic2Nyb2xsIiwibm9kZSIsImxlZnQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiaGFuZGxlQ2xpY2siLCJlIiwiaSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJNYXRoIiwiZmxvb3IiLCJzY3JvbGxXaWR0aCIsImhhbmRsZVNjcm9sbCIsImluZGV4Iiwicm91bmQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaXRlbSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQVdBO0FBTUE7QUFFQSxJQUFNQSxvQkFBb0IsR0FBR0MscUVBQTdCOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDZUMsK0NBQVEsQ0FBQyxDQUFELENBRHZCO0FBQUEsTUFDZEMsVUFEYztBQUFBLE1BQ0ZDLGFBREU7O0FBRXJCLE1BQU1DLFdBQVcsR0FBR0MsNkNBQU0sRUFBMUI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQzdCLFdBQU9ELElBQUksQ0FBQ0UsUUFBTCxDQUFjO0FBQUVELFVBQUksRUFBSkEsSUFBRjtBQUFRRSxjQUFRLEVBQUU7QUFBbEIsS0FBZCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUM1QkQs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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUZELENBbklEOztHQUFNckIsUTs7S0FBQUEsUTtBQXFJTiwrREFBZUEsUUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1RpbWVMaW5lL1RpbWVMaW5lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBDYXJvdXNlbEJ1dHRvbixcbiAgQ2Fyb3VzZWxCdXR0b25Eb3QsXG4gIENhcm91c2VsQnV0dG9ucyxcbiAgQ2Fyb3VzZWxDb250YWluZXIsXG4gIENhcm91c2VsSXRlbSxcbiAgQ2Fyb3VzZWxJdGVtSW1nLFxuICBDYXJvdXNlbEl0ZW1UZXh0LFxuICBDYXJvdXNlbEl0ZW1UaXRsZSxcbiAgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlLFxufSBmcm9tIFwiLi9UaW1lTGluZVN0eWxlc1wiO1xuaW1wb3J0IHtcbiAgU2VjdGlvbixcbiAgU2VjdGlvbkRpdmlkZXIsXG4gIFNlY3Rpb25UZXh0LFxuICBTZWN0aW9uVGl0bGUsXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50c1wiO1xuaW1wb3J0IHsgVGltZUxpbmVEYXRhIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcblxuY29uc3QgVE9UQUxfQ0FST1VTRUxfQ09VTlQgPSBUaW1lTGluZURhdGEubGVuZ3RoO1xuXG5jb25zdCBUaW1lbGluZSA9ICgpID0+IHtcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcbiAgICByZXR1cm4gbm9kZS5zY3JvbGxUbyh7IGxlZnQsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xuICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IE1hdGguZmxvb3IoXG4gICAgICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcgKiAoaSAvIFRpbWVMaW5lRGF0YS5sZW5ndGgpXG4gICAgICApO1xuXG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgc2Nyb2xsTGVmdCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKFxuICAgICAgICAoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC9cbiAgICAgICAgICAoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNykpICpcbiAgICAgICAgICBUaW1lTGluZURhdGEubGVuZ3RoXG4gICAgICApO1xuXG4gICAgICBzZXRBY3RpdmVJdGVtKGluZGV4KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gLy8gc25hcCBiYWNrIHRvIGJlZ2lubmluZyBvZiBzY3JvbGwgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxuICAvLyAvLyBhdm9pZHMgYSBidWcgd2hlcmUgY29udGVudCBpcyBjb3ZlcmVkIHVwIGlmIGNvbWluZyBmcm9tIHNtYWxsZXIgc2NyZWVuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIDApO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbiBpZD17XCJhYm91dFwifT5cbiAgICAgIDxTZWN0aW9uVGl0bGU+QWJvdXQgTWU8L1NlY3Rpb25UaXRsZT5cbiAgICAgIDxTZWN0aW9uVGV4dD5cbiAgICAgICAgUGFzc2lvbmF0ZSBhYm91dCBob3cgdGhpbmdzIHdvcmsgYW5kIGhvdyB0ZWNobm9sb2d5IGNhbiBoZWxwIHNvbHZlXG4gICAgICAgIHByb2JsZW1zLiBNeSBjYXJlZXIgaGFzIGxlZCBtZSB0aHJvdWdoIHJvbGVzIGluIGZpbmFuY2UsIG9wZXJhdGlvbnMsIGFuZFxuICAgICAgICBtb3N0IHJlY2VudGx5IHNvZnR3YXJlIGVuZ2luZWVyaW5nLiBJIGxvdmUgZ2V0dGluZyB0byB3cml0ZSBjb2RlIGFuZFxuICAgICAgICB3b3JrIG9uIHByb2plY3RzIGFzIG11Y2ggYXMgSSBjYW4sIGxldmVsaW5nIHVwIG15IEphdmFTY3JpcHQgYW5kIFJlYWN0SlNcbiAgICAgICAgc2tpbGxzLiA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIEN1cnJlbnRseSwgSSB3b3JrIGFzIGEgRnJvbnQtZW5kIEVuZ2luZWVyIGF0IEhvdGVsIEVuZ2luZSwgdGhlIHdvcmxk4oCZc1xuICAgICAgICBsYXJnZXN0IExvZGdpbmcgUGVyZm9ybWFuY2UgTmV0d29yaywgZXN0YWJsaXNoZWQgdG8gY3JlYXRlIGEgcmljaGVyLFxuICAgICAgICBtb3JlIHJld2FyZGluZyBidXNpbmVzcyB0cmF2ZWwgZXhwZXJpZW5jZSBieSBjb25uZWN0aW5nIGEgZ2xvYmFsIG5ldHdvcmtcbiAgICAgICAgb2YgYnVzaW5lc3NlcyBhbmQgbG9kZ2luZyBwYXJ0bmVycy4gPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICBXaGVuIEnigJltIG5vdCBjb2RpbmcsIHlvdSBjYW4gZmluZCBtZSByZWFkaW5nIGFydGljbGVzIGZyb20gbXkgZmF2b3JpdGVcbiAgICAgICAgYmxvZ3MgKEVuZ2FkZ2V0LCBMaWZlaGFja2VyKSBhbmQgd2F0Y2hpbmcgY2FyIHJldmlld3Mgb24gWW91VHViZS5cbiAgICAgICAgQ3VycmVudGx5IHJlYWRpbmcgVGhlIEV4cGFuc2Ugc2VyaWVzLlxuICAgICAgPC9TZWN0aW9uVGV4dD5cbiAgICAgIDxDYXJvdXNlbENvbnRhaW5lciByZWY9e2Nhcm91c2VsUmVmfSBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfT5cbiAgICAgICAgPD5cbiAgICAgICAgICB7VGltZUxpbmVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGVcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgZmluYWw9e2luZGV4ID09PSBUT1RBTF9DQVJPVVNFTF9DT1VOVCAtIDF9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1cbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgaWQ9e2BjYXJvdXNlbF9faXRlbS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGl0bGU+XG4gICAgICAgICAgICAgICAgICB7aXRlbS55ZWFyfVxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbUltZ1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwOFwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjZcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwOCA2XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIuNSA1LjVDMy44ODA3MSA1LjUgNSA0LjM4MDcxIDUgM1YzLjVMMjA4IDMuNTAwMDJWMi41MDAwMkw1IDIuNVYzQzUgMS42MTkyOSAzLjg4MDcxIDAuNSAyLjUgMC41QzEuMTE5MjkgMC41IDAgMS42MTkyOSAwIDNDMCA0LjM4MDcxIDEuMTE5MjkgNS41IDIuNSA1LjVaXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNwYWludDBfbGluZWFyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbC1vcGFjaXR5PVwiMC4zM1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYWludDBfbGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiLTQuMzA0MTJlLTEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxPVwiMC41XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgyPVwiMjA4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiMC41MDAyOTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PVwiMC43OTQ3OFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3AtY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Atb3BhY2l0eT1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbUltZz5cbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbVRpdGxlPlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1UZXh0PntpdGVtLnRleHR9PC9DYXJvdXNlbEl0ZW1UZXh0PlxuICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlPlxuICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICAgIDwvQ2Fyb3VzZWxDb250YWluZXI+XG4gICAgICA8Q2Fyb3VzZWxCdXR0b25zPlxuICAgICAgICB7VGltZUxpbmVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaW5kZXgpfVxuICAgICAgICAgICAgdHlwZT17XCJidXR0b25cIn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25Eb3QgYWN0aXZlPXthY3RpdmVJdGVtfSAvPlxuICAgICAgICAgIDwvQ2Fyb3VzZWxCdXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9DYXJvdXNlbEJ1dHRvbnM+XG4gICAgICA8U2VjdGlvbkRpdmlkZXIgLz5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TimeLine/TimeLine.js\n");

/***/ })

});