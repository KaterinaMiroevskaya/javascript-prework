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

  printMessage("Не известен ход с id " + argMoveId + ".");
  return "неизвестный ход";
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
/*if (randomNumber == 1) {
  computerMove = "камень";
} else if (randomNumber == 2) {
  computerMove = "бумага";
} else {
  computerMove = "ножницы";
}*/
let playerInput = prompt("Выбери свой ход! 1: камень, 2: бумага, 3: ножницы.");

let playerMove = getMoveName(playerInput);
let result = displayResult(computerMove, playerMove);
printMessage(result);

/*if (playerInput == "1") {
  playerMove = "камень";
} else if (playerInput == "2") {
  playerMove = "бумага";
} else if (playerInput == "3") {
  playerMove = "ножницы";
}*/
/*if (computerMove == "камень" && playerMove == "бумага") {
  printMessage("Ты выиграл!");
} else if (computerMove == "бумага" && playerMove == "ножницы") {
  printMessage("Ты выиграл!");
} else if (computerMove == "ножницы" && playerMove == "камень") {
  printMessage("Ты выиграл!");
} else if (computerMove == "камень" && playerMove == "камень") {
  printMessage("Ничья!");
} else if (computerMove == "бумага" && playerMove == "бумага") {
  printMessage("Ничья!");
} else if (computerMove == "ножницы" && playerMove == "ножницы") {
  printMessage("Ничья!");
} else if (playerInput <= "0" || playerInput > "3") {
  printMessage("Нужно выбрать ход от 1 до 3!");
} else printMessage("Ты проиграл!");*/
console.log(playerMove, computerMove);
