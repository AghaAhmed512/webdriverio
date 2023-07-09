// Inheritance: that allows classes to inherit properties and behaviors from other classes.

// class Car {
//     setName(name){
//         this.name = name;
//     }
//     startEngine(){
//         console.log('Engine Started for '+ this.name)
//     }
//     stopEngine(){
//         console.log('Engine stopped for '+ this.name)
//     }
// }

// class Toyota extends Car {
//     topSpeed(speed){
//         console.log(`Top speed for ${this.name} is ${speed}`)
//     }
// }

// let myCar = new Toyota();
// myCar.setName('Camry');
// myCar.startEngine();
// myCar.stopEngine();
// myCar.topSpeed(200);


/// example 2:

class Animal {
    constructor(name){
        this.name = name;
    }
    
    makeSound(){
        console.log('Making a sound...');
    }

}

class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    
    bark(){
        console.log('Woof!!');
    }

}

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.name);
dog.makeSound();
dog.bark();