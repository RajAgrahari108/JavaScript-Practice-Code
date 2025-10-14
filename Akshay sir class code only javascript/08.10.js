<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .container{
            height: 500px;
            width: 60vw;
            border: 2px solid black;
            margin: auto;
        }
        .form{
            width: 80%;
            margin: auto;
            padding: 20px 0px;
            display: flex;
            /* height: 100%; */
            background-color: yellow;
            flex-direction: column;
            gap: 20px;
            
        }
        .details{
            width: 100%;
            display: flex;
            justify-content: space-between;

        }
        .form-group{
            display: flex;
            flex-direction: column;
            gap: 10PX;
        }

    </style>
</head>
<body>
    <div class="container">
        <h1>Registration</h1>
             <form action="" class="form">
                <h2>Personal Details</h2>
                  <div class="details">
                      <div class="form-group">
                        <label for="">Full Name</label>
                    <input type="text" placeholder="Enter Your name">
                    </div>
                    <div class="form-group">
                        <label for="">Full Name</label>
                    <input type="text" placeholder="Enter Your name">
                    </div>
                    <div class="form-group">
                        <label for="">Full Name</label>
                    <input type="text" placeholder="Enter Your name">
                    </div>
                  </div>
                    <h2>Identity Details</h2>

                  <div class="details">
                      <div class="form-group">
                        <label for="">Full Name</label>
                    <input type="text" placeholder="Enter Your name">
                    </div>
                    <div class="form-group">
                        <label for="">Full Name</label>
                    <input type="text" placeholder="Enter Your name">
                    </div>
                    <div class="form-group">
                        <label for="">Full Name</label>
                    <input type="text" placeholder="Enter Your name">
                    </div>
                  </div>
                  <div class="details">
                      <div class="form-group">
                        <label for="">Full Name</label>
                    <input type="text" placeholder="Enter Your name">
                    </div>
                    <div class="form-group">
                        <label for="">Full Name</label>
                    <input type="text" placeholder="Enter Your name">
                    </div>
                    <div class="form-group">
                        <label for="">Full Name</label>
                    <input type="text" placeholder="Enter Your name">
                    </div>
                  </div>
                  <div class="details">
                      <div class="form-group">
                        <label for="">Full Name</label>
                    <input type="text" placeholder="Enter Your name">
                    </div>
                    <div class="form-group">
                        <label for="">Full Name</label>
                    <input type="text" placeholder="Enter Your name">
                    </div>
                    <div class="form-group">
                        <label for="">Full Name</label>
                    <input type="text" placeholder="Enter Your name">
                    </div>
                  </div>
             </form>
    </div>
</body>
</html>