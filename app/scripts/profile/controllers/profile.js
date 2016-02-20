'use strict';

/**
 * @ngdoc function
 * @name classUpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the classUpApp
 */
angular.module('classUpApp')
  .controller('ProfileCtrl', function ($scope,$location) {
  	$scope.contactDetails =[
  	{
  		name:'Contacts'
  	},
  	{
      name: 'Facebook'
    },
    {
      name: 'Twitter'
    },
    {
      name: 'Slack'
    }];

    $scope.profileDetails = 
    {
    	DOB: '12 Jan 1990',
    	Job: 'Specialist',
    	Gender: 'Male',
    	Residence: 'Miami',
    	Credits: 249
    }
    $scope.profileHeaders = _.keys($scope.profileDetails);
    
  });
