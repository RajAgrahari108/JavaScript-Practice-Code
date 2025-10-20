<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./movie.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <nav class="nav">
        <div class="logo">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="">
        </div>
         <form action="" class="searchBar movieForm">
        <input type="search" class="searchTerm">
         <button><i class="fa-solid fa-magnifying-glass"></i></button>
         </form>
    </nav>
    <section class="movieContainer">

    </section>

    <script src="./movie.js"></script>
</body>
</html>


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.nav{
    height: 80px;
    background-color: rgb(228, 228, 228);
    border-bottom: 1px solid #a0a0a0;
    /* box-shadow: 0px 10px 10px 0px #e0e0e0; */
    padding: 0px 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.logo img{
     height: 60px;
}
.searchBar{
    width: 60%;
    height: 80%;
    border: 2px solid black;
    display: flex;
}
.searchBar input{
    width: 90%;
    padding: 0px 30px;
    font-size: 30px;
}
.searchBar button{
    flex-grow: 1;
    font-size: 30px;
}
.movieContainer{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    justify-content: center;
    padding: 50px;
    border: 2px solid black;
    border-radius: 30px;
}
.movies{
    height: 300px;
    width: 240px;
    border: 2px solid black;
    border-radius: 30px;
    transition: 0.5s ease all;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

}
.movies img{
    height: 60%;
    /* width: 100%; */
}
.movies:hover{
    box-shadow: 10px 10px 10px 0px #a0a0a0;
    transform: translateY(-10px);
}



let form = document.querySelector('.movieForm');
let searchTerm = document.querySelector('.searchTerm')
let movieContainer = document.querySelector('.movieContainer')
form.addEventListener('submit' ,async (e)=>{
    e.preventDefault()
    console.log(searchTerm.value);
    let url = `https://api.tvmaze.com/search/shows?q=${searchTerm.value}`;
    let res = await fetch(url)
    let data = await res.json()
    createUi(data)
    searchTerm.value = ""
})

function createUi(data){
    movieContainer.innerHTML = ""
    console.log(data);
    data.forEach((el)=>{
      
       if(el.show?.image?.medium){
          let card = document.createElement('div')
        card.classList.add('movies');
        let img = document.createElement('img')
        img.src = el.show.image.medium;
        let title = document.createElement('h3')
        title.textContent = el.show.name
        let lang = document.createElement('p')
        lang.textContent = el.show.language;
        card.appendChild(img)
        card.appendChild(title)
        card.appendChild(lang)
        movieContainer.appendChild(card)
   
       }
    })
}

