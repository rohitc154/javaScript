// if

// if (score > 100) {
//     const power = "fly";
//     console.log(`Very good Score : ${power}`);
// }
// console.log(`Very good Score : ${power}`);

//Shorthand
// const balance = 1000
// if (balance > 500) console.log("Implicit Declaration");

//Switch case statement

let month = 3;

switch (month) {
    case 1:
        console.log(("January"));
        break;
    case 2:
        console.log(("Feburary"));
        break;
    case 3:
        console.log(("March"));
        break;
    case 4:
        console.log(("April"));
        break;
    default:
        console.log("Default Case");
}

// Nullish Coalescing Operator(??): null undefined
//  It is treated as fallback value, if the value of a variable is null or undefined

let val1;
// val1 = 5 ?? 10;
val1 = null ?? 10;
val2 = undefined ?? 15

console.log(val1);
console.log(val2);


// Ternary Operator
//Syntax-- condition ? true : false

let val = 5
val > 5 ? console.log('Right') : console.log('Wrong')