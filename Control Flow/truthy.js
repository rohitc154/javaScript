// Truthy Value:
// String, "0",'false', " ", [ ],{ }, function(){}, false == 0, false == '',0==''

// Falsy Value : 
//Empty string, 0, -0, BigInt 0n, "", null, undefined, NaN


const userEmail = "rohit@google.com";
const arr = [];

if (userEmail) {
    console.log("Got the Mail");
} else {
    console.log("Oops!");
}

// Checking For Empty Array
if (arr.length === 0) {
    console.log("Arrays is Empty");
}

//Checking for Empty Object
const obj = {};
if (Object.keys(obj).length === 0) {
    console.log("Object is Empty");
}