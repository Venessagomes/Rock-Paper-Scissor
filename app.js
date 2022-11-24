const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const buttonsDisplay = document.querySelectorAll("button")

let userChoice
let computerChoice
let result 

buttonsDisplay.forEach(buttonDisplay => buttonDisplay.addEventListener('click', (e) =>{
userChoice = e.target.id
userChoiceDisplay.innerHTML = userChoice
generateComputerChoice()
generateResult()
}))


function generateComputerChoice(){
    const randNum = Math.floor(Math.random()*3 ) + 1
if (randNum === 1){
    computerChoice = "rock"
}
if (randNum === 2){
    computerChoice = "paper"
}
if (randNum === 3){
    computerChoice = "scissor"
}
computerChoiceDisplay.innerHTML = computerChoice
}


function generateResult(){
    if ( computerChoice === userChoice){
        result = "Its a draw!"
    }
    if ( computerChoice === "rock" && userChoice === "scissor" ){
        result = "Computer won!"
    }
    if ( computerChoice === "paper" && userChoice === "rock"){
        result = "Computer won!"
    }
    if ( computerChoice === "scissor" && userChoice === "paper"){
        result = "Computer won!"
    }
    if (computerChoice === "scissor" && userChoice === "rock"){
        result = "You won!"
    }
    if (computerChoice === "rock" && userChoice === "paper"){
        result = "You won!"
    }
    if (computerChoice === "paper" && userChoice === "scissor" ){
        result = "You won!"
    }
    resultDisplay.innerHTML = result
}