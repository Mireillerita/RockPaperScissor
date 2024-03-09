const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();


    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'||userInput === 'bomb') {
        return userInput;
      } else {
        console.log('Error!');
      }
};

console.log(getUserChoice('Paper')); 
console.log(getUserChoice('fork'));



function getComputerChoice(){
    
    randomNumber=  Math.floor(Math.random() * 3); 

   switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
      case 2:
        return 'scissors'

        default:
            return 'undefined' 
}

}
let randomNumber=1;
console.log(getComputerChoice());

function determineWinner(userChoice,computerChoice ){
    if(userChoice === 'bomb'){
        return 'you win the game'
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }
      if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }

      if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }}
      console.log(determineWinner('paper', 'scissors')); 
console.log(determineWinner('paper', 'paper'));
console.log(determineWinner('paper', 'rock')); 

function playGame(){
    const userChoice = getUserChoice('scissors'); 
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
    // determineWinner(userChoice,computerChoice )
}
playGame();




