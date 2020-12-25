let arr = ['Artem', 'Andrey', 'Stepan', 'Vova', 'Sasha'];

const [a,b, ...otherNames] = arr;
console.log(a,b,otherNames);