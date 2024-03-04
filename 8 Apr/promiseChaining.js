
function waitFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Waiting in Line.....");
        }, 1500);
    })
}

console.log(waitFunc()); 
// Here waitFunc() is returning a promise. 

function waitingForHairCut() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Waiting in Waiting For HairCut.....");
        }, 2000);
    })
}

function HairCutting() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("HairCutting.....");

            // reject("Barber has to go for Lunch");
        }, 3000);
    })
}

function pay() {
    console.log("Payment Done");
}


// Now I am calling above function One by one without using Callback hell. 

waitingForHairCut() 
    .then((data1) => {
        console.log(data1, new Date());

        // Now return another promise in this Promise function
        return HairCutting();
    })
    .then((data2) => {
        console.log(data2,new Date());

        // Now return another function or Another Promise
        return pay();
    })
    .catch((err) => {
        console.log(err);
    })


// Promise chaining is required to maintain the Code flow and return the Function which returns a Promise


// Homework : CallBack Hell using Promises.


function greet(takeOrder){
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            //resolve("Say Hello"); // Here I can also return an Object Instead of String like below
            resolve({
                name: "santy",
                age: 22,
                height: 5.6
            })
        }, 1000);
    })
}

function takeOrder(giveFood) {

    return new Promise(function (resolve, reject) {

        setTimeout(() => {
            console.log("Taking Order.....");
            var order = prompt("Please Enter Your order");

            if (order) {

                resolve("Your Order is ", order);
            }else {
                thankYou();
            } 
        }, 1500);
    })  
}

function giveFood(takePayment) { 
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Giving Food...");
            //reject("Something is going wrong");  // Throw Error which is caught by catch() block
        },2000);
    })   
}

function takePayment(thankYou) {

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Taking Payment.....");
        }, 2500);
    }) 
}

function thankYou() {
    console.log("Thanks for Visiting, Please Come Again!");
}

greet() 
    .then((data) => {
        console.log(data, new Date());

        return takeOrder();
    })
    .then((data2) => {
        console.log(data2, new Date());

        return giveFood();
    })
    .then((data3) => {
        console.log(data3, new Date());

        return takePayment();
    })
    .then((data4) => {
        console.log(data4, new Date());

        thankYou();
    })
    .catch((err) => {
        console.log(err);
    })
