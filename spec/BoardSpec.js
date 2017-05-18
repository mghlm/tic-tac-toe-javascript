'use strict';

describe('Board', function() {

  var board;

  beforeEach(function() {
    board = new Board();
  })

  it('has one square', function() {
    expect(board.squares[0]).toEqual(0);
  });

  it('player X starts', function() {
    expect(board.xIsNext).toBeTruthy();
  });

  describe('Square', function() {
    it('changes to X when clicked', function() {
      board.click(0);
      expect(board.squares[0]).toEqual('X');
    });
  });

})
