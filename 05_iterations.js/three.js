// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4,5]
for (const num of arr) {
    // console.log(num);    
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);  
}

// Maps
// Map contains unique values

const map = new Map()
map.set('In',"India")
map.set('Bd',"Bangladesh")
map.set('Fr',"France")
map.set('Bd',"Bangladesh")

// console.log(map);

for (const [key, value] of map) {
   // console.log(key, ":", value);  
}

const myObj = {
    game1: "PES",
    game2: "PUBG"
}

// for (const [key, value] of myObj) {   // doesn't execute
//     console.log(key, ":", value);   
// }