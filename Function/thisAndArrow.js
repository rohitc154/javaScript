let obj1 = {
    username: "Rohit",
    class: "BCA",
    message: function () {
        console.log(`${this.username}, welcome!`); // 'this' keyword returns value of the current context(values)
        console.log(this);
    }
}
// obj1.message()
// obj1.username = "Sam";
// obj1.message()

// console.log(this); // It returns an empty context, as here is no any global context. In browser it returns as there is a global context 'window'.

//  --------------------------------------------------------------------------------------------------------------------------

// We can use 'this' in object, not on function
// function chai() {
//     let username = "Rohit";
//     console.log(this.username);
// }
// chai();

// --------------------------------------------------------------------------------------------------------------------------

// const chai = () => {
//     let username = "Rohit";
//     console.log(this.username);
// }
// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addtwo(5, 6));

// Implicit return, single line syntax
// const addtwo = (num1, num2) => num1 + num2;
// const addtwo = (num1, num2) => (num1 + num2); // We can also wrap return statement in parenthsis
// console.log(addtwo(5, 6));

//to return an object wrap it in parenthesis
const addtwo = (num1, num2) => ({ username: "Rohit" });
console.log(addtwo(5, 6));
