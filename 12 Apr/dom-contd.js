console.log("Dom continued....");

function showInfo() {

    var myPass = document.getElementById("password").value;

    var myEmail = document.getElementById("email").value;

    var myPassword = "XXXX" + myPass.slice(-1);

    var myPara = document.getElementById("para");

    myPara.innerText = `My Email is ${myEmail} and my Password is ${myPassword}`;
}

function showImage() {

    console.log("Button is Clicked");

    var myDiv = document.getElementById("myDiv");

    myDiv.innerText = "Hello I am a Div";

    const myImage = "https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg";
    
    // innerText is used to add text in Html Element as It is.

    myDiv.innerHTML = `<h1>I am Heading</h1><div><img  src='${myImage}' height='100'></div>`;
    // Now innerHTML will convert above string to <h1> heading and add a <h1> elemnet inside a div

    // myDiv.innerText = "<h1>I am Heading</h1><div> Image</div>";
    // this will add above string as it is inside a div. Do not convert it to html element

}

// another way of calling above function using evenListener

var button = document.querySelector("#btn");

button.addEventListener("click", showImage); // this will call showImage() function after clicking on "show Div" function

// adding mouseover effect on button
button.addEventListener("mouseover", () => {
    console.log("Cursor is over the mouse");
})

// calls this method while clicked on button
button.addEventListener("mouseup", () => {
    console.log("Mouse is Up");
})

// calls this method when button is released
button.addEventListener("mousedown", () => {
    console.log("Mouse is Down");
})

