
//********************/
// Primitive - call by value 7 categories 
//String
//Number
//Boolean
//null - empty 
//undefined
//Symbol - to make value unique 
// Big Int - Large no.

//JS - Dynamically typed language 

const test = 10
const temp = 101.3
const newCheck = false
const userEmail = null // typeof is always object
let userTest; // undefined 

const symbolValue = Symbol(10)
const symbolValue2 = Symbol(10)

// console.log(symbolValue === symbolValue2);

const bigNumber = 27848343427242342342n

// console.log(typeof bigNumber);


//********************/
// no primitive  - reference type 
// Array - type object 
// Objects - type object
//Functions = type object function


const heeros = ["Sasdu", "fsdfsdjf", "sfsdfsd"];

let obj = {
    "name" : 'Shrikant',
    "id": 10
};

// console.log(typeof obj);


 function testFunc () {
    console.log("Hellon test");
}

// console.log(testFunc);


//Stack - primitive - value type

let name1 = "Shrikant"

let name2 = name1

name2 = "SKKK"

// console.log(name1);
// console.log(name2);

//Heap - non primitive - Reference type

let userOne = {
    email : "user1@gmail.com",
    upi : "tess"
}

let userTwo = userOne

userTwo.email = "user2@gmail.com"

console.table(userOne.email);
