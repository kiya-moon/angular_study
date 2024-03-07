import angular from 'angular';

// angular.module('plunker', []).controller('MainCtrl', function($scope) {
//   $scope.name = 'Plunker';
// });

(function() {
  // angular.module() : 모듈을 정의하는 함수 
  // 첫 번째 파라미터에 모듈 이름, 두 번째 파라미터에 배열을 넘겨준다
  // var app = angular.module('todo', [])

  // 컨트롤러를 작성할 때 첫번째 문자는 대문자, Ctrl은 컨트롤러의 약자
  // angular.module() 함수를 작성할 때처럼 두번째 파라미터는 배열로 감싼다 (안 감싸도 값이 나오기는 하던데...?)
  // app.controller('TodoCtrl', function($scope) {
  angular.module('todo', []).controller('TodoCtrl', function($scope) {
    // $ scope : 일종의 연결고리 
    // script.js에서 선언한 값을 index.html로 보내준다
    $scope.name = 'Chris'

    // 객체도 선언 가능
    $scope.todo = {
      title: 'AngularJs 공부',
      completed: false,
      createdAt: Date.now()
    }

    $scope.todos = [
      {
      title: 'AngularJs 공부',
      completed: false,
      createdAt: Date.now()
      },
      {
      title: 'VueJs 공부',
      completed: false,
      createdAt: Date.now()
      },
      {
      title: 'ReactJs 공부',
      completed: true,
      createdAt: Date.now()
      }
    ]

    $scope.remove = function(todo) {
      // find todo index in todos
      var idx = $scope.todos.findIndex(function(item) {
        return item.id === todo.id
      })

      // remove from todos
      if(idx > -1) {
        $scope.todos.splice(idx, 1)
      }
    }

    $scope.add = function(newTodoTitle) {
      // create new todo
      var newTodo = {
        title: newTodoTitle,
        completed: false,
        createdAt: Date.now()
      }

      // push into todos
      $scope.todos.push(newTodo)

      // empty form
      $scope.newTodoTitle = ""
    }
  });
})();

