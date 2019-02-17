<?php 
	$idAdmin=$_POST["idAdmin"];
	$Nombre=$_POST["Nombre"];
    $Pa=$_POST["Pa"];
    $Sa=$_POST["Sa"];
    $Celular=$_POST["Celular"];
    $Correo=$_POST["Correo"];
    $Password = $_POST["Password"];
    
    
	require("registroinsertado.php");
	$conexion=mysqli_connect($db_host,$db_usuario,$db_contra,$db_nombre);

	if(mysqli_connect_errno()){
		echo "Error en la conexion";
		exit();
	}
	mysqli_set_charset($conexion,"utf8");
	$consulta="INSERT INTO admin (idAdmin, Nombre, Pa, Sa, Celular, Corero, Password ) VALUES ('$idAdmin', '$Nombre', '$Pa', '$Sa', '$Celular', '$Correo', '$Password')";
	$resultados=mysqli_query($conexion,$consulta);
	if ($resultados==false){
		echo "error en la consulta";
	}
	else{
		echo "Registro Guardado";
	}
?>