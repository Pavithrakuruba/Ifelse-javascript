x=require("readline-sync")
a=x.question("enter number")
y=require("readline-sync")
b=y.question("enter nuber")
if(a<b){
    console.log(a,"is lowest number")
}else if(a>b){
    console.log(b,"is lowest number")
}else{
    console.log("both Equal")
}