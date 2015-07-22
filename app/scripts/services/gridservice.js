'use strict';

/**
 * @ngdoc service
 * @name gng2048App.GridService
 * @description
 * # GridService
 * Service in the gng2048App.
 */

//TileModel
  //Tile.prototype.savePosition
  //Tile.prototype.updatePosition
//GridService
  //this.traversalDirections - return positions ARRAY
  //this.calculateNextPosition
  //this.withinGrid
  //this.cellAvailable
  //this.getCellAt
  //this.setCellAt
//GameManager
  //this.move


//MVP
  //1. Move tiles using keyboard
  //3. Move tiles to further direction
  //2. Allow merge of tiles

angular.module('gng2048App')
  .service('GridService', function (TileModel) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var self = this;
    self.size = 4;
    self.board = {tiles: getTiles()};

    self.tiles = [];

    /*
    Main functions
     */

    self.buildTiles = function() {
      self.setCellAt({x: 0, y: 0}, new TileModel({x: 0, y: 0}));
      self.setCellAt({x: 0, y: 1}, new TileModel({x: 0, y: 1}));
    }

    var vectors = {
      'left': { x: -1, y: 0 },
      'right': { x: 1, y: 0 },
      'up': { x: 0, y: -1 },
      'down': { x: 0, y: 1 }
    };

    self.calculateNextPosition = function(cell, key) {

      var vector = vectors[key];
      var previous;

      do {
        previous = cell;
        cell = {
          x: previous.x + vector.x,
          y: previous.y + vector.y
        };
      } while (self.withinGrid(cell) && self.cellAvailable(cell));


      return {
        newPosition: previous,
        next: self.getCellAt(cell)
      };
    }

    self.cellAvailable = function(cell) {
      if (!self.getCellAt(cell)) {
        return true;
      }
      return false;
    }

    self.updateValue = function(tile, value) {
      tile.updateValue(value);
    }

    self.removeTile = function(tile) {
      var position = _coordinatesToPosition(tile);
      delete self.tiles[position];
    }

    self.moveTile = function(tile, newPosition) {
      var oldPos = {
        x: tile.x,
        y: tile.y
      };

      self.setCellAt(oldPos, null);
      self.setCellAt(newPosition, tile);

      tile.updatePosition(newPosition);
    };

    self.traversalDirections = function(direction) {
      var vector = vectors[direction];
      var positions = {x: [], y: []};
      for (var x = 0; x < this.size; x++) {
        positions.x.push(x);
        positions.y.push(x);
      }

      if (vector.x > 0) {
        positions.x = positions.x.reverse();
      }
      if (vector.y > 0) {
        positions.y = positions.y.reverse();
      }

      return positions;
    };

    self.getCellAt = function (obj) {
      //var obj = self.patch(obj);
      if (self.withinGrid(obj)) {
        var xPos = _coordinatesToPosition(obj);
        return this.tiles[xPos];
      } else {
        return null;
      }

    };

    self.patch = function(obj) {
      if (obj.x === 4) {
        obj.x = 3;
      }
      if (obj.y === 4) {
        obj.y = 3;
      }
      return obj;
    }

    self.setCellAt = function(pos, tile) {
      if (this.withinGrid(pos)) {
        var xPos = _coordinatesToPosition(pos);
        this.tiles[xPos] = tile;
      }
    };

    self.withinGrid = function(cell) {
      return cell.x >= 0 && cell.x < self.size &&
        cell.y >= 0 && cell.y < self.size;
    };










    /*
    Helper functions/vars
     */


    function getTiles() {
      var _array = [];
      for (var i = 0; i < 16; i++) {
        _array.push(i);
      }
      return _array;
    }

    function _positionToCoordinates(obj) {
      var x = obj.pos % 4;
      var y = (obj.pos - xal) / 4;
      return {
        x: x,
        y: y
      };
    }

    function _coordinatesToPosition(obj) {
      return (obj.y * 4) + obj.x;
    }


  });
