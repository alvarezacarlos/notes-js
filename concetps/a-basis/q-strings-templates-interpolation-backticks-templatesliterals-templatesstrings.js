/*
Back-Tics Syntax
Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
*/
let text1 = `Hello World!`;

/*Quotes Inside Strings
With template literals, you can use both single and double quotes inside a string:
*/
let text2 = `He's often called "Johnny"`;

/*Multiline Strings
Template literals allows multiline strings:
*/
let text3 =
`The quick
brown fox
jumps over
the lazy dog`;

/*Interpolation
Template literals provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.

The syntax is:

${...}
ADVERTISEMENT

Variable Substitutions
Template literals allow variables in strings:
*/

let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;

/*
Automatic replacing of variables with real values is called string interpolation.

Expression Substitution
Template literals allow expressions in strings:

Example
*/
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

/*
Automatic replacing of expressions with real values is called string interpolation.

HTML Templates
*/

let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;