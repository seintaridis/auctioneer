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
        .when('/signup',{
            templateUrl: "/views/signup.html",
            controller: 'SignUpController',
            controllerAs: 'controller'
        })
        .otherwise(
            { redirectTo: '/'}
        );

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

});


app.controller('NavController', ['$scope', '$cookieStore', function($scope, $cookieStore) {

    $scope.authenticated = $cookieStore.get('UserIsLoggedIn');

    $scope.logout = function() {
        // $cookies.userLoggedIn = false;
        $cookieStore.remove("UserIsLoggedIn");
        $scope.authenticated = false;
        return true;
    };


}]);

app.controller('UserController', ['$scope', '$http', '$location', '$cookieStore', function($scope, $http, $location, $cookieStore) {

    $scope.credentials = {
        username: '',
        password: ''
    };

    $scope.login = function() {
        $scope.authenticated = true;

        request = {
            username: $scope.credentials.username,
            password: $scope.credentials.password
        };

        $http.post('/login', JSON.stringify(request)).then(function(response) {
            console.log(response)
        });

        $cookieStore.put("UserIsLoggedIn", true);
        console.log($scope.credentials.username);
        console.log($scope.credentials.password);
        $location.path("/");
    };


}]);

app.controller('SignUpController', ['$scope', '$http', '$location', '$cookieStore', function($scope, $http, $location, $cookieStore) {

    $scope.credentials = {           // TODO: do we need this?
        username: '',
        password: '',
        rep_password: '',
        first_name: '',
        last_name: '',
        mail: '',
        phone_number: '',
        latitude: '',
        longtitude: '',
        afm: ''
    };

    $scope.signup = function() {
        $scope.authenticated = true;

        request = {
            username: $scope.credentials.username,
            password: $scope.credentials.password,
            rep_password: $scope.credentials.rep_password,
            first_name: $scope.credentials.first_name,
            last_name: $scope.credentials.last_name,
            mail: $scope.credentials.mail,
            phone_number: $scope.credentials.phone_number,
            latitude: $scope.credentials.latitude,
            longtitude: $scope.credentials.longtitude,
            afm: $scope.credentials.afm
        };

        $http.post('/signup', JSON.stringify(request)).then(function(response) {
            console.log(response)
        });

        $cookieStore.put("UserIsLoggedIn", true);
        $location.path("/");


}]);