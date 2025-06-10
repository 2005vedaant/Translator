/*let a=10;
let b=20;
let sum=a+b;
let sub=a-b;
let mul=a*b;
let div=a/b;
console.log(`Sum = ${sum}`);
console.log(`Subtraction = ${sub}`);
console.log(`Multiplication = ${mul}`);
console.log(`Division = ${div}`);*/
/*let num=prompt("Enter a number");
let count=0;
for(let i=1;i<=num;i++){
    if(num%i==0)
    {
        count++;
    }
}
if(count==2){
    console.log(`${num} is a prime number.`);
}
else{
    console.log(`${num} is not a prime number.`)
}*/
/*let num=10;
let str="10";
if(num==str){
    console.log("Equal");
}
else{
    console.log("Not equal");
}*/
/*let a=prompt("Enter starting range:");
let b=prompt("Enter ending range:");
for(let i=a;i<=b;i++){
    console.log(`value=${i}`);
}*/
/*let str="Vedaant Jaiswal"
for(let val of str){
    console.log(val);
}*/
/*let student={
    age:18,
    marks:90,
    phone:6290386867,
};
for(let key in student)
{
    console.log(`${key} of student is ${student[key]}`);
}*/
/*let str="Vedaant Jaiswal";
let len=str.length;
let up=str.toUpperCase();
let low=str.toLowerCase();
console.log(`length of string=${len}`);
console.log(`String to Upper Case=${up}`);
console.log(`String to lower case=${low}`);
console.log(`First Name=${str.slice(0,7)}`);
console.log(`Last Name=${str.slice(8,15)}`);
console.log(`New Name=${str.replace("Vedaant","Krish")}`);*/
/*let arr=[1,2,3,4,5,6];
console.log(arr);
arr.push(7);
console.log(`Array after adding at end=${arr}`);
arr.pop();
console.log(`Array after deleting from end=${arr}`);
arr.unshift(0);
console.log(`Array after adding at begin=${arr}`);
arr.shift();
console.log(`Array after deleting from begin=${arr}`);
console.log(`Array after slice=${arr.slice(1,4)}`);
arr.splice(3,1,5);
console.log(`Array after replacing ${arr[3]} with 5=${arr}`);*/
/*function sum(a,b){
    let sum=a+b;
    return sum;
}
console.log(`Sum=${sum(1,2)}`);*/
/*const pro=(a,b)=>{
    return a*b;
}
console.log(`product=${pro(2,3)}`);*/
/*let arr=[1,2,3,4,5,6,7,8,9];
let a=arr.forEach((val)=>{
    console.log(val);
})
let b=arr.filter((val)=>{
    return val%2===0;
})
console.log(b);
let c=arr.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(c);*/
/*let ved=document.querySelector("h1");
console.dir(ved);*/
/*let ele=document.createElement("button");
console.log(ele);
ele.innerText="Click Me";
let ele1=document.querySelector("div");
ele1.append(ele);
ele1.prepend(ele);
ele1.before(ele);
ele1.after(ele);*/
/*let ele=document.createElement("button");
ele.innerText="Click Me";
let ele1=document.querySelector("body");
ele1.append(ele);
ele.style.backgroundColor="red";
ele.style.color="white";*/
let btn=document.querySelector("div");
let btn1=document.querySelector("body");
let current="light";
btn.onclick=()=>{
    if(current==="light"){
    btn1.style.backgroundColor="black";
    current="dark";
}
else{
    btn1.style.backgroundColor="white";
    current="light";
}
}








