'use strict';

app.controller('UserController', ['$scope', '$http', '$location', '$cookieStore', function($scope, $http, $location, $cookieStore) {

    $scope.credentials = {
        username: '',
        password: ''
    };

    $scope.login = function() {
        $scope.authenticated = true;

        var request = {
            username: $scope.credentials.username,
            password: $scope.credentials.password
        };

        $http.post('/login', JSON.stringify(request)).then(function(response) {
            console.log(response);
        });

        $cookieStore.put("UserIsLoggedIn", true);
        console.log($scope.credentials.username);
        console.log($scope.credentials.password);
        $location.path("/");
    };


}]);