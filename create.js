var winners = new Array();
var score1;
var score2;
var currentPlayer = 0;
var p1Chosen = new Array();
var p2Chosen = new Array();
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
        this.innerHTML = "x";
        p1Chosen.push(parseInt(this.Id));
        p2Chosen.sort(function(a, b) {return a - b});
      }
    else {
      this.innerHTML = "O";
      p2Chosen.push(parseInt(this.Id));
    }
    }
  }
  }
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

function reset()
{
  currentPlayer = 0;
  p1Chosen = new Array();
  p2Chosen = new Array();
}
