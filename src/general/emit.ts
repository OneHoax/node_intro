import EventEmitter from "events";

const myEmitter: EventEmitter = new EventEmitter();
const someEvent: string = "some event";

function someFunction(): void {
    console.log("something has happened");
}

myEmitter.on(someEvent, someFunction);
myEmitter.emit(someEvent);
// The string "error" is an event that is treated in a special way in JS
// it actually refers to Error objects and when we pass it
// in as an arg to emit, node will tell you there is an unhandled error
// myEmitter.emit("error");

const myEmitter2: EventEmitter = new EventEmitter();

function handleError(errorCode: number): void {
    console.log("ERROR: code:", errorCode);
}

myEmitter2.on("error", handleError);
myEmitter2.emit("error", 401);

// #################### Challenge ####################
const challengeEmitter: EventEmitter = new EventEmitter();

challengeEmitter.on("order", (food) => {
    console.log("Order placed for", food);
});

challengeEmitter.on("doorbell", () => {
    console.log("RING RING!");
});

challengeEmitter.on("payment", (food) => {
    console.log("enjoy your", food);
});

challengeEmitter.emit("order", "pizza");
challengeEmitter.emit("doorbell");
challengeEmitter.emit("payment", "pizza");
// nothing happens bc no listener attach to event "some other event"
challengeEmitter.emit("some other event");