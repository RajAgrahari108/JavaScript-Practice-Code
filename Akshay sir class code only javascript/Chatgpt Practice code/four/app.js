
// !1
//  Take input from the user as username ('rohit')
// Rohit
// rOHIT
// ROHIT
// let username = prompt('Enter Your Name');
// console.log(username);
// let firstLetter = username.charAt(0);
// let remLettter = username.slice(1)
// console.log(firstLetter.toUpperCase()+remLettter.toLowerCase());
// console.log(firstLetter.toLowerCase()+remLettter.toUpperCase());
// console.log(username.toUpperCase());


// function toCapitalize(str){
//     return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()
// }
// let name = 'AKSHAY';
// let res = toCapitalize(name)
// console.log(res);


============================================================================
// ! Ques 
// ! Check if a name starts with vowel or not
let username = prompt('Enter your name');
let fc = username.charAt(0)
if('aeiou'.includes(fc.toLowerCase())){
    console.log(`The name ${username} starts with a vowel`);
}else{
    console.log(`The name ${username} does not  starts with a vowel`);
}

=============================================================================
// Ques1: Return number of vowels in a string
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

// Ques2: Return number of words in a string
function countWords(str) {
  return str.trim().split(/\s+/).length;
}

// Ques3: Return number of spaces in a string
function countSpaces(str) {
  return (str.split(" ").length - 1);
}

