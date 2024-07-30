const user = {
    username: "Rohit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database.");
        // console.log(this.username);
        // console.log(this);
    }
};
// console.log(user['loginCount']);
user.getUserDetails()
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    return this; //It is implicitly done
}
const userOne = User('Rohit', 9, true);
// const userTwo = User("hitesh", 10, false); // by doing this, the value of User is overridden.

// const userOne = new User('Rohit', 9, true);
// const userTwo = new User("hitesh", 10, false); // by doing this, the value of User is overridden.So, we use new keyword

// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);