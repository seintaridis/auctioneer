'use strict';

app.controller('UsersListController', ['$scope', 'RequestServices', function($scope, RequestServices) {

    $scope.sortType     = 'name'; // default sort type
    $scope.sortReverse  = false;  // default sort order
    $scope.searchUser   = '';     // default search/filter term


    $scope.show_user = function (userId) {

        RequestServices.get_user(userId).then(function (response){
            $scope.current_user = response;
            $scope.isDisabled = response.verified;
      });
    };

    $scope.approve_user = function (userId) {
        RequestServices.approve_user(userId).then(function (response){
            $scope.isDisabled = true;
            console.log(response);
        });
    };

    RequestServices.users_list().then(function (response){
        console.log(response);
        $scope.users = response;
    })



}]);