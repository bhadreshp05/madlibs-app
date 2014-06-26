var madLibs = angular.module('madLibs',['ngAnimate']);
madLibs.controller('FormCrtl',function($scope){
	//no input default data
	$scope.data = {};
	//radio pre select
	$scope.gender = {
		pronoun: 'she',
		poss: 'her'
	};
	//only click on the "Generate My MadLib" button will show the form, this action is separated from the validation
	$scope.isFormHide = false;

	$scope.setForHide = function(){
		$scope.isFormHide = false;
	};

	$scope.clickSubmit = function(){
		$scope.isFormHide = true;
	}
	//reset button
	$scope.reset = function(){
		$scope.data = {};
		$scope.submitted = false;
		$scope.isFormHide = false;
	};

});