//TODO: fix undefined, aces

//cardValues: 2 characters, card Suits: 5 characters
//Uses substrings to store card values

var cardValues = ["_1", "_2", "_3", "_4", "_5", "_6", "_7", "_8", "_9", 10, 11, 12, 13];
var cardSuits = ["heart", "diamo", "spade", "clubs"];
var deck = [];
var topCards = [];

var heart = ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/800px-Playing_card_heart_A.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Playing_card_heart_2.svg/800px-Playing_card_heart_2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Playing_card_heart_3.svg/800px-Playing_card_heart_3.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Playing_card_heart_4.svg/800px-Playing_card_heart_4.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_heart_5.svg/800px-Playing_card_heart_5.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Playing_card_heart_6.svg/800px-Playing_card_heart_6.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_heart_7.svg/800px-Playing_card_heart_7.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_8.svg/800px-Playing_card_heart_8.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_9.svg/800px-Playing_card_heart_9.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Playing_card_heart_10.svg/800px-Playing_card_heart_10.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Playing_card_heart_J.svg/800px-Playing_card_heart_J.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Playing_card_heart_Q.svg/800px-Playing_card_heart_Q.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Playing_card_heart_K.svg/800px-Playing_card_heart_K.svg.png"];
var diamo = ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Playing_card_diamond_A.svg/800px-Playing_card_diamond_A.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Playing_card_diamond_2.svg/800px-Playing_card_diamond_2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Playing_card_diamond_3.svg/800px-Playing_card_diamond_3.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Playing_card_diamond_4.svg/800px-Playing_card_diamond_4.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Playing_card_diamond_5.svg/800px-Playing_card_diamond_5.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Playing_card_diamond_6.svg/800px-Playing_card_diamond_6.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Playing_card_diamond_7.svg/800px-Playing_card_diamond_7.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Playing_card_diamond_8.svg/800px-Playing_card_diamond_8.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Playing_card_diamond_9.svg/800px-Playing_card_diamond_9.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Playing_card_diamond_10.svg/800px-Playing_card_diamond_10.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Playing_card_diamond_J.svg/800px-Playing_card_diamond_J.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Playing_card_diamond_Q.svg/800px-Playing_card_diamond_Q.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Playing_card_diamond_K.svg/800px-Playing_card_diamond_K.svg.png"];
var spade = ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/800px-Playing_card_spade_A.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/800px-Playing_card_spade_2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/800px-Playing_card_spade_3.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Playing_card_spade_4.svg/800px-Playing_card_spade_4.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_spade_5.svg/800px-Playing_card_spade_5.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/800px-Playing_card_spade_6.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/800px-Playing_card_spade_7.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Playing_card_spade_8.svg/800px-Playing_card_spade_8.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Playing_card_spade_9.svg/800px-Playing_card_spade_9.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Playing_card_spade_10.svg/800px-Playing_card_spade_10.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Playing_card_spade_J.svg/800px-Playing_card_spade_J.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Playing_card_spade_Q.svg/800px-Playing_card_spade_Q.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Playing_card_spade_K.svg/800px-Playing_card_spade_K.svg.png"];
var clubs = ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Playing_card_club_A.svg/800px-Playing_card_club_A.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Playing_card_club_2.svg/800px-Playing_card_club_2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Playing_card_club_3.svg/800px-Playing_card_club_3.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Playing_card_club_4.svg/800px-Playing_card_club_4.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_club_5.svg/800px-Playing_card_club_5.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Playing_card_club_6.svg/800px-Playing_card_club_6.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Playing_card_club_7.svg/800px-Playing_card_club_7.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Playing_card_club_8.svg/800px-Playing_card_club_8.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Playing_card_club_9.svg/800px-Playing_card_club_9.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Playing_card_club_10.svg/800px-Playing_card_club_10.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Playing_card_club_J.svg/800px-Playing_card_club_J.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_club_Q.svg/800px-Playing_card_club_Q.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Playing_card_club_K.svg/800px-Playing_card_club_K.svg.png"];

