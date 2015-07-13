'use strict';

/**
 * @ngdoc function
 * @name gng2048App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gng2048App
 */
angular.module('gng2048App')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.game = [1, 2];
  });
