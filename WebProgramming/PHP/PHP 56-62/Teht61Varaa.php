<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Teht61Varaa</title>
</head>
<body>
	<?php		
		$rekisterinro= $_GET["rekisterinro"];
		
		if(isset($_GET["laheta"]) && $_GET["laheta"]) {
			if(isset($rekisterinro) && strlen($rekisterinro) == 7) {
				$ekanumero = substr($rekisterinro, 4, 1);
				if($ekanumero >= 1 && $ekanumero <= 5) {
					echo "<p>Rekisterinumerolle $rekisterinro on varattu aika 22.03.2019</p>";
				}
				else {
					echo "<p>Rekisterinumerolle $rekisterinro on varattu aika 29.10.2018</p>";
				}
			}
			else {
				echo "<p>Virheellinen rekisterinumero, varausta ei voitu suorittaa</p>";
				echo "<a href=\"\PHP/Teht61HTML.html\">Takaisin varaussivulle</a>";
			}
		}
		if(isset($_GET["submit"]) && $_GET["submit"]) {
			if(isset($rekisterinro) && strlen($rekisterinro) == 7) {
				$ekakirjain = strtoupper(substr($rekisterinro, 0, 1));
				if($ekakirjain >= "A" && $ekakirjain <= "H") {
					echo "<a href=\"http://localhost:8081/PHP/Teht61VaraaEhdotettu.php?aika=04.02.2019&rekisterinro=$rekisterinro\">04.02.2019</a>";
					echo "<br>";
					echo "<a href=\"http://localhost:8081/PHP/Teht61VaraaEhdotettu.php?aika=05.02.2019&rekisterinro=$rekisterinro\">05.02.2019</a>";
					echo "<br>";
					echo "<a href=\"http://localhost:8081/PHP/Teht61VaraaEhdotettu.php?aika=08.02.2019&rekisterinro=$rekisterinro\">08.02.2019</a>";
				}
				else {
					echo "<a href=\"http://localhost:8081/PHP/Teht61VaraaEhdotettu.php?aika=02.09.2019&rekisterinro=$rekisterinro\">02.09.2019</a>";
					echo "<br>";
					echo "<a href=\"http://localhost:8081/PHP/Teht61VaraaEhdotettu.php?aika=03.09.2019&rekisterinro=$rekisterinro\">03.09.2019</a>";
					echo "<br>";
					echo "<a href=\"http://localhost:8081/PHP/Teht61VaraaEhdotettu.php?aika=04.09.2019&rekisterinro=$rekisterinro\">04.09.2019</a>";
				}
			}
			else {
				echo "<p>Virheellinen rekisterinumero, varausta ei voitu suorittaa</p>";
				echo "<a href=\"\PHP/Teht61HTML.html\">Takaisin varaussivulle</a>";
			}
		}
    ?>
</body>
</html>