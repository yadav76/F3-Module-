// ******************************** Inheritence **************************
// Inheritence: Extending property of some another class.

class Animal {

    constructor(name) {
        this.name = name;
        this.species = "mammal";
    }

    speck() {
        return "Every animal can speak";
    }

    eats() {
        return "Every animal can Eat";
    }
}

// Extends : is keyword we use so that child class can access the properties of Parent class. 
class Dog extends Animal {

    constructor(name, color, bread) {
        super(name);     // super() keyword is used to get all the properties of parent in child class
        this.color = color;
        this.bread = bread;
        this.age = 4;
    }

    // I can Override the functions of Parent class in child class
    speak() {
        return "Dog can also Speak";
    }

    superSpeakOfParent() {
        return super.speck();   // This will return speak() function of parent
    }
}

var tommy = new Dog("tommy", "brown", "German");
console.log(Dog.color);

// Here when I make object of Dog class then Animal class constructor also called because of super() keyword written and It will show the properties like name and species are shown in Dog class Object.

// super() only Refer to Immediate Parent not to GrandParent from child. 