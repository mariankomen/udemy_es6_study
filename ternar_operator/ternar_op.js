const arr_1 = [1,2,3,4,5]
const arr_2 = [6,7,8,9,10]
const arr = [...arr_1, ...arr_2, 54,12,53,12,77,...arr_2]
console.log(Math.max(...arr));
