let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1
console.log(a) // 2
console.log(b) // 2
console.log(c) // 2
console.log(d) // 1

let y = 2;
let x = 1 + (y *= 2);
console.log(y) // 4
console.log(x) // 5

let num1 = +prompt("First number?", 1);
let num2 = +prompt("Second number?", 2);

alert(num1 + num2); // 3
