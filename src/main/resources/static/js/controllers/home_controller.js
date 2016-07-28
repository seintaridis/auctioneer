'use strict';

app.controller('HomeController', ['$scope', 'sharedProperties', function($scope, sharedProperties) {

    $scope.succesful_signup = sharedProperties.getSuccSignup();

}]);