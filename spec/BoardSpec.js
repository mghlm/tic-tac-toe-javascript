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
      board.selectSquare(0);
      expect(board.squares[0]).toEqual('X');
    });

    it('cant be picked twice', function() {
      board.selectSquare(3);
      board.selectSquare(3);
      expect(board.squares[3]).toEqual('X');
    });
  });

  describe("Player", function() {
    it('changes after each turn', function() {
      board.selectSquare(2);
      board.selectSquare(3);
      expect(board.squares[3]).toEqual('O');
    });
  });


})
