app = angular.module('app', []);

app.controller('appCtrl', ['$scope', '$http', function ($scope, $http) {
    
    $scope.validation =function (){
        if ($scope.taxe == "TTC"){
            $scope.total = parseInt($scope.champMontant)+ $scope.champMontant *  $scope.tva/100;
        }
        else if($scope.taxe == "HT") {
           $scope.total = 1/(1+$scope.tva/100)* $scope.champMontant; 
        }
    };
}]);
