angular.module('ToDo', []).
controller('todoController', ['$scope', function($scope) {
    $scope.todos = [{
        'title': 'Build a todo app',
        'done': false
    }];

    $scope.addTodo = function() {
        $scope.todos.push({
                'title': $scope.newTodo,
                'done': false
            })
            // make sure our input box clears after adding a todo
        $scope.newTodo = ''
    }

    $scope.clearTodos = function() {
        $scope.todos = $scope.todos.filter(function(item) {
            return !item.done
        })
    }
}])