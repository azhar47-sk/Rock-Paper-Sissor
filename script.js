let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")
let compMsg = document.querySelector("#comp-msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    msg.innerText= "Game was Draw";
    msg.style.background = "#081b31";
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText= "You Win";
        msg.style.background = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText= "You Lose";
        msg.style.background = "red";
    }
}

const showCompMsg = (genCompChoice) => {
    compMsg.innerText = `Computer Choice is ${genCompChoice}`; 
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
       drawGame();
    }

    else {
        let userWin = true ;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true ;
        } else {
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin);
    }
    showCompMsg(compChoice);
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
