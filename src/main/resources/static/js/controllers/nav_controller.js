'use strict';

app.controller('NavController', ['$scope', '$cookieStore', function($scope, $cookieStore) {

    $scope.authenticated = $cookieStore.get('UserIsLoggedIn');

    $scope.logout = function() {
        // $cookies.userLoggedIn = false;
        $cookieStore.remove("UserIsLoggedIn");
        $scope.authenticated = false;
        return true;
    };


}]);