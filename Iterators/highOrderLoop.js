//  for of loop
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);
}

// const greeting = "Good Morning!";
// for (const val of greeting) {
//     if (val == " ")
//         continue;
//     else
//         console.log(val);
// }

// Maps :- It holds unique key and value pair

const map = new Map();
// Setting value into map
map.set('IN', 'India')
map.set('Rs', 'Russia')
map.set('US', 'United States')
map.set('IN', 'India')
// console.log(map);

// Iterating Map
for (const [key, value] of map) {
    // console.log(key, ' :- ', value);
}

// ---------------------------------------------------
//  Iterating Objects
const myObj = {
    Name: 'Rohit',
    Class: 'BCA',
    Roll: 48,
};

// Object is not iterable through 'for of ' loop
// for (const [key, value] of myObj) {
//     console.log(key, ' :- ', value);
// }

for (const key in myObj) {
    // console.log(`${key} :- ${myObj[key]}`);
}

// -----------------------------------------------------------------
//  Foreach Loop
const coding = ['js', 'ruby', 'cpp', 'java', 'python']

// One Way
// coding.forEach((item) => {
//     console.log(item);
// })

// Second Way
function printMe(item) {
    // console.log(item);
}
coding.forEach(printMe) // Here, we pass the reference, not executing the function

// forEach Parameters
coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

// -----------------------------------------------------------
// Other Scenerio of access different types of variable's values

const mycoding = [
    {
        lName: 'javascript',
        lFile: 'js'
    },
    {
        lName: 'java',
        lFile: 'java'
    },
    {
        lName: 'python',
        lFile: 'py'
    }
]
mycoding.forEach((value) => {
    console.log(`${value.lName} :- ${value.lFile}`);
})