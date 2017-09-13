var startPlay = $('#startGame');
var deckId;
var cardlist = $('#cardslist');
var dealerCards = $('#dealerCards');
var playerCards = $('#playerCards');


$.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6').done(function(data) {
	// console.log(data.deck_id);
	localStorage.deckId = data.deck_id;
});
// console.log(localStorage.deckId);

$.get('https://deckofcardsapi.com/api/deck/' + localStorage.deckId + '/draw/?count=2').done(function(data) {
	$.each(data.cards, function(i, card) {
	dealerCards.append('<p>' + card.value + card.suit + '</p>');
	});
});

$.get('https://deckofcardsapi.com/api/deck/' + localStorage.deckId + '/draw/?count=2').done(function(data) {
	$.each(data.cards, function(i, card) {
	playerCards.append('<p>' + card.value + card.suit + '</p>');
	});
});


			