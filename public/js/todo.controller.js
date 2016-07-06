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