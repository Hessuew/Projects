<?php
     session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Teht63_func</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <?php
    if (isset($_POST['save'])) { // tallenna-nappia painettu
        if (empty($_POST['city']) || empty($_POST['temp'])) { // tarkistetaan, onko syötekentät tyhjiä
            echo "Syötä kaupunki ja lämpötila!";
            header('refresh:2;Teht63.php');
            exit();
        }
        else { // jos syötekentät eivät ole tyhjiä, talletetaan ne $_SESSION- muuttujiin
            $_SESSION['city'] = $_POST['city'];
            $_SESSION['temp'] = $_POST['temp'];
            // tarkistetaan, onko kaupungille jo syötetty lämpötila
            foreach($_SESSION['table'] as $key => $value) {
                if ($key == $_SESSION['city']) { // jos on, palataan aloitussivulle
                    echo 'Kaupungille '.$_SESSION['city'].' on jo syötetty lämpötila!';
                    // palataan aloitussivulle 2 sekunnin jälkeen
                    header('refresh:2;Teht63.php');
                    exit();
                }
            } 
            // jos kaupungille ei ole vielä syötetty lämpötilaa, lisätään $_SESSION['table']- (assosiatiiviseen) taulukkoon uusi kaupunki-lämpötila- yhdistelmä
            $new = array($_SESSION['city'] => $_SESSION['temp']);
            $_SESSION['table'] = array_merge($_SESSION['table'], $new);
            header('refresh:0.001;Teht63.php');
            exit();
        }
    }
    if (isset($_POST['print'])) { // tulosta- nappia painettu
        // tulostetaan tableen
        echo '<table><tr><th>Kaupunki</th><th>Lämpötila</th></tr>';
        foreach ($_SESSION['table'] as $key => $value) {
            echo '<tr><td>'.$key.'</td><td>'.$value.'</td></tr>';
        }
        echo '</table>';
        // palataan aloitussivulle 3 sekunnin jälkeen
        header('refresh:3;Teht63.php');
        exit();
    }
    ?>
</body>

</html>