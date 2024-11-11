// Objects
// singleton
    // Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Kingo", "full name": "Kingo Bingo",
    [mySym]: "mykey1",  // to use as symbol, use []...otherwise it considers as string
    age: 23,
    location: "Dhaka",
    email: "kingo@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["sunday", "tuesday", "friday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "bingo@yahoo.com"

// Object.freeze(jsUser)  // no change after freeze
jsUser.email = "mingo@gmail.com"
console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello fam!");
}

jsUser.greetingTwo = function(){
    console.log(`Hello fam!,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
