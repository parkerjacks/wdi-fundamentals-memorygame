



const cards =  


[ 

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

}


];

const cardsInPlay = []; 

function checkForMatch(){if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}

;}

function flipCard () { 
	this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);


cardsInPlay.push(cards[cardId].rank);  
this.setAtrribute 
if (cardsInPlay.length === 2) {checkForMatch(); 
} console.log(cards[cardId].cardImage + cards[cardId].suit);
};  


function createBoard(){ 
	for (let i = 0; i < cards.length; i++) { let createBoard = document.createElement('img'); 
		cardElement.setAtrribute('src','images/back.png'); 
	cardElement.setAtrribute ('data-id',i); 
cardElement.addEventListener('click' ); 
cardElement.appendChild('#game-board');
}
};


createBoard();


	






	





	 




 

