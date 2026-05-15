// fetch function will act like promises

// jsonplaceholder for dummy data api call

// GET METHOD
fetch ('https://jsonplaceholder.typicode.com/todos/1')
.then ((res)=>{
return res.json()
})
.then ((json)=>{
console.log(json)
})


// POST METHOD
fetch("https://jsonplaceholder.typicode.com/posts", {
    method : "post",
    headers: {
        "Content-Type" : "application/json"
    },
    body : JSON.stringify({
        userId : 1,
        name : "Prabhakar",
        Age : 25    
    })
})

.then (res => res.json())
.then (json => console.log(json, "jsonData"))
