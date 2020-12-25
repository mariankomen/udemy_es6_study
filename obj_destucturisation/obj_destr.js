const person = {
    name: {
        firstName: "Ivan",
        lastName: "Franko",
    },
    age: 55
}
 const { name: {firstName: FIRSTNAME_1,lastName: LASTNAME_1}} = person;
console.log(FIRSTNAME_1, LASTNAME_1);