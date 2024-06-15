const controlButtons = document.getElementsByClassName("controls");
const playerName = document.getElementsByClassName("player");
controlButtons[0].addEventListener("click",(event)=>{
    const player1 = prompt("Enter name of player 1: ");
    const player2 = prompt("Enter name of player 2: ");
    const symbol1 = prompt("Choose Symbol for player 1: ");
    let symbol2='';
    if(symbol1 === 'X' || symbol1 === 'x'){
        symbol2 = 'O';
    }
    if(symbol1 == 'O' || symbol1 == 'o'){
        symbol2 = 'X';
    }
    playerName[0].textContent = "P1: "+player1+"|Sym: "+symbol1;
    playerName[1].textContent = "P2: "+player2+"|Sym: "+symbol2;
})
controlButtons[1].addEventListener("click",(event)=>{//to be updated and added more 
    playerName[0].textContent = "P1: S:";
    playerName[1].textContent = "P2: S:";
    alert("GAME RESET !");
})
const boxes = document.getElementsByClassName("griditems");
