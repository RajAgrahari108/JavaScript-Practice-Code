// console.log(Math);

// ! Properties
// console.log(Math.PI); // 3.14159
// console.log(Math.SQRT2);
// console.log(Math.SQRT1_2);

// ! Math.abs()
// convert all the values to the absolute value
// console.log(Math.abs(-40)); // 40
// console.log(Math.abs(40)); // 40


// ! Math.floor()
// it will return the nearest lowest integer value
// console.log(Math.floor(20.9)); // 20
// console.log(Math.floor(30.5)); // 30




// ! Math.ceil()
// it will return the nearest highest integer value
// console.log(Math.ceil(20.9)); // 21
// console.log(Math.ceil(30.1)); // 31
// console.log(Math.ceil(30.4)); // 31





// +============================================================



// date 


// ! instantiation of date
// let date = new Date();
// console.log(date);
// console.log(date.toString())



// ! date.getFullYear()
// console.log(date.getFullYear());
// console.log(date.getMonth()); //0(jan)-11(dec) //8 ->sept
// console.log(date.getDay());
// console.log(date.getDate()); //24
// console.log(date.getHours()); //11
// console.log(date.getMinutes()); //23
// console.log(date.getSeconds()); 
// console.log(date.toLocaleDateString()); //9/24/2025     
// console.log(date.toLocaleTimeString()); //11:25:02 AM


// ! setter Methods 
let date2 = new Date()
// console.log(date2);

date2.setFullYear(2020)
date2.setMonth(10)
date2.setDate(20)
date2.setHours(20)
date2.setMinutes(13)
console.log(date2);