function randomChoice(){
    const choice = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()* choice.length)   
    return choice[randomNumber];
}

function roundsPlayed(userChoice, computerChoice){
    if (userChoice===computerChoice){
        alert ('This round was a tie!');
            return 'Tie';
    }else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        alert ('You won this round!');
            return 'Win';
      }else{
        alert('You lost this round!');
            return 'Lose';
      }

    

}

function game(){
    let userWins = 0;
    let computerWins =  0;
    let ties = 0;

    const rounds = parseInt(prompt('How many rounds will you play?'));

    for(let i = 0;i < rounds; i++){
        const userChoice = prompt('Enter your choice(rock, paper, or scissors)');
        const computerChoice = randomChoice();

        console.log('Round' + i + 1);
        console.log('User chose' + userChoice);
        console.log('computer chose' + computerChoice);

        const result = roundsPlayed(userChoice, computerChoice);

        if (result === 'Win') {
            userWins++;
            console.log('You win this round!');
          } else if (result === 'Lose') {
            computerWins++;
            console.log('Computer wins this round!');
          } else {
            ties++;
            console.log('It\'s a tie!');
          }


    }
console.log(`Game Over!`);
  alert('You won ' + userWins + ' rounds');
 alert('Computer won ' + computerWins + ' rounds');
alert('Tied ' + ties + ' rounds');

}

game();

