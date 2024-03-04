console.log("promises");

// Promises are Objects.

console.log(new Date());
const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Here Is my Data after 2 seconds");
    },2000);
})

console.log(myPromise, new Date());
// Here I am calling Promise immediately so my console.log() inside the promise is not printed becuase It atleast reqire 2 seconds to complete. But if I wait for 2 seconds then It will be printed.

// setTimeout(() => {
//     console.log("Promise", new Date());
// },2000);


// resolve() & reject() are the return statements for Promise
// resolve() = Promise state = fulfilled
// reject()  = Promise state = rejected


const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data is Resolving...");
        reject("Data is Rejected....");
    }, 2000);
});

console.log("My Promise", myPromise1);

myPromise1
.then((data) => {
    console.log("Your Data.....", resolve);
})
.catch((err) => {
    console.log("Error....", err);
})

setTimeout(() => {
    console.log("Your Second Promise", myPromise1);
},3000);