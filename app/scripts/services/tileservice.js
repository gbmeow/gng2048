'use strict';

/**
 * @ngdoc service
 * @name gng2048App.tileService
 * @description
 * # tileService
 * Service in the gng2048App.
 */




angular.module('gng2048App')
  .service('tileService', function (GridService) {
    // AngularJS will instantiate a singleton by calling "new" on self function
    var self = this;
    //self.tiles = [{pos: 1, val: 2},{pos: 5, val: 2}];
    self.tiles = [];
    self.newTiles = [];

    self.gridBoundry = {s: 0, l: 3};

    var vectors = {
      'left': { x: -1, y: 0 },
      'right': { x: 1, y: 0 },
      'up': { x: 0, y: -1 },
      'down': { x: 0, y: 1 }
    };


    self.consolidate = function(direction) {

      var _translate = vectors[direction];
      var _tiles = transformTilesFn();
      var result = iterator(_tiles, traverseGrid, _translate);
      self.newTiles = result;
      //1. for each tile
        //i. find any merges in its row
        //TODO FIRST Clean up code below
        //TODO NEXT Add these merges
          //ii. IF no merges, furthest empty space within bounds of grid
    }


    function traverseGrid(tile, vector) {
      if(tile === undefined) return;

      var _t = tile;
      var _v = vector;
      var val = 1;

      while (val <= 3) {
        if (checkBoundry(_t.x)) {
          if (_t.x > 0) {
            _t.x += _v.x;
          }
        }
        if (checkBoundry(_t.y)) {
          //Issue: That if it is 0
          if (_t.y > 0 || _v.y !== -1) {
            _t.y += _v.y;
          }

        }
        val++;
      }
      return _t;
    }

    function checkBoundry(val) {
      return val >= self.gridBoundry.s && val < self.gridBoundry.l;
    }


    function iterator(array, fn, vector) {
      var _array = array;
      var _output = [];
      for (var i = 0; i <= _array.length; i++) {
        if (_array[i] !== undefined) {
          _output.push(coordinatesToPosition(fn(_array[i], vector)));
        }

      }
      return _output;
    }



    //Works

    function transformTilesFn() {
      var _tiles = self.tiles;
      var _output = [];
      for (var i = 0; i <= _tiles.length; i++) {
        _output.push(positionToCoordinates(_tiles[i]));
      }
      return _output;
    }

    //Works ends

    function incrementRow(obj) {
      obj.y++;
      return obj;
    }

    function findMatchesAt(obj) {
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


    function positionToCoordinates(obj) {
      if (obj === undefined) return;
      var xal = obj.pos % 4;
      var yal = (obj.pos - xal) / 4;
      return {x: xal, y: yal, val: obj.val};
    }

    function coordinatesToPosition(obj) {
      var result = (obj.y * 4) + obj.x;
      return {pos: result, val: obj.val}
    }

  });
