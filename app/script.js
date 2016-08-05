var app = angular.module('myApp', ['ngRoute'] );

app.config(function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl : 'home.html',
        controller  : 'MainCtrl'
      })

      .when('/about', {
        templateUrl : 'about.html',
        controller  : 'AboutCtrl'
      })

      .when('/projects', {
        templateUrl : 'projects.html',
        controller  : 'ProjectsCtrl'
      })

      .when('/blog', {
        templateUrl : 'blog.html',
        controller  : 'BlogCtrl'
      })

      .when('/contact-me', {
        templateUrl : 'contact-me.html',
        controller  : 'Contact-MeCtrl'
      })

      .otherwise({redirectTo: '/'});
});


//Home Page Controller
app.controller('HomeCtrl',function($scope){
    $scope.pageClass = 'page-home';
});

app.controller('MainCtrl',function($scope){
    $scope.pageClass = 'main-ctrl works';
});

//About Page Controller
app.controller('AboutCtrl',function($scope){
    $scope.pageClass = 'page-about';
});



//Projects Page Controller
app.controller('ProjectsCtrl',function($scope){
    this.pageClass = 'page-projects';
});



//Blog Page Controller

app.controller('BlogCtrl',function($scope){
    $scope.pageClass = 'page-blog';
});



function ContactCtrl($scope, $http) {
  $scope.success = false;
  $scope.httpError = false;

  $scope.send = function() {
    var job = { job: { klass: 'msg', args: [$scope.msg]}};
    $http.post('/contact',job).
      success(function(data){
        $scope.success = true;
        $scope.msg = {};
      }).
      error(function(data){
        $scope.httpError = true;
      });
  }
}
