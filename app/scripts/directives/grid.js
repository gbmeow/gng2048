'use strict';

/**
 * @ngdoc directive
 * @name gng2048App.directive:grid
 * @description
 * # grid
 */
angular.module('gng2048App')
  .directive('grid', function (GridService) {
    return {
      template:
      '<button ng-click="doIt(\'right\')">Right </button>' +
      '<button ng-click="doIt(\'down\')">Down</button>' +
      '<button ng-click="doIt(\'left\')">Left</button>' +
      '<button ng-click="doIt(\'up\')">Up</button>' +
      '<br />' +
      '<div class="grid-container">' +
      '<div ng-repeat="accessValue in ngModel.board track by $index">' +
      '<div class="grid-cell" ng-class="positionToCoordinates(accessValue)">{{accessValue}}</div>' +
      '</div>' +
      '</div>' +
      '<div class="tile-container">' +
      '<div ng-repeat="tile in ngModel.tiles track by $index">' +
      '<div class="tile" ng-class="generateClass(tile)">' +
      '<h1>{{tile.value}}</h1></div>' +
      '</div>' +
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

        //element.on('keydown', function(event) {
        //  keyHandler(event);
        //});

        scope.positionToCoordinates = function(pos) {
          var x = pos % 4;
          var y = (pos - x) / 4;
          return 'position-' + x + '-' + y;
        }

        scope.generateClass = function(obj) {
          if (obj === null || obj === undefined) return;
          return 'position-' + obj.x + '-' + obj.y;
        }

        scope.doIt = function(txt) {
          keyHandler(txt);
        }


        function keyHandler(key) {
          //var key = keyboardMap[event.which] || 'right';
          //var key = 'right';
          if (key) {
            var positions = GridService.traversalDirections(key);
            positions.x.forEach(function(x) {
              positions.y.forEach(function(y) {
                var originalPosition = {x: x, y: y};
                var tile = GridService.getCellAt(originalPosition);

                if (tile) {
                  var cell = GridService.calculateNextPosition(tile, key);
                  var next = cell.next;

                  if (next &&
                      next.value === tile.value &&
                      !next.merged) {

                    //1. multiple value
                    var val = next.value * tile.value;
                    //2. set new tile
                    GridService.updateValue(next, val);
                    //3. remove old tile
                    GridService.removeTile(tile);

                    console.log('merge path completed');
                    //GridService.moveTile(tile, cell.newPosition);

                  } else {
                    console.log('move path');
                    GridService.moveTile(tile, cell.newPosition);
                  }
                }

              })
            })
          }

        }

      }
    };
  });
