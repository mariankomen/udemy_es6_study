const person = {
    name: {
        firstName: "Ivan",
        lastName: "Franko",
        role: 'studier'
    },
    age: 55,

}
 const { permissions = {role = "helo"} = {}} = person;
console.log(role);