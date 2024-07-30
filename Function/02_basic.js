<<<<<<< HEAD
function calculatePrice(...num1) { // Using of rest or spread operator '...' to pass unknown number of arguments. It returns an array.
    return num1;
}
function calculatePrice(val1, val2, ...num1) {
    // console.log(`${val1}, ${val2}`);
    return num1;
}
// console.log(calculatePrice(6, 45, 12, 23, 49, 152));

// -------------------------------------------------------

//  Passing object to a function

const obj1 = {
    name: "Rohit",
    class: "BCA",
    Roll: 48
};
function handleObject(anyObj) {
    console.log(`Name is : ${anyObj.name}, Roll is  ${anyObj.Roll}`);
}
// handleObject(obj1);

//We can also directly pass object as parameter
// handleObject({
//     name: "Rohit",
//     Roll: 50
// })

// -------------------------------------------------------
//Passing array as an argument

let arr = [200, 300, 400];
function myFunc(getArr) {
    return getArr[1];
}
console.log(arr);

// Directly passing array to a function
=======
function calculatePrice(...num1) { // Using of rest or spread operator '...' to pass unknown number of arguments. It returns an array.
    return num1;
}
function calculatePrice(val1, val2, ...num1) {
    // console.log(`${val1}, ${val2}`);
    return num1;
}
// console.log(calculatePrice(6, 45, 12, 23, 49, 152));

// -------------------------------------------------------

//  Passing object to a function

const obj1 = {
    name: "Rohit",
    class: "BCA",
    Roll: 48
};
function handleObject(anyObj) {
    console.log(`Name is : ${anyObj.name}, Roll is  ${anyObj.Roll}`);
}
// handleObject(obj1);

//We can also directly pass object as parameter
// handleObject({
//     name: "Rohit",
//     Roll: 50
// })

// -------------------------------------------------------
//Passing array as an argument

let arr = [200, 300, 400];
function myFunc(getArr) {
    return getArr[1];
}
console.log(arr);

// Directly passing array to a function
>>>>>>> origin/master
console.log(myFunc([800, 900, 200]));