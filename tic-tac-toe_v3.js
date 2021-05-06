
let counter = 0;
let board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Board " + board);
let win = false;

let play = (input) => {
  counter++;
  console.log("Counter:", counter);
  
  console.log(board);


  if (counter % 2 === 1) {
    input.innerHTML = "X";
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
    alert("Game over!");
  }}, 2000);

  console.log("Win: ", win);

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
