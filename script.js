const controlButtons = document.querySelectorAll(".controls");
let names = ['',''];
let symbols = ['',''];
let changeCase;
let countStart= 0;
let turnCount = 1;
const players = document.getElementsByClassName("player");
const boxes = document.getElementsByClassName("griditems");
const grid = document.querySelector("#grid");



//function to check win
function checkWin(){
    const winConditions = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal top-left to bottom-right
        [2, 4, 6]  // Diagonal top-right to bottom-left
    ];

    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent) {
            // Win detected
            alert(`Game Over! Player ${boxes[a].textContent} wins!`);
            return true; // Return true to indicate a win has been found
        }
    }
    const isDraw = Array.from(boxes).every(box => box.textContent.trim() !== '');
    if (isDraw) {
        alert("It's a draw!");
        return true; // Return true to indicate the game is over
    }
    return false; // No win or draw found, game continues
}
/* function for starting game and identifying clicks and boxes and setting appropriate symbols for clicked boxes*/
function startGame(){
    if(turnCount > 9){
        checkWin();
        alert("Game over !!");
        alert("Use reset to restart");
    }else{
        for(let i = 0 ; i < boxes.length ; i++){
            boxes[i].addEventListener("click",(event)=>{
                console.log("clicked on box ",event.target);
                if(turnCount % 2 != 0){
                    console.log("player 1 played");
                    event.target.textContent = symbols[0];
                    ++turnCount;
                }else{
                    console.log("player 2 played");
                    event.target.textContent = symbols[1];
                    ++turnCount;
                }
                if (checkWin()) {
                    let winningPlayer = turnCount % 2 === 0 ? names[0] : names[1];
                    console.log(`Game Over! Player ${winningPlayer} wins!`);
                    alert("Game over !!");
                    alert("Use reset to restart");
                    return;
                }
            },{once:true});
        }
    }
}

//setting respone for start button
controlButtons[0].addEventListener("click",(event)=>{
    console.log("initialising....");
    countReset = 0;
    ++countStart;
    if(countStart > 1){
        alert("Use reset button to reset the game !!");
    }else{
        names[0] = prompt("Enter name of player 1:");
        names[1] = prompt("Enter name of player 2:");
        symbols[0] = prompt("Enter symbol of player 1:");
        changeCase = symbols[0].toUpperCase();
        symbols[0] = changeCase;
        symbols[1] = (symbols[0] === 'X')?'O':'X';
        players[0].textContent = ("P1: "+names[0]+" | Sym: "+symbols[0]);
        players[1].textContent = ("P2: "+names[1]+" | Sym: "+symbols[1]);
        startGame();
    }
})


//setting response for reset button
controlButtons[1].addEventListener("click",(event)=>{
    console.log("resettting....");
    ++countReset;
    if(countReset > 1){
        alert("Game is already reset !!");
    }else{
        players[0].textContent = ("P1: | Sym:");
        players[1].textContent = ("P2: | Sym:");
    }
    let i;
    for(i = 0 ; i < 9 ; i++){
        boxes[i].textContent = '';
    }
    turnCount = 0;
})

