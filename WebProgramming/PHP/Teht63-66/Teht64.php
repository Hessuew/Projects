<?php
// sessio alkaa
session_start();

require 'customerConn.php';
require 'getCustomer.php';
require 'getType.php';
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Teht64</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php
// seuraavat ovat t.66 dialogia varten
echo '<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/Redmond/jquery-ui.css">';
echo '<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>';
echo '<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30=" crossorigin="anonymous"></script>';
echo '<script src="t66dialog.js"></script>';
?>
</head>
<body>
    <form action="" method="GET">
    <label for="name">Nimi:</label>
    <input type="text" name="name">
    <label for="address">Osoite:</label>
    <input type="text" name="address">
    <input type="hidden" name="key">
    <?php
// kutsutaan funktiota, joka luo alasvetovalikon asiakastyypeille
getTypes($conn);
?>
    <input type="submit" name="search" value="Hae">

        <table border=1 cellpadding="5">
        <tr>
        <th>Avain</th>
        <th>Nimi</th>
        <th>Osoite</th>
        <th>Postinumero</th>
        <th>Postitoimipaikka</th>
        <th>Luontipvm</th>
        <th>Asty_avain</th>
        </tr>
<?php
if (isset($_GET['search'])) { // jos Hae- nappia painettu
    $nimi = $_GET['name'];
    $osoite = $_GET['address'];
    $asty = $_GET['asty_avain'];
    // sijoitetaan muuttujat sessioon
    $_SESSION['n'] = $nimi;
    $_SESSION['o'] = $osoite;
    $_SESSION['aa'] = $asty;
    // kutsutaan funktiota, joka hakee hakuehtojen mukaiset asiakastiedot
    getCustomer($_SESSION['n'], $_SESSION['o'], $_SESSION['aa'], $conn);
}
?>
        </table>
    </form>
    <button id="add">Lisää</button>
    <form id="lisaysD" action="insertCustomer.php" method="POST"> <!-- LISÄYSDIALOGI T.66 !-->
            <label for="nimi">Nimi</label>
            <input name="nimi" type="text">
            <br>
            <label for="osoite">Osoite</label>
            <input name="osoite" type="text">
            <br>
            <label for="postinro">Postinumero</label>
            <input name="postinro" type="text">
            <br>
            <label for="postitmp">Postitoimipaikka</label>
            <input name="postitmp" type="text">
            <br>
            <label for="asty_avain">Asiakastyyppi</label>
<?php
// kutsutaan funktiota, joka luo alasvetovalikon asiakastyypeille
getTypes($conn);
?>
            <br>
            <input type="submit" name="save" value="Tallenna">
    </form>
</body>
</html>