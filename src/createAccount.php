<?php
$servername = "x.x.x";
$username = "x.x.x";
$password = "x.x.x";
$dbname = "x.x";

$name=$_POST['username'];
$pass=$_POST['password'];



// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO users (id, username, password)
VALUES (null, '$name','$pass')";

if ($conn->query($sql) === TRUE) {
    echo "New account created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

mysqli_close(conn);

?>

