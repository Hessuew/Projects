<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Teht57</title>
	<style>
		table {
			text-align:left;
		}
	</style>
</head>
<body>
	<?php
		function tulostaTaulukko($nimet, $arvosanat)
		{
			echo "<table><tr><th>Nimi</th><th>Arvosana</th></tr>";
			for($i = 0; $i < sizeof($nimet) || $i < sizeof($arvosanat); $i++) {
				echo "<tr><td>$nimet[$i]</td><td>$arvosanat[$i]</td></tr>";
			}
			echo "</table>";
		}
		
		$nimet = array();
		$nimet[0] = "Jaska";
		$nimet[1] = "Pinja";
		$nimet[2] = "Masa";
		$nimet[3] = "Marjaana";
		
		$arvosanat = array();
		$arvosanat[0] = 4;
		$arvosanat[1] = 5;
		$arvosanat[2] = 2;
		$arvosanat[3] = 3;
		
		tulostaTaulukko($nimet, $arvosanat);
	?>
</body>
</html>