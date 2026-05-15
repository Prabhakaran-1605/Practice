let person =  {
    name: "prabhakar",
    age: 20
}

let stringifyData = JSON.stringify(person)
console.log(stringifyData,"data")

let parseData = JSON.parse(stringifyData)

console.log(parseData)