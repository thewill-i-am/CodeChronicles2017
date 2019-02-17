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
	$consulta="SELECT * FROM compañeros WHERE Cantón='Alajuelita'";
	$resultados=mysqli_query($conexion,$consulta);

	while ($fila=mysqli_fetch_array($resultados)){
		echo $fila['Carné']." ";
		echo $fila['Nombre']." ";
		echo $fila['Apellidos']." ";
		echo "<br>";
	}
	mysqli_close($conexion);
 ?>
