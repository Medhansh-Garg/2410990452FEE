const random=Math.floor(Math.random()*10)+1;
let i=0;

while(i<3){
    let guess=parseInt(prompt("Guess a number between 1 and 10:"));
    if(guess<random){
        console.log("Too low! try again.");
    }
    else if(guess>random){
        console.log("Too high!try again.");
    }
    else{
        console.log("Congratulations! You guessed the number.");
        break;
    }
    i++;
}
