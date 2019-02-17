<?php
$b=0;
$sum=0;
$a= $_POST["contador"];
do{
	$sum=$sum+$a;
	$b++;
	echo "<br>" .$sum;
} while ($b<=12);
?>