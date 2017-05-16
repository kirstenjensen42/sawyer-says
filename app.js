
/**
var app = angular.module('sawyerSays', []);

app.controller('MainCtrl', [

	'$scope',
	
	function($scope){



	}]);
	**/		

var sawyerSays = [

"Rileys are cute.", 
"This is how you stand when you don't have to prove anything to anyone.", 
"I have rainbow powers, and when I run rainbows blast out of my shoes."

];

var enterQuote = Math.floor( Math.random() * sawyerSays.length );

document.write ( sawyerSays[ enterQuote ] );