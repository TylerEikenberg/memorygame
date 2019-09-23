/*
JS Code for the Memory Game
Created by Tyler Eikenberg
*/

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}];
var cardsInPlay = [];
/**
* @return {[type]}
*/
function checkForMatch(){
if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
}
else {
alert("Sorry, try again!")
}
}
/**
* @param  {[type]}
* @return {[type]}
*/
function flipCard(){
var cardId = this.getAttribute('data-id');
console.log(cards, cardId);
cardsInPlay.push(cards[cardId].rank);
this.setAttribute('src',cards[cardId].cardImage);
if(cardsInPlay.length === 2){
checkForMatch();
}
}

console.log(cards[0].cardImage);
console.log(cards[0].suit);


console.log(cards[2].cardImage);
console.log(cards[2].suit);

createBoard();