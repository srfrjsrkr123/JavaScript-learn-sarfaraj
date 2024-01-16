let score= "sarfaraj"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => Nan
// true => 1 
// false => false


let isLoggedIn = "33"

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);
console.log(typeof isLoggedIn);

// 1=> true
// 0=> false
// " " => false
// "sarfaraj" => true


// ************************ Operations **********************//

/*
let value=3
let negValue = -value
console.log(negValue);

console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);
console.log(2**3);
console.log(2%3);
*/

let str1 = "Hello"
let str2 = "Sarfaraj"

let str3 = str1 + " " + str2
console.log(str3)


console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")

console.log((3+4)*5%3)

console.log(+true);

//Prefix and Postfix Operator
let gameCounter = 100
++gameCounter;
gameCounter++;
console.log(gameCounter);


//Postfix  and Prefix Increament Example
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"



