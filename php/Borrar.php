<?php 
	$cod=$_GET["c_art"];
	require("registroinsertado.php");
	$conexion=mysqli_connect($db_host,$db_usuario,$db_contra,$db_nombre);

	if(mysqli_connect_errno()){
		echo "Error en la conexion";
		exit();
	}
	mysqli_set_charset($conexion,"utf8");
	$consulta="DELETE FROM hoja1 WHERE codigoarticulo='$cod'";
	$resultados=mysqli_query($conexion,$consulta);
	if ($resultados==false) {
		echo "error en consulta";
	}
	else{
		if(mysqli_affected_rows($conexion)==0){
			echo "No hay regitros para eliminar";
		}
		else
			echo "Se han eliminado".mysqli_affected_rows($conexion)."registro";
	}
	?>