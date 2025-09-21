// ! substring


// let str = 'Raj Agrahari';
// let str2 = 'Panagarh';
// console.log(str.length);
// console.log(str.substring(2,10));

// console.log(str.split(' '));


//  !12. replace('prevSubst' , 'newSubst')
// it will replace the first occurence of a substring with a new substing
// let str3 = 'HAHAHAHAHAHEHEHEHEHE'
// let temp = str.replace('HA' , 'HE')
// console.log(temp);
// !12. replaceAll('prevSubst' , 'newSubst')
// it will replace the all tge occurence of a substring with a new substing
// let str3 = 'HAHAHAHAHAHEHEHEHEHE'
// let temp = str3.replaceAll('HA' , 'HE')
// let temp1 = str3.replaceAll('HE' , 'HA')
// console.log(temp);
// console.log(temp1);


// ! collback function 

// function sum(p1 , p2){
//     console.log(p1+p2); 
// }
// function sub(p1 , p2){
//     console.log(p1-p2); 
// }
// function mult(p1 , p2){
//     console.log(p1*p2); 
// }



// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// function sayBye() {
//   console.log("Goodbye!");
// }

// greet("Raj", sayBye);



//  function calc(a , b ,c){
//     a(b,c)
// }
// calc(sum , 10 , 5)
// calc(sub , 10 , 5)
// calc(mult , 10 , 5)
 

// ! 2. anonymous function

// let a = function(){
//     console.log('I am anonymous function');
// }
// a()


// ! iifr

// let res = (function sum(a , b){
//    console.log(a+b);
//    return a+b
// })(10 , 12)
// console.log(res);



// !9. NESTED FUNCTION
// if we declare one function inside another function 
// debugger;
function outer(){
    console.log('Outer function');
    return function inner(){
        console.log('Inner function');
    }
}
let r = outer()
r()