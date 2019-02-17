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
<form method="post" name="form1" action="calculadora.php">
<div>
<input type="text" name="num1" id="num1">
<input type="text" name="num2" id="num2">
<select name="operacion" id="operacion">
<option>Suma</option>
<option>Resta</option>
<option>Multiplicacion</option>
<option>Division</option>
<option>Modulo</option>
</select>
</div>
<div>
<input type="submit" name="button" id="button" value="Enviar">
<tr>
<td>Numero</td>
<td><input type="text" name="numero_usuario" id="numero_usuario"></td>
</tr>
<tr>
	<td colspan="2" align="center"><input type="submit" name="enviando" value="Enviar"></td>

</tr>
</div>
</form>
</body>
</html>