// employee constructor function 
function Employee (id,name,department,salary) {
this.id = id;
this.name = name;
this.department = department;
this.salary = salary
}
// create database
const employeeDb = {}

// add employee function 
function addEmployee (id,name,department,salary) {
 const employee = new Employee(id,name,department,salary)
 employeeDb[id] = employee
}

addEmployee(1,"Prabhakar", "Metallurgy", 70000)

console.log(employeeDb)

console.log(Object.values(employeeDb))
