// To store Multiple user Information we cannot use multiple variables like below

var user1_name = "name";
var user1_age = 22;
var user1_email = "user1@gmail.com";
var user1_gender = "male";
var user1_marks = 2220;



var user2_name = "name";
var user2_age = 22;
var user2_email = "user2@gmail.com";
var user2_gender = "male";
var user2_marks = 2220;


// I cannot store multiple users like that. Instead of this I can create an Object for all users

var user1 = {
    name: "name",
    age: 22,
    email: "user1@gmail.com",
    gender: "male",
    marks: 2220
}

var user2 = {
    name: "name",
    age: 22,
    email: "user1@gmail.com",
    gender: "male",
    marks: 2220
}

console.log("user1 >> ", user1);

function createUser(nameVal, ageVal, emailVal, genderVal, marksVal) {
    return {
        name: nameVal,
        ag: ageVal,
        emai: emailVal,
        gende: genderVal,
        mark: marksVal
    }
}

var user3 = createUser("santy", 22, "xyz@gmail.com", "male", 222);  // This how I can also create an Object in JS Dynamically.

console.log("user3 >>> ", user3);

// so there are multiple ways to create an Object.

// Object : Object is an Instance of a Class.

// Class : A class is a BluePrint.

// Here Every user will have name, age, email, gender, marks. So using this we can create a bluePrint or structure for every Object & this will called as class. 

// *************************** Third Way to Create Object ***********************

class User {
    species = "Human";    // Every Object of this class has a Species Property no matter we pass in constructor or not. Here name,age,eamil,gender,marks are properties of Object.

    constructor(nameVal, ageVal, emailVal, genderVal, marksVal) {
        this.name = nameVal;
        this.age = ageVal;
        this.email = emailVal;
        this.gender = genderVal;
        this.marks = marksVal;
        this.accountNo = "494802011003843";
    }

    getUserName() {
        return "User Name is " + this.name;
    }

    getAccountNo() {
        return "XXXX" + this.accountNo.slice(4, 8) + "XXXX";
    }
}



// Now create Object of above class
var user4 = new User("santy", 22, "xyz@gmail.com", "male", 222);

console.log(user4.getAccountNo());
console.log(user4.getUserName());

console.log("User4 >>> ", user4);

console.log(`${user1.name} user1 + ${user3.name} user3 + ${user4.name} user4`);

// Constructor: is a Function which gets called when you first Initialize an Object. i.e whenever we create Object of a class. We create Object by Using the keyword "new"


// Here user1, user2, user3 are JSON(JavaScript Object Notation) Objects but user4 is Object of User class.




// ****************************** Access Specifiers in JS ******************
// there are only 2 types of Access Specifiers in JS. 
// Public & Private(#)

class BankAccount {
    #accountNo;
    constructor(name, age, accountNo, balance) {
        this.name = name;
        this.age = age;
        this.#accountNo = accountNo;    // making it private
        this.balance = balance;
    }

    #getAccountNo() {           // Making function also private by using (#). If I don't use # then It also not 
        return this.accountNo;    // return accountNo. It will show error
    }


    // But Instead of this If I want to show my private variable Detail then I can use

    getMaskedAccountNo() {
        return ("XXXXXX" + this.#accountNo.slice(4, 8) + "XXXX");
    }


    getBalance() {
        return this.balance;
    }
}

var myAccount = new BankAccount("san", 22, "2332423", "9922");

// Here I cannot Access AccountNo because I made it Private using "#" Symbol. 
// Here I can access Balance of user becuase it is not private


// ******************************** Inheritence **************************
// Inheritence: Extending property of some another class.

class Animal {

    speck() {
        return "Every animal can speak";
    }

    eats() {
        return "Every animal can Eat";
    }
}

// Extends : is keyword we use so that child class can access the properties of Parent class. 
class Dog extends Animal {

    constructor(color, bread) {
        super();     // super() keyword is used to get all the properties of parent in child class
        this.color = color;
        this.bread = bread;
        this.age = 4;
    }
}

var tommy = new Dog("brown", "German");
console.log(Dog.color);