let promise = new Promise ((resolve,reject)=>{
setTimeout(()=>{
reject("We have failed")
},2000);
setTimeout(()=>{
resolve("We have passed")
},5000);

}) 
promise.catch((reason)=>{
console.log(reason, "reason")
})