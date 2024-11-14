// if

// const isUserLoggedIn = true

// if (3 === "3") {
//     console.log("executed");  
// } else {
//     console.log("not executed");
// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// Implicit Scope:
// const balance = 1000
// if (balance > 500) console.log("test"), console.log("test2");

// Nested:
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 500");
// } else if ( balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}


// Nullish Coalescing Operator (??): null & undefined

let val1;
// val1 = 15 ?? 34
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator:
// condition ? true : false

const shirtPrice = 1000
shirtPrice > 1000 ? console.log("costly") : console.log("cost effective")