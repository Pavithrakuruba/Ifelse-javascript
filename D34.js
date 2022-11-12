n=require("readline-sync")
a=n.question("enter number")
ld=a%10
console.log(ld,"last digit")
if(ld%3==0){
    console.log("divisible")
}
else{
    console.log("not divisible")
}