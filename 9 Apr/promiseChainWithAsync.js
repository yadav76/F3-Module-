console.log("Promise Chaning with Async Await");

// greet() => takeOrder() => giveFood() => takePayment() => thankYou()


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


async function handleChain() {

    console.log("Handling.....");

    try {
        const data1 = await greet();
        const data2 = await takeOrder();
        const data3 = await giveFood();
        const data4 = await takePayment();
        
        console.log("DATA1" , data1, new Date());
        console.log("DATA2" , data2, new Date());
        console.log("DATA3" , data3, new Date());
        console.log("DATA4" , data4, new Date());

        thankYou();
    }
    catch(err) {
        console.log("Error", err);
        throw err;
    }
}

handleChain();

// Now as above I can handle promise chaining without using "then" keyword and It is very easy to handle.



// Now I don't have to use below chaning method for chaning above promises
// greet() 
//     .then((data) => {
//         console.log(data, new Date());

//         return takeOrder();
//     })
//     .then((data2) => {
//         console.log(data2, new Date());

//         return giveFood();
//     })
//     .then((data3) => {
//         console.log(data3, new Date());

//         return takePayment();
//     })
//     .then((data4) => {
//         console.log(data4, new Date());

//         thankYou();
//     })
//     .catch((err) => {
//         console.log(err);
//     })
