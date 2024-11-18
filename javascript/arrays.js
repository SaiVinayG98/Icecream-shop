//Array declaration using new operator
let arr=new Array();



//array initialization
arr[0]=10;
arr[1]=20;
arr[2]=30;


//array utilization
console.log(arr);



//calculate the length of the array
console.log(arr.length);



//array re-initialization
arr[1]=100;
console.log(arr);



//copy array from one variable to another variable
let copy=arr;
console.log(copy);
console.log(arr);



//create array by using literal way
let cat=[100,200,300,'as',"asdfghjpoiuyt"]
console.log(cat);

// --------------------------------------------------------------------------------------------------------------------
//methods in array
//push()
//pop()
//shift()
//unshift()

let a=[10,20,30,40];
console.log(a);

a.push(100);
console.log(a);

a.unshift(200);
console.log(a);

a.pop();
console.log(a);

a.shift();
console.log(a);

//------------------------------------------------------------------------------------------------------------------------------------

//map()
//filter()
//reduce()
//slice()
let trr=[1,2,3,4,5];
let u=trr.map((element,index,array)=>{
    return element+"g"+" "+index+" "+array;
})
console.log(u);
//---------------------------------------------

for(let i=0;i<trr.length;i++){
    if(trr[i]%2==0){
        console.log(trr[i]);
    }
}

let s=trr.filter((element,index,array)=>{
    return element%2==0
})
console.log(s);

let sum=0;
for(let i=0;i<trr.length;i++){
    sum=sum+trr[i];
    }
console.log(sum);

let h=trr.reduce((accu,element,index,array)=>{
    return accu+element; 
})
console.log(h);
//-----------------------------------------------------
let grr=[10,20,30,40,50]
let g=grr.slice(1,3)
console.log(g);
grr.map((ele)=>{
    console.log(ele);
})

//------------------------------------------------------------------------------------------------------------

//splice()
//concat()
//sort()
//join()
//reverse()

let mrr=[5,3,4,1,2]
let m=mrr.splice(1,2,'hii','hello')
console.log(m);
console.log(mrr);
//-----------------------------------

let jrr=[100,200,300,400]
let j=mrr.concat(jrr)
console.log(j);

//------------------------------------

let krr=['z','a','c','b','g']
console.log(krr.sort());
let lrr=[1,3,5,6,3,2]
console.log(lrr.sort((x,y)=>y-x));
console.log(krr.join(" "));

//------------------------

let rrr=[10,20,30,40,50,60,70,80,90,100]
console.log(rrr);
console.log(rrr.reverse());

rrr.forEach((element,index,array)=>{
    console.log(element,index,array);
})

//-----------------------------------

let urr=new Array();
let no=Number(prompt("enter no. of elements to be stored"))
alert(`enter the ${no} array elements`)
for(let i=0;i<=no;i++){
    let t=Number(prompt(`enter the ${i} elements`))
    urr.push(t)
}
console.log(urr);


