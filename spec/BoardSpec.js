'use strict';

describe('Board', function() {

  var board;

  beforeEach(function() {
    board = new Board();
  })

  it('has nine squares', function() {
    expect(board.squares.length).toEqual(9);
  });

  it('player X starts', function() {
    expect(board.xIsNext).toBeTruthy();
  });

})
