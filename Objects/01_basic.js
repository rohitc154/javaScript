<<<<<<< HEAD
// Object Literals

// Symbol datatype
const mysym = Symbol("key1");

// using this symbol as a key in object
const jsUser = {
    name: "Rohit",
    "full name": "Rohit Kumar",
    class: "BCA",


    // mysym: " MyKey1", // This way we can also declare, but it is not correct syntax

    [mysym]: " MyKey1", //Correct syntax to declare symbol as a key

    myFunc: function () {
        console.log("Hello! Good Evening.");
    },
};

jsUser.myFunc2 = function () {
    console.log("This is Second Function.")
};

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["full name"]);

//Accessing symbol
console.log(jsUser[mysym]);

//Accessing Function
console.log(jsUser.myFunc());
=======
// Object Literals

// Symbol datatype
const mysym = Symbol("key1");

// using this symbol as a key in object
const jsUser = {
    name: "Rohit",
    "full name": "Rohit Kumar",
    class: "BCA",


    // mysym: " MyKey1", // This way we can also declare, but it is not correct syntax

    [mysym]: " MyKey1", //Correct syntax to declare symbol as a key

    myFunc: function () {
        console.log("Hello! Good Evening.");
    },
};

jsUser.myFunc2 = function () {
    console.log("This is Second Function.")
};

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["full name"]);

//Accessing symbol
console.log(jsUser[mysym]);

//Accessing Function
console.log(jsUser.myFunc());
>>>>>>> origin/master
// console.log(jsUser);