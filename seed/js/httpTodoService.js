function HttpTodoService($http) {
  let API = `//jsonplaceholder.typicode.com/todos/`;
  function create(newItem) {
    return $http.post(API, newItem).then(function (response) {
      return response;
    });
  }
  function retrieve() {
    return $http.get(API).then(
      function (response) {
        return response.data;
      },
      function (reject) {
        return reject;
      }
    );
  }
  function update(item) {
    return $http.put(API + item.id, item).then(function (response) {
      return response.data;
    });
  }
  function remove(item) {
    return $http.delete(API + item.id).then(function (response) {
      return response.data;
    });
  }

  return {
    create,
    retrieve,
    update,
    remove,
  };
}

angular.module("app").factory("HttpTodoService", HttpTodoService);
