'use strict';

/**
 * @ngdoc service
 * @name gng2048App.TileModel
 * @description
 * # TileModel
 * Service in the gng2048App.
 */
angular.module('gng2048App')
  .factory('TileModel', function () {
    var Tile = function(pos, val) {
      this.x      = pos.x;
      this.y      = pos.y;
      this.value  = val || 2;
      this.merged = null;
    };

    Tile.prototype.updatePosition = function(newPosition) {
      this.x = newPosition.x;
      this.y = newPosition.y;
    }

    Tile.prototype.updateValue = function(newValue) {
      this.value = newValue;
    }

    return Tile;

  });
