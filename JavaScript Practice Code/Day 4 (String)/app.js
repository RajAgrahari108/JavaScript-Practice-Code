// ! substring


let str = 'Raj Agrahari';
let str2 = 'Panagarh';
console.log(str.length);
console.log(str.substring(2,10));

console.log(str.split(' '));


//  !12. replace('prevSubst' , 'newSubst')
// it will replace the first occurence of a substring with a new substing
// let str3 = 'HAHAHAHAHAHEHEHEHEHE'
// let temp = str.replace('HA' , 'HE')
// console.log(temp);
// !12. replaceAll('prevSubst' , 'newSubst')
// it will replace the all tge occurence of a substring with a new substing
let str3 = 'HAHAHAHAHAHEHEHEHEHE'
let temp = str3.replaceAll('HA' , 'HE')
let temp1 = str3.replaceAll('HE' , 'HA')
console.log(temp);
console.log(temp1);


 