<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
	<title>Nombre y Edad</title>
	<style>
		h1{
			text-align:center;
		}
		table{
			background-color:#FFC;
			padding:5px;
			border:#666 5px solid;
		}
		.Impar{
			font-size:18px;
			color:#F00;
			font-weight:bold; 
		}
		.par{
			font-size:18px;
			color:#0C3;
			font-weight:bold;

		}
	</style>
</head>
<body>
<h1>Usando Operadores de Comparación</h1>
<form method="post" name="datos_usuario" id="datos_usuario">
<table width="15%" align="center">
<tr>
<td>Numero</td>
<td><input type="text" name="numero_usuario" id="numero_usuario"></td>
</tr>
<tr>
	<td colspan="2" align="center"><input type="submit" name="enviando" value="Enviar"></td>

</tr>
</table>
</form>
<?php
	$numero = $_POST["numero_usuario"];
	if ($numero%2){
		echo "<p class='Impar'>No Par<p>";
	}
	else
		echo "<p class='par'>Par<p>";;
	?>
</body>
</html>