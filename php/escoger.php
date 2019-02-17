<link rel="stylesheet" type="text/css" href="bombo.css">
<?php 
	$busqueda=$_GET["buscar"];
	require("base4.php");
	$conexion=mysqli_connect($db_host,$db_usuario,$db_contra,$db_nombre);
		if (mysqli_connect_errno()) {
		echo "error en la conexion";
		exit();
	}
	mysqli_set_charset($conexion,"utf8");
	$consulta="SELECT * FROM compañeros WHERE Materia LIKE '$busqueda'";
	$resultados=mysqli_query($conexion,$consulta);
	while (($fila=mysqli_fetch_array($resultados))){
		echo "<div class='primera'>";
		echo $fila['Carné']." ";
		echo $fila['Nombre']." ";
		echo $fila['Materia']." ";
		echo $fila['Telefono']." ";
		echo $fila['Género']." ";
		echo "<br>";
		echo "</div>";
	}
	mysqli_close($conexion);
 ?>
