//no argumnet no return
let msg=()=>console.log("Hello");
msg();
//with argument with no return
let msg1=x=>console.log(x);
msg1(5);
//with argument with return
let msg3=(x,y)=>x*y;
var a=msg3(5,10);
console.log(a);