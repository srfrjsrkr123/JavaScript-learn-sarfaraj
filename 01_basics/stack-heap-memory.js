
// Stack - (Primitive)  ,  Heap - (Non-Primitive)

let myYoutubename = "learncodeonline"

let anothername = myYoutubename
anothername = "chaiwithcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "sarfaraj@gmail.com" ,
    upi : "srfrj@ybl"
}

/*
let userTwo = {

}
*/

let userTwo = userOne

userTwo.email = "srfrj@google.com"

console.log(userOne.email);
console.log(userTwo.email);