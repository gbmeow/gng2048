'use strict';

/**
 * @ngdoc function
 * @name gng2048App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gng2048App
 */
angular.module('gng2048App')
  .controller('MainCtrl', function () {
    var vm = this;

    //NEXT
      //1. Game mechanics -
        //2. Where to place next tile
        //3. Merging tiles
      //2. Able to move tiles with keyboard
      //2.
    function load() {
      vm.game = {};
      vm.game.board = [];
      vm.game.tiles = [1, 5];
      for (var i = 0; i < 16; i++) {
        vm.game.board.push(i);
      }
    }
    load();

  });
