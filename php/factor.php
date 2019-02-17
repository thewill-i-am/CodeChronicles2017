<?php
$a= $_POST["contador"];
$b=1;
for ($i=1;$i<=$a;$i++){
	 $b=$b*$i;
}
echo "el factorial es " .$b;
?>