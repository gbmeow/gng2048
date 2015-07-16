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

      self.tiles.forEach(function(tileObj) {
        var below = self.findMatchesAt(self.incrementRow(self.positionToCoordinates(tileObj)));
        console.log(below);
        if (below) {
          self.mergeTwoTiles(tileObj, below);
        }
      });

    }

    self.mergeTwoTiles = function(tile, tile1) {
     self.tiles.splice(tile, 1);
     self.tiles.splice(tile1, 1);
      var newTile = {pos: tile1.pos, val: tile.val + tile1.val};
      console.log(newTile);
      self.tiles.push(newTile);
    }

    self.incrementRow = function(obj) {
      obj.yv = obj.yv + 1;
      return obj;
    }

    self.findMatchesAt = function(obj) {
      self.tiles.forEach(function(tileObj) {
        var pos = self.positionToCoordinates(tileObj);
        if (pos.xv === obj.xv && pos.yv === obj.yv) {
          return tileObj;
        }
      });
      return false;
    }

    self.positionToCoordinates = function(pos) {
      var x = pos % 4;
      var y = (pos - x) / 4;
      return {xv: x, yv: y};
    }

  });
