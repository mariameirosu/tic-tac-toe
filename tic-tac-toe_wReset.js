
let counter = 0;
let board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Board " + board);
let win = false;

let play = (input) => {

  if(win===false) {

  counter++;
  console.log("Counter:", counter);
  
  console.log(board);


  if (counter % 2 === 1) {
    input.innerHTML = "X";
    input.style.color = "red";
    switch (input.id) {
      case "1":
        board[0][0] = "X";
        break;
      case "2":
        board[0][1] = "X";
        break;
      case "3":
        board[0][2] = "X";
        break;
      case "4":
        board[1][0] = "X";
        break;
      case "5":
        board[1][1] = "X";
        break;
      case "6":
        board[1][2] = "X";
        break;
      case "7":
        board[2][0] = "X";
        break;
      case "8":
        board[2][1] = "X";
        break;
      case "9":
        board[2][2] = "X";
        break;
    }
  } 
  else if (counter % 2 === 0) {
    input.innerHTML = "0";
    input.style.color = "yellow";
    switch (input.id) {
      case "1":
        board[0][0] = "0";
        break;
      case "2":
        board[0][1] = "0";
        break;
      case "3":
        board[0][2] = "0";
        break;
      case "4":
        board[1][0] = "0";
        break;
      case "5":
        board[1][1] = "0";
        break;
      case "6":
        board[1][2] = "0";
        break;
      case "7":
        board[2][0] = "0";
        break;
      case "8":
        board[2][1] = "0";
        break;
      case "9":
        board[2][2] = "0";
        break;
    }
  }

  setTimeout( function() {
  if((board[0][0]===board[1][1])&&(board[1][1]===board[2][2]) || 
     (board[0][2]===board[1][1])&&(board[1][1]===board[2][0]) ||
     (board[0][0]===board[0][1])&&(board[0][1]===board[0][2]) ||
     (board[1][0]===board[1][1])&&(board[1][1]===board[1][2]) ||
     (board[2][0]===board[2][1])&&(board[2][1]===board[2][2]) ||
     (board[0][0]===board[1][0])&&(board[1][0]===board[2][0]) ||
     (board[0][1]===board[1][1])&&(board[1][1]===board[2][1]) ||
     (board[0][2]===board[1][2])&&(board[1][2]===board[2][2])) {
    console.log("in IF");
    win = true;
    document.getElementById("wonAlert").innerText = "Game Over!";
  }}, 2000);

  console.log("Win: ", win);
  }

}

let reset = (input) => {
  console.log("in reset");
  board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  win = false;
  counter = 0;
  document.getElementsByClassName("cell")[0].innerHTML = "";
  document.getElementsByClassName("cell")[1].innerHTML = "";
  document.getElementsByClassName("cell")[2].innerHTML = "";
  document.getElementsByClassName("cell")[3].innerHTML = "";
  document.getElementsByClassName("cell")[4].innerHTML = "";
  document.getElementsByClassName("cell")[5].innerHTML = "";
  document.getElementsByClassName("cell")[6].innerHTML = "";
  document.getElementsByClassName("cell")[7].innerHTML = "";
  document.getElementsByClassName("cell")[8].innerHTML = "";
  document.getElementById("wonAlert").innerHTML = "";
}


// while (i > 0) {
// let changeColor = (input) => {
//       button.onclick();
//       i--;
//       if (counter % 2 === 1) {
//         input.style.backgroundColor = "green";
//       } else if (counter % 2 === 0) {
//         input.style.backgroundColor = "yellow";
//       }
//     }
//   };
