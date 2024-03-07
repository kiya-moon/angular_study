import angular from 'angular'

// angular.module('todo').service()
angular.module('todo').factory('todoStorage', function() {
  var storage = {
    todos: [
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
    ],

    get: function() {
      return storage.todos
    },

    remove: function(todo) {
      // find todo index in todos
      var idx = storage.todos.findIndex(function(item) {
        return item.id === todo.id
      })

      // remove from todos
      if(idx > -1) {
        storage.todos.splice(idx, 1)
      }
    },

    add: function(newTodoTitle) {
      // create new todo
      var newTodo = {
        title: newTodoTitle,
        completed: false,
        createdAt: Date.now()
      }

      // push into todos
      storage.todos.push(newTodo)
    }
  }

  return storage
})
