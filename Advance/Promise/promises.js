const promiseOne = new Promise((resolve, reject) => {
    // Do async task
    // DB calls, cryptography, network call

    setTimeout(() => {
        console.log('Async task 1 completed!');
        resolve(); // Resolve function is connected with .then, resolve() is used to execute .then(). resolve() inclusion is must.
    }, 1000)
})
// console.log(promiseOne);
promiseOne.then(function () {
    console.log("Promise Consumed!");
})

// -------------- :) Promise Two (: --------------

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Task 2 Completed!');
        resolve()
    }, 1000);
}).then(() => {
    console.log('Async2 Resolved!');
})

// -------------- :) Promise Three (: --------------

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "chai", email: "chai@hotmail.com" }) // we can pass parameters to the resolve().
    }, 1000)
})

promiseThree.then(function (user) { // resolve parameter is catched by the argument of .then() 
    console.log(user);
})

// -------------- :) Promise Four (: --------------

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Rohit", password: "12345" });
        } else {
            reject('Error : Something went wrong!');
        }
    }, 1000)
})

promiseFour.then((user) => {
    // console.log(user);
    return user.username;
}).then((myusername) => {
    console.log(myusername);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("Promise is either resolved or rejected"))

// -------------- :) Promise Five (: --------------
// Using async and await

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject("Error : Hey! You gonna be in trouble.")
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// ------ :) Promise Six (: -------- :) Practical Problem (: ------
// ------- Arranging Records

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
