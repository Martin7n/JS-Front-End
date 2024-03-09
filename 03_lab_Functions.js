// 01. Format Grade
// 02. Math Power
// 03. Repeat String
// 04. Orders
// 05. Simple Calculator
// 06. Sign Check

// 01. Format Grade

function gradeFormat(grade){
    printG(grade)

    function printG(grade){
            console.log(compGrade(grade))
    }

    function compGrade(grade){
        if(grade< 3.00) return `Fail (2)` 
        if( grade>= 3.00 && grade < 3.50) return `Poor (${grade.toFixed(2)})`
        if( grade>= 3.50 && grade < 4.50) return `Good (${grade.toFixed(2)})`
        if( grade>= 4.50 && grade < 5.50) return `Very good (${grade.toFixed(2)})`
        if( grade>= 5.50) return `Excellent (${grade.toFixed(2)})`
    }


}

gradeFormat(3.33)
gradeFormat(4.50)
gradeFormat(2.99)

// 02. Math Power

function mathPow(nu1, pow1){
    console.log(nu1**pow1)

}
mathPow(2, 8)

// 03. Repeat String

function repStr(text, rep){
    return text.repeat(rep)
}

console.log(repStr("abc", 3))

// 04. Orders

function orderProduct(product, quantity){
    

    let pricing = function priceList(product){
        let prices = {"coffee": 1.50,
        "water": 1.00,
        "coke": 1.40,
        "snacks": 2.00};
        return Number(prices[product])

    }

    return (pricing(product)* quantity).toFixed(2)
}

console.log(orderProduct("water", 5))


// 05. Simple Calculator

function clc(a, b, operator) {
    const operations = {
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
    }

    console.log(operations[operator](a, b));
}

clc(5,5,'multiply')


// 06. Sign Check

function signCheck(...params) {

    let result = [...params].reduce((a, b) => a * b, 1)
    console.log(result >= 0 ? "Positive" : "Negative")
    
}

signCheck( 5,
    12,
   -15)
    