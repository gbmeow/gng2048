'use strict';

describe('Service: tileService', function () {

  // load the service's module
  beforeEach(module('gng2048App'));

  // instantiate service
  var tileService;
  beforeEach(inject(function (_tileService_) {
    tileService = _tileService_;
  }));

  it('should do something', function () {
    expect(!!tileService).toBe(true);
  });

  it('should return correct position', function() {
    var result = tileService.positionToCoordinates(tileService.tiles[0]);
    expect(result.x).toEqual(1);
    expect(result.y).toEqual(0);
  });

  it('should return correct position', function() {
    var result = tileService.positionToCoordinates(tileService.tiles[1]);
    expect(result.x).toEqual(1);
    expect(result.y).toEqual(1);
  });

  it('should find matches', function() {
    var result = tileService.findMatchesAt({y: 1, val: 2});
    expect(result).toBeTruthy();

  });

  it('should convert from coordinates to position', function() {
    var result = tileService.coordinatesToPosition({x: 1, y: 1, val: 2});
    expect(result.pos).toEqual(5);
  });

  it('should merge two tiles with the same value', function() {
    tileService.consolidate();
    expect(tileService.tiles.length).toEqual(1);
    expect(tileService.tiles[0].pos).toEqual(5);
  });

});
