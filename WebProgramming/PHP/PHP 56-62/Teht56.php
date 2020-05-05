<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Teht56</title>
</head>
<body>
	<?php
		function tulostaLinkki($nimi, $url)
		{
			echo "<a href=$url>$nimi</a>";
		}
		
		tulostaLinkki("Planets of the Universe", "https://www.youtube.com/watch?v=HS1WsHTox4U");
	?>
</body>
</html>