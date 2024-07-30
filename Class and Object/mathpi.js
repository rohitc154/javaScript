const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
    name :"ginger tea",
    price : 250,
    isAvailable : true,

    orderchai : function(){
        console.log("Bring it ");
    }
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// -----------------:) Changing Property of Object const (:------------

Object.defineProperty(chai,'name',{
    // writable : false,
    enumerable : false
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
