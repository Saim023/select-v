// // Selected Player Area
document.getElementById("razzak-btn").addEventListener("click", function(){
    players("razzak-text", "razzak-btn");

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

// Calculate Area
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


document.getElementById("calculate-total").addEventListener("click", function(){
    totalCalculation()
   
})