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



//Contact Me Page Controller

app.controller('Contact-MeCtrl',function($scope){
    $scope.pageClass = 'page-contact';
});


// img parallax

    $(document).ready(function(){
      $('.parallax').parallax();
      $('main-parallax-container.parallax').parallax();
    });
