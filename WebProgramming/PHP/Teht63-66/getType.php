<?php
function getTypes($conn)
{
// luodaan alasvetovalikko ja haetaan asiakastyypit siihen
    $query = "SELECT AVAIN, SELITE from asiakastyyppi";
    $response = @mysqli_query($conn, $query);

    if ($response) { // jos kysely onnistui
        echo '<select name="asty_avain"><option value=""></option>';
        while ($row = mysqli_fetch_array($response)) {
            echo '<option value="' . $row['AVAIN'] . '">' .
                $row['SELITE'] . '</option>';
        }
        echo '</select>';
    } else { // virheen sattuessa tulostetaan virheilmoitusta
        echo "<p style='color:red'>Virhe haettaessa dataa tietokannasta. Viesti: " . mysqli_error($conn) . "</p>";
    }
}
