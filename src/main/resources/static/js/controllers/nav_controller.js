'use strict';

app.controller('NavController', ['$scope', '$cookies', '$location', 'sharedProperties', function($scope, $cookies, $location, sharedProperties) {

    $scope.authenticated = $cookies.getObject('auctioneer_user');

    $scope.logout = function() {
        console.log('bye');
        sharedProperties.setSuccSignup(false);
        $cookies.remove("auctioneer_user");
        $scope.authenticated = false;
        $location.path('/');
        return true;
    };


    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

}]);