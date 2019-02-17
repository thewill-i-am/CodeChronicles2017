<?php 
	$cod=$_GET["c_art"];
	$sec=$_GET["seccion"];
	$nom=$_GET["n_art"];
	$pre=$_GET["precio"];
	$imp=$_GET["importado"];
	$por=$_GET["p_orig"];

	require("registroinsertado.php");
	$conexion=mysqli_connect($db_host,$db_usuario,$db_contra,$db_nombre);

	if(mysqli_connect_errno()){
		echo "Error en la conexion";
		exit();
	}
	mysqli_set_charset($conexion,"utf8");
	$consulta="UPDATE hoja1 SET codigoarticulo='$cod', seccion='$sec', nombrearticulo='$nom', precio='$pre', importado='$imp', paisorigen='$por' WHERE codigoarticulo='$cod'";
	$resultados=mysqli_query($conexion,$consulta);
	if ($resultados==false){
		echo "error en la consulta";
	}
	else{
		echo "Registro Actualizado";
	}
?>