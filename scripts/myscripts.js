function getBestFive(playerId){
   
    const newElementValue = document.getElementById(playerId);

    const newValue = newElementValue.innerText;

    const playerOl = document.getElementById("selected-players");

    const playerLi = document.createElement("li");
    
    playerOl.appendChild(playerLi);
    
    playerOl.innerText = newValue;

    
    
}


document.getElementById("razzak-btn").addEventListener("click", function(){

    getBestFive("razzak-text");
})

document.getElementById("aftab-btn").addEventListener("click", function(){
    getBestFive("aftab-text");
})