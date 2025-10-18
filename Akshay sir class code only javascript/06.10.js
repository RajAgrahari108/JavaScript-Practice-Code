<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        div{
            height: 200px;
            width: 140px;
            /* border: 2px solid black; */
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            transition: 0.4s ease all;
        }
        div img{
            height: 100%;
        }
        .rotate{
            transform: rotate(180deg);
        }
    </style>
</head>
<body>
    <div class="car" style="top:0px; left:0px">
        <img src="https://freepngimg.com/thumb/car/146513-car-top-view-png-image-high-quality.png" alt="">
    </div>

    <script>
        let car = document.querySelector('.car')
        console.log(parseInt(car.style.top));
        
        window.addEventListener('keypress' , (e)=>{
           if(e.key.toLowerCase() == 'a'){
                car.style.left = parseInt(car.style.left)-10+'px';
           }
           if(e.key.toLowerCase() == 'w'){
                car.style.top = parseInt(car.style.top)-10+'px';
           }
           if(e.key.toLowerCase() == 'd'){
             car.style.left = parseInt(car.style.left)+10+'px';

           }
           if(e.key.toLowerCase() == 's'){
                car.style.top = parseInt(car.style.top)+10+'px';
           }
           if(e.key.toLowerCase() == 'r'){
                car.classList.toggle('rotate')
           }
            
        })
    </script>
</body>
</html>









<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            height: 300px;
            width: 200px;
            border: 2px solid black;
            background-color: red;
        }
    </style>
</head>
<body>
    <!-- <label for="">UserName</label>
    <input type="text" class="user">
    <h1>Hello</h1>
    <div class="card"></div>
    <button class="btn1">Click</button> -->


    <!-- ! Event object -->
    <!-- <button class="btn2">Button 2</button> -->
     <!-- <input type="text" class="inp1"> -->

    <script>
        // let btn = document.querySelector('.btn1')
        // let h1 = document.querySelector('h1')
        // let div = document.querySelector('.card')
        // btn.addEventListener('dblclick' ,()=>{
        //     h1.innerHTML = 'Bye'
        // } )
        // btn.addEventListener('mouseenter' ,()=>{
        //     h1.innerHTML = 'Welcome'
        // } )
        // btn.addEventListener('mouseout' ,()=>{
        //     h1.innerHTML = 'Good Bye'
        // } )
        // div.addEventListener('mousemove' , ()=>{
        //     console.log('Mouse is moving');
        // })

        // ! keyboard events 
        // let user = document.querySelector('.user')
        // user.addEventListener('keydown' , ()=>{
        //     console.log('Key is down');
        // })
        // user.addEventListener('keypress' , ()=>{
        //     console.log('Key is pressed');
        // })
        // user.addEventListener('keyup' , ()=>{
        //     console.log('Key is up');
        // })

        // ! Event handler function
        // a function which is used to handle the event in addEventListener is called as event handler function
        // ! event object
        // ! event object is an argument passed to the event handler function , which contains all the details about the event
        // we can pass a parameter in the function
        // let btn2 = document.querySelector('.btn2')
        // btn2.addEventListener('click' , (a)=>{
        //     console.log(a);
        // })

        // let inp1 = document.querySelector('.inp1')
        // inp1.addEventListener('keypress' , (e)=>{
        //     console.log(e.key);
        // })

        window.addEventListener('keypress' , (e)=>{
            console.log(e.key);
        })


    </script>
</body>
</html>