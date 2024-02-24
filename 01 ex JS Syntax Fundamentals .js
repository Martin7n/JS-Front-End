// 01. Ages
// 02. Vacation
// 03. Leap Year
// 04. Print And Sum
// 05. Multiplication Table
// 06. Sum Digits
// 07. Chars to String
// 08. Reversed Chars
// 09. Fruit
// 10. Same Numbers
// 11. Road Radar
// 12. Cooking by Numbers

// 01. Ages

function agger(aggge) {

    if (aggge >= 66) {
        console.log("elder");
    } else if (aggge >= 20) {
        console.log("adult")
    } else if (aggge >= 14) {
        console.log("teenager")
    } else if (aggge >= 3) {
        console.log("child")
    }
    else if (aggge >= 0) {
        console.log("baby")
    } else {
        console.log("out of bounds")
    }

}
agger(33)

// 02. Vacation

function vac(count, type, day) {


    const pricelist = {
        "Students": [8.45, 9.80, 10.46],
        "Business": [10.90, 15.60, 16],
        "Regular": [15, 20, 22.50]
    }
    let dayId = 0
    let price = 0;

    switch (day) {
        case "Friday": dayId = 0
            break;
        case "Saturday": dayId = 1
            break;
        case "Sunday": dayId = 2
            break;
        default:
            break;
    }

    switch (type) {
        case "Students":
            if (count >= 30) { price = pricelist[type][dayId] * count * 0.85 }
            else {
                price = pricelist[type][dayId] * count
            };
            break;
        case "Business":
            if (count >= 100) {
                price = pricelist[type][dayId] * (count - 10)
            } else {
                price = pricelist[type][dayId] * count
            };
            break;
        case "Regular":
            if (count >= 10 && count <= 20) {
                price = pricelist[type][dayId] * count * 0.95
            } else {
                price = pricelist[type][dayId] * count
            };
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`)
}


vac(30, "Students", "Sunday")
vac(40,
    "Regular",
    "Saturday")

//in order to make it short...total mess.

// 03. Leap Year

function leapY(yy) {
    if ((yy % 4 == 0 && yy % 100 != 0) || yy % 400 == 0) {
        console.log("yes");
    } else {
        console.log("no")
    }
}
leapY(1984)
leapY(2003)
leapY(4)
leapY(2000)

// 04. Print And Sum


function priSum(start, end) {
    let sum = 0;
    let result = "";


    for (let i = start; i <= end; i++) {
        result += i + " ";
        sum += i
    }
    console.log(`${result.trim()}\nSum: ${sum}`)
}

priSum(0, 26)

 


// 05. Multiplication Table

function mulipliTab(muNum) {
    let resMu = 0
    for (let index = 1; index <= 10; index++) {
        resMu = index * muNum;
        console.log(`${muNum} X ${index} = ${resMu}`)
    }
}
mulipliTab(5)

// 06. Sum Digits

function sumDig(digitToSum) {
    sumOfdig = 0;
    stringos = String(digitToSum)
    for (let index = 0; index < stringos.length; index++) {
        sumOfdig += Number(stringos[index])
    }
    console.log(sumOfdig)
}
sumDig(97561)

// 07. Chars to String

function chaToStr(z, x, y) {
    // console.log(`${z}${x}${y}`)
    // console.log(z+x+y)
}
chaToStr("a", "b", "c")

// 08. Reversed Chars
function rechaToStr(z, x, y) {
    console.log(y + x + z)
}
rechaToStr("a", "b", "c")

// 09. Fruit

function fruI(fruit, grams, price) {
    const weight = grams / 1000;
    const money = weight * price;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}
fruI('orange', 2500, 1.80)

// 10. Same Numbers

function sameNumerian(numToChe) {
    let stringNu = String(numToChe)
    let sumOfdigs = Number(stringNu[0]);
    let isItSame = true;

    for (let index = 1; index < stringNu.length; index++) {
        
        if (stringNu[0] !== stringNu[index]){isItSame = false};
    
        sumOfdigs += Number(stringNu[index]);
        }
    
    console.log(`${isItSame}\n${sumOfdigs}`)
}

sameNumerian(2222222)


// 11. Road Radar

function speedLim(speed, speedzone) {
    let limit = 0;
    let status = ["speeding", "excessive speeding", "reckless driving"]

    switch (speedzone) {
        case "motorway": limit = 130;
            break;
        case "interstate": limit = 90;
            break;
        case "city": limit = 50;
            break;
        case "residential": limit = 20;
            break;
    }
    let difference = speed - limit;
    // console.log(difference, speed, limit)
    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    } else if (difference <= 20) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status[0]}`)
    } else if (difference <= 40) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status[1]}`)
    } else if (difference > 40) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status[2]}`)
    }
}

speedLim(40, 'city')
speedLim(21, 'residential')
speedLim(120, 'interstate')

// 12. Cooking by Numbers



function cookNu(numbaa, ...commz) {
    let result = Number(numbaa);
    console.log(commz)
    for (let index = 0; index < commz.length; index++) {
        const element = commz[index];
        switch (element) {
            case "chop": result = result / 2; console.log(result);

                break;
            case "dice": result = Math.sqrt(result); console.log(result);

                break;
            case "spice": result = result +1; console.log(result);

                break;
            case "bake": result = result*3; console.log(result);

                break;
            case "fillet": result = result*0.8; console.log(result);

                break;
        }
    }
}

cookNu('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookNu('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
// chop - divide the number by two
// dice - square root of a number
// spice - add 1 to the number
// bake - multiply number by 3
// fillet - subtract 20% from the number
