'use strict';

/**
 * @ngdoc function
 * @name classUpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the classUpApp
 */
angular.module('classUpApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
