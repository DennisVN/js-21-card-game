// Add card deck as array - 52 minus Jokers = 48
let cardDeck = [
    '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '11',
    '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '11',
    '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '11',
    '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '11'
];
var maxCards = cardDeck.length;
var playerHand;
var dealerHand;
// Draw a card from card deck Array
function getRandomInt(maxCards){
    return Math.floor( Math.random() * maxCards) + 1;
};

function startGame() {
    playerHand = [getRandomInt(maxCards), getRandomInt(maxCards)];
    dealerHand = [getRandomInt(maxCards), getRandomInt(maxCards)];
}
startGame();
console.log("player hand: " + playerHand);
console.log("dealer hand: " + dealerHand);
/*function drawCard () {
    var pickCard = getElementByid("pickCard").addEventListener("click", {
        
    });
}*/

