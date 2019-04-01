var winners = new Array();
var score1;
var score2;
var currentPlayer = 0;
var p1Choices = new Array();
var p2Choices = new Array();
var size = 3;


function drawBoard()
{
  var parent = document.getElementById("board");
  var counter = 1;

  while (parent.hasChildNodes()){
    parent.removeChild(parent.firstChild);
  }
  for (i = 0; i < 3; i++){
    var row = document.createElement("tr");

  for (j = 0; j < 3; j++){
    var col = document.createElement("td");
    col.id = counter;
    col.innerHTML = counter;

    var handle = function (e){
      if (currentPlayer == 0){
        this.innerHTML = "X";
        p1Choices.push(parseInt(this.id));
        p2Choices.sort(function(a, b) {return a - b});
      }
    else {
      this.innerHTML = "O";
      p2Choices.push(parseInt(this.id));
      p2Choices.sort(function(a, b) {return a - b});
    }
    if (checkWinner())
    {
      if (currentPlayer == 0)
        score1++;
        else
        score2++;

      document.getElementById("p1").innerHTML = score1;
      document.getElementById("p2").innerHTML = score2;

      reset();
      drawBoard();
        }
        else
        {
          if (currentPlayer == 0)
              currentPlayer = 1;
              else
              currentPlayer = 0;
            this.removeEventListener('click', argument.callee);
    }
    }
    col.addEventListener('click', handle);

    row.appendChild(col);
    counter++
  }
  Parent.appendChild(row);
}
winningCombos();
}

function winningCombos()
{
  winners.push([1, 2, 3]);
  winners.push([4, 5, 6]);
  winners.push([7, 8, 9]);
  winners.push([1, 4, 7]);
  winners.push([2, 5, 8]);
  winners.push([3, 6, 9]);
  winners.push([1, 5, 9]);
  winners.push([3, 5, 7]);
}

function checkWinner() {

    var win = false;
    var playerSelections = new Array();

    if (currentPlayer == 0)
        playerSelections = player1Selections;
    else
	playerSelections = player2Selections;

    if (playerSelections.length >= size) {

        for (v = 0; v < winners.length; v++) {
            var sets = winners[v];
            var setFound = true;

            for (u = 0; u < sets.length; u++) {

                var found = false;

                for (s = 0; s < playerSelections.length; s++) {
                    if (sets[u] == playerSelections[s]) {
                        found = true;
                        break;
                    }
                }

                if (found == false) {
                    setFound = false;
                    break;
                }
            }

            if (setFound == true) {
                win = true;
                break;
            }
        }
    }

    return win;
}
