// Immediately Invoked Function Expressions (IIFE) - to svoid global level scope pollution

//named iife
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//unamed iife
( () => {
    console.log(`DB CONNECTED TWO`);
} )();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Shri')