import dgram from "node:dgram";
import readline from "node:readline";

const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ""
});

const client: dgram.Socket = dgram.createSocket("udp4");

client.send("Hello from client", 3500, "localhost",  (err): void => {
    if (err)
        console.error(err);

    console.log("Msg sent to server");
});

client.on("message", (data: Buffer): void => {
    console.log("Msg from server:", data.toString());
});

client.on("close", (): void => {
    console.log("Disconnected from server");
});

// rl.prompt();
rl.on("line", (line: string): void => {
    client.send(line, 3500, "localhost");
    rl.prompt();
});