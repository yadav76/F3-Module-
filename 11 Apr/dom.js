// Our whole code is converted into a Document & then shown in Browser. Our Browser has some extra functionalities that's why our code is easily shown in console of browser

console.log("santosh");
window.console.log("santosh");  // both lines are same but usually we don't write window in our code we directly write all code without usind window keyword.

// window directly refers to Browser.

// so as our whole document is converted into a document. So using document I can write all things in our code. I can edit CSS of code also using document

document.body.style.backgroundColor = "#000";
document.body.style.color = "#fff";

console.log(document);

var myHeading = document.getElementById("heading1");
console.log(myHeading);

var elements = document.getElementsByClassName("heading");   // returns array of objects because there can be multiple elements with same className

console.log(Array.from(elements));  // prints the array 

// elements are array of objects so that's why we cannot use all properties of array on elements like forEach() method because elemnts prototype will not all array methods listed init. so It gives error if I try to use foreach() on elemnts.  that's why I making an array out off elements so that I can use all methods of array

var arr = Array.from(elements);

// Now on arr I can use all methods of array. 

console.log("My Elements", elements[0],elements[1]);


// Now I can easily get parent and siblings of myHeading element
console.log(myHeading.parentElement);  // prints parent of myHeading elemtnt = <body></body>

console.log(myHeading.nextElementSibling);  // print nextsiblings of myHeading element

console.log(myHeading.previousElementSibling); // print previous element 


const divElement = document.getElementsByClassName("container");
const para = document.getElementById("para");

// Here parent of para tag is div and div's parent is body
console.log(para.parentElement);  // div.container is parent of para tag
console.log(para.parentElement.parentElement);


// *********** Difference Between .parentElement & .parentNode ***************

let myHtml = document.getElementById("myHtml");

// There is not Parent element for <HTML> tag so .parentElement will return null for <html> tag. 
// But .parentNode will return something if there is not parent element for any element. .parentNode always return something

console.log(myHtml.parentNode);    // prints Htmldocument as parent of <html>
console.log(myHtml.parentElement); // prints null


// ******** remove Hambargar menu after clicking on button

var flag = false; 

function removeHam() {

    // if (!flag) {
    //     document.getElementById("hambargar").style.display = "none";
    //     flag = true;
    // }else {
    //     document.getElementById("hambargar").style.display = "block";
    //     flag = false;
    // }

    // Another way of doing same thing is 
    if (document.getElementById("hambargar").style.display == "block") {
        document.getElementById("hambargar").style.display = "none";
    }else {
        document.getElementById("hambargar").style.display = "block";
    }
}


// If I want to apply multiple CSS properties using Js
myHeading.style.cssText = "background-color:pink; font-size: 55px; border: 2px solid red; color: #fff; text-transform = underline";