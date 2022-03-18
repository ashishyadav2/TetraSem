<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="icon" href="Images/" sizes="32x32"> -->
    <link rel="stylesheet" href="home.css">
    <link rel="stylesheet" href="1000px.css">
    <!-- <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand&family=Righteous&display=swap" rel="stylesheet"> -->
    <title>To Do List</title>
    <style>
        nav {
    width: 100%;
    padding: 15px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--white-alt);
    position: fixed;
}
nav .logo {
    font-family: var(--font-logo);
    font-size: var(--font-medium);  
    color: var(--primary-color);
}

.nav-btns .login-btn, .nav-btns .sign-up-btn{
    padding: 8px 0;
    width: 85px;
    font-size: var(--font-small);
    cursor: pointer;
    transition: 0.3s;
}

.login-btn {
    border:2px solid var(--accent-color);
    background-color: transparent;
    color: var(--accent-color);
    font-family: var(--font-primary);
    margin: 0  10px 0 0;
}
.login-btn:hover {
    background-color: var(--accent-color);
    color: var(--white);
}

.login-btn a{
    text-decoration: none;
}

.sign-up-btn {
    background-color: var(--primary-color);
    outline: none;
    border: none;
    border:2px solid var(--primary-color);
    color: var(--white);
    font-family: var(--font-primary);
}
.sign-up-btn:hover {
    background-color: transparent;
    color: var(--primary-color);
}

.sign-up-btn a{
    text-decoration: none;
}
    </style>
</head>
<body>
    <nav>
    <div class="logo"><a href="index.php" class="titleLink">To Do List</a></div>
        <div class="nav-btns">
            <a href="login.php"><button class="login-btn">Login</button></a>
            <a href="sign_up.php"><button class="sign-up-btn">Sign Up</button></a>
        </div>
    </nav>

    <section>
        <div class="text-div">
            <div class="heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, officiis ipsam cumque qui eveniet neque?
            </div>
            <div class="content">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium possimus dolores iusto blanditiis, illum a quam est, autem, ipsa nisi officia eos. Quod accusamus possimus doloremque iure fuga culpa unde. Omnis repudiandae ex sapiente explicabo a suscipit temporibus, et porro placeat corporis voluptate voluptates architecto, beatae quibusdam est aspernatur mollitia?
            </div>
            <a href="#"><button class="create-now">Create Now</button></a>
        </div>
        <div class="image-div"> 
            <img src="https://i.pinimg.com/originals/31/36/cd/3136cd447c99783f59cd1a4c7d9ca9c1.png" alt="image">
        </div>
    </section>
</body>
</html>