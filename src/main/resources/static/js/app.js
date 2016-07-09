// var index = angular.module('routerApp', ['ui.router']);
//
// index.config(function($stateProvider, $urlRouterProvider) {
//
//     $urlRouterProvider.otherwise('/home');
//
//     $stateProvider
//
//         .state('home', {
//             url: '/',
//             templateUrl: '/views/home.html'
//         });
//
// });
//
//
var app = angular.module('app', ['ngRoute','ngResource']);
app.config(function($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl: '/views/home.html'
            //controller: 'usersController'
        })
        .otherwise(
            { redirectTo: '/'}
        );
});