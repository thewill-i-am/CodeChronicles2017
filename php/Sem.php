<?php
	$color= $_POST["color"];
		if (is_numeric($color)) {
			echo "Escriba Texto";
		}

		else{
			if (strtolower($color)=="verde"){
			echo "<p class='pase'>Pase</p>";
		}
			else{
			if (strtolower($color)=="amarillo"){
			echo "<p class='pase'>Cuidado</p>";
		}
			else{
			if (strtolower($color)=="rojo"){
			echo "<p class='pase'>Pare</p>";
		}
		else{
			echo "No es color";
		}

?>