let people = [
    {name: "Marian", age: 20, budget: 6000},
    {name: "Slavik", age: 43, budget: 50000},
    {name: "Roman", age: 20, budget: 12000},
    {name: "Vasia", age: 23, budget: 1200},
    {name: "Volodymyr", age: 67, budget: 100000},
]

let x = people.reduce((total, people) => {
    return total + people.budget
},0)
//Редюс приймає 2 значення, це функцію колбек і початкове значення, сама функція колбек також приймає 2 значення
//в нашому випажку це тотал і піпл, їх назви можуть бути будь-які, тотал це початкове значення, і ми задаємо його
//після колбека, в нашому випадку це 0, а піпл це масив що приймається
//Reduce використовується для  того щоб повернути якесь 1 значення з масиву
let xxx = [1,2,3,4,5]
let y = xxx.reduce((start, arr) => {
    return start-(2*arr)
},0)

console.log(x);
console.log(y);