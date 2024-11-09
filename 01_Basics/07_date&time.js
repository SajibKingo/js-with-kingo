// Daates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

let myCreatedDate = new Date(2012, 0, 6, 5, 8, 10) // In JS, month starts from 0 (January)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date("2024-01-14")
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("9-11-2024")
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());  // day starts from 1 (monday)
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());

// `${newDate.getDate()} and the time is`  ---> string interpolation

newDate.toLocaleString('default', {
    weekday: "long"                  // use "control-space" for properties
})
