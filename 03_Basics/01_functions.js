function sayMyName(){
    console.log("k");
    console.log("i");
    console.log("n");
    console.log("g");
    console.log("o");
}

// sayMyName()   // function call.  sayMyName -> reference & sayMyName() -> execution

// function addTwoNumbers(num1, num2) {     // (num1, num2) -> parameters
//     console.log(num1 + num2);
// }

// addTwoNumbers(3, 4)   // (3, 4) -> arguments

function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
    // return num1 + num2
}

const result = addTwoNumbers(5, 6)
console.log("Result: ",result);

// after return func, nothing will print.
// before return func, everything will print.

function loginUserMessage(username){
    if (username === undefined) {
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Kingo"));
console.log(loginUserMessage());

// OR
function loginUserMessage2(username2 = "Kingo"){   // username2 = "Kingo" ---> default values
    if (username2 === undefined) {
        console.log("Please enter a username");
        return    
    }
    return `${username2} just logged in`
}
console.log(loginUserMessage2("Bingo"));


function calculateCartPrice(val1, val2,...number){     // ... -> rest operator
    return number
}

console.log(calculateCartPrice(100, 200, 300, 500, 1000));




// objects pass in function
const user = {
    name: "Sajib",
    price: 299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}

handleObject(user)
// handleObject(
//     {
//         name: "Sajib",
//         price: 299
//     }
// )


// arrays pass in function
const myArr = [10, 20, 30, 40, 50]

function handleArray(getArray){
    return getArray[4]
}

console.log(handleArray(myArr));
// console.log(handleArray([10, 20, 30, 40, 50]));
