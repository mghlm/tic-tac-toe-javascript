'use strict';

var Board = function() {
  this.xIsNext = true;
  this.squares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  this.squaresX = [];
  this.squaresO = [];
  this.xWins = false;
  this.oWins = false;
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
    this._saveScore(squareNumber);
    this._switchPlayer();
  }
};

Board.prototype.calculateWinner = function () {
  for (var i = 0; winCombinations.length; i++) {
    if ( (this.squaresX.includes(winCombinations[i][0])) && (this.squaresX.includes(winCombinations[i][1])) && (this.squaresX.includes(winCombinations[i][2])) ) {
      this.xWins = true;
    } else if ( (this.squaresO.includes(winCombinations[i][0])) && (this.squaresO.includes(winCombinations[i][1])) && (this.squaresO.includes(winCombinations[i][2])) ) {
      this.oWins = true;
    }
  }
};

Board.prototype._saveScore = function (squareNumber) {
  this.xIsNext ? this.squaresX.push(squareNumber) : this.squaresO.push(squareNumber);
};

Board.prototype._squareNotTaken = function(square) {
  return (square === this.squares[square]);
};

Board.prototype._switchPlayer = function () {
  this.xIsNext ? (this.xIsNext = false) : (this.xIsNext = true);
};
