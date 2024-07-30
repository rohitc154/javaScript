<<<<<<< HEAD
// Immediately Invoked Function Expression, There may be problem due to global scope, and to remove the pollution of global scope we use IIFE function.
// To make IIFE function wrap the function definitation in parentheis()
// we use two () one for definitation and other for execution, ()()
// IIFE function only know to invoke immediately, but it doesn't know where to terminate, so use of ';' is must in IIFE function

(function chai() {
    // named IIFE
    console.log('DB Connected!');
})();

((name) => {
    //Unnamed IIFE
    console.log(`Second DB Connected!, ${name}`)
=======
// Immediately Invoked Function Expression, There may be problem due to global scope, and to remove the pollution of global scope we use IIFE function.
// To make IIFE function wrap the function definitation in parentheis()
// we use two () one for definitation and other for execution, ()()
// IIFE function only know to invoke immediately, but it doesn't know where to terminate, so use of ';' is must in IIFE function

(function chai() {
    // named IIFE
    console.log('DB Connected!');
})();

((name) => {
    //Unnamed IIFE
    console.log(`Second DB Connected!, ${name}`)
>>>>>>> origin/master
})("Rohit");