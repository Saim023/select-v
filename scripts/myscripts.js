// Selected Player Area
document.getElementById("razzak-btn").addEventListener("click", function(){
    const playerOl = document.getElementById("selected-players");
    const playerLi = document.createElement("li");
    playerLi.innerText = "";

    const getText = document.getElementById("razzak-text").innerText;
    playerLi.innerText = getText;
    playerOl.appendChild(playerLi);
})