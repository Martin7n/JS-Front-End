// 1. Sum First and Last Array Elements
// 2. Reverse an Array of Numbers
// 3. Even and Odd Subtraction
// 4. Substring
// 5. Censored Words
// 6. Count String Occurrences


// 1. Sum First and Last Array Elements (from Fundamentals)

function sumFiLaEle(input){
    console.log(input[0] + input[input.length-1])
}

sumFiLaEle([20, 30, 40])



// 02. Reverse an Array of Numbers (from Fundamentals)

function revArNum(selector, numbers){
    let numsArr = numbers;
    let newArr = [];
    for (let index = selector-1; index >= 0; index--) {
        let el = numsArr[index];
        newArr.push(numsArr[index]);
    }
    console.log(newArr.join(" "))

}

revArNum(3, [10, 20, 30, 40, 50])
revArNum(4, [-1, 20, 99, 5])



// 3. Even and Odd Subtraction (from Fundamentals)
function evOddSub(arrr){

    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arrr.length; i++) {
        sum1 += arrr[i] % 2 === 0 ? arrr[i]: 0 
        sum2 += arrr[i] % 2 !== 0 ? arrr[i]: 0 
    }
        // if (arrr[i] % 2 === 0) {sum1 += arrr[i]
        // }else{
        //     sum2+=  arrr[i]
        // }

    
    console.log(sum1-sum2)

}
 evOddSub([1,2,3,4,5,6])
 evOddSub([3,5,7,9])
 evOddSub([2,4,6,8,10])


//  4. Substring

function subS(text, id1, id2){
    console.log(text.slice(id1, id1+id2));
}

subS('ASentence', 1, 8)
subS('SkipWord', 4, 7)
subS('123456789', 4, 6)

// 5. Censored Words
function cenZword(text, word){

    let censored = text
    // console.log(sometext.replace(wordTo, "*".repeat(wordTo.length)))
    while (censored.includes(word)){
        censored = censored.replace(word, "*".repeat(word.length))
    }
    console.log(censored)
}
cenZword('A small sentence with some words', 'small')
cenZword('Find the hidden word', 'hidden')


// 6. Count String Occurrences

function strReoCurr(sometext, stringSe){
    
    newText = sometext.split(" ")
    counter = 0
    for (let word of newText) {
       if (word === stringSe){counter += 1}
    }
    console.log(counter);

}
strReoCurr('This is a word and it also is a sentence',
'is')
strReoCurr('Raz dva tri raz dva tri raz dva tri', 
'tri')