// Ques4: Return the longest word from a string
function longestWord(str) {
  let words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

// Ques5: Reverse the letters of the string
function reverseLetters(str) {
  return str.split("").reverse().join("");
}

// Ques6: Reverse the words of the string
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

// Ques7: Identify if a name starts with a vowel
function startsWithVowel(name) {
  let first = name.trim()[0].toLowerCase();
  return "aeiou".includes(first);
}

// ------------------ Testing ------------------
let text = "this is java";

console.log("Vowels:", countVowels(text));          // Q1
console.log("Words:", countWords(text));            // Q2
console.log("Spaces:", countSpaces(text));          // Q3
console.log("Longest word:", longestWord(text));    // Q4
console.log("Reverse letters:", reverseLetters(text)); // Q5
console.log("Reverse words:", reverseWords(text));  // Q6
console.log("Starts with vowel?", startsWithVowel("apple")); // Q7


============================================================================================================

// ! question
// ! 1. reverse the words of the string without using a loop
// ! 'this is java' -> 'java is this'
// let str = 'this is java';
// let words = str.split(' ')
// words.reverse()
// console.log(words);

// ! 2. reverse the letters of the string without using a loop
//  'this is java' -> 'avaj si siht'
// let str = 'this is java';
// let letters = str.split(' ');
// letters.reverse()
// console.log(letters);
// console.log(letters.join(' '));


// ! Ques -> reverse a string without using a loop
let str = 'this is java';
let rev = str.split(' ').reverse().join(' ')
let rev1 = str.split('').reverse().join('')
console.log(rev);
console.log(rev1);


// ! take input from the user as two words and check if they are anagram or not
// ! elbow -> below
// ! eat -> tea



====================================================================================================

// ! Question 
// let arr = ['virat' , 200 , '' , null , undefined , NaN , 0 , 0n , false , true]
// let res = arr.filter((el ,i)=>{
//     return el;
// })
// console.log(res); // []

// ! convert all the names to Capitalize
// let names = ['atul' , 'pranav' , 'vishal' , 'ritesh','akshay'];
// let res = names.map((el)=>{
//     return el.charAt(0).toUpperCase()+el.slice(1).toLowerCase()
// })
// console.log(res);

// ! filter those names which are starting with a vowel
// let names = ['Atul' , 'pranav' , 'vishal' , 'ritesh','akshay'];
// let vowelNames = names.filter((el)=>{
//      return 'aeiou'.includes(el.charAt(0).toLowerCase())
// })
// console.log(vowelNames);

// ! filter those names which are ending with a vowel
// let names = ['Atulya' , 'pranava' , 'vishal' , 'ritesh','akshay'];
// let vowelNames = names.filter((el)=>{
//      return 'aeiou'.includes(el.at(-1).toLowerCase())
// })
// console.log(vowelNames);


// ! increment all the sal by 10%
let sal = [30000 , 10000 , 70000 , 20000 , 100000];
let res = sal.map((el)=>{
    return el + el*0.1
})
console.log(res);

// ! Ques -> reverse the characters of all names 
// let names = ['Atulya' , 'pranava' , 'vishal' , 'ritesh','akshay'];
// let reversedNames = names.map((el)=>{
//     return el.split('').reverse().join('')
// })
// console.log(reversedNames);


// ! Ques -> filter all the files related to web technology
// let files = ['index.html' , 'script.js' , 'docs.docx' , 'demo.txt' , 'hello.java' , 'first.c' , 'style.css' , 'resume.pdf' , 'data.json']

// let webFiles = files.filter((el)=>{
//     return el.endsWith('html') || el.endsWith('css') || el.endsWith('js') || el.endsWith('json')
// })
// console.log(webFiles);


// ! Ques -> filter all the numeric values;
// let values = ['1a23' , 10 , '231a' , 30 , 70 , '70']
// let numerics = values.filter((el)=>{
//     return typeof el == 'number'
// })
// console.log(numerics);

// ! Homework
// ! Ques 2 -> filter those names which are having length more than 6
let names = ['Atulyaa' , 'pranava' , 'vishal' , 'ritesh','akshay'];
// ! Ques 2 -> filter those names which starts and ends with a vowel
// ! Ques 3 -> suppose there is an array of all the price of the items in the cart 
// we have to give 20% discount on each item , after that if any item has price>10000 ,than we have to give again discount of 10%
// let price = [15000 , 8000 , 9000 , 2000]
// ! Ques 4 -> return the length of all the names in a new array 
// ! Ques 5 ->  


let names = ['Atulyaa', 'pranava', 'vishal', 'ritesh', 'akshay'];

let longNames = names.filter(name => name.length > 6);

console.log(longNames); // Output: ['Atulyaa', 'pranava']





let vowelNames = names.filter(name => {
  let firstChar = name[0].toLowerCase();
  let lastChar = name[name.length - 1].toLowerCase();
  return ['a', 'e', 'i', 'o', 'u'].includes(firstChar) &&
         ['a', 'e', 'i', 'o', 'u'].includes(lastChar);
});

console.log(vowelNames); // Output: ['Atulyaa']





let price = [15000, 8000, 9000, 2000];

let finalPrices = price.map(item => {
  let discountedPrice = item * 0.8; // 20% off
  if (discountedPrice > 10000) {
    discountedPrice *= 0.9; // additional 10% off
  }
  return discountedPrice;
});

console.log(finalPrices); 
// Output: [10800, 6400, 7200, 1600]






let nameLengths = names.map(name => name.length);

console.log(nameLengths); 
// Output: [7, 7, 6, 6, 6]


====================================================================

// ! reduceRight()
// !
// let arr = [10 , 20 , 30 , 40]
// let op = arr.reduceRight((acc , el)=>{
//     console.log(acc , el);
//     return acc*el
// })
// console.log(op);

// ! Ques1 ->Reverse a string by using reduce
// let str = 'Hey Hello Hii';
// let words = str.split(' ');
// console.log(words); // ['Hey', 'Hello', 'Hii']
// let rev = words.reduce((acc , el , i)=>{ //Hii Hello Hey
//    return el+' '+acc
// })
// let rev1 = words.reduceRight((acc , el , i)=>{
//    return acc+' '+el;
// })
// console.log(rev);
// console.log(rev1);

// ! Ques 2 -> Return the longest word in a string by using reduce
// let str1 = 'this is javascript we are learning'
// let words = str1.split(' ');
// let output = words.reduce((acc , el)=>{
//     return acc.length>el.length ? acc : el
// })
// console.log(output);
// ! Ques 2 -> Return the smallest word in a string by using reduce
// let str1 = 'this is javascript we are learning'
// let words = str1.split(' ');
// let output = words.reduce((acc , el)=>{
//     return acc.length<el.length ? acc : el
// })
// console.log(output);

// ! All array methods (specially -> join() , splice , all Advance Methods)
// ! All String Methods (specially -> split , slice , includes)


// 3. Using reduce() to Calculate the Sum of Even Numbers
// Given an array of numbers, use reduce() to calculate the sum of only the even numbers in the array.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sumOfEven = numbers.reduce((acc , el)=>{
//    if(el%2 == 0){
//       return acc+el   // 2 //6 //12 //20
//    }else{
//     return acc;   // 0 //2 //6 //12 // 20
//    }
// } , 0)
// console.log(sumOfEven);


//! 4. Mapping to Squares and Filtering
// You have an array of numbers. Use map() to square each number, then use filter() to keep only the squared values that are greater than 20.

// const numbers = [2, 3, 4, 5, 6];
// let sqr = numbers.map((el)=>{
//     return el*el
// })
// console.log(sqr);
// let filtered = sqr.filter((el)=>{
//     return el>20
// })
// console.log(filtered);


// ! 5. Chaining filter(), map(), and reduce() to Find Average of Even Numbers
// Given an array of numbers, chain filter(), map(), and reduce() to calculate the average of all even numbers in the array.

// const numbers = [10, 12, 15, 20, 25, 30];
// let even = numbers.filter((el)=>el%2==0)
// let sum = even.reduce((acc , el)=>acc+el)
// let avg = sum/even.length
// console.log(avg);


//! Finding the Maximum Element Using reduce()
// Given an array of numbers, use reduce() to find the maximum value in the array.
const numbers = [10, 5, 8, 23, 17];
let max = numbers.reduce((acc , el)=>{
    return acc>el ?acc:el
})
console.log(max);

//! 8. Mapping and Filtering for Even Length Strings
// You have an array of strings. Use map() to get the length of each string, and then use filter() to keep only those lengths that are even.

const words = ["hello", "world", "JavaScript", "is", "awesome"];
let evenLength = words.map((el)=>el.length).filter((el)=>el%2==0)
console.log(evenLength);



// ! Programming
let cart = [
    {
        pname : 'Iphone',
        price:70000,
        qty:3
    },
    {
        pname : 'PS5',
        price:54000,
        qty:1
    },
    {
        pname : 'LED 155',
        price:30000,
        qty:1
    },
    {
        pname : 'speakers',
        price:10000,
        qty:1
    }
]
// ! calculate the total of the cart 
let total = cart.reduce((acc , el , i , arr)=>{
    console.log(acc , el);
   return acc+el.price*el.qty;
} , 0)
console.log(total);


=============================================================
// ! Programming on objects 
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, rating: 4.5, stock: 30 },
  { id: 2, name: "Smartphone", category: "Electronics", price: 800, rating: 4.2, stock: 50 },
  { id: 3, name: "Coffee Maker", category: "Home Appliances", price: 150, rating: 4.7, stock: 100 },
  { id: 4, name: "Headphones", category: "Electronics", price: 100, rating: 3.9, stock: 200 },
  { id: 5, name: "Blender", category: "Home Appliances", price: 75, rating: 4.0, stock: 150 },
  { id: 6, name: "Washing Machine", category: "Home Appliances", price: 500, rating: 4.8, stock: 20 },
  { id: 7, name: "TV", category: "Electronics", price: 1500, rating: 4.3, stock: 10 },
  { id: 8, name: "Microwave", category: "Home Appliances", price: 200, rating: 4.1, stock: 60 },
  { id: 9, name: "Smartwatch", category: "Electronics", price: 300, rating: 4.0, stock: 75 },
  { id: 10, name: "Tablet", category: "Electronics", price: 450, rating: 4.6, stock: 40 },
  { id: 11, name: "Refrigerator", category: "Home Appliances", price: 900, rating: 4.5, stock: 25 },
  { id: 12, name: "Air Conditioner", category: "Home Appliances", price: 1200, rating: 4.8, stock: 15 },
  { id: 13, name: "Electric Kettle", category: "Home Appliances", price: 40, rating: 4.3, stock: 150 },
  { id: 14, name: "Printer", category: "Electronics", price: 150, rating: 3.7, stock: 120 },
  { id: 15, name: "Gaming Console", category: "Electronics", price: 500, rating: 4.4, stock: 30 },
  { id: 16, name: "Electric Toothbrush", category: "Personal Care", price: 60, rating: 4.6, stock: 200 },
  { id: 17, name: "Hair Dryer", category: "Personal Care", price: 40, rating: 4.2, stock: 250 },
  { id: 18, name: "Sofa", category: "Furniture", price: 800, rating: 4.7, stock: 20 },
  { id: 19, name: "Dining Table", category: "Furniture", price: 450, rating: 4.3, stock: 15 },
  { id: 20, name: "Chair", category: "Furniture", price: 100, rating: 4.0, stock: 200 }
];

