// Prototypes: Every JavaScript Object has some in built methods written in it and it is called as prototype.
// E.g for Array there are in built methods map(), forEach(), etc.

// Using prototype I can Edit all the in built Methods of an Object.

let arr = [1,2,23,4,9,3,2,9];

Array.prototype.map = function() {
    return "Map function is not working now";
}
// Now Array inbuilt method map() return a string for this Script file.

Array.prototype.findOdd = function() {
    return this.filter((i) => i % 2 !=0);
}
// this is an my own method that is used by all arrays written in this script file.
// this above method is listed in prototype of Js now.

console.log(arr.findOdd());

console.log(arr.map());

/// ********************************** Prototype Chaining ************************

// Prototype Chaining: One Object's prototype is present inside another class prototype and the child object can use the methods or variables of parent object using prototype.

// make two below objects as Prototype chanining.

const parent = {
    name : "parent",
    lastName : "parentLastName"
}

const child = {
    name : "child",

    __proto__: parent   // this line make parent object as prototype of child Ojbect
}

console.log(child.name);

console.log(child.__proto__.name);   // this will print "name" of parent object because of Prototype property
console.log(child.lastName);

console.log(child);
