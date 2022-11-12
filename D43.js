// ////////18 to 30 genders vise wages calculations


x=require("readline-sync")
age=x.question("enter age")
gender=x.question("enter gender")
if (age>=18 && age<=30){
    if(gender==="male"){
        console.log("wages/day:700")
    }else if(gender==="female"){
        console.log("wages for day:750")
    }
}
else if (age>=30 && age<=40){
    if(gender==="male"){
        console.log("wages/day:800")
    }else if(gender==="female"){
        console.log("wages for day:850")
    }
}