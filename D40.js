x=require("readline-sync")
a=x.question("enter number")
if (length(a)==3){
    console.log("it is 3 digit number")
}else{
    console.log("not 3 digit  number")
}

week=require("redline-sync")
day=week.question("enter week name")
if (day == "monday"){
//   console.log("Dhanwantari\nSiddhi\Kritika\Salon\nMayuri\Gauri");
    console.log("week first day")
}
else if (day == "tuesday"){
//   console.log("Keemaya\nRoshni\nPooja\Priyanka\nnalini\nManisha");
    console.log("week second day")
}
else if (day == "wednesday"){
//   console.log("Shrusti\Karuna\Parveen\Sandhya\nLeena\Karishma");
    console.log("week thired day")
}
else if (day == "thursday"){
//   console.log("Nikita\nMona\nPriyanka\Tejashree\nLovely\Mehzebin");
    console.log("week fourth day")
}
else if (day == "friday"){
//   console.log("Pihu\Sejal\nChaya\Shrestha\nMonali\nAardhangya");
    console.log("week fifth day")
}
else if (day == "saturday"){
//   console.log("Gunjan\nShweta\nRani\nIsha\nKusu\Madhu\n");
    console.log("week sixth day")
}
else if (day == "sunday"){
//   console.log("Swati\nKhusboo\nidhi\Preeti\nDipti\nAnamika");
    console.log("week seventh day")
}
else {
  console.log("Please enter valid week day")
}
