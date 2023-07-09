//Public members are accessible from anywhere, both inside and outside the class. 
//They are the default access level if no access modifier is explicitly specified. For example:

class Person {
    constructor(name){
        this.name = name;    // Public property
    }

    sayHello(){   // Public method
        console.log(`Hello my name is ${this.name}.`);
    }
}
const person = new Person('Zafar');
console.log(person.name);          // Accessing public property
person.sayHello();                // Calling public method