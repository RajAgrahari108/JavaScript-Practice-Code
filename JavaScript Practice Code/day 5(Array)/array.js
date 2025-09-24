let myArr = [1, 2, 3, 4, 5, 6, 7];
// let myArray1 = ["Raj", "dhru","Ravi", "Papa", "maa"];
// const myArray2 = new Array(1, 2, 3, );
// console.log(myArr);
// console.log(myArray1);
// console.log(myArray2);


// ! push 

// myArr.push(8);
// console.log(myArr);


// !5. at(index)
// at will return the element present at a specific index , we can pass negative index also

// let arr = [10 , 20 , 30 , 40 , 10 , 20]
// console.log(arr.at(0));
// console.log(arr.at(-1));
// console.log(arr.at(-2));
// console.log(arr.at(-4));
// console.log(arr.at(3));


// !7. indexOf()
// it will return the index of the first occurrence of the element
// console.log(arr.indexOf(20)); // 0



// !8. lastIndexOf()
// it will return the index of the last occurrence of the element
// console.log(arr.lastIndexOf(30)); // 4



// !9. slice(s.i , e.i)
// it is used to extract an specific part of the array and it will return a new array 
// e.i will be excluded
// let arr = [10 , 20 , 30 , 40 , 10 , 20]
// let sub = arr.slice(1, 5)
// console.log(sub); //(4) [20, 30, 40, 10]



// ! map(callbackFn..)
// map is an advance method of the array which accepts a callback function 
// it will return an array with updated elements
// it will update all the elements of the array based on the expression we have return from the callback function
// let arr = [4 , 6 , 9 , 12]
// let res  = arr.map((el , i )=>{
//      return el * el *el
// })
// console.log(res);


// let newNum = arr.map((el, i) => {
//     return el + 10;
// })
// console.log(newNum);


// ! filter(callbackFn..)
// filter is an advance method of the array which accepts a callback function 
// filter is used to filter the array elements based on the condition
// it will return an array with all the element which satisfies the condition
// let arr = [4 , 6 , 9 , 12]
// let res  = arr.filter((el , i )=>{
//      return el%2==0;
// })
// console.log(res); 


// let arr2 = arr.filter((el, i) => el%2 ==0 )
// console.log(arr2);
