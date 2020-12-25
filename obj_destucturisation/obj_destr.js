const person = {
    name: {
        firstName: "Ivan",
        lastName: "Franko",
    },
    age: 55,
    role: 'studier'
}
 const { role = "master"} = person;
console.log(role);