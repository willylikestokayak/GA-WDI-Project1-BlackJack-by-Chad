var startPlay = document.getElementById('startGame');

var gamePlay = new XMLHttpRequest();
gamePlay.open('GET', 'https://deckofcardsapi.com/api/deck/new/shuffle/',{
	deck_count: 6});
gamePlay.onload = function() {
	//console.log(gamePlay.responseText);
	var cardData = JSON.parse(gamePlay.responseText);
	console.log(cardData.deck_id);
};
gamePlay.send();


// var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
// var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
// var deck = new Array();

// function createDeck() {
// 	deck = new Array();
//     for (var i = 0 ; i < values.length; i++) {
//     for(var x = 0; x < suits.length; x++) {
//       	var weight = parseInt(values[i]);
//          	if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
//                	weight = 10;
//           	if (values[i] == "A")
//                 weight = 11;
//         var card = { Value: values[i], Suit: suits[x], Weight: weight };
//             deck.push(card);
//             }
//         }
//     };



