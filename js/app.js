var startPlay = $('#startGame');
var deal = $('#deal');
var hit = $('#hit');
var deckId;
var cardlist = $('#cardslist');
var dealerCards = $('#dealerCards');
var playerCards = $('#playerCards');
var dealerArray = [];
var playerArray = [];
var faceCardValues = {
	"JACK": 	10,
	"QUEEN": 	10,
	"KING": 	10,
	"ACE": 		11,
	"ACE-LOW": 	1, 
};

$(startPlay).click(function(){ 
	console.log("I am a click event in the start play function");
	$.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6').done(function(data) {
		// console.log(data.deck_id);
		localStorage.deckId = data.deck_id;
	});
});

$(document).ready(function(){ 
	$(deal).click(function(){
		 
		/*add function to display static image of card back until player presses the "stand button", after stand button is 
		pressed, fire function to display both dealer cards and logic: if dealer hand <= 16, dealer takes a card (loop until
		conditional is met) then fire else statement dealer stands if dealer hand >= 17 */
		$.get('https://deckofcardsapi.com/api/deck/' + localStorage.deckId + '/draw/?count=2').done(function(data) {
			$.each(data.cards, function(i, card) {
				//console.log("Suit=" + card.suit + ", Rank=" + card.value);
				dealerCards.append("<img src='" + card.image + "' >");
					dealerArray.push(parseInt(card.value));
					console.log("where I'm trying to push cards to array ",dealerArray);
			});
		});
		// get players hand
		$.get('https://deckofcardsapi.com/api/deck/' + localStorage.deckId + '/draw/?count=2').done(function(data) {
			$.each(data.cards, function(i, card) {
				//console.log("Suit=" + card.suit + ", Rank+" + card.value);
				playerCards.append("<img src='" + card.image + "'>");
			});
		});
	});	
});

$(document).ready(function(){
	$(hit).click(function(){ 
		$.get('https://deckofcardsapi.com/api/deck/' + localStorage.deckId + '/draw/?count=1').done(function(data) {
			$.each(data.cards, function(i, card) {
				console.log("hit button test");
				playerCards.append("<img src='" + card.image + "'>");
			});
		});
	});
});
