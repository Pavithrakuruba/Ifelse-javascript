n=require("readline-sync")
b=n.question("enter number")
if (b>0){
    console.log(b,"positive Number")
}else if(b<0){
    console.log(b,"Nagative number")
}else if(b==0){
    console.log(b,"zero")
}