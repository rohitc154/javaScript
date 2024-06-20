const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNum.map((num) => {
//     return num + 10
// });
// console.log(newNums);

// ----------------------------------------
// Chaining
const newNums = myNum
    .map((num) => num * 10)
    .map((num) => num + 8)
    .filter((num) => num % 3 == 0)

console.log(newNums);
