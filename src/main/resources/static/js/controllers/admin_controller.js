'use strict';

app.controller('AdminController', ['$scope', function($scope) {

    $scope.tab = 1;

    $scope.setTab = function(newTab){
        $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
        return $scope.tab === tabNum;
    };
}]);

// 'ngMessages', 'material.svgAssetsCache',