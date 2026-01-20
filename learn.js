// Hello World
console.log("Hello, World");

// single line comment

/*
  multi
  line
  comment
*/

// there are some javascript features which work only inside a browser like alert()
// alert("Hello"); // if this function is present in a .js file run by nodejs then a error will be thrown
// alert will create a pop up on the top in a browser

// javascript is case sensitive
// variables and types
let num; // variable declaration

console.log("num = ", num, "; type = ", typeof num); // this prints out undefined

num = 1;

console.log("num = ", num, "; type = ", typeof num);

// primitive types in javascript = number, string, boolean
// variable names cannot start with a number
// variable names can contain only two special $, _
// variable names can start with $, _
let num1 = 1; // redeclaration or shadowing is not allowed in javascript
console.log("num1 = ", num1, "; type = ", typeof num1);

let s = "Hello";
console.log("s = ", s, "; type = ", typeof s);

let b1 = true;
console.log("b1 = ", b1, "; type = ", typeof b1);

let b2 = false;
console.log("b2 = ", b2, "; type = ", typeof b2);

// operator precedence in javascript () > *, / > +, -
// +, -, *, / are left assosiative

// a strategy to avoid floating point aritmetic inaccuracies is to convert the floating point numbers to int (by multiplying it with some factor of 10) do the op and convert the result back to a floating point number (by dividing the result with some factor of 10)
// 20.75 + 7.99 => (2075 + 799) / 100

// to round a floating point number
console.log(Math.round(2.34114)); // Math.round(num) rounds the number to the nearest integer
console.log(Math.round(2.8));

// javscript adds a semicolon at the end of a line automatically if its not already present this can be error prone at times so its recommended to manually add ; at the end of each line

// strings
let s1 = "Hello";

// string concatenation
s1 += " , World"; // all vairables are mutable by default in javascript
console.log("s1 = ", s1, "; type = ", typeof s1);

// if a string is added to a value of some other type then the other value is implicitly converted to a string
// this is called type coercion
console.log("hello" + 3);
console.log(3 + "hello");
console.log("hello" + true);
console.log(false + "hello");

// the above feature can cause some weird behavior
console.log("Hello" + 20.123 + 12.213); // => Hello20.12312.213
// this is because javascript parses a expression from left to right and converts the other numbers to strings
// the above issue can be resolved using paranthesis
console.log("Hello" + (20.123 + 12.213)); // => Hello32.336

console.log(20.123 + 12.213 + "Hello"); // => 32.336Hello

// there are 3 ways to create a string in javascript
// let s = 'Hello';
// let s = "Hello";

// to put "" inside a string we can use '' to define the string and vice versa
let s2 = "Earth's Galaxy";
console.log(s2);

let s3 = '"quotations" marks...';
console.log(s3);

// the following things are considered a character (in javascript ?)
// (1) letters (a, b, c, ...)
// (2) numbers (0, 1, 2, 3, ...)
// (3) special character (!, @, #, $, ...)
// (4) escape sequences (\n, \t, ...)
let s4 = "Earth's Galaxy"; // another way to do it using the escape character \
console.log(s4);

// template strings (string interpolation + they can span multiple lines)
console.log(`s4 = ${s4} ; type = ${typeof s4}`);

console.log(`  line1
  line2
  line3`);
