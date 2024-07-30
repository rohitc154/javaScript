function multiplyBy(num) {
    return num * 5
}
multiplyBy.power = 2; // It's a function but behaves like Object.

// console.log(multiplyBy(5));
// console.log(multiplyBy.power);
// console.log(multiplyBy.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}
createUser.prototype.increment = function () {
    this.score++;
}

const chai = createUser('chai', 25)
const tea = createUser("tea", 250)