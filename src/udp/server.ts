import dgram from "node:dgram";
import readline from "node:readline";

const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ""
});

let clinetSocket: number = 0;
const port: number = 3500;
const server: dgram.Socket = dgram.createSocket("udp4");

server.on("message", (msg: Buffer, rinfo: dgram.RemoteInfo): void => {
    console.log(`Msg from client at port: ${rinfo.port}: ${msg}`);
    clinetSocket = rinfo.port;
});

server.on("listening", (): void => {
    console.log("Server is listening on port:", port);
});

server.on("close", (err: boolean): void => {
    if (err) 
        console.log("Client disconnected due to error");
    else
        console.log("Client disconnected");

    server.close();
});

server.bind(port);

// rl.prompt();
rl.on("line", (line: string): void => {
    server.send(line, clinetSocket, "localhost");
    rl.prompt();
});