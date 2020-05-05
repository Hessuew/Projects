<<<<<<< HEAD
<?php
session_start();
require_once 'customerConn.php';
if (isset($_GET['key'])) { // key on Teht64.php:ssa type="hidden"
    $avain = $_GET['key'];

    $query = "DELETE FROM asiakas WHERE AVAIN = $avain";

    $response = @mysqli_query($conn, $query);

    if ($response) { // Jos kysely onnistui, palataan aloitussivulle siten, että parametreina ovat $_SESSION[]-muuttujiin tallennetut hakuehdot
        header('Location: Teht64.php?name='.$_SESSION['n'].'&address='.$_SESSION['o'].'&asty_avain='.$_SESSION['aa'].'&search=Hae');
        exit();
    } else {
        echo "<p style='color:red'>Virhe poistettaessa dataa tietokannasta. Viesti: " . mysqli_error($conn) . "</p>";
    }
}
=======
<?php
session_start();
require_once 'customerConn.php';
if (isset($_GET['key'])) { // key on Teht64.php:ssa type="hidden"
    $avain = $_GET['key'];

    $query = "DELETE FROM asiakas WHERE AVAIN = $avain";

    $response = @mysqli_query($conn, $query);

    if ($response) { // Jos kysely onnistui, palataan aloitussivulle siten, että parametreina ovat $_SESSION[]-muuttujiin tallennetut hakuehdot
        header('Location: Teht64.php?name='.$_SESSION['n'].'&address='.$_SESSION['o'].'&asty_avain='.$_SESSION['aa'].'&search=Hae');
        exit();
    } else {
        echo "<p style='color:red'>Virhe poistettaessa dataa tietokannasta. Viesti: " . mysqli_error($conn) . "</p>";
    }
}
>>>>>>> 1bf856ecefdaa92726ff825197de633742624cf0
?>