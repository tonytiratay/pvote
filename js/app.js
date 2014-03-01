var powervote = angular.module('powervote', []);

 powervote.controller('tablesCtrl', ['$scope', function($scope) {
        

$scope.tableau1 = new Tableau(1,"Tableau 1", 5,4);
$scope.tableau1.createColonnes();
$scope.tableau1.createLignes();
$scope.tableau1.createEvents();

 }]);