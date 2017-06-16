angular.module('ToDo', ['ngAnimate']).
controller('todoController', ['$scope', function($scope) {

    // Do we have any saved todos? Check localStorage
    $scope.saved = localStorage.getItem('todos');

    // If we have todos in localStorage, then parse them and 
    // push them to the view, otherwise initialise our array
    $scope.todos = (localStorage.getItem('todos') !== null) ? JSON.parse($scope.saved) : [];

    // localStorage only holds strings, so we need to serialise our array: 
    // https://stackoverflow.com/questions/16083919/push-json-objects-to-array-in-localstorage
    localStorage.setItem('todos', JSON.stringify($scope.todos));

    $scope.addTodo = function() {
        $scope.todos.push({
            'title': $scope.newTodo,
            'done': false
        })

        // make sure our input box clears after adding a todo
        $scope.newTodo = '';
        // Add our new todo to localStorage
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };

    // Delete the completed todos and update our localStorage
    $scope.deleteTodo = function(index) {
        $scope.todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };
}])