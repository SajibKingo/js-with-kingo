// Primitive

    // 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const mark = 95.8
const isLoggedIn = false
let outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 781638351819n


// Reference (Non Primitive)

    // Array, Objects, Functuins

const myArray = ["sajib", "arun", "kingo"];

let myObj = {
        name: "kingo",
        age: 22, 
    }

const myFunction = function(){
    console.log("Hello World");  
}

console.log(typeof myArray);
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof outsideTemp);
console.log(typeof userEmail);