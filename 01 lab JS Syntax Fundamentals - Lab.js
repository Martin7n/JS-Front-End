// 01. Multiply Number by 2
// 02. Student Information
// 03. Excellent grade
// 04. Month Printer
// 05. Math Operations
// 06. Largest Number
// 07. Theatre Promotions
// 08. Circle Area
// 09. Numbers from 1 to 5
// 10. Numbers from M to N

// 01. Multiply Number by 2

function solver(input){
    let nu = Number(input)
    console.log(nu * 2)
}
solver(4)

// 02. Student Information


function studInf(studentname, studentage, studentgrade){
 

    console.log(`Name: ${studentname}, Age: ${studentage}, Grade: ${studentgrade.toFixed(2)}`)
}
studInf('John', 15, 5.54678)

// 03. Excellent grade

function studI(excel){

if (excel >= 5.50){
    console.log("Excellent")}
    else {
        console.log("Not excellent");}
    }

studI(5.50)

// 04. Month Printer

function monthly(monthIn){
    let month = {	'1':'January',
    '2':'February',
    '3':'March',
    '4':'April',
    '5':'May',
    '6':'June',
    '7':'July',
    '8':'August',
    '9':'September',
    '10':'October',
    '11':'November',
    '12':'December'	};
    if (monthIn > 12){
        console.log("Error!")
    } else {
     console.log(month[monthIn])
    }
}
monthly(2)

// 05. Math Operations

function calci(a, b, strr){

    switch(strr){
    case "+": console.log(a + b) ; break;
    case "-": console.log(a - b); break;
    case "*": console.log(a * b) ; break;   
    case "/": console.log(a / b); break;
    case "%": console.log(a % b); break;
    case "**": console.log(a ** b); break;
        }
    }

calci(5, 6, '+')


// 06. Largest Number

function largNu(c, d, e){
    let f = Math.max(c, d, e)
    console.log(f)
}
largNu(6, 17, 8)


// 07. Theatre Promotions

function theTre(ddday, agge){

switch(ddday){
    case "Weekday":{
        if (0<=agge && agge<=18){console.log("12$")}
        else if (18< agge && agge<= 64){console.log("18$")}
        else if(64< agge && agge<=122){console.log("12$")}
        else {console.log("Error!")}
    };break;
    case "Weekend":{
        if (0<=agge && agge<=18){console.log("15$")}
        else if (18< agge && agge<= 64){console.log("20$")}
        else if(64< agge && agge<=122){console.log("15$")}
        else {console.log("Error!")}
    };break;
    case "Holiday":{
        if (0<=agge && agge<=18){console.log("5$")}
        else if (18< agge && agge <= 64){console.log("12$")}
        else if(64< agge && agge<=122){console.log("10$")}
        else {console.log("Error!")}
    };break;
}
}

 theTre("Holiday", -02)

// 08. Circle Area

function cirkArea(cirkRadius){
    let inptype = typeof(cirkRadius)

    if (inptype != "number"){
    console.log(`We can not calculate the circle area, because we receive a ${inptype}.`);
    } else {
        let res = Math.PI*Math.pow(cirkRadius, 2)
        console.log(res.toFixed(2))
    }
}

cirkArea(5)

//09. Numbers from 1 to 5

function revNum(){
    for (i = 1; i <= 5; i++){
        console.log(i)
    }
}
revNum()

//10. Numbers from M to N

function numMN(m1, n1){

    for (i = m1; i >= n1; i--){
        console.log(i)
    }
}
numMN(4, 1)




