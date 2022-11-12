
// let a = 2;
// switch (a) {
//     case 1:
//         a = 'one';
//         break;
//     case 2:
//         a = 'two';
//         break;
//     default:
//         a = 'not found';
//         break;
// }
// console.log(`The value is ${a}`);



// let a = 1;
// switch (a) {
//     case "1":
//         a = 1;
//         break;
//     case 1:
//         a = 'one';
//         break;
//     case 2:
//         a = 'two';
//         break;
//     default:
//         a = 'not found';
//         break;
// }
// console.log(`The value is ${a}`);



// c=require("readline-sync")
// operator=c.question('Enter first number: ')
// a=require("readline-sync")
// x=a.question('Enter first number: ')
// b=require("readline-sync")
// y=b.question('Enter second number: ')
// switch(operator) {
//     case '+':
//         result = x + y;
        // console.log(`${x} + ${y} = ${result}`);
//         break;
//     case '-':
//         result = x - y;
//         console.log(`${x} - ${y} = ${result}`);
//         break;
//     case '*':
//         result = x * y;
//       console.log(`${x} * ${y} = ${result}`);                                           
//         break;
//     case '/':
//         result = x / y;
//         console.log(`${x} / ${y} = ${result}`);
//         break;
//     default:
//         console.log('Invalid operator');
//         break;
// }



// switch(id1)
// {
// case 1:
//      switch(id2){
//      case 1:{
//         switch(id3){
//         case 1:{}
//         case 2:{}
//         }
//     }
//      case 2:{
//         switch(id4){
//         case 1:{}
//         case 2:{}
//         }
//      }
// }
// case 2:
// }




c=require("readline-sync")
day=c.question('Enter day:')
console.log("whole day Menu")
a=require("readline-sync")
Meal=a.question('Enter Meal:')                                                                          
switch (day){
    case "Monday":
        switch (Meal){
            case "breakfast":
                console.log("Breakfast:poha")
                break
            case "lunch":
                console.log("lunch: rice and dhal")
                break
            case "snacks":
                console.log("Magi")
                break
            case "dinner":
                console.log("dinner: roti and vegetable fry")
                break
        }  
    break    

    case "Tuesday":
        switch (Meal){
            case "breakfast":
                console.log("Breakfast:Idle")
                break
            case "lunch":
                console.log("lunch: curdrice, roti and pumpkinfry")
                break
            case "snacks":
                console.log("biscuite")
                break
            case "dinner":
                console.log("dinner:roti,rice and pappu ")
                break
        }  
    break     
    case "Wednesday":
        switch (Meal){
            case "breakfast":
                console.log("Breakfast:chanadal")
                break
            case "lunch":
                console.log("lunch:rice, roti and Pumpkinwithpotato dhal")
                break
            case "snacks":
                console.log("tost")
                break
            case "dinner":
                console.log("dinner:roti,masur and save")
                break
        }  
    break    
    case "Thursday":
        switch (Meal){
            case "breakfast":
                console.log("Breakfast:Magi")
                break
            case "lunch":
                console.log("lunch:roti, Corn and Cucumber and ladi")
                break
            case "snacks":
                console.log("Apple")
                break
            case "dinner":
                console.log("dinner:roti and  Pumpkin dhal")
                break   
        } 
    break    
    case "Friday":
        switch (Meal){
            case "breakfast":
                console.log("Breakfast:sabhudana")
                break
            case "lunch":
                console.log("lunch:roti, rice, papad and Tomato pappu")
                break
            case "snacks":
                console.log("banana")
                break
            case "dinner":
                console.log("dinner:roti and vegetable fry")
                break   
        }
    break 
    case "saturday":
        switch (Meal){
            case "breakfast":
                console.log("Breakfast:chila")
                break
            case "lunch":
                console.log("lunch:,rice  and cabbage with capsicum curry")
                break
            case "snacks":
                console.log("pasta")
                break
            case "dinner":
                console.log("dinner:roti and potato with greenbeans curry")
                break   
        } 
    break
    case "sunday":
        switch (Meal){
            case "breakfast":
                console.log("Breakfast:tost and milk")
                break
            case "lunch":
                console.log("lunch:roti, rice  and brinjal curry with coconut milk")
                break
            case "snacks":
                console.log("sweet potato")
                break
            case "dinner":
                console.log("dinner:roti and cauliflower with carrot curry")
                break   
        }
    break       
} 












