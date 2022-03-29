<?php
// Database configuration file

define('DB_HOST', 'localhost');
define('DB_USERNAME', 'id18429634_root');
define('DB_PASSWORD', 'root&Admin55');
define('DB_NAME', 'id18429634_sign_up');
// define('DB_PORT', 3306);

// connect to database
$conn = mysqli_connect(DB_HOST,DB_USERNAME,DB_PASSWORD,DB_NAME);
// $conn = mysqli_connect(DB_SERVER,DB_USERNAME,DB_USERNAME,DB_NAME,DB_PORT);

if($conn == false) {
    die('Error: cannot connect to database');
}
?>