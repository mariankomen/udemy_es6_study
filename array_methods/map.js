let arr = [2,3,4,6,1,2,2,5]
let arr2 = arr.map(el => el)
//arr.map() Перебирає кожне значення, щось з ним робить і записує в новий масив
// в даному випадку ми просто перезаписуємо
let arr3 = arr.map(el => el+2) //Тут ми перезаписуємо і до кожного значення додаємо 2
console.log(`Arr: ${arr}`);
console.log(`Arr2: ${arr2}`);
console.log(`Arr3: ${arr3}`);