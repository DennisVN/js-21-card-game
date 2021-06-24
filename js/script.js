// Add card deck as array - 52 minus Jokers = 48
let cardDeck = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11
];
var maxCards = cardDeck.length;
var playerHand;
var dealerHand;
// Draw a card from card deck Array
function getRandomInt(maxCards){
    var randomCard = Math.floor(cardDeck.length * Math.random());
    return cardDeck[randomCard];
};

function startGame() {
    playerHand = [getRandomInt(maxCards), getRandomInt(maxCards)];
    dealerHand = [getRandomInt(maxCards), getRandomInt(maxCards)];
}

function getHandValue(hand){
    var sum = 0;
    for (var i = 0; i < hand.length ; i++ ) { // Once i = 2 we break out the loop
        sum += hand[i]
    }
    return sum;
}
startGame();
console.log("player hand: " + playerHand);
console.log("player hand value: " + getHandValue(playerHand));
console.log("dealer hand: " + dealerHand);
console.log("dealer hand value: " + getHandValue(dealerHand));


document.getElementById("hit").onclick = function(){
    playerHand.push(getRandomInt(maxCards));
    if (getHandValue(playerHand) > 21) {
        console.log("BUST ! ");
    }
    console.log("clickedy");
    console.log("New player hand : " + playerHand);
}

document.getElementById("player-hand").innerHTML = playerHand;
document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand);
document.getElementById("dealer-hand").innerHTML = dealerHand;
document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand);