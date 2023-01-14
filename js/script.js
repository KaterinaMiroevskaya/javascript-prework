let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = "неизвестный ход";
if (randomNumber == 1) {
  computerMove = "камень";
} else if (randomNumber == 2) {
  computerMove = "бумага";
} else {
  computerMove = "ножницы";
}
let playerInput = prompt("Выбери свой ход! 1: камень, 2: бумага, 3: ножницы.");

let playerMove = "неизвестный ход";

if (playerInput == "1") {
  playerMove = "камень";
} else if (playerInput == "2") {
  playerMove = "бумага";
} else if (playerInput == "3") {
  playerMove = "ножницы";
}
if (computerMove == "камень" && playerMove == "бумага") {
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
} else printMessage("Ты проиграл!");
