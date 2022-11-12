console.log("Welcome to Andhra Bank ATM")
v=require("readline-sync")
card=v.question("enter your card")
if (card=="debit"){
    console.log("card in Process")
    language=v.question("choose Language")
    if (language=="english"){
        console.log("can u continue in english")
        Ac=v.question("choose type of A/c")
        if (Ac=="saving"){
            console.log("it is saving A/c")
            Transaction=v.question("enter types of Transaction")
            if (Transaction=="withdrow"){
                console.log("countinue withdrow")
                amount=v.question("enter how much Amount do you want ")
                if (amount>=100 && amount<=10000){
                    console.log("remaing balance is:", (100000-amount))
                    pin=v.question("enter your card pin number")
                    if (pin.length==4){
                        console.log("in process")
                        console.log("collect your money")
                        Receipt=v.question("do you want your receipt")
                        if (Receipt=="yes"){
                            console.log("Collect your receipt")
                            console.log("Thank you for using ATM")
                        }else if (Receipt=="no"){
                            console.log("i don't want receipt")
                            console.log("Ok take your caed")
                            console.log("Thank you for using ATM")
                        }
                    }else{
                        console.log("pin is dose not exists")
                        console.log("try again")
                        console.log("give your pin number correctly")
                    }
                }else{
                    console.log("no money in your account")
                    console.log("visit your respective Bank")
                    console.log("other vise contact this number (Andhra Bank customer care ")
                }
            }else if (Transaction=="money checking"){
                console.log("your balance is 10000RS ")
                console.log("take your receipt ")
                console.log("Thank you for using ATM ")
                console.log("enjoy your day")
                
            }
        }else{
            console.log("it is current A/c")
            console.log("you want to open your current acount")
            console.log("you need to give to Account number")
        }
    }else{
        console.log("Hindi and Telugu")
        console.log("this data is erresed")
        console.log("you can start from fisrt and continue with English Language")
    }
}else{
    if (card=="credit"){
    console.log("credit A/c we need more detailes")
    console.log("Aadhar and pan card")
    console.log("your card is not sufficient")
    console.log("contact your respective Bank or customer care")
    }
}

