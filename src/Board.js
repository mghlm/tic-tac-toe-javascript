'use strict';

var Board = function() {

  this.xIsNext = true;
  this.squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];

}

Board.prototype.selectSquare = function(squareNumber) {
  if  (this._squareNotTaken(squareNumber)) {
    this.xIsNext ? this.squares[squareNumber] = 'X' : this.squares[squareNumber] = 'O';
  };
};



Board.prototype._squareNotTaken = function(square) {
  return (square === this.squares[square]);
};
