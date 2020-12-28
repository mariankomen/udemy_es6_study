const arr = ['a','A','#','B','c','KL']

console.log(arr.some(test => test === 's')) //false
console.log(arr.some(test => test === 'F')) // false
console.log(arr.some(test => test === '#')) // true
console.log(arr.some(test => test === 'KL')) // true

//Приймає функцію і повертає true or false, перевіряє чи є хоча б 1 елемент який ми шукаємо в масиві