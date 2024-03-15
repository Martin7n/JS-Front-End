// 01. Employees
// 02. Towns
// 03. Store Provision
// 04. Movies
// 05. Inventory
// 06. Word Tracker
// 07. Odd Occurrences
// 08. Piccolo
// 09. Make a Dictionary
// 10. Class Vehicle

// 01. Employees

  // Object.entries(result).forEach(key => console.log(`Name: ${key} -- Personal Number: ${result[key]}`) )
    // .sort((a, b) => a[0].localeCompare(b[0]))

function employList(listed) {
    const result = {}
    listed.forEach(element => result[element] = element.length)
  

    for (const key in result) {

        console.log(`Name: ${key} -- Personal Number: ${result[key]}`)
    }

    
}

employList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])


// 02. Towns

function towns(iinput) {

    const towmList = []

    
    iinput.forEach(element => {
        let [tname, lat, long] = element.split(" | ")
        const ttown = new Object();
        ttown.town=tname;
        ttown.latitude=Number(lat).toFixed(2);
        ttown.longitude=Number(long).toFixed(2);
        towmList.push(ttown)
        })
        towmList.forEach(element => {
            console.log(element)})
        
    }

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])


// 03. Store Provision

function storePro(stock,order ){


    const storeProducts = {}

    for (let i = 0; i < stock.length; i+=2) {
        const product = stock[i]
        const quantity = Number(stock[i + 1]);
        storeProducts[product] = quantity
    }

    for (let idx = 0; idx < order.length; idx+=2) {
        const product = order[idx]
        const quantity = Number(order[idx + 1]);
        if (!storeProducts[product]){
            storeProducts[product] = 0
        } 
        storeProducts[product] += quantity}

        for (const product in storeProducts) {
            console.log(`${product} -> ${storeProducts[product]}`)
                
            }
        }


storePro(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])


// 04. Movies

function solve(input) {
    const movies = [];

    for (const row of input) {
        const addMovieCommand = 'addMovie';
        const directedByCommand = 'directedBy';
        const onDateCommand = 'onDate';

        if (row.includes(addMovieCommand)) {
            const movie = {
                name: row.substring(addMovieCommand.length + 1),
            };

            movies.push(movie);
        } else if (row.includes(directedByCommand)) {
            const [movieName, director] = row.split(` ${directedByCommand} `);
            const movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.director = director;
            }
        } else if (row.includes(onDateCommand)) {
            const [movieName, date] = row.split(` ${onDateCommand} `);
            const movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.date = date;
            }
        }
    }
    //  movies.forEach(movie => console.log(JSON.stringify(movie)))
    movies
        .filter(movie => movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)));
}

// 05. Inventory

function regHero(herolist){

    const heroes = []

    for (let index = 0; index < herolist.length; index++) {
        const element = herolist[index].split(" / ");
        hero = element[0]
        lev = Number(element[1])
        items = element[2]
        hero = {name: hero, level: lev, items: items}
        heroes.push(hero)
    }


    heroes.sort((a, b) => a.level - b.level).forEach(element => {console.log(
    `Hero: ${element.name}\nlevel => ${element.level}\nitems => ${element.items}`)
}
    )

}

regHero([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])


// 06. Word Tracker

function wTracker(listOfWords){
    const searchedWords = listOfWords.shift().split(" ")
    const words = {}
    for (const w of searchedWords) {
        words[w] =0
    }

    for (const wrd of listOfWords) {
        if (words.hasOwnProperty(wrd) ){words[wrd] += 1}}
        
    
    // console.log(words).sort((a, b) => b[1] - a[1])

    Object.entries(words).sort((a, b) => b[1] - a[1]).forEach(([word, occurrences]) => console.log(`${word} - ${occurrences}`))        
    

}
wTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])

// 07. Odd Occurrences

function oddOccur(wordzz){
    
    const wdz = {}



  for (const word of wordzz.split(" ")) {
    if (!wdz.hasOwnProperty(word.toLowerCase())){
        wdz[word.toLowerCase()] = 0 
    }  wdz[word.toLowerCase()] += 1 }

  
    const result = []
    for (const word in wdz) {
        if (wdz[word] % 2 != 0) {
            result.push(word);
        }
    }

    console.log(result.join(" "))

    // Object.entries(wdz).forEach(
    // ([key, value]) => value % 2 != 0 ? console.log(key, value) : console.log(value, key)
    // )
    
}

oddOccur('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
// oddOccur('Java Java Java PHP Java PhP 3 C# 3 1 5 C#') 


// 08. Piccolo

function picoLO(line){

    const cars = {}
    
    for (let index = 0; index < line.length; index++) {
    const element = line[index];
    [command, registration] = element.split(", ")
    
    if (command === "IN"){
        cars[registration] = 0
    } else {
        delete cars[registration]
    }
}
    // console.log(cars)
    // for (const key in cars ) {
    //     console.log(cars[key], key)}
    

    if (Object.entries(cars) <1 ){console.log("Parking Lot is Empty")} else{

        Object.entries(cars).sort((a, b) => (a[0]).localeCompare(b[0])).forEach(word => console.log(word[0])) }       

}


picoLO(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])


// 09. Make a Dictionary

function makeDic(input) {
    const dictionary = {};

    const words = input.map(JSON.parse)
    
    for (const wordObj of words) {
        const word = Object.keys(wordObj)[0];

        dictionary[word] = wordObj[word];
    }
    
    Object.entries(dictionary)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([term, definition]) => console.log(`Term: ${term} => Definition: ${definition}`))
}

makeDic([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])


// 10. Class Vehicle

class Vehicle{
    #parts = {}
    constructor( type, model, parts, fuel){
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = Number(fuel);
        // this.engine =  Number(parts[engine]),
        // this.power =  Number(parts[power]),
        // this.quality =  this.engine * this.power
    }
    set parts(value) {
        this.#parts = {
            engine: value.engine,
            power: value.power,
            quality: value.engine * value.power,
        }
    }

    get parts() {
        return this.#parts;
    }


    
    drive(amount){
        this.fuel -= amount
    }
    


}





let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);