// Protected: Protected members are accessible within the class they are defined in and their subclasses.
// They are denoted by prefixing the member name with an underscore _. However, JavaScript does not have native
// support for protected members, but you can follow the naming convention to indicate that a member is intended
// to be protected. 


class Animal {
    constructor(name){
        this.name = name;   // Protected property
    }

    _makeSound(){
        console.log('Making sound...');
    }
}

class Dog extends Animal {
    bark(){
        console.log(`${this.name} is barking.`);
        this._makeSound();     // Calling protected method
    }
}
const dog = new Dog('Buddy');
dog.bark()