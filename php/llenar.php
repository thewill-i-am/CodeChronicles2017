<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="bombo.css">
	<title>Documento</title>
</head>
<body>
	<h1>Registro</h1>
	<form name="form1" method="get" action="llenarregistro.php">
		<table border="0" align="center">
			<tr>
				<td>Código Artículo</td>
				<td><input type="text" name="c_art" id="c_art"></td>
			</tr>
			<tr>
				<td>Sección</td>
				<td><input type="text" name="seccion" id="seccion"></td>
			</tr>
			<tr>
				<td>Nombre artículo</td>
				<td><input type="text" name="n_art" id="n_art"></td>
			</tr>
			<tr>
				<td>Precio</td>
				<td><input type="text" name="precio" id="precio"></td>
			</tr>
			<tr>
				<td>Importado</td>
				<td><input type="text" name="importado" id="importado"></td>
			</tr>
			<tr>
				<td>País de Origen</td>
				<td><input type="text" name="p_orig" id="p_orig"></td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			</tr>
			<tr>
				<td align="center"><input type="submit" name="enviar" id="enviar"></td>
				<td align="center"><input type="reset" name="borrar" id="borrar"></td>
			</tr>
		</table>
	</form>
</body>
</html>