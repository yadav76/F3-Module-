console.log("Fetching Data from API")

let url = "https://dummyjson.com/products/1";

fetch(url, {method: "GET"}).then((Response) => {
    return Response.json();
}).then((data) => {

    document.getElementById("list").innerHTML = `
        <img src="https://i.dummyjson.com/data/products/1/1.jpg">
    `
    console.log(data);
})



//*******************************************POST********************************** */
// making a POST request. I am fetching a POST request and the data I am getting I manipulating It first then printing it. Because I cannot update data in dummyJson's Database.

let url1 = "https://dummyjson.com/products/add";
// POST is used when you want to create. e.g Post something on Instagram.

// I will pass below Object as parammeter in fetch() method

let options = {
    method: "POST",
    headers : { "Content-Type": "application/json"},
    body: JSON.stringify({
        title: "BMW Pencil",
        description: "Pencil for people who Drive BMWs",
        price: 10000,
        rating: 5.0,
        stock: 10,
        brand: "BMW",
        category: "pencils"
    })
}

fetch(url1, options) 
    .then((res) => res.json())
    .then((data) => console.log(data));



//************************************** PUT API**************************************** */

// I can update the Object also.
let url2 = "https://dummyjson.com/products/1";

let options1 = {
    method: "PUT",
    headers : { "Content-Type": "application/json"},
    body: JSON.stringify({
        title: "BMW Car",
        price: 5000
    })
}

fetch(url2, options1)
    .then((res) => res.json())
    .then((data) => console.log(data));
