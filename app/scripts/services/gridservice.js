'use strict';

/**
 * @ngdoc service
 * @name gng2048App.GridService
 * @description
 * # GridService
 * Service in the gng2048App.
 */
angular.module('gng2048App')
  .service('GridService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.board = {tiles: getTiles()}


    function getTiles() {
      var _array = [];
      for (var i = 0; i < 16; i++) {
        _array.push(i);
      }
      return _array;
    }


  });
