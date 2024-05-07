// Immediately Invoked Function Expressions (IIFE) - to svoid global level scope pollution


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


( () => {
    console.log(`DB CONNECTED TWO`);
} )();