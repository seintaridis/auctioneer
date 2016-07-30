'use strict;'

app.directive('pendingMessage', [ 'sharedProperties', function (sharedProperties) {



    return {
        restrict: 'E',
        templateUrl: '/views/pending_message.html',
        controller: function ($scope) {
            $scope.succesful_signup = sharedProperties.getSuccSignup();
            console.log($scope.succesful_signup);
        }
    };
    // $scope.succesful_signup = sharedProperties.getSuccSignup();
    // console.log('succesful_signup');
    // return {
    //     templateUrl: '/views/pending_message.html'
    // };
}]);