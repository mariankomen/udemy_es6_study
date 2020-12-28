let arr = [1,2,3]
let arr_1 = [2,3,4]

arr.push(...arr_1, -1)
arr.push(...arr_1, -2)
arr.push(...arr_1, -3)
arr.push(...arr_1, -5)

console.log(arr);