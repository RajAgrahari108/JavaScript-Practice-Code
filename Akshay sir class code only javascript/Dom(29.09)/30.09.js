
// ! create element 
// ! document.createElement('tag')
// ! appendChild(element)
// let body = document.body;
// let demo = document.createElement('div')
// demo.innerText = 'Hello '
// console.log(demo);
// body.appendChild(demo)

// ! adding a para in body by using dom 
let body = document.body;
let para = document.createElement('p');
para.innerHTML = 'Bye'
body.appendChild(para)

// ! creating an ordered list with 1 item 
// let body = document.body
// let ol = document.createElement('ol');
// let li = document.createElement('li')
// li.innerHTML = 'coffee';
// let li2 = document.createElement('li')
// li2.innerHTML = 'Tea'
// ol.appendChild(li)
// ol.appendChild(li2)
// body.appendChild(ol)

// ! creating a list based on an array 
// let body = document.body
// let vegetables = [
//     "Carrot",
//     "Broccoli",
//     "Spinach",
//     "Kale",
//     "Cauliflower",
//     "Cabbage",
//     "Zucchini",
//     "Eggplant",
//     "Tomato",
//     "Potato",
//     "Sweet Potato",
//     "Beetroot",
//     "Turnip",
//     "Radish",
//     "Onion",
//     "Garlic",
//     "Leek",
//     "Celery",
//     "Asparagus",
//     "Green Beans",
//     "Peas",
//     "Bell Pepper",
//     "Chili Pepper",
//     "Artichoke",
//     "Brussels Sprouts",
//     "Cucumber",
//     "Lettuce",
//     "Arugula",
//     "Okra",
//     "Pumpkin"
// ]

// let ol = document.createElement('ol')
// vegetables.forEach((el)=>{
//     let li = document.createElement('li')
//     li.innerHTML = el;
//     ol.appendChild(li)
// })
// body.appendChild(ol)


// ! creating img element
// let body = document.body;
// let img = document.createElement('img');
// img.src = "https://plus.unsplash.com/premium_photo-1673002094195-f18084be89ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// img.height = '500'
// console.log(img);
// body.appendChild(img)


// let urls = [
//     'https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
//      'https://images.unsplash.com/photo-1481988535861-271139e06469?q=80&w=1190&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//      'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
// ]

// let body = document.body
// urls.forEach((el)=>{
//     let img = document.createElement('img');
//     img.src = el;
//     img.height = '300'
//     img.width = '500'
//     body.appendChild(img)
// })

// ! creating the links by using DOM
// let address = [
//     "https://www.google.com",
//     "https://www.wikipedia.org",
//     "https://www.amazon.com",
//     "https://www.youtube.com",
//     "https://www.reddit.com",
//     "https://www.facebook.com",
//     "https://www.twitter.com",
//     "https://www.instagram.com",
//     "https://www.linkedin.com",
//     "https://www.netflix.com"
// ]
// let body = document.body
// address.forEach((el , i)=>{
//      let a = document.createElement('a')
//      a.href = el;
//      a.innerHTML = `Link${i+1}`
//      body.appendChild(a)
// })

// ! delete
// let l4 = document.querySelector('.list-4')
// let l1 = document.querySelector('.list-1')
// l4.remove()
// l1.remove()