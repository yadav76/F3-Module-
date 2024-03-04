console.log("Fetching Data.....");

fetch("https://dummyjson.com/quotes/random").then((response) => {
    // fetch() is a Promise which take some time to fetch data from above URL and then show that in response
    //console.log(response); // This will not print the data Exact Format 

    // For printing Data exactly I need to return it in json format
    // console.log(response.json());  // This will not work

    console.log("RESPONSE",response);
    return response.json();  // response.json() it is also a Promise
}).then((data) => {

    document.getElementById("list").innerHTML = `
        <h1>${data.id}</h1><h2>${data.author}</h2>
        <p>${data.quote}</p>
    `
    console.log("DATA",data);
    console.log(data.quote);
    console.log(data.author);
});


// getting all quotes at once
let url = "https://dummyjson.com/quotes";

fetch(url, {method: "GET"}).then((response) => {  //By Default method will be "GET". If I don't specify method.
    return response.json();
}).then((data) => {
    
    // Now Here I am getting all quotes in the form of array
    // console.log(data);

    let quotesArr = data.quotes;

    quotesArr.forEach((quote) => {
        document.getElementById("list").innerHTML += `
        <h1>${quote.id} - ${quote.author}</h1>
        <p>${quote.quote}</p>
    `
    })
})