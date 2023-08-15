import func from "./square"; // uses the default export
import * as imports from "./square";
import { square, randomFunc } from "./square";

console.log(func(5));

console.log(square(2));
randomFunc();

console.log(imports.square(3));
imports.randomFunc();