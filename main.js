"use strict";
// Question 139: List three reserved words in JavaScript and create a valid use case for each.
Object.defineProperty(exports, "__esModule", { value: true });
let count = 5;
if (count > 0) {
    console.log("Count is greater than 0.");
}
function add(a, b) {
    return a + b;
}
console.log("\n");
// Question 140: Explain the error that occurs when trying to use a reserved word as a variable name.
// let if = 5;
console.log("Using a reserved word as a variable name causes a syntax error in JavaScript.");
console.log("\n");
// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.
async function fetchData() {
    const data = await fetchSomething();
    console.log(data);
}
console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
