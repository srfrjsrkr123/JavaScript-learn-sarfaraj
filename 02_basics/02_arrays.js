const marvel_heros = ["Thor","IronMan", "SpiderMan"]
const dc_heros = ["Superman","Flash","Batman"]

// marvel_heros.push(dc_heros)

// const all_heros = marvel_heros.concat(dc_heros)        //concat operator to add two Arrays

// const all_new_heros = [...marvel_heros, ...dc_heros]      // spread operator to add two Arrays


// const another_array = [1,2,3,[4,5,6],[6,7,[4,5]]]

// const real_another_array = another_array.flat(Infinity)     // automatically spreds all sub arrays into one array

// console.log(real_another_array);


// for Data Scrapping

console.log(Array.isArray("Sarfaraj"))
console.log(Array.from("Sarfaraj"))
console.log(Array.from({name:"Sarfaraj"}))    // returns empty Array / needs to define from which an array should be made, keys or values.


let score1 = 100
let score2 = 200
let score3 = [300,400]

console.log(Array.of(score1,score2,score3));

//let spead the elements automatically

const Arr = Array.of(score1,score2,score3)
console.log(Arr.flat(Infinity));