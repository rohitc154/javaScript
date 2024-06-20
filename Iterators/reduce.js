const myNums = [1, 2, 3]

// First Parameter of reduce function is callback() and second parameter is initial value
// const myTotal = myNums.reduce(function (acc, cVal) {
//     console.log(`acc : ${acc}, cVal : ${cVal}`);
//     return acc + cVal
// }, 3)

// Using arrow function
const myTotal = myNums.reduce((acc, cVal) => acc + cVal, 10)

// console.log(myTotal);

//  -----------------------------------------

const shoppingCart = [
    {
        iName: 'js',
        price: 2000
    },
    {
        iName: 'python',
        price: 999
    },
    {
        iName: 'app Dev',
        price: 9999
    },
    {
        iName: 'data science',
        price: 12999
    },
]

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(total);