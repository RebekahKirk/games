//Set your variables
let newGame = document.getElementById(`newGame`);
let currentScore = document.getElementById('currentScore');
let button = document.getElementById(`roll`);

let score = 0;
let moves = 0;

let dice = document.getElementById(`diceImg`);

//Main code
newGame.addEventListener("click", ()=> {
    score = 0; //score starts @ 0
    moves = 0; //moves start @ 0
    currentScore.innerHTML = `0`; //current score
})

button.addEventListener("click", ()=> {    
    moves++; //Everytime you click the moves plus 1
    let randomNum = Math.ceil(Math.random() * 6); // produce a random number between 1 & 6
    dice.src=`img/dice${randomNum}.png`;
    currentScore.innerHTML = score += randomNum; //equation for adding the random number to the score
    check (randomNum);
})
const check = (randomNum) => {
    if (score >= 20){
        youWin();
    } else if (randomNum == 1){
        youLose();
    }
}
const youWin = () =>{
    currentScore.innerHTML="You Win!"
};
const youLose = () =>{
    currentScore.innerHTML="You Lose!"
}