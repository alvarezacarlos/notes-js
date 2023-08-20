NaN - Not a Number
NaN is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

Example
let x = 100 / "Apple";

However, if the string is numeric, the result will be a number:

Example
let x = 100 / "10";
You can use the global JavaScript function isNaN() to find out if a value is a not a number:

Example
let x = 100 / "Apple";
isNaN(x);
Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:

Example
let x = NaN;
let y = 5;
let z = x + y;
Or the result might be a concatenation like NaN5:

Example
let x = NaN;
let y = "5";
let z = x + y;
NaN is a number: typeof NaN returns number:

Example
typeof NaN;
