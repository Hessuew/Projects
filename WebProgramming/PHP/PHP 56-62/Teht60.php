<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Teht60</title>
</head>
<body>
	<?php		
		$kotikunta = $_GET["kotikunta"];
        $postinro = $_GET["postinumero"];
		
		if(strlen($postinro) == 5) {
			echo "<p>Kotikunta oli $kotikunta, ja postinumero oli $postinro</p>";
		}
		else {
			//En saanut alla olevaa virheilmoitusta näkymään pääsivulle
			echo "<p>Postinumero väärin, syötä tiedot uudestaan!</p>";
			echo "<a href=\"\PHP/Teht60HTML.html\">Takaisin pääsivulle</a>";
		}
    ?>
</body>
</html>                                 