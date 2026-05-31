console.log("2" > 1);
console.log(null > 3);
console.log(null == 0);
console.log(null >= 0);

// while comparing values null and undefined are converted into a number it can be 0

let a  = 57365;
let convertedString  = String(a);
console.log(convertedString);
console.log(typeof convertedString);


let b = 5;
{
    let b = 6;
    console.log(b);
}
console.log(b);

// let is a block scope variable and var is a function or a global scope variable;
