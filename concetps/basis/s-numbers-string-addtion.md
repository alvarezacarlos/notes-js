Adding Numbers and Strings
WARNING !!

JavaScript uses the + operator for both addition and concatenation.

Numbers are added. Strings are concatenated.

If you add two numbers, the result will be a number:

Example
let x = 10;
let y = 20;
let z = x + y;
If you add two strings, the result will be a string concatenation:

Example
let x = "10";
let y = "20";
let z = x + y;
If you add a number and a string, the result will be a string concatenation:

Example
let x = 10;
let y = "20";
let z = x + y;
If you add a string and a number, the result will be a string concatenation:

Example
let x = "10";
let y = 20;
let z = x + y;
A common mistake is to expect this result to be 30:

Example
let x = 10;
let y = 20;
let z = "The result is: " + x + y;
A common mistake is to expect this result to be 102030:

Example
let x = 10;
let y = 20;
let z = "30";
let result = x + y + z;
The JavaScript interpreter works from left to right.

First 10 + 20 is added because x and y are both numbers.

Then 30 + "30" is concatenated because z is a string.