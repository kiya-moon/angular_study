import angular from 'angular';

// 컨트롤러에서 뷰를 관리하는 역할은 남기고,
// 데이터를 관리하는 역할은 service로 분리
// function의 두번째 파라미터로 바다옴

// angular.module('todo', []).controller('TodoCtrl', function($scope) {
angular.module('todo').controller('TodoCtrl', function($scope, todoStorage) {

  // services.js에 선언된 get 함수를 호출
  // todoStorage에 있는 데이터를 가져온다
  $scope.todos = todoStorage.get()  

  // $ scope : 일종의 연결고리 
  // script.js에서 선언한 값을 index.html로 보내준다
  $scope.name = 'Chris'

  // 객체도 선언 가능
  $scope.todo = {
    title: 'AngularJs 공부',
    completed: false,
    createdAt: Date.now()
  }

  // $scope.todos = [
  //   {
  //   title: 'AngularJs 공부',
  //   completed: false,
  //   createdAt: Date.now()
  //   },
  //   {
  //   title: 'VueJs 공부',
  //   completed: false,
  //   createdAt: Date.now()
  //   },
  //   {
  //   title: 'ReactJs 공부',
  //   completed: true,
  //   createdAt: Date.now()
  //   }
  // ]

  $scope.remove = function(todo) {
    // // find todo index in todos
    // var idx = $scope.todos.findIndex(function(item) {
    //   return item.id === todo.id
    // })

    // // remove from todos
    // if(idx > -1) {
    //   $scope.todos.splice(idx, 1)
    // }
    todoStorage.remove(todo)
  }

  $scope.add = function(newTodoTitle) {
    // // create new todo
    // var newTodo = {
    //   title: newTodoTitle,
    //   completed: false,
    //   createdAt: Date.now()
    // }

    // // push into todos
    // $scope.todos.push(newTodo)

    todoStorage.add(newTodoTitle)
    
    // empty form
    $scope.newTodoTitle = ""
  }
});