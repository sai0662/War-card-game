let player1score = 26;
let player2score = 26;

function Deck() {
    

    var player1card = Math.floor(Math.random() * 13 + 2);
    var player1cardoutput = "";
    if(player1card === 11) {
        player1cardoutput = "J"
    } else if(player1card === 12) {
        player1cardoutput = "Q";
    } else if(player1card === 13) {
        player1cardoutput = "K";
    } else if(player1card === 14) {
        player1cardoutput = "A";
    } else {
        player1cardoutput = player1card;
    }
    document.getElementById("player1cardnum").innerHTML = player1cardoutput;
    document.getElementById("player1cardnum1").innerHTML = player1cardoutput;

    // Randomly card giving to player2 
    var player2card = Math.floor(Math.random() * 13 + 2);
     var player2cardoutput = "";
    if(player2card === 11) {
        player2cardoutput = "J"
    } else if(player2card === 12) {
        player2cardoutput = "Q";
    } else if(player2card === 13) {
        player2cardoutput = "K";
    } else if(player2card ===14) {
        player2cardoutput = "A";
    } else {
        player2cardoutput = player2card;
    }

    document.getElementById("player2cardnum").innerHTML = player2cardoutput;
    document.getElementById("player2cardnum1").innerHTML = player2cardoutput;
    

    var player2char = Math.floor(Math.random() * 4 + 1);

    switch(player2char) {
        case 1:
            player2char = "♥";
            document.getElementById("player2char").style.color = "red";
            document.getElementById("player2char1").style.color = "red";
            document.getElementById("player2bigchar").style.color = "red";
        break;

        case 2:
            player2char = "♠";
            document.getElementById("player2char").style.color = "black";
            document.getElementById("player2char1").style.color = "black";
            document.getElementById("player2bigchar").style.color = "black";
        break;

        case 3:
            player2char = "♦";
            document.getElementById("player2char").style.color = "red";
            document.getElementById("player2char1").style.color = "red";
            document.getElementById("player2bigchar").style.color = "red";
        break;
        
        case 4:
            player2char = "♣";
            document.getElementById("player2char").style.color = "black";
            document.getElementById("player2char1").style.color = "black";
            document.getElementById("player2bigchar").style.color = "black";
        break;
    }
    document.getElementById("player2char").innerHTML = player2char;
    document.getElementById("player2char1").innerHTML = player2char;
    document.getElementById("player2bigchar").innerHTML = player2char;

    // player1 chars for different card
    var player1char = Math.floor(Math.random() * 4 + 1);

    switch(player1char) {
        case 1:
            player1char = "♥";
            document.getElementById("player1char").style.color = "red";
            document.getElementById("player1char1").style.color = "red";
            document.getElementById("player1bigchar").style.color = "red";
        break;

        case 2:
            player1char = "♠";
            document.getElementById("player1char").style.color = "black";
            document.getElementById("player1char1").style.color = "black";
            document.getElementById("player1bigchar").style.color = "black";
        break;

        case 3:
            player1char = "♦";
            document.getElementById("player1char").style.color = "red";
            document.getElementById("player1char1").style.color = "red";
            document.getElementById("player1bigchar").style.color = "red";
        break;
        
        case 4:
            player1char = "♣";
            document.getElementById("player1char").style.color = "black";
            document.getElementById("player1char1").style.color = "black";
            document.getElementById("player1bigchar").style.color = "black";
        break;
    }
    document.getElementById("player1char").innerHTML = player1char;
    document.getElementById("player1char1").innerHTML = player1char;
    document.getElementById("player1bigchar").innerHTML = player1char;



    if(player1card === player2card) {
            
        document.getElementById("pointer").innerHTML = " WAR ";
    } else if(player1card > player2card) {
        player1score--;
        player2score++;
        document.getElementById("pointer").innerHTML = " PLAYER-1 WIN ";
    } else if(player2card > player1card) {
        player2score--;
        player1score++;
        document.getElementById("pointer").innerHTML = "PLAYER-2 WIN";
    }

    document.getElementById("player2score").innerHTML = player2score;
    document.getElementById("player1score").innerHTML = player1score;   

    if(player1score <=0)
    {
        player1score=0;
        window.alert("Player-1 win")
    }
    else if(player2score <=0)
    {
        player2score=0;
        window.alert("Player-2 win")
    }
}