var setSuit;
var number;
var totalValue = 0;
var cardValue = 0;

var money = 100;
var bet = 0;
var lossMargin = 0;
var isBet = false;
var highMoney = 100;


var wins = 0;
var losses = 0;
var aceValue = 1;
var isAce = false;
var ace1Value = 1;
var ace11Value = 11;

//Puts cardSuits and cardValues together in all permutations to make a standard 52-card deck
function makeDeck() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 13; j++) {
            deck.push(cardSuits[i] + cardValues[j]);
        }
    }
}

//TOREMOVE: For debug purposes
makeDeck();
console.log(deck);

//Initializing the bet slider
document.addEventListener("DOMContentLoaded", function () {
    var betSlider = document.getElementById("betSlider");
    var betLabel = document.getElementById("betLabel");
    var betValue = document.getElementById("betValue");
    var isBet = false;
    var bet = 0;

 
    betSlider.addEventListener("input", function () {
        bet = betSlider.value;  
        betLabel.innerText = "Bet amount: $" + bet;  
        betValue.innerText = bet;  
        isBet = true;  
    });
});


//Shuffling the deck
function shuffleDeck() {
    var position = 0;

    
    for (var k = 0; k < deck.length; k++) {
        position = Math.floor(Math.random() * deck.length); 
        var temp = deck[position];
        deck[position] = deck[deck.length - 1 - k];
        deck[deck.length - 1 - k] = temp;
    }

    //Remove undefined values from the deck
    for (var i = 0; i < deck.length; i++) {
        if (deck[i] == undefined) {
            deck.splice(i, 1); 
            i--; 
        }
    }

    //Top 5 cards from the deck shown on screen
    topCards = [];
    for (var i = 0; i < 5; i++) {
        topCards.push(deck[i]); 
    }

    
    totalValue = 0;
    ace1Value = 1;
    ace11Value = 11;
    document.getElementById("totalValueOutput").innerText = "Total Value: " + totalValue; // Simulating setText

    //TOREMOVE: For debug purposes
    console.log("Top 5 cards: ", topCards);

    return topCards;
}

shuffleDeck();

//Updates betSlider bounds
function updateMoney() {
    moneyLabel.innerText = "Money: $" + money;
    betSlider.setAttribute("max", money);
    winTracker.innerText = "Wins/Losses: " + wins + "-" + losses;
    if (money >= highMoney) {
        highMoney = money;
        highScoreOutput.innerText = "Highest amount: $" + highMoney;
    }
}

var nextCard = 0;
var lossMargin = 0;

//Updates game state post-loss or post-win
function updateLoss(isSurrender) {
    lossMargin = totalValue - cardValue;
    if (isSurrender === true) {
        money = money - lossMargin;
        updateMoney();
        losses++;
        document.getElementById("winTracker").innerText = "Wins/Losses: " + wins + "-" + losses;
        resetGame(false);
    } else {
        updateMoney();
        if (money < 0) {
            money = 0;
        }
        losses++;
        document.getElementById("winTracker").innerText = "Wins/Losses: " + wins + "-" + losses;
        resetGame(false);
    }

}

function updateWin() {
    money *= (10 - nextCard);
    updateMoney();
    wins++;
    document.getElementById("winTracker").innerText = "Wins/Losses: " + wins + "-" + losses;
    resetGame(true);
}

