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
var cards;
var shuffleIndicator = 0;

$(startPlay).click(function(){ 
	$.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6').done(function(data) {
		localStorage.deckId = data.deck_id;
	});
});
 
$(deal).click(function(){
	$.get('https://deckofcardsapi.com/api/deck/' + localStorage.deckId + '/draw/?count=52').done(function(data) {
		cards = data.cards;
		for(let i = 0; i<4; i++){
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
		});
	});

$(hit).click(function(){ 
	//cards = data.cards;
		for(let i = 0; i<1; i++){
			playerCards.append("<img src='" + cards[i].image + "'>");
				if(cards[i].value === "KING" || cards[i].value === "QUEEN" || cards[i].value === "JACK") {
					cards[i].value = 10;
					playerArray.push(cards[i].value);
					console.log("I am in the FACE CARD array, " + playerArray);
				} else if (cards[i].value === "ACE") {
					cards[i].value = 11;
					playerArray.push(cards[i].value);
					console.log("I am in the ACE array, " + playerArray);
				} else {
					playerArray.push(parseInt(cards[i].value));
					console.log("I am in the NUMBERED CARD array, " + playerArray);
				}
		};
		//not sure this for each loop is needed
		// $.each(playerArray, function(n, value){
		// 	playerHandTotal += playerArray[n] + playerHandTotal;
		// });
			//playerHandTotal += playerArray + playerHandTotal;
			playerCountOutput.val(playerHandTotal);
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

