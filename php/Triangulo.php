<?php
$a= $_POST["contador"];
if ($a==3) {
	echo "Equilatero";
}
else{
	if ($a==2) {
			echo "Isosceles";
	}
	else{
			echo "Escaleno";
	}
}
?>