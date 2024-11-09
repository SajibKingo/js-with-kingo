const marvel_heros = ["thor", "ironman", "hulk"]
const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros]  // speard operator
console.log(allNewHeros);

const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const arr2 = arr.flat(Infinity)
console.log(arr2);

console.log(Array.isArray("kingo"));
console.log(Array.from("kingo"));
console.log(Array.from({name: "kingo"}));  // Interesting

let mark1 = 100
let mark2 = 200
let mark3 = 300

console.log(Array.of(mark1, mark2, mark3));
