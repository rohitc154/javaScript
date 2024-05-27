//  Method to check for a number is even or odd

// function evenOrOdd(val) {
//     if (val %2==0) {
//         console.log(val+" is Even");
//     }
//     else{
//         console.log(val + " is Odd");
//     }
// }
// evenOrOdd(7);

// Create a method to return larger of two number

// function checkLargerNum(val1,val2) {
//     if (val1>=val2) {
//         if (val1>val2) {
//             console.log(val1+" is Greater. ");
//         }
//         else
//         console.log("Both Numbers are equal");
//     }
//     else{
//         console.log(val2+" is greater");
//     }
// }
// checkLargerNum(9,9);

//Function to convert celcius to farenheit

// function tempConverter(temp) {
//     let fareh;
//     fareh = (9/5)*temp+32;
//     return fareh;
// }
// console.log(tempConverter(91)+" degree farenheit");

//Objects

let shirt = { name: "half shirt", price: 299, brand: "Allen Solly",'item@color' : 'white' }
// console.log(shirt.brand);
// console.log(shirt.name);
// console.log(shirt.price);
// console.log(shirt.item-color);
// console.log(shirt["item@color"]);
// console.log(shirt);
// console.log(typeof(shirt));
// shirt.price = 399; 
// console.log(shirt.price);
//Another way to access value of object
// console.log(shirt['brand']);
// console.log(shirt['price']);
// delete shirt.brand;
// console.log(shirt);

//Inside Object

// let product={
//     company : "Allen Solly",
//     itemName : "T-Shirt",
//     price : 845,
//     rating:{
//         stars:4.5,
//         reviews : 87
//     },
//     displayPrice : function(){
//         console.log(`Price of Product is ${this.price}`)
//     },
// };
// product.displayPrice();
// console.log(product);

//Object References

let a = 4;
let b = a;
console.log(`${a}, ${b}`);
a = 10;
console.log(`${a}, ${b}`);

let x = {num: "7"};
let y = x;
console.log(`${x.num}, ${y.num}`)
x.num = 32;
console.log(`${x.num}, ${y.num}`)
