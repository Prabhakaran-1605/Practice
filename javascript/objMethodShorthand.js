// old Way

let method = {
    add : function (a,b) {
        return a + b;
    }
}

let add = method.add(1,4)

console.log(add)

// new way 

let newMethod = {
    add (a,b) {
        return a+b
    },
    multiply (c,d) {
        return c*d
    }
}

console.log(newMethod.add(1,7))

console.log(newMethod.multiply(2,2))