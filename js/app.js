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
var dealerHandTotal = 0;
var cards = [];
var currentCardIndex = 0;
var shuffleIndicator = 0;
//var aceValue = $('#aceValue').prop('disabled');

$(startPlay).click(function(){ 
	$.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6').done(function(data) {
		localStorage.deckId = data.deck_id;
	});
	//aceValue.prop('disabled') = false;
});
 
$(deal).click(function(){
	$.get('https://deckofcardsapi.com/api/deck/' + localStorage.deckId + '/draw/?count=10').done(function(data) {
		cards = data.cards;
		for(let i = 0; i<4; i++) {
			if(i % 2 === 0){
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
	});

$(hit).click(function(){
	playerCards.append("<img src='" + cards[currentCardIndex].image + "'>");
		if(cards[currentCardIndex].value === "KING" || cards[currentCardIndex].value === "QUEEN" || cards[currentCardIndex].value === "JACK") {
			cards[currentCardIndex].value = 10;
			playerArray.push(cards[currentCardIndex].value);
		} else if (cards[currentCardIndex].value === "ACE") {
			cards[currentCardIndex].value = 11;
			playerArray.push(cards[currentCardIndex].value);
		} else {
			playerArray.push(parseInt(cards[currentCardIndex].value));
		}
		currentCardIndex++;

		playerHandTotal = 0;
		for (var i = 0; i < playerArray.length; i++) {
			playerHandTotal += playerArray[i];
		}
		playerCountOutput.val(playerHandTotal);
		console.log(playerHandTotal); 

	});


// 	$(stand).click(function() {
// 		$.get('https://deckofcardsapi.com/api/deck/' + localStorage.deckId + '/draw/?count=1').done(function(data){
// 			dealerCards.append("<img src='" + card.image + "'>");
// 			$.each(data.cards, function(i, card) {
// 				dealerCards.append
// 			})
// 		})
// 	})
// })

