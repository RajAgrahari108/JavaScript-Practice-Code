const myObject = {
    js: "Javscript",
    cpp: "c++",
    re : "rudy",
    Swift : "swift by aplplr"
}


for (const key in myObject) {
    // console.log(`{key}`);
    // console.log(`${key} of my object is ${myObject[key]}`);
    
    
}


const coding = ["js", "c++", "java", "c", "python"];


coding.forEach(function (el){
    console.log(el);
        
})
coding.forEach((el,i)=>{
    // console.log(el, i);  forech loop
    
})

coding.forEach(function (el,i,arr){
    console.log(el,i,arr);

})


