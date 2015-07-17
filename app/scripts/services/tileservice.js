'use strict';

/**
 * @ngdoc service
 * @name gng2048App.tileService
 * @description
 * # tileService
 * Service in the gng2048App.
 */
angular.module('gng2048App')
  .service('tileService', function () {
    // AngularJS will instantiate a singleton by calling "new" on self function
    var self = this;
    self.tiles = [{pos: 1, val: 2},{pos: 5, val: 2}];


    self.consolidate = function() {

      var _array = self.tiles;
      for (var i = 0; i <= _array.length; i++) {
        if (_array[i] !== undefined) {
          var below = self.findMatchesAt(self.incrementRow(self.positionToCoordinates(_array[i])));
          if (below) {
            self.mergeTwoTiles(_array[i], below);
          }
        }
      }
    }

    self.incrementRow = function(obj) {
      obj.y++;
      return obj;
    }

    self.findMatchesAt = function(obj) {
      var _array = self.tiles;
      for (var i = 0; i <= _array.length; i++) {
        if (_array[i] !== undefined) {
          var pos = self.positionToCoordinates(_array[i]);
          if (pos.y === obj.y && pos.val === obj.val) {
            return _array[i];
          }
        }
      }
      return false;
    }


    self.mergeTwoTiles = function(tile, tile1) {
      var newVal = tile.val + tile1.val;
      var newTile = {pos: tile1.pos, val: newVal};
      self.tiles.splice(0,1);
      self.tiles.splice(0,1);
      self.tiles.push(newTile);
    }


    self.positionToCoordinates = function(obj) {
      var xal = obj.pos % 4;
      var yal = (obj.pos - xal) / 4;
      return {x: xal, y: yal, val: obj.val};
    }

    self.coordinatesToPosition = function(obj) {
      var result = (obj.y * 4) + obj.x;
      return {pos: result, val: obj.val}
    }

  });
