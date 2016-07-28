'use strict';

app.controller('NavController', ['$scope', '$cookies', '$location', function($scope, $cookies, $location) {

    $scope.authenticated = false;
    if ($cookies.getObject('auctioneer_user')) { $scope.authenticated = true; }


    $scope.logout = function() {
        $cookies.remove("auctioneer_user");
        $scope.authenticated = false;
        return true;
    };


    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

}]);