// ! map(callbackFn..)
// map is an advance method of the array which accepts a callback function 
// it will return an array with updated elements
// it will update all the elements of the array based on the expression we have return from the callback function
// let arr = [4 , 6 , 9 , 12]
// let res  = arr.map((el , i )=>{
//      return el * el *el
// })
// console.log(res);
// let arr = [4 , 6 , 9 , 12]
// let res  = arr.map((el , i )=>{
// })
// console.log(res); //[undefined, undefined, undefined, undefined]

// let arr = [4 , 6 , 9 , 12]
// let res  = arr.map((el , i )=>{
//     return el%2 == 0
// })
// console.log(res); //(4) [true, true, false, true]



// ! filter(callbackFn..)
// filter is an advance method of the array which accepts a callback function 
// filter is used to filter the array elements based on the condition
// it will return an array with all the element which satisfies the condition
// let arr = [4 , 6 , 9 , 12]
// let res  = arr.filter((el , i )=>{
//      return el%2==0;
// })
// console.log(res); // [4, 6, 12]
// let res  = arr.filter((el , i )=>{
//      return el*el;
// })
// let res  = arr.filter((el , i )=>{
// })
// console.log(res); // []
// let res  = arr.filter((el , i )=>{
//     return el;
// })
// console.log(res); // []



// ! reduce()
// reduce is used to convert the array into a single value
// reduce will return a single value
// reduce will accepts two arguments , 1.callback function , 2.initalValue