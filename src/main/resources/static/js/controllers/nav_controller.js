'use strict';

app.controller('NavController', ['$scope', '$cookies', '$location', 'sharedProperties', function($scope, $cookies, $location, sharedProperties) {

    $scope.authenticated = false;
    if ($cookies.getObject('auctioneer_user')) { $scope.authenticated = true; }

    $scope.logout = function() {
        console.log('bye')
        $cookies.remove("auctioneer_user");
        $scope.authenticated = false;
        return true;
    };


    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

}]);