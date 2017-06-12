angular.module('ToDo', []).
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
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };

    // Clear out the completed todos and update our localStorage
    $scope.clearTodos = function() {
        var completedTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(completedTodos, function(todo) {
            if (!todo.done)
                $scope.todos.push(todo);
        });
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };
}])