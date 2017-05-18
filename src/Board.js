'use strict';

var Board = function() {

  this.xIsNext = true;
  this.squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];

}

Board.prototype.click = function(squareNumber) {
  if (this.xIsNext) {
    this.squares[squareNumber] = 'X';
  } else {
    this.squares[squareNumber] = 'O';
  }
  // (this.xIsNext) ? (this.squares[squareNumber] === 'X') : (this.squares[squareNumber] === 'O');
};
