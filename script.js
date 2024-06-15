const controlButtons = document.getElementsByClassName("controls");
const playerName = document.getElementsByClassName("player");
controlButtons[0].addEventListener("click",(event)=>{
    const player1 = prompt("Enter name of player 1: ");
    playerName[0].textContent = "P1: "+player1;
    const player2 = prompt("Enter name of player 2: ");
    playerName[1].textContent = "P2: "+player2;
})
controlButtons[1].addEventListener("click",(event)=>{//to be updated and added more 
    playerName[0].textContent = "P1: ";
    playerName[1].textContent = "P2: ";
    alert("GAME RESET !");
})



