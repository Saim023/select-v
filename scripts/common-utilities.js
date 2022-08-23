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


    // const playerLength = document.getElementById("selected-players");
    // let player = playerLength.innerText;
    // let getPlayer = playerArray.push(player);
    // let getPlayerLength = playerArray.indexOf();
    // let total = getPlayerLength;

    // for(i = 1; i >= 5; i++){
        
    //     let sum = sum (total * 1000) ;
       
    // }

    // console.log(sum);


   
}
