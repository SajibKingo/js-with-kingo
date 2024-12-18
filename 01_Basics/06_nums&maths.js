const score = 300
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const mark = 123.6789
console.log(mark.toPrecision(1));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

// ************* M a t h s **************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.4));
console.log(Math.ceil(8.88));
console.log(Math.floor(8.88));
console.log(Math.min(5.82, 22, 15 ,4.5));
console.log(Math.max(5.82, 22, 15 ,4.5));

console.log(Math.random());  // provide values 0 to 1
console.log((Math.random()*10) + 1);  // provide values 1 to 9
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor((Math.random() * (max - min + 1)) + min));
