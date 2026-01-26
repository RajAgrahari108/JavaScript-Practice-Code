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
 

const array2 = ["hi", "hello", "good"];
const count = array2.map((el,i)=>{
    return el.length;
})
// console.log(count);



// let numb=[12, 56, 78, 34, 89, 23];
// const graterNum = numb.filter((el)=>{
//     return el > 50;
// })
// // console.log(graterNum);



// let avg = [10, 20, 30, 40, 50];
// let avgNum = avg.reduce((el,i)=>{
//     return (el+i)/el;
// },0)
// console.log(avgNum);


const users = [
  { name: "Raj", age: 22 },
  { name: "Amit", age: 17 },
  { name: "Neha", age: 25 },
  { name: "Rohit", age: 19 }
];

const usrers = users.filter((el)=>{
    return el.age>18;
})
// console.log(usrers);

const names = users.map((el)=>{
    return el.name.toLocaleUpperCase();
})
// console.log(names);


const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 15000 }
];


const totalPri = products.reduce((el,i)=>{
    return el+i.price;
},0)
// console.log(totalPri);

// let array3 = [1, 2, 3, 4, 5, 6, 7, 8];
// const oddOrEven = array3.filter((el)=>{
//     if(el%2 !== 0){
//         return true;
//     }else{
//         return false ;
//     }
// })
// console.log(oddOrEven);

// const sumOdd = oddOrEven((sum, el)=>{
    
// })



const sumOdd = [1,2,3,4,5,6,7,8]
  .filter(num => num % 2 !== 0)
  .reduce((a, b) => a + b, 0);

// console.log(sumOdd);

let arr = [1,2,3,4];

// arr.forEach(el => {
//     console.log(el);
    
// });

for(let i=1; i<=5; i++){
    let ul = document.createElement('ul');
    ul.textContent= "this is ul" + i;
    document.body.appendChild(ul);
}
