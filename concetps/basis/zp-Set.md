Iterating Over a Set

---
methods: 
Method	    Description
new Set()	Creates a new Set
add()	    Adds a new element to the Set
delete()	Removes an element from a Set
has()	    Returns true if a value exists in the Set
forEach()	Invokes a callback for each element in the Set
values()	Returns an iterator with all the values in a Set
Property	Description
size	    Returns the number of elements in a Set

---
You can use a for..of loop to iterate over the elements of a Set:

Example
const letters = new Set(["a","b","c"]);

for (const x of letters) {
  // code block to be executed
}
Sets and Maps are covered in the next chapters.

Iterating Over a Map
You can use a for..of loop to iterate over the elements of a Map:

Example
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for (const x of fruits) {
  // code block to be executed
}


---
How to Create a Set
You can create a JavaScript Set by:

Passing an Array to new Set()
Create a new Set and use add() to add values
Create a new Set and use add() to add variables
The new Set() Method
Pass an Array to the new Set() constructor:

Example
// Create a Set
const letters = new Set(["a","b","c"]);
Create a Set and add values:

Example
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
Create a Set and add variables:

Example
// Create a Set
const letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);
The add() Method
Example
letters.add("d");
letters.add("e");
If you add equal elements, only the first will be saved:

Example
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");


---
The forEach() Method
The forEach() method invokes (calls) a function for each Set element:

Example
// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
letters.forEach (function(value) {
  text += value;
})
The values() Method
The values() method returns a new iterator object containing all the values in a Set:

Example
letters.values()   // Returns [object Set Iterator]
Now you can use the Iterator object to access the elements:

Example
// List all Elements
let text = "";
for (const x of letters.values()) {
  text += x;
}