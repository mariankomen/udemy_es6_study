const person = {
    name: {
        firstName: "Ivan",
        lastName: "Franko",
    },
    age: 55
}
 const { name: {firstName, lastName}} = person;
console.log(firstName, lastName);