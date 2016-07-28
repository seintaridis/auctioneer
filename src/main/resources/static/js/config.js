'use strict';

app.config(function($routeProvider, $httpProvider){
    $routeProvider
        .when('/',{
            templateUrl: '/views/home.html',
            controller: 'HomeController',
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
        .when('/succesful_signup',{
            templateUrl: "/views/succesful_signup.html"
        })
        .otherwise(
            { redirectTo: '/'}
        );

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

});