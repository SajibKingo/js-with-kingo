let score = "kingo"


console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)  // coversion
console.log(typeof valueInNumber);
console.log(valueInNumber);  // NaN => Not a Number

// "45" => 45
// "45abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "kingo" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// *********** Operations ************

let value = 3
let negValue = -value 
console.log(negValue);

// console.log(5 + 5)
// console.log(5 - 5)
// console.log(5 * 5)
// console.log(5 / 4)
// console.log(2 ** 5)
// console.log(2 % 5)

let str1 = "Hello"
let str2 = " Kingo"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 3)
console.log(1 + 2 + "3")
 
console.log((3 + 4) * 2 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
console.log(gameCounter);

++gameCounter
console.log(gameCounter);