// ! display all the products with rating more than 4.2
// let filteredRatings = products.filter((el)=>{
// //    console.log(el.rating);
//    return el.rating<=4.2
// })
// console.log(filteredRatings);

// ! sort based stock 
// let sortedStock = products.sort((p1 , p2)=>{
//    return p1.stock-p2.stock
// })
// console.log(sortedStock);

// let sortedId = products.sort((p1 , p2)=>{
//    return p2.id-p1.id
// })
// console.log(sortedId);

// ! sort based on price
// let sortedPrice = products.sort((a,b)=>{
//     return a.price-b.price
// })
// console.log(sortedPrice);


// ! filter all furniture products
// let furniture  = products.filter((el)=>{
//     return el.category == 'Furniture'
// })
// console.log(furniture);
// let Electronics  = products.filter((el)=>{
//     return el.category == 'Electronics'
// })
// console.log(Electronics);


// ! total stock 
console.log(products);

// let totalStock = products.reduce((acc , el)=>{
//   return acc+el.stock
// } , 0)
// console.log(totalStock);

// let totalPrice = products.reduce((acc , el)=>{
//   return acc+el.price*el.stock
// } , 0)
// console.log(totalPrice);

const detailedProducts = [
  {
    id: 1,
    name: "Laptop",
    brand: "Dell",
    category: "Electronics",
    price: 1200,
    rating: 4.5,
    stock: 30,
    discount: 10,
    isFeatured: true,
    tags: ["work", "portable", "windows"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-01-15"
  },
  {
    id: 2,
    name: "Smartphone",
    brand: "Samsung",
    category: "Electronics",
    price: 999,
    rating: 4.3,
    stock: 50,
    discount: 5,
    isFeatured: false,
    tags: ["android", "camera", "5G"],
    warranty: { years: 1, type: "Service Center" },
    addedOn: "2023-03-10"
  },
  {
    id: 3,
    name: "Blender",
    brand: "Philips",
    category: "Home Appliances",
    price: 90,
    rating: 4.0,
    stock: 200,
    discount: 15,
    isFeatured: false,
    tags: ["kitchen", "mixer", "easy-clean"],
    warranty: { years: 1, type: "Carry-in" },
    addedOn: "2022-11-22"
  },
  {
    id: 4,
    name: "LED TV",
    brand: "Sony",
    category: "Electronics",
    price: 1500,
    rating: 4.8,
    stock: 12,
    discount: 20,
    isFeatured: true,
    tags: ["smart", "4K", "entertainment"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-02-01"
  },
  {
    id: 5,
    name: "Air Fryer",
    brand: "Ninja",
    category: "Home Appliances",
    price: 180,
    rating: 4.6,
    stock: 80,
    discount: 10,
    isFeatured: false,
    tags: ["healthy", "kitchen"],
    warranty: { years: 1, type: "Carry-in" },
    addedOn: "2023-04-05"
  },
  {
    id: 6,
    name: "Gaming Console",
    brand: "Sony",
    category: "Electronics",
    price: 499,
    rating: 4.7,
    stock: 25,
    discount: 0,
    isFeatured: true,
    tags: ["gaming", "4K", "console"],
    warranty: { years: 1, type: "Service Center" },
    addedOn: "2023-05-15"
  },
  {
    id: 7,
    name: "Smartwatch",
    brand: "Apple",
    category: "Electronics",
    price: 399,
    rating: 4.4,
    stock: 60,
    discount: 8,
    isFeatured: true,
    tags: ["fitness", "watch", "iOS"],
    warranty: { years: 1, type: "Onsite" },
    addedOn: "2023-06-01"
  },
  {
    id: 8,
    name: "Washing Machine",
    brand: "LG",
    category: "Home Appliances",
    price: 750,
    rating: 4.5,
    stock: 18,
    discount: 12,
    isFeatured: false,
    tags: ["laundry", "automatic"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-01-10"
  },
  {
    id: 9,
    name: "Microwave",
    brand: "Panasonic",
    category: "Home Appliances",
    price: 200,
    rating: 4.2,
    stock: 100,
    discount: 15,
    isFeatured: false,
    tags: ["kitchen", "heating"],
    warranty: { years: 1, type: "Carry-in" },
    addedOn: "2022-12-15"
  },
  {
    id: 10,
    name: "Camera",
    brand: "Canon",
    category: "Electronics",
    price: 850,
    rating: 4.6,
    stock: 22,
    discount: 10,
    isFeatured: true,
    tags: ["dslr", "photography"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-02-25"
  },
  {
    id: 11,
    name: "Tablet",
    brand: "Lenovo",
    category: "Electronics",
    price: 300,
    rating: 4.1,
    stock: 70,
    discount: 5,
    isFeatured: false,
    tags: ["portable", "android"],
    warranty: { years: 1, type: "Service Center" },
    addedOn: "2023-07-20"
  },
  {
    id: 12,
    name: "Vacuum Cleaner",
    brand: "Dyson",
    category: "Home Appliances",
    price: 600,
    rating: 4.7,
    stock: 15,
    discount: 10,
    isFeatured: true,
    tags: ["cleaning", "cordless"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-05-30"
  },
  {
    id: 13,
    name: "Router",
    brand: "TP-Link",
    category: "Electronics",
    price: 120,
    rating: 4.3,
    stock: 90,
    discount: 20,
    isFeatured: false,
    tags: ["wifi", "internet"],
    warranty: { years: 1, type: "Carry-in" },
    addedOn: "2023-01-05"
  },
  {
    id: 14,
    name: "Air Conditioner",
    brand: "Samsung",
    category: "Home Appliances",
    price: 1000,
    rating: 4.6,
    stock: 10,
    discount: 18,
    isFeatured: true,
    tags: ["cooling", "summer"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-04-10"
  },
  {
    id: 15,
    name: "Monitor",
    brand: "LG",
    category: "Electronics",
    price: 280,
    rating: 4.2,
    stock: 40,
    discount: 10,
    isFeatured: false,
    tags: ["display", "hd", "work"],
    warranty: { years: 1, type: "Carry-in" },
    addedOn: "2023-08-01"
  },
  {
    id: 16,
    name: "Dishwasher",
    brand: "Bosch",
    category: "Home Appliances",
    price: 1100,
    rating: 4.7,
    stock: 8,
    discount: 25,
    isFeatured: true,
    tags: ["cleaning", "kitchen"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-03-15"
  },
  {
    id: 17,
    name: "Smart Speaker",
    brand: "Amazon",
    category: "Electronics",
    price: 130,
    rating: 4.0,
    stock: 120,
    discount: 5,
    isFeatured: false,
    tags: ["music", "voice", "alexa"],
    warranty: { years: 1, type: "Service Center" },
    addedOn: "2022-10-10"
  },
  {
    id: 18,
    name: "Electric Kettle",
    brand: "Prestige",
    category: "Home Appliances",
    price: 60,
    rating: 4.3,
    stock: 150,
    discount: 30,
    isFeatured: false,
    tags: ["tea", "boil", "kitchen"],
    warranty: { years: 1, type: "Carry-in" },
    addedOn: "2022-09-01"
  },
  {
    id: 19,
    name: "Projector",
    brand: "Epson",
    category: "Electronics",
    price: 650,
    rating: 4.4,
    stock: 30,
    discount: 12,
    isFeatured: true,
    tags: ["display", "entertainment"],
    warranty: { years: 2, type: "Onsite" },
    addedOn: "2023-06-25"
  },
  {
    id: 20,
    name: "Hair Dryer",
    brand: "Philips",
    category: "Personal Care",
    price: 45,
    rating: 4.1,
    stock: 180,
    discount: 15,
    isFeatured: false,
    tags: ["personal", "styling"],
    warranty: { years: 1, type: "Carry-in" },
    addedOn: "2023-07-01"
  }
];


// 💡 Advanced Questions by Concept
// 🔎 filter()

// Get all products that are featured.

// Find all electronics with a rating above 4.5.

// List all products that were added after March 2023.

// Filter products that have both a discount ≥ 15% and stock > 50.

// 🧭 map()

// Create a list of product names with their final price after discount.

// Map products to include a priceRange field: "Low" (<$100), "Medium" ($100–500), "High" (>$500).

// Extract a list of objects with only: name, brand, category.

// 🔍 find()

// Find the first product with a warranty of more than 1 year.

// Find a product with the tag "kitchen" and rating > 4.2.

// ➗ reduce()

// Calculate the total inventory value (sum of price × stock).

// Find the average rating of all Home Appliances.

// Count the number of products in each category.

// 📊 sort()

// Sort all products by price descending.

// Sort products by rating, and if equal, then by price ascending.

// Sort products alphabetically by name.

// ✅ every() / some()

// Check if all products have at least a 1-year warranty.

// Check if any product has more than 25% discount.

// Check if all products in Personal Care are under $100.

// 🔄 Combined / Advanced

// Find the top 3 most expensive products in Home Appliances.

// Get a list of all products with stock under 20 and sorted by rating.

// Find the most expensive product for each category.

// Group all products by their warranty type, showing counts in each.


===============================================================================
// ! Generate a random rgb color 
function randomColor(){
    let r = Math.round(Math.random()*255)
    let g = Math.round(Math.random()*255)
    let b = Math.round(Math.random()*255)
    return `rgb(${r} , ${g} , ${b})`
}
console.log(randomColor());



==========================================================
// ! printing the day and month based on value we are getting from the methods 
let date  = new Date()
// date.setMonth(10)
date.setDate(20)
let m = date.getMonth()
let d = date.getDay()
console.log(m);
console.log(d);
let months = ['jan' , 'feb' , 'mar' , 'apr' , 'may' , 'june' , 'july' , 'aug' , 'sep' , 'oct' , 'nov' ,'dec']
let days = ['sun' , 'mon' , 'tue' , 'wed' , 'thu' , 'fri' , 'sat']
console.log(months[m]);
console.log(days[d]);

