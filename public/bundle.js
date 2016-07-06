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
	            function TodoController($scope) {
	                this.$scope = $scope;
	                this.newTodo = {};
	                console.log('Hey, I just started!');
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
	            TodoController.$inject = ['$scope'];
	            return TodoController;
	        }());
	        todo_1.TodoController = TodoController;
	    })(todo = comm.todo || (comm.todo = {}));
	})(comm = exports.comm || (exports.comm = {}));
	//# sourceMappingURL=todo.controller.js.map

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWM3MGMwYWZiOGZjMGI1N2E1OWEiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3RvZG8uY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLLHFDQUFxQztBQUMxQyxFQUFDLDJDQUEyQztBQUM1Qyw0QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDVjNzBjMGFmYjhmYzBiNTdhNTlhXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciB0b2RvX2NvbnRyb2xsZXJfMSA9IHJlcXVpcmUoJy4vdG9kby5jb250cm9sbGVyJyk7XHJcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndG9kbycsIFtdKTtcclxuYXBwLmNvbnRyb2xsZXIoXCJjb21tLnRvZG8uVG9kb0NvbnRyb2xsZXJcIiwgdG9kb19jb250cm9sbGVyXzEuY29tbS50b2RvLlRvZG9Db250cm9sbGVyKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG9kby5qcy5tYXBcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcHVibGljL2pzL3RvZG8uanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIGNvbW07XHJcbihmdW5jdGlvbiAoY29tbSkge1xyXG4gICAgdmFyIHRvZG87XHJcbiAgICAoZnVuY3Rpb24gKHRvZG9fMSkge1xyXG4gICAgICAgIHZhciBUb2RvQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIFRvZG9Db250cm9sbGVyKCRzY29wZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ld1RvZG8gPSB7fTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIZXksIEkganVzdCBzdGFydGVkIScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXdUb2RvLmVzdGFkbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFRvZG9Db250cm9sbGVyLnByb3RvdHlwZS5hZGRUb2RvID0gZnVuY3Rpb24gKHRvZG8pIHtcclxuICAgICAgICAgICAgICAgIHRvZG8uZmVjaGEgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2Rvcy5wdXNoKGFuZ3VsYXIuY29weSh0b2RvKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnRvZG9zKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9DbGVhcigpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBUb2RvQ29udHJvbGxlci5wcm90b3R5cGUuZG9uZVRvZG8gPSBmdW5jdGlvbiAodG9kbykge1xyXG4gICAgICAgICAgICAgICAgdG9kby5lc3RhZG8gPSB0cnVlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBUb2RvQ29udHJvbGxlci5wcm90b3R5cGUudG9kb0NsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXdUb2RvLnRvZG8gPSBcIlwiO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBUb2RvQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnXTtcclxuICAgICAgICAgICAgcmV0dXJuIFRvZG9Db250cm9sbGVyO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgdG9kb18xLlRvZG9Db250cm9sbGVyID0gVG9kb0NvbnRyb2xsZXI7XHJcbiAgICB9KSh0b2RvID0gY29tbS50b2RvIHx8IChjb21tLnRvZG8gPSB7fSkpO1xyXG59KShjb21tID0gZXhwb3J0cy5jb21tIHx8IChleHBvcnRzLmNvbW0gPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD10b2RvLmNvbnRyb2xsZXIuanMubWFwXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3B1YmxpYy9qcy90b2RvLmNvbnRyb2xsZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9