// Selected Player Area
function players(playerText, playerBtn){
    const playerOl = document.getElementById("selected-players");
    const playerLi = document.createElement("li");
    playerLi.innerText = "";

    const getText = document.getElementById(playerText).innerText;
    playerLi.innerText = getText;

    document.getElementById(playerBtn).disabled = (true);
    document.getElementById(playerBtn).style.backgroundColor = "grey";

    let player = document.getElementById("selected-players").childNodes.length;

    if (player < 6) {
    playerOl.appendChild(playerLi);
    return;
    }
    else{
        alert("You Can't Select More Than Five!");
    }
}

// Total Calculation
function totalCalculation(){
    const getManagerValueString = document.getElementById("manager-cost").value;
    const getManagerValue = parseFloat(getManagerValueString);

    const getCoachValueString = document.getElementById("coach-cost").value;
    const getCoachValue = parseFloat(getCoachValueString);

    const getExpense = document.getElementById("expense");
    const getExpenseString = getExpense.innerText;
    const getExpenseValue = parseFloat(getExpenseString);
    
    const totalCost = getExpenseValue + getManagerValue + getCoachValue;
    
    const totalBalanceCost = document.getElementById("total-cost");
    const totalBalanceCostString = totalBalanceCost.innerText;
    totalBalanceCost.innerText = totalCost;
}