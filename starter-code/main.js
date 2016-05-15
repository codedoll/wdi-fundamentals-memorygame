var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

function createBoard(){
var score = 1;
// 5.) Create a function called isMatch to test if two cards in play are a match. 
// Hint: We can then configure our previous game logic code to access the cards!
function isMatch() {
	if (cardsInPlay[0] == cardsInPlay[1]) { 
	alert('You found a match! Your score is: ' + score);
	trackScore ();
    } 
	else {
	alert('Sorry, try again.');
    }

};

//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
	
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}


for(var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	cardElement.setAttribute('data-card', cards[i]);
	gameBoard.appendChild(cardElement);
	cardElement.addEventListener('click', isTwoCards);
};


function trackScore () {
score++
}

}

createBoard();