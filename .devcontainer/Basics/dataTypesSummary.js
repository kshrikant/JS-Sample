
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

// IMPORTANT
/*
the == operator compares the two variables after converting the string "10" to a number, resulting in true. 
In the second console. log statement, the === operator compares the two variables without converting them, resulting in false.
*/

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

console.log(testFunc);
