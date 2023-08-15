function square(x: number): number {
    return x * x;
}

function randomFunc(): void {
    console.log("this is a random func");
}

export default square;
export {
    square,
    randomFunc
}