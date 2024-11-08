const name = "Kingo"
const repoCount = 3

// console.log(name + repoCount + " value");

// string interpolation :
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // ``-> backtick / backqoute

const gameName = new String('hitesh-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const str1 = gameName.substring(0, 4)
console.log(str1);

const str2 = gameName.slice(-8, -4)
console.log(str2);

const str3 = "     superman      "
console.log(str3);
console.log(str3.trim());

const url = "https://kingo.com/kingo%20"
console.log(url.replace('%20', '/'));
console.log(url.includes("saha"));

console.log(gameName.split('-'));

