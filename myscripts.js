function getComputerChoice() {
    const rps = ['rock', 'paper', 'scissors'];

    const compChoice = Math.floor(Math.random() * rps.length);
    console.log(rps[compChoice]);
}

getComputerChoice();