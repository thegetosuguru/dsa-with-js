//  swap 

// 1

let a = 10;
let b = 20;

console.log(a)
console.log(b)

let c = a;
console.log(c)

a = b;
b = c;

console.log(a) // a = 20
console.log(b) // b = 10

// 2

let x = 1;
let y = 2;

console.log(x, y);

x = x + y
y = x - y
x = x - y

console.log(x, y)



// 3
let r = 5;
let s = 10;

console.log(r, s);


[r, s] = [s, r]

console.log(r, s);



