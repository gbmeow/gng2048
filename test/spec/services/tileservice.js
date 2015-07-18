'use strict';

describe('Service: tileService', function () {

  // load the service's module
  beforeEach(module('gng2048App'));

  // instantiate service
  var tileService;
  beforeEach(inject(function (_tileService_) {
    tileService = _tileService_;
  }));

  //it('should do something', function () {
  //  expect(!!tileService).toBe(true);
  //});
  //
  //it('should return the last available position based on direction -- down', function() {
  //  tileService.tiles = [{pos: 1, val: 2}];
  //  tileService.consolidate('down');
  //  expect(tileService.newTiles[0].pos).toEqual(13);
  //});
  //
  //it('should return the last available position based on direction -- right', function() {
  //  tileService.tiles = [{pos: 2, val: 2}];
  //  tileService.consolidate('right');
  //  expect(tileService.newTiles[0].pos).toEqual(3);
  //});
  //
  //it('should return the last available position based on direction -- left', function() {
  //  tileService.tiles = [{pos: 2, val: 2}];
  //  tileService.consolidate('left');
  //  expect(tileService.newTiles[0].pos).toEqual(0);
  //});
  //
  //it('should return the last available position based on direction -- up', function() {
  //  tileService.tiles = [{pos: 2, val: 2}];
  //  tileService.consolidate('up');
  //  expect(tileService.newTiles[0].pos).toEqual(2);
  //});

});
