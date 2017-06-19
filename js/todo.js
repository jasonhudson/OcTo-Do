/***********************************************
 * 
 * OcTo-Do v1.0.0
 * Basic todo list manager written in Angularjs
 * https://github.com/jasonhudson/OcTo-Do
 * 
 ***********************************************/

/**
 * Define the app and setup the controller
 * We require the ngAnimate module for some basic todo animations
 */
var todoApp = angular.module('ocTodo', ['ngAnimate']);
todoApp.controller('todoController', ['$scope', function($scope) {

    // Do we have any saved todos? Check localStorage
    $scope.saved = localStorage.getItem('todos');

    // If we have todos in localStorage, then parse them and 
    // push them to the view, otherwise initialise the array
    $scope.todos = (localStorage.getItem('todos') !== null) ? JSON.parse($scope.saved) : [];

    // localStorage only holds strings, so we need to serialise the array: 
    // https://stackoverflow.com/questions/16083919/push-json-objects-to-array-in-localstorage
    localStorage.setItem('todos', JSON.stringify($scope.todos));

    // Data binding via ng-model="addTodo" and 
    // The button click event calls this method via ng-click="addTodo()"
    $scope.addTodo = function() {
        $scope.todos.push({
            // todo name
            'title': $scope.newTodo,
            // default state is not done
            'done': false
        })

        // make sure the input box clears after adding a todo
        $scope.newTodo = '';
        // Add the new todo to localStorage
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };

    // Delete the completed todos
    $scope.deleteTodo = function(index) {
        // Tracked the item by its $index so we can splice it from the array
        $scope.todos.splice(index, 1);
        // update the localStorage
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };
}])