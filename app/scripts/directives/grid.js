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
      template:
      '<div class="grid-container">' +
      '<div ng-repeat="accessValue in ngModel.board track by $index">' +
        '<div class="grid-cell" ng-class="positionToCoordinates(accessValue)">{{accessValue}}</div>' +
      '</div>' +
      '</div>' +
      '<div class="tile-container">' +
      '<div ng-repeat="accessValue in ngModel.tiles track by $index">' +
        '<div class="tile" ng-class="positionToCoordinates(accessValue)">{{accessValue}} = {{ positionToCoordinates(accessValue) }}</div>' +
      '</div>' +
      '</div>',
      restrict: 'EA',
      scope: {
        ngModel: '='
      },
      link: function postLink(scope, element, attrs) {

        scope.positionToCoordinates = function(pos) {
          var x = pos % 4;
          var y = (pos - x) / 4;
          return 'position-' + x + '-' + y;
        }

      }
    };
  });
