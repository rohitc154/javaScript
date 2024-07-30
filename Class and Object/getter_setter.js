class user{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    // Getter for email
    get email(){
        return `abx${this._email}`
    }
    // Setter for email
    set email(value){
        this._email = value;
    }

    // Getter for password
    get password(){
        return this._password.toUpperCase()
    }
    // Setter for password
    set password(value){
        this._password = value
    }
}

const rohit = new user('rohit@outlook.com','abc')
console.log(rohit.email);
console.log(rohit.password);