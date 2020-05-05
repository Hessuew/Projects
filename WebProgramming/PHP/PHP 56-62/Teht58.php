<<<<<<< HEAD
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Teht58</title>
</head>
<body>
	<?php
		function halkaise($merkkijono)
		{
			if(isset($merkkijono) && is_string($merkkijono)) {
				$alku = strrev(substr($merkkijono, 0, strlen($merkkijono) / 2));
				$loppu = strtoupper(substr($merkkijono, strlen($merkkijono) / 2, strlen($merkkijono)));
				echo "$alku $loppu";
			}
			else {
				echo "Virheellinen syöte";
			}
		}
		
		$tyhja = null;
		halkaise($tyhja);
		echo "<br>";
		halkaise(12345);
		echo "<br>";
		halkaise("kirjakauppa");
	?>
</body>
=======
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Teht58</title>
</head>
<body>
	<?php
		function halkaise($merkkijono)
		{
			if(isset($merkkijono) && is_string($merkkijono)) {
				$alku = strrev(substr($merkkijono, 0, strlen($merkkijono) / 2));
				$loppu = strtoupper(substr($merkkijono, strlen($merkkijono) / 2, strlen($merkkijono)));
				echo "$alku $loppu";
			}
			else {
				echo "Virheellinen syöte";
			}
		}
		
		$tyhja = null;
		halkaise($tyhja);
		echo "<br>";
		halkaise(12345);
		echo "<br>";
		halkaise("kirjakauppa");
	?>
</body>
>>>>>>> 1bf856ecefdaa92726ff825197de633742624cf0
</html>