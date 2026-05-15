let person = {
    firstName : "prabhakar",
    lastName : "Haribaskar",

    get fullname (){
        return `${this.firstName} ${this.lastName}`
    },
    set fullname(value) {
        const [first,last] = value.split(" ")
        this.firstName = first
        this.lastName = last
    }
}

console.log(person)

console.log(person.fullname)

person.fullname = "SabariNathan Haribaskar"

console.log(person)
console.log(person.fullname)


// Getter and setter is used to create a new property and update it as well 



