let arr = [1,2,362,-1312,[1,6,2,{id: 123, host: "Localhost"}], {name: "Marian", lastname: "Lyzhychka"}]
//[
//   1,
//   2,
//   362,
//   -1312,
//   [ 1, 6, 2, { id: 123, host: 'Localhost' } ],
//   { name: 'Marian', lastname: 'Lyzhychka' }
// ]
arr.shift();
arr.shift();
arr.shift();
arr.shift();

//after 4 times using .shift(), we delete 4 first items of array

console.log(arr);