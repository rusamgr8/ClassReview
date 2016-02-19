'use strict';

/**
 * @ngdoc function
 * @name classUpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the classUpApp
 */
angular.module('classUpApp')
  .controller('LoginCtrl', function ($scope,$location) {
  	
    $scope.login = function(){
    	if($scope.user.username === $scope.user.password) {
    		$location.path('/profile');
    	}
    	else
    		alert('Invalid username and password');
    }
  });
