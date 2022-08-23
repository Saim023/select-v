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

