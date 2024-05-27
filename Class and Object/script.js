// const student = {
//     name: "Rohit Kumar",
//     marks: 523,
//     printMarks: () => {
//         console.log(this.marks);
//     },
// };

// const employee = {
//     calcTax1(salary) {
//         salary -= (salary / 10);
//         console.log("Tax Rate : 10%");
//         console.log(`Salary : ${salary}`);
//     },
//     calcTax2: (salary) => {
//         salary -= (salary * (3 / 20));
//         console.log("Tax Rate : 15%");
//         console.log(`Salary : ${salary}`);
//     },
// };

// const rohit = {
//     salary: 50000,
// }

//Setting a prototype
// rohit.__proto__ = employee;


// Class & Object

// class newCar {
//     constructor() {
//         console.log("This is Automatically Invoked!");
//     }
//     start() {
//         console.log("Start!");
//     }
//     stop() {
//         console.log("Stop!");
//     }
//     setBrand(brand) {
//         this.brand = brand;
//     }
// }

// let nexon = new newCar();
// nexon.setBrand("TATA");

// nexon.start();


//Inheritance

class parent {
    constructor(branch) {
        // this.branch = branch;
        console.log("Parent Constructor Invoked!");
    }
    display1() {
        console.log("Display1");
    }
    common() {
        console.log("Commom display 1");
    }
}

class child extends parent {
    constructor() {
        super();
        console.log("Child constructor Invoked!");
    }
    display2() {
        console.log("Display2");
    }
    common() {
        console.log("Commom display 2");
    }
}

let obj1 = new child();

obj1.display1();
obj1.common();