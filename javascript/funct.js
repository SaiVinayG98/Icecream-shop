function add(){
    let no=Number(prompt("Enter the addition value"));
    let f=1;
    for(let i=no;i>=1;i--){
        f=f*i;
    }
    console.log(f);
}
add();

// circle
function circle(){
    let pi=3.142;
    let r=Number(prompt("enter the circle radius"));
    let area=pi*r*r;
    console.log(area);
}
circle();

// triangle
function triangle(){
    let b=Number(prompt("Enter triangle base value"));
    let h=Number(prompt("Enter triangle height value"));
    let a=(1/2)*b*h;
    console.log(a);
}
triangle();

// rectangle
function rectangle() {
    let w=Number(prompt("Width of rectangle"));
    let h=Number(prompt("height of rectangle"));
    let r=w*h;
    console.log(r);
}
rectangle();

// trapezoid
function trapezoid() {
    let a=Number(prompt("smaller side trapezoid"));
    let b=Number(prompt("larger side trapezoid"));
    let he=Number(prompt("height of trapezoid"));
    let tr=0.5*(a+b)*he;
    console.log(tr);
}
trapezoid();

// ellipse
function ellipse(){
    let mi=Number(prompt("Enter half of minorAxis"));
    let ma=Number(prompt("Enter half of majorAxis"));
    el=3.142*mi*ma;
    console.log(el);
}
ellipse();

// square
function square(){
    let s=Number(prompt("square side value"));
    sq=s*s;
    console.log(sq);
}
square();

// parallelogram
function parallelogram(){
    let ba=Number(prompt("base value parallelogram"));
    let hi=Number(prompt("height value parallelogram"));
    let pr=ba*hi;
    console.log(pr);
}
parallelogram();

// sector
function sector(){
    let rad=Number(prompt("enter radius of sector"));
    let th=Number(prompt("angle theeta for sector"));
    let sec=0.5*rad*rad*th;
    console.log(sec);
    
}
sector();
