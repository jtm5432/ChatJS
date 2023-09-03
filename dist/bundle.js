/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n    const nicknameInput = document.getElementById(\"nickname\");\r\n    const joinBtn = document.getElementById(\"joinBtn\");\r\n    const participantsList = document.getElementById(\"participantsList\");\r\n    const editor = document.getElementById(\"editor\");\r\n\r\n    // Load participants, editorContent from localStorage\r\n    const savedParticipants = JSON.parse(localStorage.getItem('participants')) || [];\r\n    const savedContent = localStorage.getItem('editorContent') || '';\r\n    savedParticipants.forEach(participant => {\r\n        const li = document.createElement(\"li\");\r\n        li.appendChild(document.createTextNode(participant));\r\n        participantsList.appendChild(li);\r\n    });\r\n    editor.value = savedContent;\r\n\r\n    joinBtn.addEventListener(\"click\", function () {\r\n        // Save nickname to localStorage and update participants list\r\n        const nickname = nicknameInput.value;\r\n        const newParticipants = [...savedParticipants, nickname];\r\n        localStorage.setItem('participants', JSON.stringify(newParticipants));\r\n        const li = document.createElement(\"li\");\r\n        li.appendChild(document.createTextNode(nickname));\r\n        participantsList.appendChild(li);\r\n    });\r\n\r\n    editor.addEventListener(\"input\", function () {\r\n        // Save editor content to localStorage\r\n        localStorage.setItem('editorContent', editor.value);\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://js-chat/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;