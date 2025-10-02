// let v = document.querySelector("h1")

// v.innerHTML= 'heheheh'
//  v.style.color= "red";
//  v.style.backgroundColor = 'black'

// v.addEventListener("click" ,function(){
//     v.innerHTML = 'hello javascript'
//     v.style.color = 'blue'
//     v.style.backgroundColor = "black"
// })


var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var flag = 0;
btn.addEventListener("click" , function(){
    if(flag == 0){
         bulb.style.backgroundColor= "yellow"
         console.log("Clicked");
         
         flag =1;
    }else{
         bulb.style.backgroundColor= "transparent"
          console.log("Again Clicked");
         flag =0;
    }
   
});