let x = new String("John");  // x is an object
let y = new String("John");  // y is an object  // both objetcs have distinct memory reference
// let y = x  // same memory reference

console.log((x===y))


-- QA

do you know why this returns false? 
let x = new String("John");  // x is an object
let y = new String("John");  // y is an object
document.getElementById("demo").innerHTML = (x===y);


In JavaScript, objects are compared by reference, not by their content. When you use the strict equality operator (===) to compare two objects, it checks whether they are the exact same object in memory, not whether their content is the same.

In your example, x and y are two separate instances of the String object. Even though they have the same content ("John"), they are different objects in memory. Therefore, when you compare them using ===, it returns false.

To illustrate this further:

javascript
Copy code
let x = new String("John");
let y = new String("John");

console.log(x === y); // Outputs: false
If you want to compare their content, you should use the .valueOf() method or convert them to primitive strings using the toString() method before comparing:

javascript
Copy code
console.log(x.valueOf() === y.valueOf()); // Outputs: true
However, it's important to note that using === to compare primitive values (like numbers, strings, booleans) will compare their content. It's only when you're dealing with objects that the comparison is based on reference.