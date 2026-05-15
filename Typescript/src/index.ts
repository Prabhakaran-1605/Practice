// let age : number = 20;


// any ------- Example

// let SonAge;


// function example (document ) {

// console.log(document)

// }

// it will throw implicitly any error

//  Correct one or else we need to make changes in the config.json file as false

// function example (document : any) {
//     console.log(document)
// }

// ------------------------------------------------------------------

// Array

// let number: number[] = [1,2,4,5]

// let number  = []

// let number: number[] = []

// by using typescript, it will provide code completion 

// number.forEach(n => n.toLocaleString).



// ----------------------------------------------------------------------------------


// Tuples


// let User : [number, string] = [1, "Prabhakar"]

// User.push(1)

// console.log(User)



// -------------------------------------------------------------------------

// enum Size {small, medium, large } 


// let mySize : Size = Size.large

// console.log(mySize)


// const enum Size { small, medium, large}
// let mySize : Size = Size.large
// console.log(mySize)

// -------------------------------------------------------------------------------------------
// functions

// function person (id : number, name : string): void {
//     console.log(id, name,"checking")
// }
// person(1,"prabhu")