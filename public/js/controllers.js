'use strict';

var app = angular.module('routingApp'); //no array bc referencing an existing module

var page = 1;



app.controller('peopleCtrl', function($scope, SwapiService, $state) {
	console.log('peopleCtrl!');

	//watch this thing: SwapiService.people
	
	$scope.$watch(function() {
		//return the thing to watch
		return SwapiService.people;

	}, function(newVal, oldVal) { //listener function
		
		//triggered when the watched thing changes
		$scope.people = newVal;

		console.log('newVal:', newVal);
		console.log('oldVal:', newVal);

	})

//add prev and next functions
	$scope.page = function(pg) {
		page = pg;
		$scope.people = SwapiService.getPeople(page);
	}

})

app.controller('aboutCtrl', function($scope, $state, SwapiService) {

	var url = $state.params.url;

	console.log(url);

	$scope.getPerson = function (param) {

		console.log(param);
	}

	
	// $scope.goHome = function() {
	// 	console.log('go home roger!');

	// 	console.log('$state:', $state);
	// 	$state.go('home');
	// }

// 	$scope.goToPerson = function(param) {
// 		$state.go('person', {
// 			personId: param
// 		})
// 	}
// })

app.controller('personCtrl', function($scope, $stateParams) {

	console.log('$state', $state);
	console.log('$stateParams', $stateParams);

})

})
