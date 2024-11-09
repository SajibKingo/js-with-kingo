// array

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[0]);

const heros = ["thor", "spiderman", "superman", "hulk"]

const myArr2 = new Array(0, 1, 2, 3, 4, 5)
// console.log(myArr2[1]);

// Array methods

myArr.push(6)  // add new element
myArr.push(7)
myArr.pop()  // remove the last element from the array

myArr.unshift(7)  // add new element at the first
myArr.shift()  // remove the element from the first

// console.log(myArr.includes(12));
// console.log(myArr.indexOf(4));

console.log(myArr);

const newArr = myArr.join()
console.log(newArr);

// slice, splice

console.log("A ",myArr2); // ---> original array

const myn1 = myArr2.slice(1,3)
console.log(myn1);
console.log("B ",myArr2);

const myn2 = myArr2.splice(1,3)
console.log(myn2);
console.log("C ",myArr2);


