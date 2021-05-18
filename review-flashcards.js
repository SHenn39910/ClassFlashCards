const localforageMin = require("./localforage.min");

function getCards(){
    localforage.getItem('flashcards').then(function(value){
        cards = JSON.parse(value);
        document.getElementById('numCards').innerHTML = Cards.length;
        console.log(Cards);
    }).catch(function(err){
        console.log(err);
    });
}

function displayNextCard(){
    
}