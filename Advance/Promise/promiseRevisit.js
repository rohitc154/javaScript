//-----------------:) 1st Way to creating promise
// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async Task Completed!");
//         resolve();
//     }, 2000)
// })

// promiseOne.then(() => {
//     console.log("Promise Consumed!");

// }

//--------------:) 2nd Way to creating promise
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Task 2 Completed!");
        resolve();
    }, 3000)
}).then(() => {
    console.log("Resolve 2 Resolved!");
})

// ---------------------------:) Third way of consuming promise
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "rohit", password: "12345" })
    }, 1000)
})

promiseThree.then((usr) => {
    console.log(usr.username);
})

// ---------------------------:) Fourth way of consuming promise
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = true;
        if (!error)
            resolve({ username: "Rohit", pwd: "84152" });
        else
            reject("Unwanted Error Occured!");
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("The Promise is either resolved or rejected!");
})

// -----------------------:) Five way of consuming promise
const promiseFive = new Promise((resolve, reject) => {
    let error = true
    setTimeout(() => {
        if (!error)
            resolve({ username: "jS", pwd: "moJo" })
        else
            reject("Very Bad Error!");
    }, 1000)
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// ----------:) Fetching data from Api, using 'Async' & 'Await'
// async function getAllUsers() {c
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E : ', error);
//     }
// }
// getAllUsers()

// ----------:) Fetching data from Api, using '.then' & '.catch'

fetch('https://api.github.com/users/rohitc154') // 'fetch()' returns a promise. so we can use .then and .catch directly
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))

