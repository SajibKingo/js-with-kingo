console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1)
console.log("02" > 1)

console.log(null > 0)
console.log(null == 0)
console.log(null < 0)
console.log(null >= 0)
console.log(null <= 0)
/* 
The reason is that an equality check == and comparisions > < >= <= work differently.
Comparisons convert null to a number, treating it as 0. That's why null >= 0 or
null <= 0 is true and others are false.
*/

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined < 0)

// ===  ---> The strict equality
console.log("2" === 2);