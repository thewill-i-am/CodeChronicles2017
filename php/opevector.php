<?php
$n= $_POST["num1"];
$carros=array("Volvo","BMW","Toyota");
//echo count($carros);
for($i=0;$i<count($carros);$i++){
	echo $carros[$n];
	break;
}
min=5;
$max=15;
$aleatorio rand ($min ,$max );
echo "<br>";
echo "aleatorio";
?>