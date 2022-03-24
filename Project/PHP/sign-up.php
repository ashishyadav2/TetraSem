<?php
require_once "config.php";
$username = $password = $confirm_password = "";
$username_err = $password_err = $confirm_password_err = "";

if($_SERVER['REQUEST_METHOD'] == "POST") {
    // username validation
    if(empty(trim($_POST['username']))) {
        $username_err = `<p class="status">Username cannot be blank</p>`;
        echo $username_err;
    }
    else {
        $sql = "SELECT id FROM users_db WHERE username = ?";
        $stmt = mysqli_prepare($conn,$sql);
        if($stmt) {
            mysqli_stmt_bind_param($stmt,"s",$param_username);
            $param_username = trim($_POST['username']);

            if(mysqli_stmt_execute($stmt)) {
                mysqli_stmt_store_result($stmt); 
                if(mysqli_stmt_num_rows($stmt) == 1) {
                    $username_err = "The username is already taken";
                    echo $username_err;
                }
                else {
                    $username = trim($_POST['username']);
                }
            }
            else {
                echo "something went wrong";
            }
        }
    }
    mysqli_stmt_close($stmt);

// password validation
if(empty(trim($_POST['password']))) {
 $password_err = "Password cannot be blank";
 echo $password_err;
}
elseif(strlen(trim($_POST['password'])) < 6) {
 $password_err = "Password cannot be less than 6 characters";
 echo $password_err;
}
else {
    $password = trim($_POST['password']);
}

// confirm password validation
if(trim($_POST['password']) != trim($_POST['cpassword'])) {
    $password_err = "Password should match";
 echo $password_err;
}

if(empty($username_err) && empty($password_err) && empty($confirm_password_err)) {
    $email = $_POST['email'];
    $sql = "INSERT INTO `users_db` (`username`, `password`,`email`) VALUES (?, ?, ?);";

    $stmt = mysqli_prepare($conn,$sql);
    if($stmt) {
        mysqli_stmt_bind_param($stmt,"sss",$param_username,$param_password,$param_email);

        $param_username = $username;
        $param_password = password_hash($password,PASSWORD_DEFAULT);
        $param_email = $email;

        if(mysqli_stmt_execute($stmt)) {
            header("location: login.php");
        }
        else {
            echo "Something went wrong";
        }
    }
    mysqli_stmt_close($stmt);
}
mysqli_close($conn);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="Images/" sizes="32x32">
    <link rel="stylesheet" href="http://localhost/login%20form/CSS/style.css">
    <link rel="stylesheet" href="http://localhost/login%20form/CSS/theme.css">
    <title>To Do List: Sign Up</title>
</head>
<body>
    <nav>
    <div class="logo"><a href="http://localhost/login%20form" class="titleLink">To Do List</a></div>
        <div class="nav-btns">
        </div>
    </nav>

    <section>
        <div class="right-section">
        <div class="text">
            <p class="login-text">Sign Up</p>
            <p class="welcome-text">Welcome To To Do List</p>
        </div>
        <form action="" method="POST">
            <input type="text" name="username" id="uname" placeholder="Username">
            <input type="password" name="password" id="pass" placeholder="Password">
            <input type="text" name="cpassword" id="cpass" placeholder="Confirm Password">
            <input type="email" name="email" id="email" placeholder="E-Mail">
            <p class="status"></p>
            <input type="submit" id="submit-btn" value="Create an account">
        </form>
        <div class="suggestion">
            Have an account?&nbsp;<a href="login.php">Login</a>
        </div>
    </div>
    </section>

<script src="../JS/sign-up.js" type="text/script"></script>
<!-- INSERT INTO `users_db` (`id`, `username`, `password`, `email`) VALUES (NULL, 'ashish', 'ashish123', 'unixm98@gmail.com'); -->
</body>
</html>