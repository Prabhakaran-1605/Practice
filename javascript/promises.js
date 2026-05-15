// promise is an object 

// promise has 3 states - pending, fulfilled, rejected

const promise = new Promise ((resolve)=> {
setTimeout(()=>{
    let user = {name: "prabhakar", age: 20}; resolve("resolved")
    console.log(user)
},5000)
})


