<link rel="stylesheet" type="text/css" href="Prom.css">
<?php
	if(isset($_POST["button"])){
		$numero1=$_POST["num1"];
		$numero2=$_POST["num2"];
		$numero3=$_POST["num3"];
		$operacion=$_POST["operacion"];
			$prom=(($numero1+$numero2+$numero3)/3);
		}
			if ($prom>70) {
				echo "<p class='Pas'>Paso</p>";
			}
			else{
				if ($prom>50) {
					echo "<p class='Apl'>Aplazo</p>";
				}
				else{
					echo "<p class='Rep'>Reprobo</p>";
				}
	}
?>