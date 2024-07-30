class user {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username is : ${this.username}`);
    }
}

class Teacher extends user {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`New Course is added by  ${this.username}`);
    }
}

const rohit = new Teacher('Rohit','rohit@gmail.com','123');
rohit.logMe()
rohit.addCourse();

const meRohit = new user("Hello")
meRohit.logMe()

console.log(rohit instanceof Teacher);
console.log(Teacher instanceof user);