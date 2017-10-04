<?php 
header("Access-Control-Allow-Origin: *");

$servername = "X.x.x.X";
$username = "x.x.x.x";
$password = "x.x.x.x";
$dbname = "x.x.x.x";


$name=$_GET['username'];
$message=$_GET['message'];



$conn = new mysqli($servername, $username, $password, $dbname);
// Check connectio
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO messages (id, name, message)
VALUES (null, '$name', '$message')";

	if($conn->query($sql))
		$dataArray[0]="LoggedIN";








mysqli_close(conn);
echo json_encode($dataArray);


 ?>