import { comm } from './todo.controller';

let app = angular.module('todo', []);
app.controller("comm.todo.TodoController", comm.todo.TodoController);