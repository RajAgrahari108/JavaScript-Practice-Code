// async function getData(){
//     setTimeout(function(){
//         console.log("I am inside set timeout block");
//         console.log("Raj");
        
//     },3000)
// }
// getData()f


// async function getData(){
//     try{
//         let a = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
//         let b= await a.json();
//     }catch(error)
//     {
//         console.log("Errer");
        
//     }
//     console.log(b);
// }
// getData();



// async function getData(){
//         let a = await fetch('https://jsonplaceholder.typicode.com/posts')
//         let b= await a.json();
//     console.log(a);
// }
// getData();


// let prices = [100, 200, 300];
// let gst = prices.map((el)=>{
//     return el+el*0.18;
// })
// console.log(gst);


let prices = [100, 200, 300];
let gst = prices.map(el=>el+el*0.18);
// console.log(gst);


let ages = [12, 18, 25, 10, 30];
let AG= ages.filter(el=>el>=18);
// console.log(AG);


let num = [10,12, 18, 25, 10, 30];
let sum = num.reduce((acc, el)=>{
    return acc + el;
},0);

// console.log(sum);


let marks = [80, 70, 90];
let marksSum = marks.reduce((acc, el)=>{
    return acc +  el;
},0)
console.log(marksSum);
