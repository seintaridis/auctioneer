'use strict';

app.service("RequestServices", ['$http', '$cookies', function($http, $cookies) {
    var services = {};

    services.login = function(request){
        return $http.post('/login', request)
            .then(function (response) {
                var obj = {
                    id: response.data.userId,
                    role: response.data.role,
                    token: 'response.data.token'
                };
                $cookies.putObject('auctioneer_user', obj);
                return obj;
            });

    };

    services.signup = function(request){
        return $http.post('/signup', request)
            .then(function (response) {
                var obj = {
                    id: response.data.userId,
                    role: response.data.role,
                    token: 'response.data.token'
                };
                $cookies.putObject('auctioneer_user', obj);
                return obj;
            });

    };

    return services;
}])