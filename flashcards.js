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
}

numCard =()=> {
    document.getElementById('numCard').innerHTML = Cards.length;
}

eraseCards = () => {
    document.getElementById('frontCard').value = "";
    document.getElementById('backCard'). value= "";
}