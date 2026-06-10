console.log("Hello World");
document.write("Hello World");

    var num=10;
    console.log(num);
    console.log(typeof(num));
    num=false;
    console.log(num);
    console.log(typeof(num));
    num=undefined;
    console.log(num);
    console.log(typeof(num));
    num=null;
    console.log(num);
    console.log(typeof(num));

    const sym1=Symbol(4)
    console.log(sym1);
    const sym2=Symbol(4)
    console.log(sym2);
    if(sym1==sym2){
        console.log("true");
}
else {
    console.log("false");
}


var a=100; var b=13; var c=10; varlinebreak="<br>"

document.write("a+b+c=")

let number =[1,2,3,4,5];
let squares = number.map(num=>num*num);
console.log(squares);


let numbers = [10,15,20,25];
let result = numbers.filter(num=>num>15);
console.log(result);

let numberr = [10,20,30];
let sum =numberr.reduce((total,num)=>total+num,0);
console.log(sum);

