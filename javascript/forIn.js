let decoration = {
    color : "red",
    radius : 5
}

console.log(decoration["color"])

console.log("----------")

for (const prop in decoration){
    console.log(prop);
    
}
console.log("--------------")
for (const prop in decoration){
console.log(decoration[prop]) 
}

console.log("------------------")
// in Array 

const arr = ["hello", 1, "javascript", false]

for (let x in arr) {
    console.log(x)
}

console.log("------------------")

for (let x in arr) {
    console.log(arr[x])
}