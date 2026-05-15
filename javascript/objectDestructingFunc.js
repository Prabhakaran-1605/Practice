// without destructing

function displayUser (user) {
    console.log(`Name: ${user.name} Age: ${user.age}  `)
}

displayUser({name: "Prabhakar", age : 30})

// with destructing

// with destruction in the function we can give the default value to avoid undefined value error.

function newUser ({name="Prabhuji",age }) {
    console.log(`Name: ${name} Age: ${age}  `)
}

newUser({ age: 20})