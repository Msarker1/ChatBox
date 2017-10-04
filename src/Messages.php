<?php 


$servername = "X.x.x.X";
$username = "x.x.x.x";
$password = "x.x.x.x";
$dbname = "x.x.x.x";

$name=$_GET['user'];
$pass=$_GET['pass'];



$conn = new mysqli($servername, $username, $password, $dbname);
// Check connectio
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 



$query = "SELECT * from users where username='$name' AND password='$pass'";
 $result=mysqli_query($conn,$query);
  

 $sql = "SELECT * from messages";
$result1 = $conn->query($sql);

if(mysqli_num_rows($result)===1){
	$c=0;
	 while($row = $result1->fetch_assoc()) {
	 	$dataArray[$c]=$row["name"].":".$row["message"];
	 	$c++;

	 }
}
     
else
    echo "NA";




mysqli_close(conn);
echo json_encode($dataArray);


 ?>