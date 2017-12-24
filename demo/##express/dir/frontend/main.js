var app = angular.module('app', []);

app.directive('fooBar', function () {
  var bookmarks = [
    {
      id: 1,
      name: 'EmberJS'
    },
    {
      id: 2,
      name: 'AngularJS'
    }
  ];
  return {
    restrict: 'E',
    templateUrl: "frontend/bookmarks.html",
    link: function (scope, element, attrs) {
      console.log('directive');
      scope.myBookmarks = bookmarks;
    }
  };
});
