<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Teht62</title>
</head>
<body>
		<form action="http://localhost:8081/PHP/Teht62.php" method="POST">
        <label for="etunimi">Etunimi</label>
		<input type="text" name="etunimi" value="<?php echo isset($_POST["etunimi"]) ? $_POST["etunimi"] : "" ?>" />
		<label for="sukunimi">Sukunimi</label>
		<input type="text" name="sukunimi" value="<?php echo isset($_POST["sukunimi"]) ? $_POST["sukunimi"] : "" ?>" />
        <label for="postinro">Postinumero</label>
        <input type="text" name="postinro" value="<?php echo isset($_POST["postinro"]) ? $_POST["postinro"] : "" ?>" />
		<label for="ika">Ikä</label>
        <input type="text" name="ika" value="<?php echo isset($_POST["ika"]) ? $_POST["ika"] : "" ?>" />
        <input type="submit" name="laheta" value="Tulosta" />
		</form>
	<?php		
		if(isset($_POST["laheta"]) && $_POST["laheta"]) {
			$etunimi = $_POST["etunimi"];
			$etunimi_value = $_POST["etunimi"];
			$sukunimi = $_POST["sukunimi"];
			$sukunimi_value = $_POST["sukunimi"];
			$postinro = $_POST["postinro"];
			$postinro_value = $_POST["postinro"];
			$ika = $_POST["ika"];
			$ika_value = $_POST["ika"];
			
			if(isset($etunimi) && isset($sukunimi) && isset($postinro) && isset($ika)) {
				if(strlen($postinro) == 5 && $ika >= 1 && $ika <= 100) {
					echo "<table>
					<tr>
					<th>Etunimi</th><th>Sukunimi</th><th>Postinumero</th><th>Ikä</th>
					</tr>
					<tr>
					<td>$etunimi</td><td>$sukunimi</td><td>$postinro</td><td>$ika</td>
					</tr>
					</table>";
				}
				else {
					echo "<p>Virheellinen syöte: kaikki tiedot ovat pakollisia, postinumeron on oltava 5 merkkiä pitkä ja iän on oltava välillä 1-100 vuotta</p>";
				}
			}
			else {
				echo "<p>Virheellinen syöte: kaikki tiedot ovat pakollisia</p>";
			}
		}
    ?>
</body>
</html>