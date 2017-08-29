/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _circle = __webpack_require__(5);

var _frame = __webpack_require__(6);

var Snake = function Snake(snakeLength) {
    this.snakeLength = snakeLength > 4 ? 4 : snakeLength;
};

Snake.prototype = function () {

    var initialX = 0;
    var initialY = 10;
    var snakeParts = [];

    var createFrame = function createFrame() {
        (0, _frame.createRectangle)();
    };

    var initSnake = function initSnake() {
        createFrame();
        var circleCount = 1;
        while (circleCount <= this.snakeLength) {
            snakeParts.push({
                x: initialX,
                y: initialY
            });
            initialX += 5;
            circleCount++;
        }
    };

    var targetCircle = function targetCircle() {};

    return {
        initSnake: initSnake
    };
}();

var snakeGame = new Snake(5);
snakeGame.initSnake();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createCircle = createCircle;
var gameCanvas = document.getElementById('snakeCanvas');
var canvasContext = gameCanvas.getContext('2d');

function createCircle(x, y) {
    canvasContext.beginPath();
    canvasContext.arc(x, y, 2.5, 0, 2 * Math.PI);
    canvasContext.fillStyle = 'yellow';
    canvasContext.fill();
    canvasContext.lineWidth = 3;
    canvasContext.strokeStyle = 'black';
    canvasContext.stroke();
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createRectangle = createRectangle;
var gameCanvas = document.getElementById('snakeCanvas');
var canvasContext = gameCanvas.getContext('2d');

function createRectangle() {
    canvasContext.fillRect(0, 0, 1200, 1500);
}

/***/ })
/******/ ]);