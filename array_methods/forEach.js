let people = [
    {name: "Marian", age: 20, budget: 6000},
    {name: "Slavik", age: 43, budget: 50000},
    {name: "Roman", age: 20, budget: 12000},
    {name: "Vasia", age: 23, budget: 1200},
    {name: "Volodymyr", age: 67, budget: 100000},
]

// people.forEach(function (person){
//     console.log(person)
// })
people.forEach(person => console.log(person.name, person.age))
console.log(people);
//Marian 20
// Slavik 43
// Roman 20
// Vasia 23
// Volodymyr 67