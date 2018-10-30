<?php
function getCustomer($nimi, $osoite, $asty, $conn)
{
    // oletuksena sql-kysely hakee kaikkien asiakkaiden tiedot
    $query = "SELECT AVAIN, NIMI, OSOITE, POSTINRO, POSTITMP, LUONTIPVM, ASTY_AVAIN FROM asiakas WHERE 1 = 1 ";
    if (!empty($nimi)) { // jos nimi-kenttään on syötetty jotain, lisätään kyselyyn hakuehto
        $query .= "AND NIMI = '" . $nimi . "'";
    }
    if (!empty($osoite)) { // jos osoite-kenttään on syötetty jotain, lisätään kyselyyn hakuehto
        $query .= "AND OSOITE = '" . $osoite . "'";
    }
    if (!empty($asty)) { // jos asiakastyyppi-kenttään on syötetty jotain, lisätään kyselyyn hakuehto
        $query .= "AND ASTY_AVAIN = $asty";
    }
    $response = @mysqli_query($conn, $query);

    if ($response) { // jos kysely onnistui
        while ($row = mysqli_fetch_array($response)) {
            echo '<tr><td>' .
                $row['AVAIN'] . '</td><td>' .
                $row['NIMI'] . '</td><td>' .
                $row['OSOITE'] . '</td><td>' .
                $row['POSTINRO'] . '</td><td>' .
                $row['POSTITMP'] . '</td><td>' .
                $row['LUONTIPVM'] . '</td><td>' .
                $row['ASTY_AVAIN'] . '</td><td><a href="deleteCustomer.php?key=' .
                $row['AVAIN'] . '">Poista</a></td>';
            echo '</tr>';
        }
    } else { // virheen sattuessa
        echo "<p style='color:red'>Virhe haettaessa dataa tietokannasta. Viesti: " . mysqli_error($conn) . "</p>";
    }
}
?>