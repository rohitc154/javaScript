// class user {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user('rohit', 'rohit@gmail.com', '123');

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//------------------:) Behind the scene (:-----------------

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}#245`
}
User.prototype.changeUsername = function () {
    return `${this.username}`
}

const tea = new User('tea', 'tea@gmail.com', '4512');

console.log(tea.encryptPassword());

// Making of Captalize function
console.log(tea.changeUsername().charAt(0).toUpperCase() + tea.changeUsername().slice(1, 5).toLowerCase());