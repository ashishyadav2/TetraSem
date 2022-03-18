<?php 
session_start();
// check for login
if(isset($_SESSION['username'])) {
    header("location: home.php");
    exit();
}
require_once "config.php";
$username = $password = "";
$err = "";

if($_SERVER['REQUEST_METHOD'] == "POST") {
    if(empty(trim($_POST['username'])) || empty(trim($_POST['password']))) {
        $err = "Please enter username + password";
    }
    else {
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);
    }
    if(empty($err)) {
        $sql = "SELECT id, username, password FROM users_db WHERE username = ?";
        $stmt = mysqli_prepare($conn,$sql);
        mysqli_stmt_bind_param($stmt, "s", $param_username);
        $param_username = $username;

        if(mysqli_stmt_execute($stmt)) {
            mysqli_stmt_store_result($stmt); 
            if(mysqli_stmt_num_rows($stmt) == 1) {
                mysqli_stmt_bind_result($stmt,$id, $username, $hashed_password);
                if(mysqli_stmt_fetch($stmt)) {
                    if(password_verify($password, $hashed_password)) {
                        session_start();
                        $_SESSION['username'] = $username;
                        $_SESSION['id'] = $id;
                        $_SESSION['loggedin'] = true;

                        header("location: home.php");
                    }
                }
            }
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="Images/" sizes="32x32">
    <link rel="stylesheet" href="style-login.css">
    <link rel="stylesheet" href="1000px.css">
    <!-- <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand&family=Righteous&display=swap" rel="stylesheet"> -->
    <title>To Do List: Login</title>
</head>
<body>
    <nav>
        <div class="logo"><a href="index.php" class="titleLink">To Do List</a></div>
        <div class="nav-btns">
        </div>
    </nav>

    <section>
        <div class="left-section"></div>
        <div class="right-section">
        <div class="text">
            <p class="login-text">Login</p>
            <p class="welcome-text">Hello Again!</p>
        </div>
        <form action="" method="POST">
            <input type="text" name="username" id="uname" placeholder="Username">
            <input type="password" name="password" id="pass" placeholder="Password">
            <p class="status">Invalid login</p>
            <input type="submit" id="submit-btn" value="Login">
        </form>
        <div class="suggestion">
            Don’t have account yet?&nbsp;<a href="sign_up.php">Sign Up</a>
        </div>
    </div>
    </section>

</body>
</html>