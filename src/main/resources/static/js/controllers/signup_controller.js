'use strict';


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
        afm: '',
        address: ''
    };

    $scope.signup = function() {
        $scope.authenticated = true;

        var request = {
            username: $scope.credentials.username,
            password: $scope.credentials.password,
            rep_password: $scope.credentials.rep_password,
            first_name: $scope.credentials.first_name,
            last_name: $scope.credentials.last_name,
            mail: $scope.credentials.mail,
            phone_number: $scope.credentials.phone_number,
            latitude: $scope.credentials.latitude,
            longtitude: $scope.credentials.longtitude,
            afm: $scope.credentials.afm,
            address: $scope.credentials.address
        };

        $http.post('/signup', JSON.stringify(request)).then(function(response) {
            console.log(response);
        });

        $cookieStore.put("UserIsLoggedIn", true);
        $location.path("/");


    }
}]);