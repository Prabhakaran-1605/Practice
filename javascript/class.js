// class Pizza {
//     constructor (pizzaSize, pizzaType) {
//         this.size = pizzaSize,
//         this.type = pizzaType,
//         this.crust = "original"
//     }
//     bake() {
//     console.log(`Pizza  - ${this.size} and ${this.type}`)
// }

//     get pizzaCrust () {
//         return this.crust
//     }

//     set pizzaCrust (pizzaCrust) {
//         this.crust = pizzaCrust
//     }
// }


// const myPizza = new Pizza ("Large", "Crust")

// myPizza.bake()

// myPizza.pizzaCrust = "rareOne"

// console.log(myPizza.crust)


class Pizza {
        name = "newToTown";
        #password = "secret"
     constructor (pizzaSize, pizzaType) {
        this.size = pizzaSize,
        this.type = pizzaType,
        this.crust = "original"

    }
    bake() {
    console.log(`Pizza  - ${this.size} and ${this.type} ${this.#password}`)
}

    get pizzaCrust () {
        return this.crust
    }

    set pizzaCrust (pizzaCrust) {
        this.crust = pizzaCrust
    }
}


const myPizza = new Pizza ("Large", "Crust")

myPizza.bake()

myPizza.pizzaCrust = "rareOne"

console.log(myPizza.crust)

console.log(myPizza.passwordO)