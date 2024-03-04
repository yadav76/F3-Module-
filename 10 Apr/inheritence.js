
class Animal{

    constructor(name,species) {
        this.name = name;
        this.species = species;
        this.color= "black";
    }

    speak() {
        console.log("Animal Speaks...");
    }
}

class Cat extends Animal {
    constructor(name,species,classes) {
        super(name,species);  // calling constructor of parent class & passing 2 values to parent class

        this.classes = classes;
    }

    catSpeaks() {
        return super.speak();
    }
}

var catObj = new Cat("Santy","mammal","amphibian");

console.log(catObj); 


// Getter and Setters in JS

class User1{

    constructor(name, age , phoneNo) {
        this.name = name;
        this.age = age;
        this.phoneNo = phoneNo;
    }

    // Making a normal method to get a PhoneNo of user
    getPhoneNo() {
        return this.phoneNo;
    }

    // Now making a getter to get a Phone no
    get getPhoneNo() {
        return this.phoneNo;
    }
}

