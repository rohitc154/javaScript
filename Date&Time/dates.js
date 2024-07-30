let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());

// console.log(myDate.getTime());
// console.log(myDate.getDate());
// console.log(myDate.getMonth());
// console.log(myDate.getFullYear());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());

// Declaring date explicitly
// Syntax: 1
let myCreatedDate = new Date(2023, 2, 21,);  // Date Format year,mon,date
// Syntax : 2
// let myCreatedDate = new Date(2023, 2, 21, 4, 5, 52);  // Time Format year,mon,date
// Syntax : 3
// let myCreatedDate = new Date("2021-04-23");

console.log(myCreatedDate);

// --------------:) Time Stamp (:---------------------
let myTime = Date.now() // It returns value in milliseconds
// console.log(myTime);
// console.log(myCreatedDate.getTime());  // It return time in milliseconds
console.log(Math.floor(Date.now() / 1000)); // converting milliseconds into seconds

// Locale String
myDate.toLocaleString('default', {
    weekday: "long",
})

