// Primitives Data Types (Selected By Value like copy of the value is stored in the variable)

let a = 10; //Number
let b = "George"; //String 
let c = true; //Boolean
let d = null;
let e = undefined;
let id = Symbol("123");
let anotherId = Symbol("123");
console.log(id === anotherId);

console.table([typeof a, typeof b, typeof c, typeof d, typeof e, typeof id]);


// Non-Primitive Data Types (Selected By Reference like the reference of the value is stored in the variable)
// arrays, functions, objects


let heroes = ["Spiderman", "Batman", "Superman"];
console.log(typeof heroes);

let person =  {
    name: "John",
    age: 18,
};
console.log(typeof person);

let greet = function(){
    console.log("Hello World");
};
greet();
console.log(typeof greet);



// types of array, objects and null are objects and types of function is function

// Stack (Premitives Data Types) and Heap(Non-Primitive Data Types)
let value1 = "George";
let value2 = value1;
console.log(value2);
value2 = "John";
console.log(value1);
console.log(value2);

let obj1 = {
    name: "Tom",
    email: "tom@example.com",
};

let obj2 = obj1;
obj2.name = "Jerry";
console.log(obj1.name);
console.log(obj2.name);

// In static(Prmitivies Data Types) example number, string, boolean, null, undefined, symbol are stored in stack and in dynamic(Non-Primitive Data Types) example arrays, functions and objects are stored in heap. 