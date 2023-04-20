const win = 0
const tie = 0
const loss = 0

const main = document.querySelector('h2')
let computerChoice= Math.round(Math.random()*3)
if (computerChoice === 0){
    computerChoice = "rock"
} else if(computerChoice === 1){
    computerChoice = "paper"
} else if (computerChoice === 2) {
    computerChoice = "scissors"
}

const userChoice = document.getElementById("rock")

userChoice.addEventListener('click', yourChoice)
function yourChoice(){
    if (userChoice=== "rock" && computerChoice=== "scissors"){
         console.log("win++")
}else if (userChoice==="rock" && computerChoice=== "paper"){
    console.log("loss++")
} else  {
    
}
}

const usersChoice = document.getElementById("paper")
usersChoice.addEventListener('click', yourChoice2)
function yourChoice2(){
    if (usersChoice === "paper" && computerChoice=== "rock") {
        console.log("win++")
    } else if (usersChoice=== "paper" && computerChoice==="scissors"){
        console.log("loss++")
    } else {
        
    }
} 

const useChoice = document.getElementById("scissors")
useChoice.addEventListener('click', yourChoice3)
function yourChoice3(){
    if (useChoice=== "scissors" && computerChoice==="paper"){
        console.log("win++")
    } else if (useChoice=== "scissors" && computerChoice==="rock") {
     console.log("loss++")
    } else {
        
    }
        
}