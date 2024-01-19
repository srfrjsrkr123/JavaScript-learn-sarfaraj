//Array 

const myArr = [0,1,2,3,4,5]

// const myHeros=["Shaktiman", "nagraj"]

// const myArr2= new Array(1,2,3,4)
// console.log(myArr[0]);      // 0 based indexing 


// Array Methods

// myArr.push(6)    // inserting elment
// myArr.pop()    // removes last array element

// myArr.unshift(9)  // inserts 9 atthe start of the array

// myArr.shift()  // removes the first element of Array

// console.log(myArr.includes(9));  // checks whether 9 is in the Array or not

// console.log(myArr.indexOf(3));  


// const newArr = myArr.join()   
// //creates and returns a new string by concatenating all of the elements in this array.
// console.log(newArr);
// console.log(typeof newArr);

// console.log(myArr);
// console.log(typeof myArr);




// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,4)      // returns piece of the array + didn't take value of the range (last element).
console.log(myn1);
console.log("B", myArr);          // slice() method not effects the main Array.

const myn2 = myArr.splice(1,4)    // returns piece of the Array + takes value of the range (last element).
console.log(myn2);
console.log("C", myArr);          // splice() method changes/manupilates the main array.
