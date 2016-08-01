'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngRoute'] );

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'home/home.html',
    controller  : 'HomeCtrl'
  })

  .when('/about', {
    templateUrl : 'views/about.html',
    controller  : 'AboutCtrl'
  })

  .when('/projects', {
    templateUrl : 'views/projects.html',
    controller  : 'ProjectsCtrl'
  })

  .when('/contact-me', {
    templateUrl : 'views/contact-me.html',
    controller  : 'Contact-MeCtrl'
  })

  .otherwise({redirectTo: '/'});
});
