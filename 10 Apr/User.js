// Getters & Setters are used to get and set values to class variables directly. when I make Getter Or Setter of a class variable then I will made as class Objects Property and I can easily get or set it by using = symbol. making Getters & Setters are easy and they are fast. Getters and Setters both acts as a method to get and set values but they are easy and fast.

class User{

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

    // Making normal function to set phoneNo
    setPhoneNo(number) {
        this.phoneNo = number; 
    }

    // Making a Setter to set a PhoneNo
    set setPhoneNo(number) {
        this.phoneNo = number;
    }
}

var user = new User("santy",22,"99898");

console.log(user);

//console.log(user.getPhoneNo());  // accessing as Method
console.log(user.getPhoneNo);    // accessing as property

//user.setPhoneNo("89844884");  //accessing as Method 
user.setPhoneNo = "89389384";    // accessing as property


