var startPlay = $('#startGame');
var deal = $('#deal');
var hit = $('#hit');
var stand = $('#stand');
var deckId;
var cardlist = $('#cardslist');
var dealerCards = $('#dealerCards');
var playerCards = $('#playerCards');
var dealerArray = [];
var playerArray = [];
var playerCountOutput = $('#playerCountOutput');
var dealerCountOutput = $('#dealerCountOutput');
var playerHandTotal = 0;
<<<<<<< HEAD
var cards;
// var faceCardValues = {
// 	"JACK": 	10,
// 	"QUEEN": 	10,
// 	"KING": 	10,
// 	"ACE": 		11,
// 	"ACE-LOW": 	1
// };
=======
var dealerHandTotal = 0;
var cards = [];
var currentCardIndex = 0;
var shuffleIndicator = 0;
var clearPlayerCard = $('#playerCardImages');

var clearBoard = function () {
	$('img').remove('img', '');
	dealerHandTotal = 0;
	playerHandTotal = 0;
	playerArray = [];
	dealerArray = [];
	$.each($('.countText'), function () {
    	$(this).val("");
	});
}
var checkForBlackJack = function () {
	switch (true) {
		case dealerHandTotal === 21 && playerHandTotal === 21:
			console.log("Double BlackJack, it's a push");
		break;
		case dealerHandTotal === 21:
			console.log("Dealer won with a blackjack");
		break;
		case playerHandTotal === 21:
			console.log("You won with a blackjack");
		default:
	}
};

var checkForBust = function () {
	switch (true) {
		case dealerHandTotal >= 22:
			console.log("Dealer busts, you win!");
			//clearBoard();
		break;
		case playerHandTotal >= 22:
			console.log("You busted, house wins...");
			//clearBoard();
		break;
		default:
	}
}

var declareWinner = function () {
	checkForBust();
	switch (true) {
		case dealerHandTotal > playerHandTotal && dealerHandTotal <= 21:
			console.log("The house wins");
		break;
		case dealerHandTotal < playerHandTotal && playerHandTotal <= 21:
			console.log("You WON!");
		case dealerHandTotal === playerHandTotal:
			console.log("Push");
		break;
		default:
	}
	//clearBoard();
};
>>>>>>> master

$(startPlay).click(function(){ 
	$.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6').done(function(data) {
		localStorage.deckId = data.deck_id;
	});
});
 
$(deal).click(function(){
<<<<<<< HEAD
	 
	/*add function to display static image of card back until player presses the "stand button", after stand button is 
	pressed, fire function to display both dealer cards and logic: if dealer hand <= 16, dealer takes a card (loop until
	conditional is met) then fire else statement dealer stands if dealer hand >= 17 */
	// $.get('https://deckofcardsapi.com/api/deck/' + localStorage.deckId + '/draw/?count=2').done(function(data) {
	// 	$.each(data.cards, function(i, card) {
	// 		//console.log("Suit=" + card.suit + ", Rank=" + card.value);
	// 		dealerCards.append("<img src='" + card.image + "' >");
	// 			if(card.value === "KING" || card.value === "QUEEN" || card.value === "JACK" ) {
	// 				card.value = 10;
	// 				dealerArray.push(card.value);
	// 			} else if (card.value === "ACE") {
	// 				 card.value = 11;
	// 				 dealerArray.push(card.value);
	// 				 //console.log("New face value dealer array ",dealerArray);
	// 			} else {
	// 				dealerArray.push(parseInt(card.value));
	// 			}
	// 		});
	// });
	// get players hand
	// $.get('https://deckofcardsapi.com/api/deck/' + localStorage.deckId + '/draw/?count=300').done(function(data) {
	// 	$.each(data.cards, function(i, card) {
	// 		// debugger;
	// 		playerCards.append("<img src='" + card.image + "'>");
	// 		if(card.value === "KING" || card.value === "QUEEN" || card.value === "JACK") {
	// 			card.value = 10;
	// 			playerArray.push(card.value);
	// 		} else if (card.value === "ACE") {
	// 			card.value = 11;
	// 			playerArray.push(card.value);
	// 		} else {
	// 			playerArray.push(parseInt(card.value));
	// 		}	
	// 	});

	$.get('https://deckofcardsapi.com/api/deck/' + localStorage.deckId + '/draw/?count=52').done(function(data) {
		////////this cards variable, if you make it global, is your deck, you don't need to looks for another one
		////////unless you run out of cards in your deck
		cards = data.cards;
		console.log(data);
		for(let i = 0; i<4; i++){
			if(i%2===0){
				playerCards.append("<img src='" + cards[i].image + "'>");
				if(cards[i].value === "KING" || cards[i].value === "QUEEN" || cards[i].value === "JACK") {
					cards[i].value = 10;
					playerArray.push(cards[i].value);
				} else if (cards[i].value === "ACE") {
					cards[i].value = 11;
					playerArray.push(cards[i].value);
				} else {
					playerArray.push(parseInt(cards[i].value));
				}
			}else{
				dealerCards.append("<img src='" + cards[i].image + "' >");
				if(cards[i].value === "KING" || cards[i].value === "QUEEN" || cards[i].value === "JACK" ) {
					cards[i].value = 10;
					dealerArray.push(cards[i].value);
				} else if (cards[i].value === "ACE") {
					 cards[i].value = 11;
					 dealerArray.push(cards[i].value);
					 //console.log("New face value dealer array ",dealerArray);
				} else {
					dealerArray.push(parseInt(cards[i].value));
				}
			};	
		}
		// console.log('outside the for loop', playerArray);
	});
		/////player array has no values here
		console.log('above the for loop',playerHandTotal);
		console.log('player array above the for loop',playerArray);

		for(var j = 0; j<2; j++){
			playerHandTotal = playerHandTotal+ playerArray[j];
			console.log('in the for loop',playerArray);
		}
		console.log('#####',playerArray);
		playerCountOutput.val(playerHandTotal);
		console.log('this should be player hand total',playerHandTotal);
	});
