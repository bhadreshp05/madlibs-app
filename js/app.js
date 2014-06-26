'use strict';

var ngMadLibsApp = angular.module('ngMadLibsApp', ['ngAnimate']).
	controller('ngMadLibs', function($scope){
		$scope.madlib = {
			gender: 'male',
			renderMadLib: false,
			on: true
		};
		$scope.submit = function() {
			console.log('Form Submitted');
	    if($scope.ngMadLibsForm.$valid) {
	      $scope.madlib.renderMadLib = true;
	    }
		};
		$scope.reset = function(argument) {
			$scope.madlib.gender = 'male';
			$scope.madlib.renderMadLib = false;

			// Cleaning out form fields.
			for(var key in $scope.madlib) {
				if (key !== 'renderMadLib' && key !== 'gender' && key !== 'on') {
					$scope.madlib[key] = null;
				};
			};
		}
	});

