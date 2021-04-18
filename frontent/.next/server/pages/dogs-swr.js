module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/dogs-swr.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/dogs-swr.js":
/*!***************************!*\
  !*** ./pages/dogs-swr.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/fiw/Desktop/\\u0E44\\u0E04\\u0E40\\u0E2D\\u0E49\\u0E19/clone/Rest-API-Fetch/pages/dogs-swr.js\";\n\n\n\nconst URL = `http://localhost:8002/api/dogs`;\n\nconst fetcher = url => axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url).then(res => res.data);\n\nconst SWR1 = () => {\n  const {\n    0: student,\n    1: setDog\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: name,\n    1: setName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: species,\n    1: setSpecies\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: age,\n    1: setAge\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: price,\n    1: setPrice\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    data\n  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(URL, fetcher);\n  if (!data) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 22\n  }, undefined);\n\n  const printDogs = dogs => {\n    console.log('Dogs:', dogs);\n    if (dogs && dogs.length) return dogs.map((student, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      children: [student ? student.name : '-', \" : \", student ? student.species : '-', \" : \", student ? student.age : '-', \" : \", student ? student.price : '-', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: () => deleteDog(student.id),\n        children: \" Delete \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 16\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: () => getDog(student.id),\n        children: \"Get\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 16\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: () => updateDog(student.id),\n        children: \"Update\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 16\n      }, undefined)]\n    }, index, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, undefined));else {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: \"No dogs\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 20\n      }, undefined);\n    }\n  };\n\n  const getDog = async id => {\n    const result = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${URL}/${id}`);\n    console.log('Dog id: ', result.data);\n    setDog(result.data);\n  };\n\n  const addDog = async (name, species, age, price) => {\n    const result = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(URL, {\n      name,\n      species,\n      age,\n      price\n    });\n    console.log(result.data);\n    Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"mutate\"])(URL);\n  };\n\n  const deleteDog = async id => {\n    const result = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`${URL}/${id}`);\n    console.log(result.data);\n    Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"mutate\"])(URL);\n  };\n\n  const updateDog = async id => {\n    const result = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(`${URL}/${id}`, {\n      name,\n      species,\n      age,\n      price\n    });\n    console.log('student id update: ', result.data);\n    Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"mutate\"])(URL);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \" Dogs \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 8\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: printDogs(data.list)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 8\n    }, undefined), \"selected student : \", student.name, \" \", student.species, \" \", student.age, \" \", student.price, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Add student\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 8\n    }, undefined), \"Name:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"text\",\n      onChange: e => setName(e.target.value)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 16\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 79\n    }, undefined), \"Surname:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"text\",\n      onChange: e => setSpecies(e.target.value)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 19\n    }, undefined), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 85\n    }, undefined), \"Major:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"text\",\n      onChange: e => setAge(e.target.value)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 17\n    }, undefined), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 79\n    }, undefined), \"price:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"number\",\n      onChange: e => setPrice(e.target.value)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 17\n    }, undefined), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 83\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: () => addDog(name, species, age, price),\n      children: \"Add new student\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 8\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 12\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SWR1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kb2dzLXN3ci5qcz9mOTE1Il0sIm5hbWVzIjpbIlVSTCIsImZldGNoZXIiLCJ1cmwiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiU1dSMSIsInN0dWRlbnQiLCJzZXREb2ciLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwic3BlY2llcyIsInNldFNwZWNpZXMiLCJhZ2UiLCJzZXRBZ2UiLCJwcmljZSIsInNldFByaWNlIiwidXNlU1dSIiwicHJpbnREb2dzIiwiZG9ncyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtYXAiLCJpbmRleCIsImRlbGV0ZURvZyIsImlkIiwiZ2V0RG9nIiwidXBkYXRlRG9nIiwicmVzdWx0IiwiYWRkRG9nIiwicG9zdCIsIm11dGF0ZSIsImRlbGV0ZSIsInB1dCIsImxpc3QiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsR0FBRyxHQUFJLGdDQUFiOztBQUNBLE1BQU1DLE9BQU8sR0FBR0MsR0FBRyxJQUFJQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVGLEdBQVYsRUFBZUcsSUFBZixDQUFvQkMsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQS9CLENBQXZCOztBQUNBLE1BQU1DLElBQUksR0FBRyxNQUFNO0FBR2hCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUFvQkMsc0RBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCRixzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JKLHNEQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDSyxHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQk4sc0RBQVEsQ0FB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Q0FBU0MsS0FBVjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJMLG9CQVFtRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJuRSx5QkFTSztBQUFPLFVBQUksRUFBQyxRQUFaO0FBQXFCLGNBQVEsRUFBR0YsQ0FBRCxJQUFPcEIsUUFBUSxDQUFDb0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVY7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUTCxvQkFTdUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUdkUsZUFVSjtBQUFRLGFBQU8sRUFBRSxNQUFNUixNQUFNLENBQUNyQixJQUFELEVBQU9FLE9BQVAsRUFBZUUsR0FBZixFQUFtQkUsS0FBbkIsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVI7QUFhRixDQXhFRDs7QUEwRWVWLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZG9ncy1zd3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB1c2VTV1IsIHsgbXV0YXRlIH0gZnJvbSAnc3dyJ1xuIFxuY29uc3QgVVJMID0gYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMi9hcGkvZG9nc2BcbmNvbnN0IGZldGNoZXIgPSB1cmwgPT4gYXhpb3MuZ2V0KHVybCkudGhlbihyZXMgPT4gcmVzLmRhdGEpXG5jb25zdCBTV1IxID0gKCkgPT4ge1xuIFxuICAgXG4gICBjb25zdCBbc3R1ZGVudCwgc2V0RG9nXSA9IHVzZVN0YXRlKCcnKVxuICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG4gICBjb25zdCBbc3BlY2llcywgc2V0U3BlY2llc10gPSB1c2VTdGF0ZSgnJylcbiAgIGNvbnN0IFthZ2UsIHNldEFnZV0gPSB1c2VTdGF0ZSgnJylcbiAgIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMClcblxuIFxuICAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoVVJMLCBmZXRjaGVyKVxuICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICBcbiAgIFxuIFxuICAgY29uc3QgcHJpbnREb2dzID0gKGRvZ3MpID0+IHtcbiAgICAgICBjb25zb2xlLmxvZygnRG9nczonLCBkb2dzKVxuICAgICAgIGlmIChkb2dzICYmIGRvZ3MubGVuZ3RoKVxuICAgICAgICAgICByZXR1cm4gKGRvZ3MubWFwKChzdHVkZW50LCBpbmRleCkgPT5cbiAgICAgICAgICAgKDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgIHsoc3R1ZGVudCkgPyBzdHVkZW50Lm5hbWUgOiAnLSd9IDogeyhzdHVkZW50KSA/IHN0dWRlbnQuc3BlY2llcyA6ICctJ30gOiB7KHN0dWRlbnQpID8gc3R1ZGVudC5hZ2UgOiAnLSd9IDogeyhzdHVkZW50KSA/IHN0dWRlbnQucHJpY2UgOiAnLSd9XG4gICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZURvZyhzdHVkZW50LmlkKX0+IERlbGV0ZSA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0RG9nKHN0dWRlbnQuaWQpfT5HZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdXBkYXRlRG9nKHN0dWRlbnQuaWQpfT5VcGRhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICkpXG4gICAgICAgZWxzZSB7XG4gICAgICAgICAgIHJldHVybiAoPGgyPk5vIGRvZ3M8L2gyPilcbiAgICAgICB9XG4gICB9XG4gXG4gICBjb25zdCBnZXREb2cgPSBhc3luYyAoaWQpID0+IHtcbiAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYCR7VVJMfS8ke2lkfWApXG4gICAgICAgY29uc29sZS5sb2coJ0RvZyBpZDogJywgcmVzdWx0LmRhdGEpXG4gICAgICAgc2V0RG9nKHJlc3VsdC5kYXRhKVxuICAgfVxuIFxuICAgY29uc3QgYWRkRG9nID0gYXN5bmMgKG5hbWUsIHNwZWNpZXMsYWdlLHByaWNlKSA9PiB7XG4gICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChVUkwsIHsgbmFtZSwgc3BlY2llcyxhZ2UscHJpY2UgfSlcbiAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcbiAgICAgICBtdXRhdGUoVVJMKVxuICAgfVxuIFxuICAgY29uc3QgZGVsZXRlRG9nID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAke1VSTH0vJHtpZH1gKVxuICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKVxuICAgICAgIG11dGF0ZShVUkwpXG4gICB9XG4gICAgY29uc3QgdXBkYXRlRG9nID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucHV0KGAke1VSTH0vJHtpZH1gLHtcbiAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgc3BlY2llcyxcbiAgICAgICAgICAgYWdlLFxuICAgICAgICAgICBwcmljZVxuICAgICAgIH0pXG4gICAgICAgY29uc29sZS5sb2coJ3N0dWRlbnQgaWQgdXBkYXRlOiAnLCByZXN1bHQuZGF0YSlcbiAgICAgICBtdXRhdGUoVVJMKVxuICAgfVxuIFxuICAgcmV0dXJuICg8ZGl2PlxuICAgICAgIDxoMT4gRG9ncyA8L2gxPlxuICAgICAgIDx1bD57cHJpbnREb2dzKGRhdGEubGlzdCl9PC91bD5cbiAgICAgICBcbiAgICAgICBzZWxlY3RlZCBzdHVkZW50IDoge3N0dWRlbnQubmFtZX0ge3N0dWRlbnQuc3BlY2llc30ge3N0dWRlbnQuYWdlfSB7c3R1ZGVudC5wcmljZX1cbiAgICAgICA8aDI+QWRkIHN0dWRlbnQ8L2gyPlxuICAgICAgICAgIE5hbWU6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz48YnIvPlxuICAgICAgICAgIFN1cm5hbWU6PGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRTcGVjaWVzKGUudGFyZ2V0LnZhbHVlKX0vPiA8YnIgLz5cbiAgICAgICAgICBNYWpvcjo8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpID0+IHNldEFnZShlLnRhcmdldC52YWx1ZSl9Lz4gPGJyIC8+XG4gICAgICAgICAgcHJpY2U6PGlucHV0IHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17KGUpID0+IHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKX0vPiA8YnIgLz5cbiAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZERvZyhuYW1lLCBzcGVjaWVzLGFnZSxwcmljZSl9PkFkZCBuZXcgc3R1ZGVudDwvYnV0dG9uPlxuIFxuICAgPC9kaXY+KVxufVxuIFxuZXhwb3J0IGRlZmF1bHQgU1dSMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dogs-swr.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIj9jMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN3ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///swr\n");

/***/ })

/******/ });