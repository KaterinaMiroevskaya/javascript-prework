function playGame(playerInput) {
  clearMessages();
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return "камень";
    }
    if (argMoveId == 2) {
      return "бумага";
    }
    if (argMoveId == 3) {
      return "ножницы";
    }
  }
  function displayResult(argComputerMove, argPlayerMove) {
    if (argComputerMove == "камень" && argPlayerMove == "бумага") {
      return "Ты выиграл!";
    }
    if (argComputerMove == "бумага" && argPlayerMove == "ножницы") {
      return "Ты выиграл!";
    }
    if (argComputerMove == "ножницы" && argPlayerMove == "камень") {
      return "Ты выиграл!";
    }
    if (argComputerMove == "камень" && argPlayerMove == "камень") {
      return "Ничья!";
    }
    if (argComputerMove == "бумага" && argPlayerMove == "бумага") {
      return "Ничья!";
    }
    if (argComputerMove == "ножницы" && argPlayerMove == "ножницы") {
      return "Ничья!";
    }
    return "Ты проиграл!";
  }
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  let playerMove = getMoveName(playerInput);
  let result = displayResult(computerMove, playerMove);
  printMessage(result);
  console.log(playerMove, computerMove);
}
const playRock = document.getElementById("play-rock");
playRock.addEventListener("click", function () {
  playGame(1);
});
const playPaper = document.getElementById("play-paper");
playPaper.addEventListener("click", function () {
  playGame(2);
});
const playScissors = document.getElementById("play-scissors");
playScissors.addEventListener("click", function () {
  playGame(3);
});
