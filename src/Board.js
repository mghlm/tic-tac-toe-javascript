'use strict';

var Board = function() {
  this.xIsNext = true;
  this.squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  this.scoreX = [];
  this.scoreO = [];
}

var winCombinations = [
  [0, 1, 2], [3, 4, 5],
  [6, 7, 8], [0, 3, 6],
  [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

Board.prototype.selectSquare = function(squareNumber) {
  if  (this._squareNotTaken(squareNumber)) {
    this.xIsNext ? this.squares[squareNumber] = 'X' : this.squares[squareNumber] = 'O';
    this.xIsNext ? this.scoreX.push(squareNumber) : this.scoreO.push(squareNumber);
    this._switchPlayer();
  }
};

// Board.prototype.calculateWinner = function () {
//   for (var i = 0; winCombinations.length; i++) {
//     for (var x = 0; winCombinations[i].length; i++) {
//       if ((winCombinations[i][x] ))
//     }
//   }
// };

Board.prototype._squareNotTaken = function(square) {
  return (square === this.squares[square]);
};

Board.prototype._switchPlayer = function () {
  this.xIsNext ? (this.xIsNext = false) : (this.xIsNext = true);
};
