<?php 
	$cod=$_GET["c_art"];
	require("registroinsertado.php");
	$conexion=mysqli_connect($db_host,$db_usuario,$db_contra,$db_nombre);

	if(mysqli_connect_errno()){
		echo "Error en la conexion";
		exit();
	}
	mysqli_set_charset($conexion,"utf8");
	$consulta="SELECT * FROM hoja1 WHERE codigoarticulo LIKE '$cod'";
	$resultados=mysqli_query($conexion,$consulta);
	while(($fila=mysqli_fetch_array($resultados))){

	echo"<h1>Editar Articulos</h1>";
		echo"<form action='Actualizar.php' method='get'>";
			echo"<table border='0' align='center'>";
				echo "<tr><td>Codigo Articulo</td><td><input type='text' name='c_art' value='".$fila['codigoarticulo']."'</td></tr>";

				echo "<tr><td>Seccion</td><td><input type='text' name='seccion' value='".$fila['seccion']."'</td></tr>";

				echo "<tr><td>Nombre Articulo</td><td><input type='text' name='n_art' value='".$fila['nombrearticulo']."'</td></tr>";

				echo "<tr><td>Precio</td><td><input type='text' name='precio' value='".$fila['precio']."'</td></tr>";

				echo "<tr><td>Importado</td><td><input type='text' name='importado' value='".$fila['importado']."'</td></tr>";

				echo "<tr><td>Pais de Origen</td><td><input type='text' name='p_orig' value='".$fila['paisorigen']."'</td></tr>";
				
				echo "<tr><td><input type='submit' name='enviando' value='Actualizar'";
			echo "</table>";
		echo "</form>";
		echo "<br>";
}
mysqli_close($conexion);
	?>