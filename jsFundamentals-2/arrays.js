let fruits = ["Cherry", "Apple", "Banana", "Mango"];

//using constructor
let numbers = new Array(1, 2, 3, 5);

let details = ["Ibrahim", 26, true];
console.log(details);

//Accessing elements
console.log(fruits[1]);
console.log(fruits[2]);

//Modifying Elements
fruits[1] = "Strawberry";
console.log(fruits);

//Common Array Methods
//Add element at end
fruits.push("Grapes");
console.log(fruits);

//Remove last element
fruits.pop();
console.log(fruits);

//Remove first element
fruits.shift();
console.log(fruits);

//Add element at beginning
fruits.unshift("Apple");
console.log(fruits);

//Get array size
console.log(fruits.length);

//Find position
console.log(fruits.indexOf("Banana"));

//Check value
console.log(fruits.includes("Apple"));

//Array Loops
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
