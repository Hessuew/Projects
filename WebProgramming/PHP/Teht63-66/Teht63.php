<?php
session_start();
// $_SESSION['table']-muuttuja on taulukko, johon session kaupungit ja lämpötilat tallennetaan
if (!isset($_SESSION['table'])) { // jos uusi sessio, tehdään $_SESSION['table']- muuttujasta tyhjä taulukko
    $_SESSION['table'] = array();
} else { // muutoin tehdään olemassa olevasta $_SESSION['table']- taulukosta $_SESSION['table']-taulukko
    $table = $_SESSION['table'];
    $_SESSION['table'] = $table;
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Teht63</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <form action="Teht63_func.php" method="POST">
    <label for="city">Kaupunki:</label>
    <input type="text" name="city">
    <label for="temp">Lämpötila:</label>
    <input type="text" name="temp">
    <input type="submit" name="save" value="Tallenna">
    <input type="submit" name="print" value="Tulosta">
    </form>
</body>

</html>