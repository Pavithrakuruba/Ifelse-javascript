a=require("readline-sync")
salary=a.question("enter the salary")
b=require("readline-sync")
year=b.question("enter the salary")
if(year>5){
    console.log("5% bonus")
    console.log(salary+(salary*50/100))
}else{
    console.log("salary",salary)
}