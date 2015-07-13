'use strict';

/**
 * @ngdoc directive
 * @name gng2048App.directive:grid
 * @description
 * # grid
 */
angular.module('gng2048App')
  .directive('grid', function () {
    return {
      templateUrl: 'directives/grid.html',
      transclude: true,
      restrict: 'EA',
      scope: {
        ngModel: '='
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
