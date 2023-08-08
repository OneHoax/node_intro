import readLine from "node:readline";

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

let query: string = "What is your name\n";

rl.question(query, (answer: string) => {
    console.log(`Hello ${answer}!`);

    rl.close();
});