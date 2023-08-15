import net from "node:net";
import readline from "node:readline";

const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ""
});

const client: net.Socket = net.connect({ port: 3500 }, (): void => {
    console.log("Connection established");
    client.write("Hello from client");
});

client.on("data", (data: Buffer): void => {
    console.log("Msg from server:", data.toString());
});

client.on("end", (): void => {
    console.log("Disconnected from server");
});

// rl.prompt();
rl.on("line", (line: string) => {
    client.write(line);
    rl.prompt();
});