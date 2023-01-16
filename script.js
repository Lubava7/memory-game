const cardsArray = [
  { name: "frog", img: "./img/frog.png" },
  { name: "rjanick", img: "./img/rjanick.jpg" },
  { name: "freak", img: "./img/freak.jpg" },
  { name: "calmar", img: "./img/horribleShit.jpg" },
  { name: "minion", img: "./img/minion.jpg" },
  { name: "moth", img: "./img/moth.jpg" },
  { name: "wideLeg", img: "./img/wideLeg.jpg" },
  { name: "soma", img: "./img/soma.jpg" },
  { name: "frog", img: "./img/frog.png" },
  { name: "rjanick", img: "./img/rjanick.jpg" },
  { name: "freak", img: "./img/freak.jpg" },
  { name: "calmar", img: "./img/horribleShit.jpg" },
  { name: "minion", img: "./img/minion.jpg" },
  { name: "moth", img: "./img/moth.jpg" },
  { name: "wideLeg", img: "./img/wideLeg.jpg" },
  { name: "soma", img: "./img/soma.jpg" },
];

cardsArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById("grid");

let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

const scoreResult = document.getElementById("result");
let scores = 0;

function createBoard() {
  for (let i = 0; i < cardsArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "./img/rainbowSquare.jpg");
    card.setAttribute("data-id", i);
    card.setAttribute("class", "rotate-img");
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  console.log("check for match");
  if (optionOneId == optionTwoId) {
    alert("you have clicked the same image!");
  }
  if (cardsChosen[0] == cardsChosen[1]) {
    alert("match!");
    cards[optionOneId].setAttribute("src", "./img/match.jpg");
    cards[optionTwoId].setAttribute("src", "./img/match.jpg");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
    scores = scores + 1;
  } else {
    cards[optionOneId].setAttribute("src", "./img/rainbowSquare.jpg");
    cards[optionTwoId].setAttribute("src", "./img/rainbowSquare.jpg");
    alert("no match!");
  }
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardsArray.length / 2) {
    alert("Congratulations! You find them all!");
  }
  scoreResult.innerHTML = scores;
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardsArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardsChosenIds);
  //   console.log(cardsChosen, cardsArray[cardId].name); //показывает элемент в массиве и его имя
  //   console.log("clicked on card", cardId); //строка 28 с айдишником
  this.setAttribute("src", cardsArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
