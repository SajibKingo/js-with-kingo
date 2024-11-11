// var c = 300
let a = 300  // global scope

if(true){
    let a = 10   // local or block scope
    const b = 20
    console.log("Inner: ",a);
    
}

console.log("Outer: ",a);
// console.log(b);


function one(){
    const username = "kingo"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()
// In nested function, child func can access parent's func.

if (true) {
    const myName = "arun"
    if (myName === "arun") {
        const socialMedia = " instagram" 
        console.log(myName + socialMedia);
    }
    // console.log(socialMedia);
    
}
// console.log(myName);

// +++++++++++++ Interesting +++++++++++++

function addOne(num){
    return num + 1
}
addOne(5)

const addTwo = function(num){
    return num + 2
}
addTwo(5)