/*
JS Code for the Memory Game
Created by Tyler Eikenberg
*/
var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];
//Define checkForMatch function
function checkForMatch(){
if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
}
else {
alert("Sorry, try again!")
}
}
//Define flipCard function
function flipCard(cardID){
console.log("User flipped " + cards[cardID] + ".");
cardsInPlay.push(cards[cardID]);
if(cardsInPlay.length === 2){
	checkForMatch();
}

}
flipCard(0);
flipCard(2);