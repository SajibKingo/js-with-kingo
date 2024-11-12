// this -> using for current context refer

const user = {
    username: "kingo",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "bingo"
user.welcomeMessage()

console.log(this);


// function chai () {
//     let username = "arun"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username = "arun"
//     console.log(this.username);
// }
// chai()


// arrow function
const chai = () => {
    let username = "arun"
    console.log(this.username);
}
chai()

/*
arrow function syntax:
() => {}
*/

// const addTwo = (n1, n2) => {
//     return n1 + n2
// }

// const addTwo = (n1, n2) => n1 + n2   // implicit return
// OR
// const addTwo = (n1, n2) => (n1 + n2 )  

const addTwo = (n1, n2) => ({username: "sk"})  // object return

console.log(addTwo(3, 4));
