<?php
$a= $_POST["contador"];
for ($i=1; $i<12; $i++) { 
	$c=$a*$i;
}
echo "Tabla For" .$c;
?>