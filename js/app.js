
var $cardTable = $('#bjTable');
var $startPlay = $('#startGame');
var $deckId = 0;
var $cardlist = $('#cardslist');

$(document).ready(function() {
	$startPlay.click(function(){
		$.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6');
			//deck_count: 6;
	}
		// $.ajax({
		// 	type: 'GET',
		// 	url: 'https://deckofcardsapi.com/api/deck/new/shuffle/',
		// 	//deck_count: 6});
			success: function(deckInfo) {
				$deckId = deckInfo.deck_id;

				$.get('https://deckofcardsapi.com/api/deck/' + $deckId + '/draw/?count=2').done(function(data) {
					$.each(data.cards, function(i, card) {
						$cardlist.append('<li>' + card.value + card.suit + '</li>');
					});
				});



				
				//console.log('success,' + data);
			}
			//console.log("I'm in the start play function");
			});
		});
	};
//});



// ,
// 		deck_count: 6});


// 	$.get('https://deckofcardsapi.com/api/deck/new/shuffle/',{
// 		deck_count: 6});
// 		console.log(response);
// 		deckId = response.deck_id;
// 		console.log(deckId);
//  		//localStorage.deck = deckId;
// });
// console.log(deckId);

// startPlay.addEventListener("click", function() {
// 		var gamePlay = new XMLHttpRequest();
// 		gamePlay.open('GET', 'https://deckofcardsapi.com/api/deck/new/shuffle/',{
// 		deck_count: 6});
// 		gamePlay.onload = function() {
// 		var cardData = JSON.parse(gamePlay.responseText);
// 		renderCardDecks(cardData);
// 		var deckId = response.deck_id;
// 		console.log(deckId);
// 		localStorage.deck = deckId;
// 	};
// 		gamePlay.send();
// });

// function renderCardDecks(cards) {
// 	var getCardsFromWeb = "";
// 	for(i=0; i<cards.length; i++) {
// 		htmlString += '<p>' + cards[i]
// 	}
	//cardTable.insertAdjacentHTML('beforeend', getCardsFromWeb);
// };



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



