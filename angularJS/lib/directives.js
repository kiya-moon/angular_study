import angular from 'angular';

angular.module('todo').directive('todoTitle', function() {
  return {
    template: '<h1>TODO 목록</h1>'
  }
})

angular.module('todo').directive('todoItem', function() {
  return {
    templateUrl: 'lib/todoItem.tpl.html'
  }
})

angular.module('todo').directive('todoFilters', function() {
  return {
    templateUrl: 'lib/todoFilters.tpl.html'
  }
})

angular.module('todo').directive('todoForm', function() {
  return {
    templateUrl: 'lib/todoForm.tpl.html'
  }
})