let cardDeck = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11
];
var maxCards = cardDeck.length;
var playerHand;
var dealerHand;
var UserPoints;
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
    for (var i = 0; i < hand.length ; i++ ) { 
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
        document.getElementById("player-hand-value").innerHTML = "BUST ! you drew " + getHandValue(playerHand);
        document.getElementById("game-status").innerHTML = "PLAYER BUST";
    } else if (getHandValue(dealerHand) > 21) {
        document.getElementById("dealer-hand-value").innerHTML = "BUST ! dealer drew " + getHandValue(dealerHand);
        document.getElementById("game-status").innerHTML = "DEALER BUST"
    }
    
}

function win(bn){
	UserPoints++;
    document.getElementById("who").innerHTML = "You win!";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("green");
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("green");
    }, 1200);
}

/*const mode;
function setup() {
    mode = 0;
}

function draw () {
    clear();
    if (mode == 0) {
        document.getElementById("game-status").innerHTML = "PRESS ENTER TO CONTINUE";
    }
    if (mode == 1) {
        
    }
}

function kepressed() {
    if (KeyCode === ENTER) {
        mode = 1;
    }
}*/
