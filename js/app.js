var startPlay = $('#startGame');
var deal = $('#deal');
var deckId;
var cardlist = $('#cardslist');
var dealerCards = $('#dealerCards');
var playerCards = $('#playerCards');

$(startPlay).click(function(){ 
	console.log("I am a click event in the start play function");
	$.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6').done(function(data) {
		// console.log(data.deck_id);
		localStorage.deckId = data.deck_id;
	});
});

$(document).ready(function(){ 
	$(deal).click(function(){
		// Get dealers hand
		$.get('https://deckofcardsapi.com/api/deck/' + localStorage.deckId + '/draw/?count=2').done(function(data) {
			$.each(data.cards, function(i, card) {
				console.log("Suit=" + card.suit + ", Rank=" + card.value);
				dealerCards.append("<img src='" + card.image + "' >");
			});
		});
		// get players hand
		$.get('https://deckofcardsapi.com/api/deck/' + localStorage.deckId + '/draw/?count=2').done(function(data) {
			$.each(data.cards, function(i, card) {
				playerCards.append('<p>' + card.value + card.suit + card.image + '</p>');
			});
		});
	});	
});
