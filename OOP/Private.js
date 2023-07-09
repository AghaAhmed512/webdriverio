// Private: Private members are accessible only within the class they are defined in.
// They are denoted by prefixing the member name with an underscore _. For example:

class Person {
    constructor(name) {
        this.name = name;
    }
    _sayHello(){
        console.log(`Hello my name is ${this.name}`)
    }
}

const person = new Person('Ali');
console.log(person.name);// Not recommended to access private property directly
person._sayHello();       // Not recommended to call private method directly 