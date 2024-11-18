let a='javascript';     //String in '' or " "
console.log(a);
console.log(typeof a);


let b="java"
console.log(b);
console.log(typeof b);


let c=10;
let d="10";             //logics by using equals operator
if (c==d) {
    console.log("success");
    
}
else{
    console.log("fail");
}

let str="jspider";               //to uppercase method
console.log(str.length);
console.log(str.toUpperCase());

let q="JSPIDER";                    //to lowercase method
console.log(q);
console.log(q.toLowerCase());

console.log(q.charAt(4));           //charAt method


let w="javascript";                 //logics using charAt method
let res=" ";
for (let i = w.length-1; i >=0 ; i--)
 {
    res=res+w.charAt(i);
}
console.log(res);
console.log(w.charCodeAt(1));       //charCodeAt method

let x='jspider';
let y='rajajinagar';
let n='bangalore';
let z=x.concat(" "+y," "+n);                //concat method

console.log(z);

let p=10;
let o=20;
console.log(`the addition of 2 number is ${p+o}`);
console.log("the addition of two numbers is"+" "+(p+o));            //concat method using other alternate 

let k=100;
    k="hello";
console.log(k);                             // JS is losely typed

// let e="jspiders";
// console.log(e.charAt(4));
// console.log(e.charCodeAt(4));

let l="jspider";
console.log(l);
console.log(l.slice(0,-1));         //slice method
console.log(l.indexOf("d"));         // indexOf method
console.log(l.substring(5,2));          //substring method

let t="bangalore";
console.log(t.substr(1,6));         //substr method
let e=t.replace("o","u");           //replace method
console.log(e);


let j="I love my nation";
  let arr=  j.split(" ");           //split method
  console.log(arr);
  
  let m= arr.join(" ");               // join method
  console.log(m);
  
let h="      jspider rajajinagar       ";
console.log(h.length);              
let g=h.trimEnd();                              // trimEnd method
console.log(g.length);
let f=h.trimStart();                            // trimStart method
console.log(f.length);
let v=h.trim();                                // trim method
console.log(v.length);