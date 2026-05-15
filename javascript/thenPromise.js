let promise = new Promise ((resolve)=> {
    setTimeout(()=>{
let user = {
    name: "prabhakar",
    age : 30
};
resolve(user)
    },5000)
})

promise.then((result)=>{
console.log("result:", result)
})

