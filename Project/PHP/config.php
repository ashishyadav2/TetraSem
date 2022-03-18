<?php
// Database configuration file

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'sign_up');
define('DB_PORT', 3307);

// connect to database
$conn = mysqli_connect(DB_SERVER,DB_USERNAME,DB_USERNAME,DB_NAME,DB_PORT);

if($conn == false) {
    die('Error: cannot connect to database');
}
?>