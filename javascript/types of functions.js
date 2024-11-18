//function with expression
 let a = function(a,b){
     //let a=10;
     //let b=20;
     let res=a+b;
     // console.log(res);
     return res;
 }
let c=a(Number(prompt("1st value")),Number(prompt(" 2nd value")));
console.log(c);
// -----------------------------
console.log("start");
 b()
console.log("end");
// ------------------------
 let b=function(){
     let x=20;
     let y=x*x;
    console.log(y);
}
// -----------------------------------------
//arrow function
 let t=(h,l)=>{
    //let h=10;
    //let l=20;
     let re=h+l;
     console.log(re);
     return re;
 }
 let o=t(10,20)
console.log(o);
// ----------------------------------------------
//higher order function and call back function

 function strong(fact){
     let no=145;
     let copy=no;
     let sum=0;
    while(no!=0){
        let rem=parseInt(no%10);
         sum=sum+fact(rem);
        no=parseInt(no/10);
    }
     if(copy==sum){
         console.log(`${copy} is strong number`);
     }
    else{
        console.log(`${copy} is not a strong number`);
     }
 }
 strong(fact)
 function fact(no){
     let fact=1;
    for(let i=no;i>=1;i--){
        fact=fact*i;
    }
     return fact;
 }
// ----------------------------------------------------------------------------------------------------------

 let g=10;
 let h=20;
 let j=g+h;
console.log(j);
 function mul(div){
 let g=10;
 let h=20;
 let j=g*h;
 div();
 console.log(j);
 }
 mul(div)
 function div(mul){
 let x=10;
 let y=20;
 let z=x+y;
 console.log(z);

 }

// ---------------------------------------------------------------------------------------------------------------------
// this keyword function
    var w=10;
 function add(){
     var w=20;
     console.log(w);
     console.log(this.w);
    
 }
 add();

// ---------------------------------------

// nested function using return type
 function test(){
     let a=10;
     function demo(){
         let b=20;
         // console.log(b);
         // console.log(a);
           console.log("hiiiiiiiiiiii");
           function a(){
            console.log("happy birthday akash");
            
          }
           return a
     }
     return demo
 }
 test()()()
// -------------------------------------------

// IIFE Immediate Invoking Function Expression
(function (){
    console.log("hiiiiiiiiiiiiiiii bye katthe kayi");
    
})
()