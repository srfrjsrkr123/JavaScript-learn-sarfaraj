const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

const anotherNumber = 1.23
console.log(anotherNumber.toPrecision(4));


const hundred = 1000000
console.log(hundred.toLocaleString())    // US Standards
console.log(hundred.toLocaleString('en-IN'))    // INDIAN Standards





// *********************** Maths ******************************//

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.59));
console.log(Math.ceil(4.59)); 
console.log(Math.floor(4.59)); 
console.log(Math.min(1,2,3,4,5,6)); 
console.log(Math.max(1,2,3,4,5,6)); 

console.log(Math.random());   // returns valuess between 0 and 1 .
console.log((Math.random()*10)+1);   // returns greater than 1 .
console.log(Math.floor(Math.random()*10)+1);   // returns floor value.


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);   // returns random number between 10 and 12 .




