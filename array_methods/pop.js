let arr = [2,4,61,'helo', {id: 1, name: "Carl"}, [2,3,1],-31,"Finish"]
//Якщо нам треба видалити останній елемент масиву юзаємо .pop()
arr.pop()
// [ 2, 4, 61, 'helo', { id: 1, name: 'Carl' }, [ 2, 3, 1 ], -31 ]
arr.pop()
//[ 2, 4, 61, 'helo', { id: 1, name: 'Carl' }, [ 2, 3, 1 ] ]
arr.pop()
//[ 2, 4, 61, 'helo', { id: 1, name: 'Carl' } ]
console.log(arr);


