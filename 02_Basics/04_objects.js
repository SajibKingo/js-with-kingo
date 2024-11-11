// Singleton (through construction)

// const fbUser = new Object()  // object declaration
const fbUser = {}        // object declaration

fbUser.id = "123abc"
fbUser.name = "Kingo"
fbUser.isLoggedIn = false

// console.log(fbUser);

// object within object
const regularUser = {
    userEmail: "love@gmail.com",
    userName: {
        fullname: {
            firstname: "Sajib",
            lastname: "Saha"
        }
    }
}

// console.log(regularUser.userName.fullname.firstname);

// Combining two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "f", 6: "e"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)  // target -> {}... obj1,  obj2 -> source
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

// when values come from database
const users = [
    {
        id: 123,
        email: "s@gmail.com"
    },
    { }, { }
]
// console.log(users[0].id);
// console.log(users[1]);

console.log(Object.keys(fbUser));  // output comes with datatype(array)
console.log(Object.values(fbUser));
console.log(Object.entries(fbUser));

console.log(fbUser.hasOwnProperty("pass"));



// objects last part
const course = {
    courseName: "JS with Kingo",
    price: 999,
    courseInstrutor: "kingo"
}

// console.log(course.courseInstrutor);

const {courseInstrutor} = course  // extract values from object (Destructuring assignment)
console.log(courseInstrutor);

// const {courseInstrutor: inst} = course  // we can also give a short name
// console.log(inst);

// JSON talk
// {
//     "name": "king",
//     "country": BD
//     "age": 23
// }

// [
//     {},
//     {},
//     {}
// ]