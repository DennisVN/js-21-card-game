// Add card deck as array - 52 minus Jokers = 48
let cardDeck = [
    '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '11',
    '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '11',
    '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '11',
    '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '11'
];
var maxCards = cardDeck.length;
// Draw a card from card deck Array
function getRandomInt(_maxCards){
    return Math.floor( Math.random() * maxCards) + 1;
}
console.log(getRandomInt(cardDeck));



