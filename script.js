const controlButtons = document.getElementsByClassName("controls");
const playerName = document.getElementsByClassName("player");
const boxes = document.getElementsByClassName("griditems");
let player1,player2,symbol1,symbol2;

controlButtons[0].addEventListener("click",(event)=>{
    player1 = prompt("Enter name of player 1: ");
    player2 = prompt("Enter name of player 2: ");
    symbol1 = prompt("Choose Symbol for player 1: ");
    if(symbol1 === 'X' || symbol1 === 'x'){
        symbol2 = 'O';
    }
    if(symbol1 == 'O' || symbol1 == 'o'){
        symbol2 = 'X';
    }
    playerName[0].textContent = "P1: "+player1+"    |Sym: "+symbol1;
    playerName[1].textContent = "P2: "+player2+"    |Sym: "+symbol2;
    });

    function checkWin(i){
        if((boxes[i].textContent == symbol1) && (boxes[i+1].textContent == symbol1) && (boxes[i+2].textContent==symbol1)){
            alert(player1 + " WINS !");
        }
        else if((boxes[i].textContent == symbol2) && (boxes[i+1].textContent == symbol2) && (boxes[i+2].textContent==symbol2)){
            alert(player2 + " WINS !");
        }
        else if((boxes[0].textContent == symbol1) && (boxes[4].textContent == symbol1) && (boxes[8].textContent==symbol1)){
            alert(player1 + " WINS !");
        }
        else if((boxes[2].textContent == symbol1) && (boxes[4].textContent == symbol1) && (boxes[6].textContent==symbol1)){
            alert(player1 + " WINS !");
        }
        else if((boxes[0].textContent == symbol2) && (boxes[4].textContent == symbol2) && (boxes[8].textContent==symbol2)){
            alert(player2 + " WINS !");
        }
        else if((boxes[2].textContent == symbol2) && (boxes[4].textContent == symbol2) && (boxes[6].textContent==symbol2)){
            alert(player2 + " WINS !");
        }
    };


    // for(i = 0; i<boxes.length;i++){
    //     boxes[i].addEventListener("click",(function(i){
    //         return function(event){
    //         if(i%2===0){
    //             boxes[i].textContent = symbol1;
    //             console.log(symbol1 + " in box " + (i+1));
    //         }else{
    //             boxes[i].textContent = symbol2;
    //             console.log(symbol2 + " in box " + (i+1));
    //         }
    //     };
    //     })(i));
    
    i=0;
    boxes[i].addEventListener("click",(function(i){
        return function(event){
            if(i%2===0){
                boxes[i].textContent = symbol1;
                console.log(symbol1 + " in box " + (i+1));
                i++;
            }else{
                boxes[i].textContent = symbol2;
                console.log(symbol2 + " in box " + (i+1));
                i++;
            }
        };})(i));
        if(i>=9){
            alert("GAME OVER !!!");
        }
        for(i = 0 ; i < boxes.length ; i++){
            checkWin(i);
        }
        //         if((boxes[0].textContent == symbol1) && (boxes[1].textContent == symbol1) && (boxes[2].textContent==symbol1)){
//             alert(player1 + " WINS !");
//         }
//         else if((boxes[3].textContent == symbol1) && (boxes[4].textContent == symbol1) && (boxes[5].textContent==symbol1)){
//             alert(player1 + " WINS !");
//         }
//         else if((boxes[6].textContent == symbol1) && (boxes[7].textContent == symbol1) && (boxes[8].textContent==symbol1)){
//             alert(player1 + " WINS !");
//         }
//         else if((boxes[0].textContent == symbol2) && (boxes[1].textContent == symbol2) && (boxes[2].textContent==symbol2)){
//             alert(player2 + " WINS !");
//         }
//         else if((boxes[3].textContent == symbol1) && (boxes[4].textContent == symbol2) && (boxes[5].textContent==symbol2)){
//             alert(player2 + " WINS !");
//         }
//         else if((boxes[6].textContent == symbol1) && (boxes[7].textContent == symbol2) && (boxes[8].textContent==symbol2)){
//             alert(player2 + " WINS !");
//         }
//         else{
//             alert("DRAW !!!");
//         }
//         if(i>=9)
//             {
//                 alert("GAME OVER !");
//             }
//     })
// })

controlButtons[1].addEventListener("click",(event)=>{//to be updated and added more 
    playerName[0].textContent = "P1: S:";
    playerName[1].textContent = "P2: S:";
    for(i = 0 ; i < boxes.length ; i++){
        boxes[i].textContent = ' ';
    }
    alert("GAME RESET !");
});

