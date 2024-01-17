// dates

let myDate = new Date()
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());


// let myCreatedDate = new Date(2023,0,23)  // months starts from 0 in JS, when using single digit.
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023,0,23,5,3)  // 
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14")  // months starts from 1 in JS, when using double digit.
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("01-14-2023")  // months starts from 1 in JS, when using double digit.
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023")  

let myTimeStamp = Date.now()

// console.log(myTimeStamp);       // Miliseconds : from 1/1/1970  to now
// console.log(myCreatedDate.getTime());    // Miliseconds : from 01-14-2023  to now

// console.log(Math.floor(Date.now()/1000));    // comparable Miliseconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getTime());

// newDate.toLocaleString('default',{
//     weekday: "long",
//     timeZone: "timeZone"
// })
