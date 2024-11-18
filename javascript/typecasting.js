// plus symbol will concat
// (a),if it is value as Number or String or Characters in the double quotes it will concat

// let num1=10+"hii"+12+34;


// + will always concat the values strings
// if it is a value as number or String or Character in the double quotes it will concat

// subtraction
// minus try to throw a number
// let num1=100-"23"+123-"hii";

// multiplication
// multi tried to throw a Number if the value a number in a double quotes
// if it is a String it will throw a NaN

// let num1=25*"10";
// let num1=25*"hii";



// division
// division Symbol try to throw a Number if value as Number in double quotes
// if it is String as a  value it is NaN
// let num1=100/"hi"

// null treated as zero


// let num1=100-null-10
// console.log(num1);
// console.log(typeof num1);

let a=123456;
let count=0;
while (a!=0) {
    let rem=parseInt(a%10);
    // console.log(rem);
    
    count++;
    a=parseInt(a/10);
}
console.log(count);
