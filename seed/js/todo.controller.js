function TodoController(HttpTodoService) {
  ctrl = this;
  ctrl.list = [];
  ctrl.newTodo = "";

  ctrl.toggleState = function (item) {
    HttpTodoService.update(item).then(
      function () {},
      function () {
        item.completed = !item.completed;
      }
    );
  };

  ctrl.updateTodo = function (item, index) {
    HttpTodoService.update(item).then(function (response) {});
  };

  function getAllTodos() {
    HttpTodoService.retrieve().then(function (response) {
      ctrl.list = response.splice(0, 10);
    });
  }

  ctrl.getRemaining = function () {
    return ctrl.list.filter((item) => !item.completed);
  };

  ctrl.removeTodo = function (item, index) {
    HttpTodoService.remove(item).then(function (response) {
      ctrl.list.splice(index, 1);
    });
  };

  ctrl.addNewTodo = function () {
    if (!ctrl.newTodo) {
      return;
    }

    let newTodo = {
      title: ctrl.newTodo,
      completed: false,
    };

    HttpTodoService.create(newTodo).then(function (response) {
      ctrl.list.unshift(response.data);
      ctrl.newTodo = "";
    });
  };

  getAllTodos();
}

angular.module("app").controller("TodoController", TodoController);
