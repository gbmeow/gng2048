'use strict';

/**
 * @ngdoc function
 * @name gng2048App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gng2048App
 */
angular.module('gng2048App')
  .controller('MainCtrl', function (GridService) {
    var vm = this;

    //NEXT
      //1. Game mechanics -
        //2. Where to place next tile
        //3. Merging tiles
      //2. Able to move tiles with keyboard
    function load() {
      vm.game = {};
      GridService.buildTiles();
      vm.game.board = GridService.board.tiles;
      vm.game.tiles = GridService.tiles;

    }
    load();

  });
