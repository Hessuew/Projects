<<<<<<< HEAD
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Teht59</title>
	<style>
		table {
			text-align:left;
		}
	</style>
</head>
<body>
	<?php
		function tulostaTaulukko($taulukko)
		{
			$avaimet = array_keys($taulukko);
			echo "<table><tr><th>Postinumero</th><th>Postitoimipaikka</th></tr>";
			for($i = 0; $i < sizeof($avaimet); $i++) {
				$avain = $avaimet[$i];
				echo "<tr><td>$avain</td><td>$taulukko[$avain]</td></tr>";
			}
			echo "</table>";
		}
		
		$postinumerot = array("00002" => "Helsinki", "80100" => "Joensuu", "70100" => "Kuopio", "33100" => "Tampere", "20100" => "Turku");

		tulostaTaulukko($postinumerot);
	?>
</body>
=======
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Teht59</title>
	<style>
		table {
			text-align:left;
		}
	</style>
</head>
<body>
	<?php
		function tulostaTaulukko($taulukko)
		{
			$avaimet = array_keys($taulukko);
			echo "<table><tr><th>Postinumero</th><th>Postitoimipaikka</th></tr>";
			for($i = 0; $i < sizeof($avaimet); $i++) {
				$avain = $avaimet[$i];
				echo "<tr><td>$avain</td><td>$taulukko[$avain]</td></tr>";
			}
			echo "</table>";
		}
		
		$postinumerot = array("00002" => "Helsinki", "80100" => "Joensuu", "70100" => "Kuopio", "33100" => "Tampere", "20100" => "Turku");

		tulostaTaulukko($postinumerot);
	?>
</body>
>>>>>>> 1bf856ecefdaa92726ff825197de633742624cf0
</html>