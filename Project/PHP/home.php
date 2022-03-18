<?php
session_start();
if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !=true) {
    header("location: login.php");
}
else {
    // echo $_SESSION['username'];
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="Images/" sizes="32x32">
    <link rel="stylesheet" href="home.css">
    <link rel="stylesheet" href="1000px.css">
    <!-- <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand&family=Righteous&display=swap" rel="stylesheet"> -->
    <title>To Do List</title>
</head>
<body>
    <nav>
    <div class="logo"><a href="index.php" class="titleLink">To Do List</a></div>
        <div class="nav-btns">
            <p class="username">Welcome,<img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"><?php echo $_SESSION['username']; ?></p>
            <a href="logout.php"><button class="login-btn">Logout</button></a>
        </div>
    </nav>

    <section>
        
    </section>
<script src="JS/main.js"></script>
</body>
</html>