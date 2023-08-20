Numeric Strings
JavaScript strings can have numeric content:

let x = 100;         // x is a number

let y = "100";       // y is a string
JavaScript will try to convert strings to numbers in all numeric operations:

This will work:

let x = "100";
let y = "10";
let z = x / y;

This will also work:

let x = "100";
let y = "10";
let z = x * y;

And this will work:

let x = "100";
let y = "10";
let z = x - y;

But this will not work:

let x = "100";
let y = "10";
let z = x + y;

