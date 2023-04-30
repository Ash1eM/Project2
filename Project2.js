let win = 0
let tie = 0
let loss = 0
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
       document.getElementById("tie").textContent="Tie:" + tie++
    } else if (userChoice=== "rock" && computerChoice=== "scissors"){
        document.getElementById("win").textContent="Win:" + win++
    } else if (userChoice==="rock" && computerChoice==="paper"){
        document.getElementById("loss").textContent="Loss:" + loss++
    }
}    
    

const second = document.getElementById("paper")
second.addEventListener('click', secButton)

function secButton(){
    const usersChoice= "paper"
    if (usersChoice==="paper" && computerChoice==="scissors") {
        document.getElementById("loss").textContent="Loss:" +loss++
    } else if (usersChoice===computerChoice){
        document.getElementById("tie").textContent="Tie:" + tie++
    } else if (usersChoice==="paper" && computerChoice==="rock"){
        document.getElementById("win").textContent="Win:" + win++
    }
        }

const third = document.getElementById("scissors")
third.addEventListener('click', thirdButton)

function thirdButton(){
    const useChoice= "scissors"
    if (useChoice==="scissors" && computerChoice==="paper") {
        document.getElementById("win").textContent= "Win:" +win++
    } else if (useChoice==="scissors" && computerChoice==="rock"){
        document.getElementById("loss").textContent= "Loss:"+loss++
    } else {
        document.getElementById("tie").textContent= "Tie:" +tie++
    }
       
}
}






