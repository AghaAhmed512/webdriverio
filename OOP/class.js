// A class is a construct in object-oriented programming (OOP) that encapsulates objects
// and their properties (variables) and behaviors (methods). It serves as a blueprint or template for
// creating objects with specific characteristics and functionalities.

/* syntax:
      class className {
      constructor(parameter) {
      this.classname = parameter;
  }
}  

*/

// example1:
class Employee {
    
    constructor(name, id) {
        this.name = name;
        this.id = id;

    }

}

let employee = new Employee('agha',1);
console.log(employee.id);
console.log(employee.name);

// example2:

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello my name is ${this.name} and my age is ${this.age} years old`);
    }
}

const person1 = new Person('Agha',27);
const person2 = new Person('Zafar',26);
person1.sayHello();
person2.sayHello();