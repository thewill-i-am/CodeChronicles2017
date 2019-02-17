<!DOCTYPE html>
<html>
<head>
	<title>Conexion</title>
</head>
<body>
<?php 
	require("base4.php");
	$conexion=mysqli_connect($db_host,$db_usuario,$db_contra,$db_nombre);
		if (mysqli_connect_errno()) {
		echo "error en la conexion";
		exit();
	}
	mysqli_set_charset($conexion,"utf8");
	$consulta="SELECT * FROM hoja1 WHERE D>30";
	$resultados=mysqli_query($conexion,$consulta);

	while ($fila=mysqli_fetch_array($resultados)){
		echo $fila['B']." ";
		echo $fila['C']." ";
		echo $fila['E']." ";
		echo "<br>";
	}
	mysql_close($conexion);
 ?>
