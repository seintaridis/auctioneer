'use strict';

app.controller('UsersListController', ['$scope', 'RequestServices', function($scope, RequestServices) {

    $scope.sortType     = 'name'; // default sort type
    $scope.sortReverse  = false;  // default sort order
    $scope.searchUser   = '';     // default search/filter term

    $scope.show_user = function (user) {
      $scope.current_user = user;
    };

    $scope.approve_user = function (userId) {
        RequestServices.approve_user(userId).then(function (response){
            console.log(response);
        });
    };

    RequestServices.users_list().then(function (response){
        console.log(response);
        $scope.users = response;
    })



}]);