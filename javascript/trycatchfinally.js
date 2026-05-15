// example 1 
let result = 0

try {
    result = add(10,20)
    console.log(result)
}
catch(err) {
    console.log(err.name, err.message)
}
finally{
    console.log({result})
}

// example 2
let result1 = 0

function add1 (a,b){
    return a+b
}

try {
    result1 = add1(10,20)
    console.log(result1)
}
catch(err) {
    console.log(err.name, err.message)
}
finally{
    console.log({result1})
}