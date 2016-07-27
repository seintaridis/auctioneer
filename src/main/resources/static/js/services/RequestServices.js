'use strict';

app.service("RequestServices", ['$http', '$cookies', function($http, $cookies) {
    var reqServices = {};

    reqServices.login = function(request){
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

    reqServices.signup = function(request){
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

    return reqServices;
}])