const name = "Sarfaraj"
const repoCount = 50

//console.log(name + repoCount + "Value");      outdated syntax

console.log(`Hello My name is ${name} and My repo count is ${repoCount}`);     /* This is modern */


const gameName = new String ('Sarfaraj-Sarkar')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());  // to convert to upper case
console.log(gameName.charAt(2));     // to find character at position
console.log(gameName.indexOf("r"));     // to find position of character

const newString = gameName.substring(5,12)    
// substring method    (accepts only positive index)
console.log(newString);

const anotherString = gameName.slice(2,5)     
// slicing method without effecting main string ( accepts both positive and negative index)
console.log(anotherString);

const newStringOne = "   Sarfaraj    "
console.log(newStringOne);
console.log(newStringOne.trim());    // trim removes spaces 

const url = "https://sarfaraj.com/sarfaraj%20sarkar"  
console.log(url.replace('%20','-'))     // replace 
console.log(url.includes('sarkar'))     // include 

console.log(gameName.split('-'))     // splits based on - .







