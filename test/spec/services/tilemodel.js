'use strict';

describe('Service: TileModel', function () {

  // load the service's module
  beforeEach(module('gng2048App'));

  // instantiate service
  var TileModel;
  beforeEach(inject(function (_TileModel_) {
    TileModel = _TileModel_;
  }));

  it('should do something', function () {
    expect(!!TileModel).toBe(true);
  });

  it('should get a tile', function() {
    expect(new TileModel({x: 0, y: 1})).toBeDefined();
  })

});
