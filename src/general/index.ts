import readLine from "node:readline";

console.log("Hey there, ", process.argv[2]);

process.argv.forEach((val, index): void => {
    console.log(`${index}: ${val}`)
})

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

let query: string = "What is your name\n";

rl.question(query, (answer: string) => {
    console.log(`Hello ${answer}!`);

    rl.close();
});

console.info("This is some info");