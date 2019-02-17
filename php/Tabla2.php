<?php
$b=0;
$sum=0;
$a= $_POST["contador"];
while ($b<=12) {
	$sum=$sum+$a;
	$b++;
	echo "<br>" .$sum;

}
?>