import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    //The maximum and minimum is inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let tries = 3;
const randomNumber = getRandomIntInclusive(1, 10);

function game(tries: number, randomNumber: number, guess: number): void {
    if (tries > 0) {
        if (guess === randomNumber) {
            console.log("WINNER");
            process.exit();
        } else if (guess < randomNumber) {
            console.log("TOO LOW");
        } else if (guess > randomNumber) {
            console.log("TOO HIGH");
        }
    } else {
        if (guess === randomNumber)
            console.log("WINNER");
        else 
            console.log("YOU LOOSE! THE NUMBE WAS:", randomNumber);

        process.exit();
    }
}

rl.setPrompt("Guess the number! (1-10):");
rl.prompt();
rl.on("line", (ans: string) => {
    tries--;
    game(tries, randomNumber, parseInt(ans));
    rl.prompt();
});