'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngRoute', 'myApp.home', 'myApp.home', 'myApp.version']).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});
}]);


app.controller('HomeController', function($scope) {
    $scope.message = 'Hello from HomeController!';
});
