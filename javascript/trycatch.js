// example 1

// let result = add(10,20)
// console.log("Bye")

// example 2: 

// try {
//     let result = add(10,20)
//     console.log("Bye")
// }
// catch(err){
// console.log({name : err.name, message: err.message})
// }
// console.log("bye")

// example 3: 

function add (a,b){
return a+b;
}

try {
    let result = add(10,20)
    console.log(result)
}
catch(err){
console.log({name : err.name, message: err.message})
}
console.log("bye")