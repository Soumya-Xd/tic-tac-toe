let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

const messageElement = document.getElementById('message');

function cellClicked(index) {
  if (board[index] === '' && gameActive) {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    checkResult();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkResult() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      messageElement.innerText = `${currentPlayer} wins!`;
      gameActive = false;
      return;
    }
  }

  if (!board.includes('')) {
    messageElement.innerText = `It's a draw!`;
    gameActive = false;
    return;
  }
}

function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  messageElement.innerText = '';
  document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
