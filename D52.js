// 52. Write a Python program to add 'ing' at the end of a given string (length should be at least 3).
//  If the given string already ends with 'ing' then add 'ly' instead. 
// If the string length of the given string is less than 3,
// leave it unchanged. Go to the editor
// a. Sample String : 'abc'
// b. Expected Result : 'abcing'
// c. Sample String : 'string'
// d. Expected Result : 'stringly'



// x=require("readline-sync")
// a=x.question("enter word with out ing")
// if (a>="a" && a<="z" || a>="A" && a<="B"){
//     console.log("final word",a+"ing")
// }
// b=x.question("enter ing words")
// if (b>="a" && b<="z" || b>="A" && b<="Z"){
//     console.log("result",b+"ly")
// }


x=require("readline-sync")
a=x.question("enter word")
if (a>="a" && a<="z" || a>="A" && a<="B"){
    console.log("final word",a+"ing")
}else if (a>="a" && a<="z" || a>="A" && a<="B"){
    console.log("result",b+"ly")
}