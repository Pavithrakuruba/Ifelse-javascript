s=require("readline-sync")
a=s.question("enter the salary")
if (a<=10000){
    console.log(a+(a*20/100)+(a*80/100))
}else if(a<=20000){
    console.log(a+(a*25/100)+(a*90/100))
}else if(a>20000){
    console.log(a+(a*30/100)+(a*95/100))
}else{
    console.log("good salary")
}if