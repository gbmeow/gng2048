'use strict';

/**
 * @ngdoc directive
 * @name gng2048App.directive:grid
 * @description
 * # grid
 */
angular.module('gng2048App')
  .directive('grid', function (tileService) {
    return {
      template:
      '<div class="grid-container">' +
      '<div ng-repeat="accessValue in ngModel.board track by $index">' +
      '<div class="grid-cell" ng-class="positionToCoordinates(accessValue)">{{accessValue}}</div>' +
      '</div>' +
      '</div>' +
      '<div class="tile-container">' +
      '<div ng-repeat="accessValue in ngModel.tiles track by $index">' +
      '<div class="tile" ng-class="positionToCoordinates(accessValue.pos)">' +
      '<h1>{{accessValue.pos}} - {{accessValue.val}}</h1></div>' +
      '</div>' +
      '<button ng-click="doIt()">Do it</button>' +
      '</div>',
      restrict: 'EA',
      scope: {
        ngModel: '='
      },
      link: function postLink(scope, element, attrs) {

        var UP    = 'up',
          RIGHT = 'right',
          DOWN  = 'down',
          LEFT  = 'left';

        var keyboardMap = {
          37: LEFT,
          38: UP,
          39: RIGHT,
          40: DOWN
        };

        element.on('keydown', function(event) {
          keyHandler(event);
        });

        scope.positionToCoordinates = function(pos) {
          var x = pos % 4;
          var y = (pos - x) / 4;
          return 'position-' + x + '-' + y;
        }

        scope.doIt = function() {

        }

        function keyHandler(event) {
          var key = keyboardMap[event.which];
          if (key) {
            tileService.consolidate(key);
          }

        }

      }
    };
  });
