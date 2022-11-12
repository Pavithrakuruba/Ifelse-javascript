v=require("readline-sync")
a=v.question("enter the classes held")
w=require("readline-sync")
b=w.question("enter the attend classes")
if (b*(1/a)>=0.75){
    console.log("percentage of attendance",b*(1/a))
    console.log("allowed to exam")
}else{
    console.log("percentage of attendance",b*(1/a))
    console.log("not allowed to exam")
}