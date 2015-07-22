'use strict';

describe('Service: GridService', function () {

  // load the service's module
  beforeEach(module('gng2048App'));

  // instantiate service
  var GridService;
  beforeEach(inject(function (_GridService_) {
    GridService = _GridService_;
  }));

  it('should do something', function () {
    expect(!!GridService).toBe(true);
  });

  it('should create traversal cells', function() {
    var result = GridService.traversalDirections('right');
    expect(result.x.length).toEqual(4);
    expect(result.y.length).toEqual(4);
  });

  it('should tell that within grid', function() {
    var result = GridService.withinGrid({x: 0, y: 1});
    expect(result).toBe(true);
  });

  it('should tell that NOT within grid', function() {
    var result = GridService.withinGrid({x: 10, y: 1});
    expect(result).toBe(false);
  });

  it('should set cell at location', function() {
    var result = GridService.setCellAt({x: 0, y: 1}, {x: 0, y: 1});
    expect(GridService.tiles[4]).toBeDefined();
  });

  it('should add first few tiles', function() {
    GridService.buildTiles();
    expect(GridService.tiles[4]).toBeDefined();
  })

  it('should tell me if cell is not available', function() {
    GridService.setCellAt({x: 0, y: 1}, {x: 0, y: 1});
    var result = GridService.cellAvailable({x: 0, y: 1});
    expect(result).toBe(false);
  });

  it('should tell move cell to new position', function() {
    GridService.buildTiles();
    var tile = GridService.calculateNextPosition({x: 0, y: 1}, 'right');
    var result = GridService.moveTile(GridService.tiles[4], tile.newPosition);
    expect(GridService.tiles[4]).toBe(null);
    expect(GridService.tiles[7].x).toEqual(3);
    expect(GridService.tiles[7].y).toEqual(1);
  });

  it('should expose next property', function() {
    GridService.buildTiles();
    var originalPosition = {x: 0, y: 0};
    var tile = GridService.getCellAt(originalPosition);
    var cell = GridService.calculateNextPosition(originalPosition, 'down');
    var next = cell.next;

    if (next && next.value === tile.value && !next.merged) {
      var val = next.value * tile.value;
      //2. set new tile
      GridService.updateValue(next, val);
      //3. remove old tile
      GridService.removeTile(tile);
    }

    expect(GridService.tiles[4].x).toEqual(0);
    expect(GridService.tiles[4].y).toEqual(1);
  });





});
