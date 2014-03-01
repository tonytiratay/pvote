var powervote = angular.module('powervote', []);

 powervote.controller('tablesCtrl', ['$scope', function($scope) {


$scope.tables = [];
$scope.titre = "Mon titre de tableau";
$scope.columns = 5;
$scope.lines = 5;

$scope.setTable = function(){
	var titre = $scope.titre;
	var columns = $scope.columns;
	var lines = $scope.lines;
	var tableau = new Tableau(1,titre, columns, lines);	
	tableau.createColonnes();
	tableau.createLignes();
	tableau.createEvents();
	$scope.tables.push(tableau);
	console.log($scope.tables);
	console.log($scope.tables.length + " tableau(x) ajouté(s)");
};



 }]);