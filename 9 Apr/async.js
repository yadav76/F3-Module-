// By Default JS is Synchronous in Nature.
// but It will be Asynchronous also.

// console.log("1");

// setTimeout(() => {
//     console.log("2");
// },3000);

// console.log("3");

// Output : 1 3 2

// console.log("4");

// setTimeout(() => {
//     console.log("2", new Date());
// },1000);

// setTimeout(() => {
//     console.log("3", new Date());
// },2000);

// setTimeout(() => {
//     console.log("4", new Date());
// },3000);

// All Three SetTimeOut() functions will take 3 seconds because they all three will execute one by another.
// JavaScript executes the code line by line & If JS finds any Asynchronous function like setTimeout() then It will not wait for It puts that Async Function in queue until its times is completed and moves on next line. 


// N

function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Here is Your Data.....");
        }, 2000);
    })
}

function myAsyncFunc() {
    console.log("my Function");
    const myPr = myPromise();

    // If I directly print myPr then It will show pending because myPromise needs 2000 to print but Here I am calling it Instantaly that's why It will show pending.
    console.log(myPr);


    // but Here I am waiting for 3000 ms Promise to complete then Promise will be success and Printed
    setTimeout(() => {
        // WAIT TILL PROMISE GETS FULL FILLED
        console.log(myPr);
    },3000);
}

myAsyncFunc();

// but If I don't want to use setTimeOut Functions for wating for Promise then I can use "Async  await" keywords to make my function wait for promise 

async function myAsyncFunc1() {
    console.log("My Async Function");

    const myPr = await myPromise().catch((err) => console.log("ERROR", err));  // I have to write "await" for make JS wait of myPromise()

    // If MyPromise has return statement then I can also use below line to catch error
    //const myPr = await myPromise().catch((err) => console.log("ERROR", err)); 

    if (myPr) {  // there is error in myPr then It will show undefined so I have to use If block  
        console.log("My Promise", myPr);
    }
}

myAsyncFunc1();


// I can also use try catch block for catching the erorrs
async function myAsyncFunc2() {
    console.log("My Async Function");

    try {
        const myPr = await myPromise();
        console.log(myPr);
    }catch(err) {
        console.log(err);
    }
}

myAsyncFunc2();