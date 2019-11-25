console.log("Up and running!");
console.log("User flipped" + cardOne);
console.log("User flipped" + cardTwo);

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match.");
	} else {
		alert("Sorry, try again.");
	}
}

function flipCard(cardID) {
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
	console.log("User flipped" + cards[cardId]);
}

flipCard(0);
flipCard(2);


