var app = angular.module( 'webPort', []);

app.controller("MainCtrl", [

	'$scope', 

	function($scope){

		$scope.printQuote = sawyerSays[ getQuote ];
		

}]);


var sawyerSays = [

		"Rileys are cute.", 
		"This is how you stand when you don't have to prove anything to anyone.", 
		"I have rainbow powers, and when I run rainbows blast out of my shoes.",
		"Sawyers are cute and tasty",
		"mom! dad's hurting your fur baby",

	]; 

var getQuote = Math.floor( Math.random() * (sawyerSays.length) );