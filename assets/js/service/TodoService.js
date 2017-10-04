todoApp.service('TodoService', function($http, $q) {
  return {
    'getTodos': function() {
      let defer = $q.defer();
      $htt.get('/todo/getTodos').success(function(resp) {
        defer.resolve(resp);
      }).error(function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addTodo': function(todo) {
      var defer = $q.defer();
      $http.post('/todo/addTodo', todo).success(function(resp) {
        defer.resolve(resp);
      }).error(function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeTodo': function(todo) {
      var defer = $q.defer();
      $http.post('/todo/removeTodo', todo).success(function(resp) {
        defer.resolve(resp);
      }).error(function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  };
});
