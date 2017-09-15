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
var shuffleIndicator = 0;

$(startPlay).click(function(){ 
	$.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6').done(function(data) {
		localStorage.deckId = data.deck_id;
	});
});
 
$(deal).click(function(){
	$.get('https://deckofcardsapi.com/api/deck/' + localStorage.deckId + '/draw/?count=52').done(function(data) {
		cards = data.cards;
		console.log(data);
		for(let i = 0; i<4; i++){
			if(i % 2 === 0){
				playerCards.append("<img src='" + cards[i].image + "'>");
				if(cards[i].value === "KING" || cards[i].value === "QUEEN" || cards[i].value === "JACK") {
					cards[i].value = 10;
					playerArray.push(cards[i].value);
					console.log("I'm in the FACE CARD array if statement, " + playerArray);
				} else if (cards[i].value === "ACE") {
					cards[i].value = 11;
					playerArray.push(cards[i].value);
					console.log("I'm in the ACE array if statement, " + playerArray);
				} else {
					playerArray.push(parseInt(cards[i].value));
					console.log("I'm in the NUMBERED CARD array if statement, " + playerArray);
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
			console.log('this is text box data, should be null ' + playerCountOutput);
	});
		// $.each(playerArray, function(j, value){
		// 	playerHandTotal =+ playerArray[j] + playerHandTotal;
		// });
		// 	playerCountOutput.val(playerHandTotal);
	});
		//console.log('this should be player hand total',playerHandTotal);
		//console.log('this is text box data below the for each loop ' + playerCountOutput);


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

