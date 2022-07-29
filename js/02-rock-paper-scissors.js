function userChoice() {
    let userChoice = prompt('Please enter your choice: Rock /Paper /Scissors')
}

function computerChoice() {
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
	    computerChoice = "Rock";
    } else if(computerChoice <= 0.67) {
	    computerChoice = "Paper";
    } else {
	    computerChoice = "Scissors";
    }
    return computerChoice    
}

function Compare(choice1, choice2) {
        let winner = ""
        let strMessage = ""
        if(choice1===choice2){
            return "The result is a tie!";
        }else {
            switch(choice1) {
                case "Rock":
                    if(choice2==="Scissors"){
                        winner = "User"
                        strMessage = choice1
                    }
                    else if(choice2==="Paper"){
                        winner = "Computer"
                        strMessage = choice2
                    }
                  break;
                case "Paper":
                    if(choice2==="Scissors"){
                        winner = "Computer"
                        strMessage = choice2
                    }
                    else if(choice2==="Rock"){
                        winner = "User"
                        strMessage = choice1
                    }
                  break;
                case "Scissors":
                    if(choice2==="Paper"){
                        winner = "User"
                        strMessage = choice1
                    }
                    else if(choice2==="Rock"){
                        winner = "Computer"
                        strMessage = choice2
                    }
                  break;
                default:
                  alert("That is not an option")
              }
        }
        return `The winner is ${winner}. ${strMessage} wins.`
}

function init() {    
    let playGame = 'y'
    do {
        let userChoice = userChoice()
        let computerChoice =computerChoice()
        Compare(userChoice, computerChoice)
        playGame = prompt('Play again? (y/n')
    } while (playGame === 'y')
    alert('Thanks for playing the game!')
}

init()