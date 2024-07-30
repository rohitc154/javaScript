//  Chai Aur Code

// Declaration of array
const myArr = [0, 1, 2, 3, 4, 5]
const arr = new Array(6, 4, 8, 2, 3, 9)
// console.table([myArr, arr])

//  Array Methods
arr.push(5)
// console.log(arr);
arr.pop()
// console.log(arr);

arr.unshift(1) // Insert data at beginning
// console.log(arr);

arr.shift() // Remove data from beginning
// console.log(arr);

// console.log(arr.includes(7));

// --Join : It converts array into string
const strArr = arr.join();
// console.log(strArr);
// console.log(typeof strArr);
// console.log(strArr[1]); // ','

// --slice
// console.log("Original Array : ", arr);
const arr1 = arr.slice(1, 3)
// console.log("A : Slice", arr1);
// console.log("Original Array : ", arr);

// --splice : It manipulates the original array
const arr2 = arr.splice(1, 3)
// console.log("B : Splice", arr2);
// console.log("Original Array : ", arr);

// Some Other Operations

const sem1 = ['Rohit', 'Ranjan', 'Komal']
const sem2 = ['Riyanshu', 'Kalyani']

// sem1.push(sem2)

// console.log(sem1.concat(sem2));

// Spread Operator
const allSem = [...sem1, ...sem2]
// console.log(allSem);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [, , 7, [4, 5]]];
const realAnotherArr = anotherArr.flat(Infinity) // Inplace of 'infinity' we provide here real depth of array.
// console.log(realAnotherArr);

// console.log(Array.isArray("Rohit"));
// console.log(Array.from("Rohit")); // It Converts strings into array
// console.log(Array.from({ name: "Rohit" }));

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1, s2, s3));
