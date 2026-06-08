// variables
let name  = "John";
const pi = 3.14;
var age  = 18;

{
    var age = 20;
    console.log(age);
}
console.log(age);

console.log(name);
{
    let name = "Doe";
    console.log(name);
}
console.log(name);
// var is a global scope variable and let is a block scope variable

let password = 1214;
let convertedString = String(password);
console.log(typeof convertedString);
console.log(convertedString);

// post fix and pre fix
let prevId = 5;
let assignedId = prevId++;
console.log(assignedId);
console.log(prevId);
// post means first return current value of x and then increments

let availableId = 5;
let SettingId = ++availableId;
console.log(SettingId);
console.log(availableId);
// pre means firsts increments and then returns the incremented values

let NullValue = null;
console.log(typeof NullValue);
// datatype of null is object and undefined is undefined

let numberValue = 5;
let negVal = -numberValue;
console.log(negVal);
let resultedValue = negVal - 10;
console.log(resultedValue);

// There are many datatypes String, Number, Boolean, Null, undefined, Symbol, Object, Array, Function 
let symbol1 = Symbol("123");
let symbol2 = Symbol("123");
console.log(symbol1 === symbol2);