// });	
=======
	clearBoard();
	$.get('https://deckofcardsapi.com/api/deck/' + localStorage.deckId + '/draw/?count=10').done(function(data) {
		cards = data.cards;
		for(let i = 0; i<4; i++) {
			if(i % 2 === 0){
				playerCards.append("<img id='playerCardImages' src='" + cards[i].image + "' >");
				if(cards[i].value === "KING" || cards[i].value === "QUEEN" || cards[i].value === "JACK") {
					cards[i].value = 10;
					playerArray.push(cards[i].value);
				} else if (cards[i].value === "ACE") {
					cards[i].value = 11;
					playerArray.push(cards[i].value);
				} else {
					playerArray.push(parseInt(cards[i].value));
				}
			} else {
				dealerCards.append("<img src='" + cards[i].image + "' >");
				if(cards[i].value === "KING" || cards[i].value === "QUEEN" || cards[i].value === "JACK" ) {
					cards[i].value = 10;
					dealerArray.push(cards[i].value);
				} else if (cards[i].value === "ACE") {
					 cards[i].value = 11;
					 dealerArray.push(cards[i].value);
				} else {
					dealerArray.push(parseInt(cards[i].value));
				}
			};	
		}

		$.each(playerArray, function(j, value){
			playerHandTotal =+ playerArray[j] + playerHandTotal;
		});
			playerCountOutput.val(playerHandTotal);

		$.each(dealerArray, function(n, value){
			dealerHandTotal =+ dealerArray[n] + dealerHandTotal;
		});
			dealerCountOutput.val(dealerHandTotal);
			currentCardIndex = 4;
		});

		checkForBlackJack();
	
	});
>>>>>>> master

$(hit).click(function(){
	playerCards.append("<img src='" + cards[currentCardIndex].image + "'>");
		if(cards[currentCardIndex].value === "KING" || cards[currentCardIndex].value === "QUEEN" || cards[currentCardIndex].value === "JACK") {
			cards[currentCardIndex].value = 10;
			playerArray.push(cards[currentCardIndex].value);
		} else if (cards[currentCardIndex].value === "ACE") {
			cards[currentCardIndex].value = 1;
			playerArray.push(cards[currentCardIndex].value);
		} else {
			playerArray.push(parseInt(cards[currentCardIndex].value));
		}
		currentCardIndex++;

<<<<<<< HEAD
///this hit function just needs to append the next image from your global cards object and add the value to the player hand value
$(hit).click(function(){ 
	// debugger;
	console.log(playerHandTotal);
	playerArray = [];
	playerArray.push(playerHandTotal);
	//need to empty either the array or text field and recalculate totals
	console.log("I hope this value is null... " + playerCountOutput);
		$.get('https://deckofcardsapi.com/api/deck/' + localStorage.deckId + '/draw/?count=1').done(function(data) {
			$.each(data.cards, function(i, card) {
				playerCards.append("<img src='" + card.image + "'>");
					if(card.value === "KING" || card.value === "QUEEN" || card.value === "JACK") {
						card.value = 10;
						playerArray.push(card.value);
					} else if (card.value === "ACE") {
						card.value = 11;
						playerArray.push(card.value);
					} else {
						playerArray.push(parseInt(card.value));
					}
			});
		$.each(playerArray, function(j, value){
			playerHandTotal += playerArray;
		});
			playerCountOutput.val(playerHandTotal);
=======
		playerHandTotal = 0;
		for (var i = 0; i < playerArray.length; i++) {
			playerHandTotal += playerArray[i];
		}
		playerCountOutput.val(playerHandTotal); 
		checkForBust();
>>>>>>> master
	});


	$(stand).click(function() {
		if(dealerHandTotal <= 16){
			for(var j = 0; j < 1; j++) {
				dealerCards.append("<img src='" + cards[currentCardIndex].image + "'>");
					if(cards[currentCardIndex].value === "KING" || cards[currentCardIndex].value === "QUEEN" || cards[currentCardIndex].value === "JACK") {
						cards[currentCardIndex].value = 10;
						dealerArray.push(cards[currentCardIndex].value);
						checkForBust();
						console.log(dealerHandTotal);
					} else if (cards[currentCardIndex].value === "ACE") {
						cards[currentCardIndex].value = 1;
						dealerArray.push(cards[currentCardIndex].value);
						checkForBust();
						console.log(dealerHandTotal);
					} else if (dealerArray.push(parseInt(cards[currentCardIndex].value))) {
						checkForBust();
						console.log(dealerHandTotal);	
					} else {
						declareWinner();
				}
			}
		}

		dealerHandTotal = 0;
			for (var i = 0; i < dealerArray.length; i++) {
				dealerHandTotal += dealerArray[i];
		}
			dealerCountOutput.val(dealerHandTotal); 
				checkForBust();
				declareWinner();
});


<<<<<<< HEAD
// $(document).ready(function() {
// 	$(stand).click(function() {
// 		$.get('https://deckofcardsapi.com/api/deck/' + localStorage.deckId + '/draw/?count=1').done(function(data){
// 			dealerCards.append("<img src='" + card.image + "'>");
// 			$.each(data.cards, function(i, card) {
// 				dealerCards.append
// 			})
// 		})
// 	})
// })
=======
>>>>>>> master
