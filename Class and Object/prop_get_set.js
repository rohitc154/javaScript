// ---------:) Function based getters or setters (:------------

// function user(email, password){
//     this._email =email;
//     this._password = password;

//     Object.defineProperty(this,'email',{
//         get : function () {
//             return this._email.toUpperCase()
//         },
//         set:function(value){
//             this._email = value
//         }
//     })
//     Object.defineProperty(this,'password',{
//         get : function () {
//             return this._password.toUpperCase
//         },
//         set:function(value){
//             this._password = value
//         }
//     })
// }
// const rohit = new user('rohit@otl.ai','5412');
// console.log(rohit.email);

// -------------:) Object based getters and setters (:--------------

const User = {
    _email : "roht@mail.com",
    _password : "6412",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this.email = value
    }
}
const anUser = Object.create(User)
// console.log(rohit.email);


