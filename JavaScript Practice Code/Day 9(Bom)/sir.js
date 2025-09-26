// ! Ques 1 -> What is JavaScript ? What all the characteristics are there
// ! Ques 2 -> What is Hoisting and TDZ
// ! Ques 3 -> What is Closure
// ! Ques 4 -> What is THE difference between == and === in js (what is coercion) 
// ! Ques 5 -> Explain Higher Order Function and Callback Function (without example)
// ! Ques 6 -> What is the difference between slice and splice 
// ! Ques 7 -> Explain following methods of string with suitable examples 
    // 1. split() // 2. includes // 3. charAt()
    // 4. difference b/w indexOf() and lastIndexOf()
// ! Ques 8 -> Explain following methods 
    // 1. join() // 2. forEach()// 3. map() // 4. reduce()
// ! Ques 9 -> What is an object , ways to create an object and methods of the object
// ! Ques 10 -> What is a method , Explain this keyword
// ! Ques 11 -> Explain call , apply , bind in javascript
// ! Ques 12 -> What is Date object and how do we display the date 
// ! Ques 13 -> What is Browser Object Model 
// ! Ques 14 -> What is Document Object Model
// ! Ques 15 -> What setInterval and setTimeout




// ! BOM
// BOM stands for Browser Object Model 
// It consist of the objects used to interact/control the browser environment
// BOM is the part of the browser , It is a global level object
// BOM is represented by a global level object called as window. 

let a = 30;
// console.log(window);
// ! Properties of window 
// !1. screen
// it will give the info about the current screen size 
// console.log(screen);
// console.log(screen.height);
// console.log(screen.width);
// console.log(screen.orientation); // landscape or portrait

// !2. history
// history object model is used to keep track of the webpages visited by current tab
// history provides us length , back() , forward()
// length -> it will return the num of webPages visited using current tab
// back() -> it is a method to move backward by 1 page
// forward() -> it is a method used to move forward by 1 page
// go(+-numOfPages)
// ! example
    //  history.go(2) // it will move forward by 2 pages
    //  history.go(-2) // it will move back by 2 pages

// ! 3. navigator
// navigator gives us the info about browser 
// console.log(navigator);
// console.log(navigator.language);
// console.log(navigator.onLine);

// ! 4. location
// location object represents the current location of the path / url
// console.log(location);
// console.log(location.href);
// console.log(location.port);
// console.log(location.protocol);
// console.log(location.pathname);
// location.reload() // it will reload the webpage
// ! assign
// it will assign a new address to the current tab
// location.assign('url')

// ! 5. DOM (document object model)
// ! 6. innerHeight
// ! 7. innerWidth
// ! 8. outerHeight
// ! 9. outerWidth
// console.log('innerHeight' , innerHeight);
// console.log('outerHeight' , outerHeight);
// console.log('innerWidth' , innerWidth);
// console.log('outerWidth' , outerWidth);

// ! methods 
// ! 1. prompt('')
// used to take input from the user
// ! 2. alert('')
// alert('Your laptop has been hacked')
// ! 3. confirm('')
// it will display a popup with a msg and two buttons ok an cancel
// it is used to take the confirmation from the user
// if user press ok -> true
// if user press cancel -> false
// let eligibleToVote = confirm('Are You eligible to vote or not')
// console.log(eligibleToVote);

// ? I will teach separately
// ! 4. setTimeout()
// ! 5. setInterval()
// ! 6. clearTimeout()
// ! 7. clearInterval()

// ! 8. open('url')
// open is used to open a new Tab
// ! 9. close()
// close is used to close the tabs we have open by using the script
// close will close the current tab
// open('https://www.flipkart.com')
// open('https://www.meesho.com')
// open('https://www.amazon.com')
// open('https://www.pinterest.com')
// close()