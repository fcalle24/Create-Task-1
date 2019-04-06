function startGame() {

  for (var i = 1; i <= 9; i++) {
    reset(i);
  }

  document.turn = "X";
  document.winner = null;
  setMsg("Player " + document.turn + " goes first.")
}

for (var i = 1; i <= 9; i++) {
  reset(i);
}

function setMsg(msg) {
  document.getElementById('message').innerHTML = msg;
}

function nextMove(square) {
if(document.winner != null){
  setMsg("Don't be a sore loser.")
} else if (square.innerHTML == '') {
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
  } else if (checkDraw()) {
    setMsg ("It's a draw, no one wins.");
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

function checkDraw(move) {
  for (var i = 1; i <= 9; i++) {

    if (getBox(i)=="")
      return false;
    }
    return true;
  }

  function getBox(number) {
    return document.getElementById("s" + number).innerHTML;
  }

function reset(number) {
  document.getElementById("s" + number).innerHTML = "";
}
