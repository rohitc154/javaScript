//Create object to represent a product from myntra

let product = {
    name: 'T-shirt',
    brand: "zara",
    price: '1026',
    'delivery-time': '1hrs'
};
console.log(product);

// Create an object with two references and log changess to one object by changing the other one.
let product2 = product;
product2.price = 2034;
console.log(product);

// Use bracket notation to display deliver-Time
product["delivery-time"] = 5;
console.log(product);


//Given an object {message:'good job', status:'complete'}, use de-structutring to create two variables message and status.
let obj={
    message:'good job', 
    status:'complete'
};
console.log(obj);
let {message,status} = obj;
console.log(message);
console.log(status);

//add function isIdenticalProduct  to compare two product objects.

