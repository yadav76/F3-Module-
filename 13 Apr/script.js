let myPTag = document.getElementById("my-p-tag");

console.log(myPTag);
console.log(myPTag.innerText);

// innerText only show the content visible on Screen. 

console.log(myPTag.textContent);
// textContent will show all the content present inside Element no matter what some content is set to display=none.

// I can use both innerText & textContent to set the value of HTML Element
// myPTag.textContent = "Hii";
// myPTag.innerText = "Hiii";

console.log(myPTag.innerHTML);

//Creating a HTML Element from JS
var heading = document.createElement("h1");  // add Empty element at very bottom
heading.innerText = "Hello World This is my creation";  // add Text to Empty element

// Now Created element but I have to append that in Body 
// document.getElementsByTagName("body")[0].appendChild(heading);

document.body.appendChild(heading);   // append and show the above element on Screen

// Add Item to list whose id= list
document.getElementById("list").appendChild(heading);

// Adding counter to screen

var count = 0;

function counter() {
    var pTag = document.createElement("p");
    pTag.innerText = count;
    count++;

    document.getElementById("list").appendChild(pTag);
    // I can set Attributes like id, class, title to above line
    pTag.setAttribute('id',`list-item-${count}`);

    pTag.setAttribute('title',`list-item-${count}`);
    pTag.setAttribute("class","list-item list-content");  // adding multiple classes


    // Add rows to table
    var row = document.createElement('tr');
    row.innerHTML = `<td>data1</td>
    <td>data1</td>
    `

    document.getElementById("table").appendChild(row);

    // Another way of doing above thing

    // document.getElementById("list").innerHTML += `
    //     <li class="list-item">${count}</li>
    // `


    //On clicking on list-item It should be removed 
    pTag.setAttribute("onclick",`removeItem("list-item-${count}")`);
}


// If click on particular listItem then that Item is removed
function removeItem(id) {
    var item = document.getElementById(id);

    document.getElementById("list").removeChild(item);
}

function remove() {
    var listItem = document.getElementById("list");

    listItem.removeChild(listItem.firstElementChild); // removes first appendChild

    listItem.removeChild(listItem.children[2]);  // removes second child
}