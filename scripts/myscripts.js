// // Selected Player Area
// function players(playerText, playerBtn){
//     const playerOl = document.getElementById("selected-players");
//     const playerLi = document.createElement("li");
//     playerLi.innerText = "";

//     const getText = document.getElementById(playerText).innerText;
//     playerLi.innerText = getText;
//     playerOl.appendChild(playerLi);

//     document.getElementById(playerBtn).disabled = (true);
// }

document.getElementById("razzak-btn").addEventListener("click", function(){
    players("razzak-text", "razzak-btn");
    
    // const playerOl = document.getElementById("selected-players");
    // const playerLi = document.createElement("li");
    // playerLi.innerText = "";

    // const getText = document.getElementById("razzak-text").innerText;
    // playerLi.innerText = getText;
    // playerOl.appendChild(playerLi);

    // const buttons = document.getElementById("razzak-btn");
    // const disabledBtn = addToList(buttons);

})

document.getElementById("miraz-btn").addEventListener("click", function(){
    players("miraz-text", "miraz-btn");

})

document.getElementById("liton-btn").addEventListener("click", function(){
    players("liton-text", "liton-btn");

})

document.getElementById("imrul-btn").addEventListener("click", function(){
    players("imrul-text", "imrul-btn");

})

document.getElementById("nazim-btn").addEventListener("click", function(){
    players("nazim-text", "nazim-btn");

})

document.getElementById("mahmud-btn").addEventListener("click", function(){
    players("mahmud-text", "mahmud-btn");

})

document.getElementById("sakib-btn").addEventListener("click", function(){
    players("sakib-text", "sakib-btn");

})

document.getElementById("sabbir-btn").addEventListener("click", function(){
    players("sabbir-text", "sabbir-btn");

})

document.getElementById("taskin-btn").addEventListener("click", function(){
    players("taskin-text", "taskin-btn");

})

document.getElementById("aftab-btn").addEventListener("click", function(){
    players("aftab-text", "aftab-btn");

})

document.getElementById("rafiq-btn").addEventListener("click", function(){
    players("rafiq-text", "rafiq-btn");

})

document.getElementById("ashraful-btn").addEventListener("click", function(){
    players("ashraful-text", "ashraful-btn");

})
















// let buttonArey = [];
// function addToList(element){
//     if(element > 5 ){
//         alert("Can't Select More Than Five!!")
//     }
//     else{
//     element.disabled = true ;
//     }
// }