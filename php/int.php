<?php
$a= $_POST["contador"];
$b= $_POST["contador2"];
$a=$a+$b;
$b=$a-$b;
$a=$a-$b;

echo "el Primer numero  es: " .$a;
echo "el Segundo numero es: " .$b;
?>