// 01. Person Info
// 02. City
// 03. Convert to Object
// 04. Convert to JSON
// 05. Phone Book
// 06. Meetings
// 07. Address Book
// 08. Cats
// 09. Songs

// 01. Person Info

function personInfo(firstName, lastName, age){
    const person = {firstName, lastName, age}
    // return {firstName, lastName, age}
    return person


}


console.log(personInfo("Peter", 
"Pan",
"20"))

// 02. City

function city(obj){

for (const key in obj) {
    console.log(`${key} -> ${obj[key]}`)
    }
}

let myobj = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}

city(myobj)

// 03. Convert to Object

function convJson(stri){
    let person = JSON.parse(stri);
    for (const key in person) {
        {
           console.log(`${key}: ${person[key]}`);   
        }
    }

}

convJson('{"name": "George", "age": 40, "town": "Sofia"}')

// 04. Convert to JSON


function toJson(name, lastName, hairColor){
    const person = {name, lastName, hairColor}
    console.log(JSON.stringify(person))

}
toJson('George', 'Jones', 'Brown')

// 05. Phone Book

function phoBoo(args){
    const phoneBooked = {}
    for (let index = 0; index < args.length; index++) {
        const element = args[index];
        const [name, number] = element.split(" ")
        phoneBooked[name] = number
        
    }

    for (const key in phoneBooked) {
        console.log(`${key} -> ${phoneBooked[key]}`)
        }
   

}

phoBoo(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])

// 06. Meetings

function meetEr(incoming) {
    const schedule = {}
    incoming.forEach(element => {
        let day = element.split(" ")[0]
        let name = element.split(" ")[1]

        if (schedule[day]){console.log(`Conflict on ${day}!`)
    } else {
        schedule[day] = name
        console.log(`Scheduled for ${day}`);
    }
    });
    for (const day in schedule) {
        console.log(`${day} -> ${schedule[day]}`)
    } ;

}

meetEr(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])

// 07. Address Book

function adrrBo(nameAdresses){
    const addressBook = {}
    nameAdresses.forEach(element => {let [name, adress] = element.split(":"); addressBook[name] = adress;
})

    // const addressBook.fromEntries(entries)

    Object.entries(addressBook)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(([name, address]) => console.log(`${name} -> ${address}`))

    // Object.entries(addressBook)
    // .sort((a, b) => a[1].localeCompare(b[1]))
    // .forEach(([name, address]) => console.log(`${name} -> ${address}`))


}
    
    adrrBo(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])

// 08. Cats

function kittyCats(input){

    class Cat{
        constructor(name, age){
            this.name = name
            this.age = Number(age)
            
        }

        meow(){
                console.log(`${this.name}, age ${this.age} says Meow`);
            }

        }

        // input
        // .map(line => line.split(' '))
        // .map(([name, age]) => new Cat(name, age))
        // .forEach(cat => cat.meow())
       const newList = []
       input.forEach(element => {
        [a, b] = element.split(" ")
        newList.push(new Cat(a, b))
       });
       
       newList.forEach(element => element.meow())

    }



kittyCats(['Mellow 2', 'Tom 5'])

// 09. Songs

function songOf(listed) {

    class Song{
        constructor(typeList, name, time){
        this.typeList = typeList
        this.name = name
        this.time = time
    }
    }

    const numSongs = listed.shift();
    const searchType = listed.pop()
    const listOf = []
    for (let index = 0; index < listed.length; index++) {
        const element = listed[index];
        [typeList, name1, typtimee] = element.split("_")
        listOf.push(new Song(typeList, name1, typtimee))
    }
    if (searchType==="all"){
        listOf.filter(element =>  (element.name && element.time) ).forEach(element => console.log(element.name))

    } else{
    listOf.filter(element =>  (element.name && element.time && element.typeList===searchType) ).forEach(element => console.log(element.name))
}
    
}


songOf([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])
