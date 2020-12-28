let arr = [1,1,1,1,1]
// [ 1, 1, 1, 1, 1 ]
arr.unshift(5)
// [ 5, 1, 1, 1, 1, 1 ]
let ArrToAdd = [4,19,-123,{id:1, name: "Richard"}]
arr.unshift(...ArrToAdd);
//[ 4, 19, -123, { id: 1, name: 'Richard' }, 5, 1, 1, 1, 1, 1 ]
//If we need to add item on start of arr we should use .unshift()

console.log(arr);



