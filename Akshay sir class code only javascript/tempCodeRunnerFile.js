let arr = ['virat' , 200 , '' , null , undefined , NaN , 0 , 0n , false , true]
let res = arr.filter((el ,i)=>{
    return el;
})
console.log(res); // []