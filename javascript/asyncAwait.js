const fetchData = () =>{
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve("fetchNewData completed")
        },3000)
    })
}

// by using thenable we are processing the data 
// const processedData = () => {
//     fetchData()
//     .then((data)=> {
//         console.log("data:", data)
//     })
//     .catch ((err)=>{
//         console.log(err)
//     })
// }

// processedData()


// async await is used to make asynchronous execute in a synchronous manner 

async function processedData () {
    try {
    const data = await fetchData()
    console.log(data,"Data")
    console.log("Completed by using async await")
    }
    catch (err){
    console.log("Error Info: ", err.name, err.message)
    }
}
processedData()