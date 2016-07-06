/// <reference path="../../typings/index.d.ts" />
export module comm.todo {
    interface ITodo {
        todo: string;
        estado: boolean;
        fecha: Date;
    }
    
    export class TodoController {
        private todos: ITodo[];
        private newTodo: ITodo = <ITodo>{};
        
        static $inject = ['$scope'];
        constructor(private $scope: ng.IScope) {
            console.log('Hey, I just started!');
            this.todos = [];
            this.newTodo.estado = false;
        }
        
        addTodo(todo: ITodo): void {
            todo.fecha = new Date();
            this.todos.push(angular.copy(todo));
            console.log(JSON.stringify(this.todos));
            this.todoClear();
        }
        
        doneTodo(todo: ITodo): void {
            todo.estado = true;
        }
        
        todoClear(): void {
            this.newTodo.todo = "";
        }
    }
}