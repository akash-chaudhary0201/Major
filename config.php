<?php

define('db_server', 'localhost');
define('db_username', 'root');
define('db_password', '');
define('db_name', 'login');

// Connecting to the database
$conn = mysqli_connect(db_server, db_username, db_password, db_name);

// Checking the connection
if ($conn == false) {
    dir('Error: Cannot Connect');
}

?>
