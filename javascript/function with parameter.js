let a=Number(prompt("enter 1st value"));
let b=Number(prompt("enter 2nd value"));

function add(a,b){
    let res=a+b;
    console.log(res);
}
add(Number(prompt("1st value")),Number(prompt("2nd value")));

let rev=" ";
function reverse(str){
    for(let i=str.length-1;i>=0;i--){
        rev=rev+str.charAt(i);
    }
    console.log(rev);
}
let j="java";
reverse(j);


function areaofcircle(r){
let pi=3.142;
let res=pi*r*r;
console.log(res);

}
areaofcircle(Number(prompt("radius value")));