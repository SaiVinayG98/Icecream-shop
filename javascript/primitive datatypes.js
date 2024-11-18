

let a;
console.log(a);

// console.log(d);

let b="hii";
let c=parseInt(b);
console.log(typeof c,c);

let d=true;
console.log(typeof d,d);

let e=null;
console.log(typeof e);

let f=12345678n;
console.log(typeof f);

let g=BigInt(123456789);
console.log(typeof g);

let h=BigInt("1234567890");
console.log(typeof h);

let sym=Symbol("foo");
let sym1=Symbol("foo");
console.log(sym==sym1);
