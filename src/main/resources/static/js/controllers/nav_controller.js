'use strict';

app.controller('NavController', ['$scope', '$cookies', function($scope, $cookies) {

    $scope.authenticated = false;
    if ($cookies.getObject('auctioneer_user')) { $scope.authenticated = true; }


    $scope.logout = function() {
        $cookies.remove("auctioneer_user");
        $scope.authenticated = false;
        return true;
    };


}]);