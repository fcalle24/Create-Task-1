
function startGame() {
  document.turn = "X";
  document.winner = null;
  setMsg("It's your turn, " + document.turn + ".")
}

function setMsg(msg) {
  document.getElementById('message').innerHTML = msg;
}

function nextMove(square) {

if(square.innerHTML == '') {
  square.innerHTML = document.turn;
switchPlayer();
} else {
  setMsg("Don't cheat.")
}
}

function switchPlayer() {
  if(checkWinner(document.turn)) {
    setMsg(document.turn + " won!")
    document.winner = document.turn;
  } else if (document.turn == "X") {
    document.turn = "O";
    setMsg("It's your turn, " + document.turn + ".")
  } else {
    document.turn = "X";
    setMsg("It's your turn, " + document.turn + ".")
  }
}

function checkRow(a, b, c, move) {
  var result = false;
  if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
    result = true;
  }
  return result;
}

function getBox(number) {
  return document.getElementById(number).innerHTML;
}

function checkWinner(move) {
  var result = false;
  if(checkRow(1, 2, 3, move) ||
  checkRow(4, 5, 6, move) ||
  checkRow(7, 8, 9, move) ||
  checkRow(1, 4, 7, move) ||
  checkRow(2, 5, 8, move) ||
  checkRow(3, 6, 9, move) ||
  checkRow(1, 5, 9, move) ||
  checkRow(3, 5, 7, move)) {
    result = true;
  }
  return result;
}
