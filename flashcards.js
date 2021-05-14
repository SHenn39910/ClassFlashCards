document.getElementById('btnSave').addEventListener('click', saveCard);
let Cards = new Array();

function saveCard(){
    let frontContent = document.getElementById('frontCard').value;
    let backContent = document.getElementById('backCard').value;
    let card = {front: frontContent, back: backContent};
    Cards.push(card);
    console.log(Cards);
    eraseCards();
    numCard();
    storeCards();
}

numCard =()=> {
    document.getElementById('numCard').innerHTML = Cards.length;
}

eraseCards = () => {
    document.getElementById('frontCard').value = "";
    document.getElementById('backCard'). value= "";
}

storeCards = () => {
    let serializedCards = JSON.stringify(Cards);
    localforage.setItem('flashcards', serializedCards).then(function ()
    {
        return localforage.getItem('key');
    }).then(function (value) {
        alert("saved");
    }).catch(function (err){
        console.log("error:" + err);
    });
}