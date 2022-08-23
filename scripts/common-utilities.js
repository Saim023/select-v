// Selected Player Area
let playerArray = [];
let sum = 1;
function players(playerText, playerBtn){
    const playerOl = document.getElementById("selected-players");
    const playerLi = document.createElement("li");
    playerLi.innerText = "";

    const getText = document.getElementById(playerText).innerText;
    playerLi.innerText = getText;
    playerOl.appendChild(playerLi);

    document.getElementById(playerBtn).disabled = (true);
    document.getElementById(playerBtn).style.backgroundColor = "grey";

    const player = document.getElementById("selected-players").childNodes.length;

    if (player > 5){
        alert("You Can't Select More Than Five!");

    }
    
    else{
        
    }
}


document.getElementById("calculate-btn").addEventListener("click", function(){
    let player = document.getElementById("selected-players").childNodes.length;
    const getInputString = document.getElementById("calculate-inpt").value;
    const getInput = parseFloat(getInputString);
    let total = (player - 1) * getInput;

    const getExpense = document.getElementById("expense");
    const getExpenseString = getExpense.innerText;
    getExpense.innerText = total;
    
    
    getExpenseString.innerText = total;
    
})