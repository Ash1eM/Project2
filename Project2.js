const win = 0
const tie = 0
const loss = 0
const main = document.querySelector('main')
for(let i = 0; i < 1; i++) {
let computerChoice= Math.round(Math.random()*3)
if (computerChoice === 0){
    computerChoice = "rock"
} else if(computerChoice === 1){
    computerChoice = "paper"
} else if (computerChoice === 2) {
    computerChoice = "scissors"
}

const first = document.getElementById("rock")
first.addEventListener('click', firstButton)

function firstButton(){
    const userChoice= "rock"
    if (userChoice===computerChoice) {
         alert("You tied!");
    } else if (userChoice=== "rock" && computerChoice=== "scissors"){
       alert("You won!");
    } else if (userChoice==="rock" && computerChoice==="paper"){
        alert("You lost!");
    }
}    
    

const second = document.getElementById("paper")
second.addEventListener('click', secButton)

function secButton(){
    const usersChoice= "paper"
    if (usersChoice==="paper" && computerChoice==="scissors") {
        alert("You lost!");
    } else if (usersChoice===computerChoice){
        alert("You tied!");
    } else if (usersChoice==="paper" && computerChoice==="rock"){
        alert("You won!");
    }
        }

const third = document.getElementById("scissors")
third.addEventListener('click', thirdButton)

function thirdButton(){
    const useChoice= "scissors"
    if (useChoice==="scissor" && computerChoice==="paper") {
        alert("You won!");
    } else if (useChoice==="scissors" && computerChoice==="rock"){
        alert("You lost!");
    } else {
        
    }
       
}

}






