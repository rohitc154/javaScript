class user{
    constructor (username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is : ${this.username}`);
    }

    //Static function can't be accessed
    static createId(){
        let rand = Math.floor(Math.random()*1000)+1;
        // console.log(rand);
        return rand;
    }
}
const rohit = new user("Rohit");
// console.log(rohit.createId());

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const newObj = new Teacher('obj','obj@gmail.com');
newObj.logMe();

console.log(newObj.createId()); // Static function can't be accessed