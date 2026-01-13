// const data = [
//   ["Name", "Age"],
//   ["Raj", 23],
//   ["Amit", 25]
// ];

// const table = document.createElement("table");
// table.border = "1";

// data.forEach((row, index) => {
//   const tr = document.createElement("tr");

//   row.forEach(cell => {
//     const cellElement = index === 0
//       ? document.createElement("th")
//       : document.createElement("td");

//     cellElement.textContent = cell;
//     tr.appendChild(cellElement);
//   });

//   table.appendChild(tr);
// });

// document.body.appendChild(table);


// const table = document.createElement("table");
//   table.border = "1";


//   const headerRow = document.createElement("tr");
//   const th1 = document.createElement("th");
//   th1.textContent = "Name";

//   const th2 = document.createElement("th");
//   th2.textContent = "Age";

//   headerRow.appendChild(th1);
//   headerRow.appendChild(th2);
//   table.appendChild(headerRow);


//   const dataRow = document.createElement("tr");

//   const td1 = document.createElement("td");
//   td1.textContent = "Raj";

//   const td2 = document.createElement("td");
//   td2.textContent = "23";

//    dataRow.appendChild(td1);
//   dataRow.appendChild(td2);
//   table.appendChild(dataRow);

//   document.body.appendChild(table);



// let h = document.querySelector("h1");
// h.innerHTML="hello raj"



// let btn = document.querySelector("button")
// let p = document.querySelector("p")

// btn.addEventListener("click",()=>{
//     p.innerHTML="Welcome Raj";
//     p.style.color="yellow"
//     p.style.fontSize="50px"
//     btn.style.color="blue"
// });



// let btn = document.querySelector("button")
// let ul = document.querySelector("#list")

// btn.addEventListener("click",()=>{
// let li = document.createElement("li")
//    li.innerText="New Item";
//    ul.appendChild(li)
// });


//     let marks = 45;

// let promise = new promise((resolve, reject)=>{

//     if(marks>35){
//         resolve("pass")
//     }else{
//         reject("Faill")
//     }
// });
// promise.then((result) => {
//     console.log(result);
    
// }).catch((err) => {
//     console.log(err);
// });



document.getElementById("username").value
if (u === "abc" && e === "abc@gmail.com" && p === "abc@123") {
alert("Login Success");
} else {
alert("Login Failed");
}

