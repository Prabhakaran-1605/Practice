function getUser (){
    return new Promise ((resolve)=>{
        let users = [];
        setTimeout (()=>{
            users = [
                {username: "prabhakar", age: 20},
                {username: "sabari", age: 10},
            ]
            resolve(users)
        },2000)
    })
}
function findUser (username) {
getUser().then((users)=>{
console.log(users, " user Info")
const user = users.find((user)=> {
return user.username === username
})
console.log(user)
})
}
findUser("sabari")