

// 1. Array Rotation
// 2. Print every N-th Element from an Array
// 3. List Of Names
// 4. Sorting Numbers
// 5. Reveal Words
// 6. Modern Times of #(HashTag)
// 7.String Substring
// 8. Pascal-Case Splitter


// 1. Array Rotation

function arrRot(massive, rotation) {

    let newArrr = massive;
    for (let index = 0; index < rotation; index++) {
        let shifted = newArrr.shift();
        newArrr.push(shifted)
    }

    console.log(newArrr.join(" "))
}


// arrRot([51, 47, 32, 61, 21], 2)
arrRot([32, 21, 61, 1], 4)
arrRot([2, 4, 15, 31], 5)

// 2. Print every N-th Element from an Array

function eveyNth(els, nthz) {
let result = [];
for (const elementh in els) {
    if (elementh % nthz === 0){
       result.push(els[elementh])
    }
}
return result

}

eveyNth(['5', '20', '31', '4', '20'], 2)
// eveyNth(['dsa','asd','test','tset'], 2)
// eveyNth(['1', '2','3', '4', '5'], 6)

// 3. List Of Names

function nameLi(nameList){
    result = []

    nameList.sort((a, b) => a.localeCompare(b)); 
    for (let i = 0; i < nameList.length; i++) {
        console.log(`${i+1}.${nameList[i]}`)  
    }

}

nameLi(["John", "Bob", "Christina", "Ema"])
// nameLi([1, 6, 2, 3])  console.log(nameList.sort((a, b) => a - b));

// 4. Sorting Numbers
// ...the strange solution

function numSort(numArray){
    let resultArray= [];
    numArray.sort((a, b) => a - b)
    // console.log(numArray)
    for (let i = 0; i < (numArray.length / 2); i++) {
        resultArray.push(numArray[i])
        if (numArray.length > resultArray.length){
        resultArray.push(numArray[numArray.length-i-1])}

    }
    return resultArray

}

console.log(numSort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 99]))
console.log(numSort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
console.log(numSort([3, 2, 1, 0, -1, -2, -3]))


function numSort2(arr){
    arr.sort((a, b) => a - b);
    let newArr = [];
    
    while (arr.length > 0){
        newArr.push(arr.shift());
        if (arr){
            newArr.push(arr.pop())
        }
    }
    
    return newArr
}
console.log(numSort2([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 99]))

// 5. Reveal Words
//another kind of strange solution

function revealWords(word1, text){
    let hellist = text.split(" ");
    let wordList = word1.split(", ");
   for (let index = 0; index < wordList.length; index++) {
     let word = wordList[index];
    for (let txt in hellist) {
        if (hellist[txt].includes("*") && hellist[txt].length === word.length) {
            hellist[txt] = word
        }
    }
}

    console.log(hellist.join(" "))
    
}

revealWords('great',
'softuni is ***** place for learning new programming languages')

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')


// 6. Modern Times of #(HashTag)

//The is additional condition - only alphabetical, so this one doesn't work for that.
function hashTagger(incomingTxt){
    let txtList = incomingTxt.split(" ")
    let result = [];
    for (let index = 0; index < txtList.length; index++) {
        const element = txtList[index];
        if (element.startsWith("#") && (element.length > 1))
        result.push(element.replace("#", ""))
    }

    console.log(result.join("\n"))
}

hashTagger('Nowadays everyone uses # to tag a #special word in #socialMedia')
hashTagger('The symbol # is known #variously in English-speaking #regions as the #number sign')

//regex solution agh
function hashTaggerReg(text) {
    const re = /#[a-zA-Z]+/gm;
    let matches = text.match(re);
 
    for (let match of matches) {
        // console.log(match)
        console.log(match.slice(1, match.length));
    }
}

hashTaggerReg('The symbol # is known #variously in English-speaking #regions as the #number sign')

// 7.String Substring
function striSubStri(searchWord, textArrr){
    let isTrue = false;
    let textList = textArrr.split(" ")

    for (const key in textList) {
            const element = textList[key];
            if (element.toLowerCase()===searchWord.toLowerCase()){ isTrue = true; }
            
        }
    if (isTrue){console.log(searchWord)}  else {console.log(`${searchWord} not found!`)}

}

// striSubStri('javascript',
// 'JavaScript is the best programming language')

// striSubStri('Javascript',
// 'Javascript')
striSubStri('python',
'JavaScript is the best programming language')


// 8. Pascal-Case Splitter
//Regex with looking ahead is the best here

function pasCaseSplit(textToSplit){

    let textToSplitAr = Array.from(textToSplit);

    for (let index = 0; index < textToSplitAr.length; index++){
            const element = textToSplitAr[index];
            if (element != element.toLowerCase()){
                textToSplitAr.splice(index-1, 0, " ")}}
        console.log(textToSplitAr)


}

pasCaseSplit('SplitMeIfYouCanHaHaYouCantOrYouCan')