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



async function getData(){
        let a = await fetch('https://jsonplaceholder.typicode.com/posts')
        let b= await a.json();
    console.log(a);
}
getData();


