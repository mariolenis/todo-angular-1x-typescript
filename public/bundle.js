/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var todo_controller_1 = __webpack_require__(1);
	var app = angular.module('todo', []);
	app.controller("comm.todo.TodoController", todo_controller_1.comm.todo.TodoController);
	//# sourceMappingURL=todo.js.map

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var comm;
	(function (comm) {
	    var todo;
	    (function (todo_1) {
	        var TodoController = (function () {
	            function TodoController() {
	                this.newTodo = {};
	                console.log('Hey, I just started.');
	                this.todos = [];
	                this.newTodo.estado = false;
	            }
	            TodoController.prototype.addTodo = function (todo) {
	                todo.fecha = new Date();
	                this.todos.push(angular.copy(todo));
	                console.log(JSON.stringify(this.todos));
	                this.todoClear();
	            };
	            TodoController.prototype.doneTodo = function (todo) {
	                todo.estado = true;
	            };
	            TodoController.prototype.todoClear = function () {
	                this.newTodo.todo = "";
	            };
	            return TodoController;
	        }());
	        todo_1.TodoController = TodoController;
	    })(todo = comm.todo || (comm.todo = {}));
	})(comm = exports.comm || (exports.comm = {}));
	//# sourceMappingURL=todo.controller.js.map

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjc5YjM4MDI2MzZmYzIxMDFhOTMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3RvZG8uY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUsscUNBQXFDO0FBQzFDLEVBQUMsMkNBQTJDO0FBQzVDLDRDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMjc5YjM4MDI2MzZmYzIxMDFhOTNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIHRvZG9fY29udHJvbGxlcl8xID0gcmVxdWlyZSgnLi90b2RvLmNvbnRyb2xsZXInKTtcclxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd0b2RvJywgW10pO1xyXG5hcHAuY29udHJvbGxlcihcImNvbW0udG9kby5Ub2RvQ29udHJvbGxlclwiLCB0b2RvX2NvbnRyb2xsZXJfMS5jb21tLnRvZG8uVG9kb0NvbnRyb2xsZXIpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD10b2RvLmpzLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9wdWJsaWMvanMvdG9kby5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgY29tbTtcclxuKGZ1bmN0aW9uIChjb21tKSB7XHJcbiAgICB2YXIgdG9kbztcclxuICAgIChmdW5jdGlvbiAodG9kb18xKSB7XHJcbiAgICAgICAgdmFyIFRvZG9Db250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gVG9kb0NvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ld1RvZG8gPSB7fTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIZXksIEkganVzdCBzdGFydGVkLicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXdUb2RvLmVzdGFkbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFRvZG9Db250cm9sbGVyLnByb3RvdHlwZS5hZGRUb2RvID0gZnVuY3Rpb24gKHRvZG8pIHtcclxuICAgICAgICAgICAgICAgIHRvZG8uZmVjaGEgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2Rvcy5wdXNoKGFuZ3VsYXIuY29weSh0b2RvKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnRvZG9zKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9DbGVhcigpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBUb2RvQ29udHJvbGxlci5wcm90b3R5cGUuZG9uZVRvZG8gPSBmdW5jdGlvbiAodG9kbykge1xyXG4gICAgICAgICAgICAgICAgdG9kby5lc3RhZG8gPSB0cnVlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBUb2RvQ29udHJvbGxlci5wcm90b3R5cGUudG9kb0NsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXdUb2RvLnRvZG8gPSBcIlwiO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gVG9kb0NvbnRyb2xsZXI7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICB0b2RvXzEuVG9kb0NvbnRyb2xsZXIgPSBUb2RvQ29udHJvbGxlcjtcclxuICAgIH0pKHRvZG8gPSBjb21tLnRvZG8gfHwgKGNvbW0udG9kbyA9IHt9KSk7XHJcbn0pKGNvbW0gPSBleHBvcnRzLmNvbW0gfHwgKGV4cG9ydHMuY29tbSA9IHt9KSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRvZG8uY29udHJvbGxlci5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcHVibGljL2pzL3RvZG8uY29udHJvbGxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=