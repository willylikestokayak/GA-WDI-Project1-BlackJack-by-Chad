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
var playerHandTotal = 0;
var cards;
// var faceCardValues = {
// 	"JACK": 	10,
// 	"QUEEN": 	10,
// 	"KING": 	10,
// 	"ACE": 		11,
// 	"ACE-LOW": 	1
// };

$(startPlay).click(function(){ 
	console.log("I am a click event in the start play function");
	$.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6').done(function(data) {
		localStorage.deckId = data.deck_id;
	});
});
 
$(deal).click(function(){
	 
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
	});
});


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