//Sets card image upon click + checks for victory/loss once card is drawn
function setCardImage(cardNumber) {
    console.log("setCardImage called with cardNumber:", cardNumber);
    console.log("topCards array:", topCards);

    if (!topCards[cardNumber]) {
        console.error("Error: topCards[cardNumber] is undefined");
        return;
    }

    var setSuit = topCards[cardNumber].substring(0, 5);
    var number = topCards[cardNumber].substring(5, 7);
    console.log("setSuit:", setSuit, "number:", number);

    if (number[0] == "_") {
        number = number[1];
    }
    var cardValue = Number(number); 
    number = Number(number) - 1;
    if (number == 1) {
        isAce = true;
    }

    var imageUrl;
    if (setSuit == "heart") {
        imageUrl = heart[number];
    } else if (setSuit == "diamo") {
        imageUrl = diamo[number];
    } else if (setSuit == "clubs") {
        imageUrl = clubs[number];
    } else {
        imageUrl = spade[number];
    }
    document.getElementById("card" + cardNumber).src = imageUrl;

    if (cardValue > 10) {
        cardValue = 10;
    }
    totalValue += cardValue;
    document.getElementById("totalValueOutput").innerText = "Total Value: " + totalValue;

    if (totalValue > 21) {
        updateLoss(false);
    }
    if (totalValue == 21) {
        updateWin();
    }

    if (aceValue == 1) {
        ace1Value = totalValue;
        ace11Value = totalValue + 10;
    }
    if (aceValue == 11) {
        ace11Value = totalValue;
        ace1Value = totalValue - 10;
    }

    nextCard = cardNumber + 1;
}

//Resets game based on win/loss
function resetGame(isWin) {

    nextCard = 0;
    cardNumber = 0;
    document.getElementById("winTracker").innerText = "Wins/Losses: " + wins + "-" + losses;

    
    totalValue = 0;
    ace1Value = 1;
    ace11Value = 11;
    document.getElementById("totalValueOutput").innerText = "Total Value: " + totalValue;

    
    bet = 0;
    document.getElementById("betSlider").value = 0;
    document.getElementById("betLabel").innerText = "Bet amount: $0";
    document.getElementById("moneyLabel").innerText = "Money: $" + money;

    
    shuffleDeck();

    
    for (var i = 0; i < 5; i++) {
        document.getElementById("card" + i).src = "https://dejpknyizje2n.cloudfront.net/media/carstickers/versions/playing-cards-back-design-in-red-sticker-u7d5f-x450.png";
    }

    console.log("Game has been reset. Is Win: " + isWin);
}

//Initializes all web elements
document.addEventListener("DOMContentLoaded", function () {
    let betSlider = document.getElementById("betSlider");
    let betLabel = document.getElementById("betLabel");
    let betValue = document.getElementById("betValue");
    let moneyLabel = document.getElementById("moneyLabel");
    let highScoreOutput = document.getElementById("highScoreOutput");
    let winTracker = document.getElementById("winTracker");

    let isBet = false;
    let bet = 0;
    let money = 100;
    let highMoney = money;
    let wins = 0;
    let losses = 0;

    betSlider.addEventListener("input", function () {
        bet = betSlider.value;
        betLabel.innerText = "Bet amount: $" + bet;
        betValue.innerText = bet;
        isBet = true;
    });

    function setScreen(screenId) {
       
        console.log("Switching to screen: " + screenId); 
    }

    //Logic to update the picture of each card
    document.getElementById("card0").addEventListener("click", function () {
        if (isBet) {
            setCardImage(0);
        }
    });

    document.getElementById("card1").addEventListener("click", function () {
        if (isBet && nextCard == 1) {
            setCardImage(1);
        }
    });

    document.getElementById("card2").addEventListener("click", function () {
        if (isBet && nextCard == 2) {
            setCardImage(2);
        }
    });

    document.getElementById("card3").addEventListener("click", function () {
        if (isBet && nextCard == 3) {
            setCardImage(3);
        }
    });

    document.getElementById("card4").addEventListener("click", function () {
        if (isBet && nextCard == 4) {
            setCardImage(4);
        }
    });


    document.getElementById("surrenderButton").addEventListener("click", function () {
        money = (21 - totalValue);
        betSlider.setAttribute("max", money);
        updateLoss(true);
    });


    //TODO: Fix ace bugs 

});
