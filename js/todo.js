angular.module('ToDo', []).
controller('todoController', ['$scope', function($scope) {
    $scope.todos = [{
        'title': 'Build a todo app',
        'description': 'Write a basic Angular todo list',
        'done': false
    }];

    $scope.addTodo = function() {
            $scope.todos.push({
                'title': $scope.newTodo,
                'description': $scope.description,
                'done': false
            })
            $scope.newTodo = ''
            $scope.description = ''
        }
        // function to delete todo item
    $scope.deleteTodos = function(start) {
        // start is the position where we want to stater deleting
        $scope.todos.splice(start, 1);
    }
    $scope.clearTodos = function() {
        $scope.todos = $scope.todos.filter(function(item) {
            return !item.done
        })
    }
}])