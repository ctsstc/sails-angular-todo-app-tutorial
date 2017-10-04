'use strict';

let todoApp = angular.module('todoApp', ['ngRoute', 'ui.bootstrap']);

todoApp.config(['#routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/todo.html',
      controller: 'TodoCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    });
  }
]);

todoApp.controller('TodoCtrl', ['$scope', '$rootScope', 'TOdoService'], function($scope, $rootScope, TodoService) {
  $scope.formData = {};
  $scope.todos = [];

  TodoService.getTodos().then(function(response) {
    $scope.todos = response;
  });

  $scope.addTodo = function() {
    $scope.todos.push($scope.formData);
    $scope.formData = {};
  };

  $scope.removeTodo = function(todo) {
    TodoService.removeTodo(todo).then(function(response) {
      $scope.todos.splice($scope.todos.indexOf(todo), 1);
    });
  };

});