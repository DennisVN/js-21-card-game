
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
    playerHand = [getRandomInt(maxCards)]; // Get Card
    dealerHand = [getRandomInt(maxCards)];
    document.getElementById("player-hand").innerHTML = playerHand ; // Show Hand
    document.getElementById("dealer-hand").innerHTML = dealerHand ;
    document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand); // Show total
    document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand);
}
function getHandValue(hand){
    var sum = 0;
    for (var i = 0; i < hand.length ; i++ ) { // Once i = 2 we break out the loop
        sum += hand[i]
    }
    return sum;
}
startGame();
document.getElementById("hit").onclick = function(){
    playerHand.push(getRandomInt(maxCards));
    dealerHand.push(getRandomInt(maxCards));
    document.getElementById("player-hand").innerHTML = playerHand ; // Show Hand
    document.getElementById("dealer-hand").innerHTML = dealerHand ;
    document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand); // Show total
    document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand);
    if (getHandValue(playerHand) > 21) {
        document.getElementById("player-hand").innerHTML = "BUST ! you drew " + getHandValue(playerHand);
        document.getElementById("game-status").innerHTML = "BUST ! REFRESH TO PLAY AGAIN "
    } else {
    }
}
    
