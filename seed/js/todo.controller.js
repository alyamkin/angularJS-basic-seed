function TodoController() {
  this.newTodo = "";

  this.getRemaining = function () {
    return this.list.filter((item) => !item.completed);
  };

  this.removeTodo = function (item, index) {
    this.list.splice(index, 1);
  };

  this.addNewTodo = function () {
    this.list.unshift({
      title: this.newTodo,
      completed: false,
    });

    this.newTodo = "";
  };

  this.list = [
    {
      title: "First todo item!",
      completed: true,
    },
    {
      title: "Second todo item!",
      completed: false,
    },
    {
      title: "Third todo item!",
      completed: false,
    },
  ];
}

angular.module("app").controller("TodoController", TodoController);
