// var a=6
// var b=10
fn=require("readline-sync")
a=fn.question("enter  first number")
sn=require("readline-sync")
b=sn.question("enter second numner")
if (a>b){
    console.log(a,"Maximun")
}else{
    console.log(b,"Maximum")
}
