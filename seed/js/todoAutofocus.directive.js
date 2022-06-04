function todoAutofocus() {
  return {
    restrict: "A",
    scope: false,
    link: function ($scope, $element, $attrs) {
      let element = $element[0];
      $scope.$watch($attrs.todoAutofocus, function (newValue, oldValue) {
        if (!newValue) {
          return;
        }

        setTimeout(function () {
          element.focus();
        });
      });
    },
  };
}

angular.module("app").directive("todoAutofocus", todoAutofocus);
