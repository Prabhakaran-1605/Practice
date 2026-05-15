let urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
    "https://jsonplaceholder.typicode.com/posts/4"
]

async function fetchUrls(){ 
for await (const url of urls) {
    const data = await fetch(url);
    const jsonData = await data.json()
    console.log(jsonData.title)
}
}

fetchUrls()