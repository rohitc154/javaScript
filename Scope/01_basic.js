if (true) {
    let a = 10;
    const b = 20;
    var c = 30; // The value of c is accessible outside the scope which creates ambiguity in code
}
// console.log(a);
// console.log(b);
// console.log(c);

// -------------------------------------------------------
// Nested Scope

function one() {
    const username = "Rohit";

    function two() {
        const website = "Youtube";
        console.log(username)
    }
    // console.log(website);
    two();
}
// one();

// -------------------------------------------------------

console.log(addone(56)); // Calling function is right
function addone(num) {
    return num + 1;
}

console.log(addtwo(75)) // when we assign value of function to a variable, then we cannot call the function before declaration.
const addtwo = function (num) {
    return num + 2;
}