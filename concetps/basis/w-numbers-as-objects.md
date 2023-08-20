JavaScript Numbers as Objects
Normally JavaScript numbers are primitive values created from literals:

let x = 123;
But numbers can also be defined as objects with the keyword new:

let y = new Number(123);
Example
let x = 123;
let y = new Number(123);
Do not create Number objects.

The new keyword complicates the code and slows down execution speed.

Number Objects can produce unexpected results:

When using the == operator, x and y are equal:

let x = 500;
let y = new Number(500);
When using the === operator, x and y are not equal.

let x = 500;
let y = new Number(500);
Note the difference between (x==y) and (x===y).

(x == y) true or false?

let x = new Number(500);
let y = new Number(500);
(x === y) true or false?

let x = new Number(500);
let y = new Number(500);
Comparing two JavaScript objects always returns false.