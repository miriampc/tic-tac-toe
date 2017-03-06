var assert = require('assert');
var app = require('../js/main.js');

describe('Tic Tac Toe', function() {

  var tictactoe;

  //Crea nuestra clase tic tac toe que va a tener la lógica del juego
  before(function() {
    tictactoe = new app.Tictactoe();
  });

  it('Debo poder crear un nuevo juego con los valores por defecto', function() {
    tictactoe.newGame();
    assert.deepEqual([["+","+","+"],["+","+","+"],["+","+","+"]],tictactoe.board);
    assert.equal(0,tictactoe.turn); // El turno lo represento con una variable que hace 0 o 1
  });

  it('Debo poder hacer una jugada', function() {
    tictactoe.newGame();
    tictactoe.jugar(1);
    assert.deepEqual([["x","+","+"],["+","+","+"],["+","+","+"]],tictactoe.board);
    tictactoe.jugar(2);
    assert.deepEqual([["+","o","+"],["+","+","+"],["+","+","+"]],tictactoe.board);
  });

  it('Solo debe ser posible jugar dentro del tablero(1-9)',function() {
    assert.deepEqual();

  });

  it('Debo poder validar que alguien gano el juego',function() {
    assert.deepEqual([["x","x","x"],["o","x","o"],["o","o","x"]],tictactoe.winner);
    assert.deepEqual([["+","o","o"],["x","x","x"],["+","+","+"]],tictactoe.winner);
    assert.deepEqual([["o","+","+"],["o","x","o"],["x","x","x"]],tictactoe.winner);
    assert.deepEqual([["x","o","o"],["x","x","o"],["x","o","x"]],tictactoe.winner);
    assert.deepEqual([["o","x","o"],["o","x","o"],["o","x","x"]],tictactoe.winner);
    assert.deepEqual([["o","x","x"],["o","o","x"],["+","o","x"]],tictactoe.winner);
    assert.deepEqual([["x","x","+"],["o","x","+"],["o","o","x"]],tictactoe.winner);
    assert.deepEqual([["x","x","x"],["o","x","o"],["o","o","x"]],tictactoe.winner);

  });

  it('Debo poder validar si hay empate', function() {

  });
});
