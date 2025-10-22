let num = [2,3,4,6,8];
let mynum = num.map((el)=>{
return el*2;
})
// console.log(mynum);

// let num1 = [1, 2, 3, 4, 5, 6]
// let myNum1 = num1.filter((el)=>{
//     return (el%2==0);
// })
// console.log(myNum1);
// let num1 = [1, 2, 3, 4, 5, 6]
// let myNum1 = num1.map((el)=>{
//     return (el%2==0);
// })
// console.log(myNum1);

const name = ["apple", "banana", "kiwi", "grapes"];
const myName = name.filter((el)=>{
    return el.length>5
})
// console.log(myName);

let array = [10, 20, 30, 40];
let myArray = array.reduce((el,i)=>{
    return el+i;
},0)
// console.log(myArray);

let array1= [10, 20, 30, 40]
let mufd= array1.map((el)=>{
    return (el*9/5)+32;
})
// console.log(mufd);
// =======================================================


const scu=[1, 2, 3, 4, 5];
const squ= scu.map((el)=>{
    return el*el;
})
// console.log(squ);

// let a=10;
// console.log(a++ == a);
// console.log(++a == a);
// console.log(--a == a--);


// const max = [23, 45, 12, 67, 34];

//  const maxNum = max.reduce((el, i)=>{
//     if(i>el){
//        return i;
//     } else{
//         return el;
//     }  
    
//  }) 
//  console.log(maxNum);
 