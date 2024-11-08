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


// ****************** M e m o r y *****************
 
// Stack (Primitive), Heap (Non Primitive)

let myName = "kingo"
let anotherName = myName
anotherName = "bingo"

console.log(myName);
console.log(anotherName);

let user1 = {
    name: "kingo",
    age: 23
}

let user2 = user1
user2.age = 25

console.log(user1.age);
console.log(user2.age);