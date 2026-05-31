let name = "George";
// console.log(typeof name);
let password = 3455;
// console.log(typeof password);

let city = null;
let email;
// console.log(typeof city);
// console.log(typeof email);

/* 
    datatype of null is object and datatype of undefined is undefined
*/

let value = 5;
let stringconvert = String(value);
// console.log(stringconvert);
// console.log(typeof(stringconvert));


// Operations
let number = 5;
let negvalue = -number;
// console.log(negvalue);


// console.log(5 % 10);
console.log(2 + "5"); 
console.log(2 + "5" + "6"); 
console.log("5" + 6);
console.log(5 + 6 + "2");

let a = 5;
let b = ++a;
// console.table([a, b]);

let c = 5;
let d = c++;
// console.table([c, d])

let lastId = 100;
let assignedId = lastId++;
// console.log(assignedId); 
// console.log(lastId);     

// post fix means return the current value of x if x++ and then increments x
let availableId = 5;
let assignUserId = ++availableId;
// console.log(assignUserId); 
// console.log(availableId); 



let listOfId = 5;
let assignEmplyeeId = ++listOfId;
console.log(assignEmplyeeId); 
console.log(listOfId);