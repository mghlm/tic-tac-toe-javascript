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

  it('player wins if his/hers scorenumbers are equal to a win combination', function() {
    board.selectSquare(0);
    board.selectSquare(4);
    board.selectSquare(1);
    board.selectSquare(5);
    expect(board.selectSquare(2)).toEqual('The winner is: X');
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

    it('number will be pushed to the correct score-array', function() {
      board.selectSquare(5);
      board.selectSquare(2);
      board.selectSquare(3);
      expect(board.squaresX).toEqual([5, 3]);
      expect(board.squaresO).toEqual([2]);
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
