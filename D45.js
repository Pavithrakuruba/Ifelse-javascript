
///////////using library per day amount calculations
x=require("readline-sync")
day=x.question("enter day")
if(day<=5){
    console.log("per day 2/-:",day*2)
}else if(day>=6 && day<=10){
    console.log("per day 3/-:",day*3)
}else if (day>10 && day<=15){
    console.log("per day 4/-:",day*4)
}else if (day>15){
    console.log("per day 5/-:",day*5)
}