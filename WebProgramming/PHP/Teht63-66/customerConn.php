<<<<<<< HEAD
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Customer";
// luodaan yhteys
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Tietokantayhteys epäonnistui: " . mysqli_connect_error());
}
echo "<p style='color:green'>Tietokantayhteys muodostettu onnistuneesti </p>";
=======
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Customer";
// luodaan yhteys
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Tietokantayhteys epäonnistui: " . mysqli_connect_error());
}
echo "<p style='color:green'>Tietokantayhteys muodostettu onnistuneesti </p>";
>>>>>>> 1bf856ecefdaa92726ff825197de633742624cf0
?>