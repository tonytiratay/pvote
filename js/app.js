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
	var id = $scope.tables.length;
	var tableau = new Tableau(id,titre, columns, lines);	
	tableau.createColonnes();
	tableau.createLignes();
	tableau.createEvents();
	$scope.tables.push(tableau);
	console.log($scope.tables);
	console.log($scope.tables.length + " tableau(x) ajouté(s)");
};

/*angular.module('filterByline', []).
    filter('filterByLine', function() {
      return function(input, uppercase) {
        var out = "";
        for (var i = 0; i < input.length; i++) {
          out = input.charAt(i) + out;
        }
        // conditional based on optional argument
        if (uppercase) {
          out = out.toUpperCase();
        }
        return out;
      };
    });*/

 }]);