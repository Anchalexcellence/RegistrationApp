var app = angular.module("myApp", []);
app.controller("registerCtrl", function($scope, $http, getdatafactory, $timeout) {
    $scope.alert = false;
    $scope.submit = function(data) {
        getdatafactory.sendData(data)
            .then(function(response) {
                $scope.alert = true;
                $scope.user = {};
                $scope.form.$setPristine();
                $timeout(function() {
                    $scope.alert = false;
                }, 3000)
            });


    }
})
