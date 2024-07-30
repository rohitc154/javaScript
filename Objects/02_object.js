const tinderUser = new Object; // It is a singleton object.
const tinderUser2 = {}; //Non-Singleton Object.

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;
tinderUser.user2 = {
    roll: "48",
    name: "Rohit",
}

// console.log(tinderUser)

// merging two object
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// Different ways to merge objects
// const obj3 = { obj1, obj2 }; // this creates two object 
// const obj3 = Object.assign(obj1, obj2); // merges both the object
// const obj3 = { ...obj1, ...obj2 }; //Using spread Operator (...), it first spread both the object and assign in obj3

// console.log(obj3)

// console.log(Object.keys(tinderUser)); // it returns all the keys of object in an array
// console.log(Object.values(tinderUser)); // it returns all the values of object in an array
console.log(Object.entries(tinderUser)); // It returns all the element of object as a seperate array