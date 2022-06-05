let players = ['x', 'o'];
let activePlayer = 0;
let board_usr = [];
const cnt = 4;

function check_win() {
  let row = [0,0,0], col = [0,0,0], dig = [0,0];
  const chr = players[activePlayer];
  for (let r = 0; r < cnt; r++) {
    for (let c = 0; c < cnt; c++) {      
      if (chr === board_usr[r][c]) {
        row[r]++;
        col[c]++;
        if (r === c) {
          dig[0]++;
        }else if (r === (cnt - c  - 1)){
         dig[1]++;
        }
          
      }
    }
    if (row[r] === cnt) return true;
  }
  for (let i = 0; i < 3; i++) {
    if (col[i] === cnt) return true;
  }
  for (let i = 0; i < 2; i++) {
    if (dig[i] === cnt) return true;
  }
  return false;
}

function startGame() {
  board_usr.length = 0
  for (let r = 0; r < cnt; r++) {      
    board_usr.push([]);
    for (let c = 0; c < cnt; c++) {
      board_usr[r].push("");
    }
  }
  renderBoard(board_usr);
}
function click(r, c) {
  board_usr[+r][+c] = players[activePlayer];
  renderBoard(board_usr);
  if (check_win()){
    showWinner(activePlayer);
  }else {
    if(activePlayer) activePlayer = 0;
    else activePlayer = 1;
  }
}