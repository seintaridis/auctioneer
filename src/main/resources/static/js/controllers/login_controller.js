'use strict';

app.controller('UserController', ['$scope', '$location', 'RequestServices', function($scope, $location, RequestServices) {

    $scope.credentials = {
        username: '', // TODO: And email.
        password: ''
    };

    $scope.login = function() {
        $scope.authenticated = true;

        var request = {
            username: $scope.credentials.username,
            password: $scope.credentials.password
        };

        RequestServices.login(request).then(function (response){
           if (response.role === 'admin') { $location.path("/admin_panel"); }
           else { $location.path("/"); }
        })

    };


}]);