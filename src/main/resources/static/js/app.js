// var app = angular.module('app', ['ui.router']);
//
// app.config(function($stateProvider, $urlRouterProvider) {
//
//     $urlRouterProvider.otherwise('/');
//
//     $stateProvider
//
//         .state('home', {
//             url: '/home',
//             templateUrl: '/views/home.html'
//         });
//
//
// });


var app = angular.module('app', ['ngRoute','ngResource', 'ngCookies']);
app.config(function($routeProvider, $httpProvider){
    $routeProvider
        .when('/',{
            templateUrl: '/views/home.html',
            controller: 'NavController',
            controllerAs: 'controller'
        })
        .when('/login',{
            templateUrl: "/views/login.html",
            controller: 'UserController',
            controllerAs: 'controller'
        })
        .otherwise(
            { redirectTo: '/'}
        );

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

});


app.controller('NavController', ['$scope', '$cookies', function($scope, $cookies) {

    $scope.authenticated = $cookies.userLoggedIn;

    $scope.logout = function() {
        $cookies.userLoggedIn = false;
        $scope.authenticated = false;
        return true;
    };


}]);

app.controller('UserController', ['$scope', '$http', '$location', '$cookies', function($scope, $http, $location, $cookies) {

    $scope.credentials = {
        username: '',
        password: ''
    };

    $scope.login = function() {
        $scope.authenticated = true;
        $cookies.userLoggedIn = true;
        console.log($scope.credentials.username);
        console.log($scope.credentials.password);
        $location.path("/");
    };


}]);