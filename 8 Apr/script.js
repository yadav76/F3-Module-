
function sayHello(callback) {
    console.log("Hello");

    callback();    // Here I am calling the CallBack function through the reference passed in sayHello function.
}

function sayHi() {
    console.log("Hiiii");
}

sayHello(sayHi);  // Here sayHi is a callBack function. Here I am passing reference of CallBack Function.

// callBack Function: A function which is passed as parameter in Another Function and It is called inside another function is called as CallBack Function.


// CallBack Hell

function greet(takeOrder){
    console.log("Say Hello");

    takeOrder(giveFood);
}

function takeOrder(giveFood) {

    console.log("Taking Order.....");
    var order = prompt("Please Enter Your order");
    
    if (order) {
        console.log("Your Order is ", order);
        giveFood(takePayment);
    }else {
        thankYou();
    }
}

function giveFood(takePayment) {    
    console.log("Giving Food...");

    takePayment(thankYou);
}

function takePayment(thankYou) {
    console.log("Taking Payment.....");

    thankYou();
}

function thankYou() {
    console.log("Thanks for Visiting, Please Come Again!");
}

greet(takeOrder);
// Here Every function is dependent on Other function
// greet() -> takeOrder() -> giveFood() -> takePayment() -> thankYou()

// Above calling is called as CallBack Hell. Other way of calling all function by simplly calling them one by one but it normal calling Developers life is easy but User will fash some difficullty because if one function is not called or a function need to call again then whole code flow is disturbed.

// So maintain code flow we use CallBack Hell