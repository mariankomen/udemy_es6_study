let people = [
    {name: "Marian", age: 16, budget: 6000},
    {name: "Slavik", age: 43, budget: 50000},
    {name: "Roman", age: 15, budget: 12000},
    {name: "Vasia", age: 23, budget: 1200},
    {name: "Volodymyr", age: 67, budget: 100000},
]

const adults = people.filter(person => person.age >= 25 && person.budget >= 12001 && person.name.length > 6)
console.log(adults);
//Записує в новий об'єкт відфільтровані значення старого масиву