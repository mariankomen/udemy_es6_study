let people = [
    {name: "Marian", age: 16, budget: 6000},
    {name: "Slavik", age: 43, budget: 50000},
    {name: "Roman", age: 15, budget: 12000},
    {name: "Vasia", age: 23, budget: 1200},
    {name: "Volodymyr", age: 67, budget: 100000},
]

const j = people.find(person => person.name === "Marian")
console.log(j.budget, j.name);
//helщoo

const jIndex = people.findIndex(person => person.name === "Roman")
console.log(`Roman's index is: ${jIndex}`);