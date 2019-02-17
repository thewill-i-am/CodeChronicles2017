function vaciar() {
	document.getElementById("n1").value="";
}
function cuadrado() {
	var Resultado = document.getElementById('res');
	var monto = document.getElementById("n1");
	monto.style.background="red";
	if (isNaN(monto.value)){
	Resultado.style.color="green";
		
		if (monto="Tijeras") {
			document.getElementById("res").innerHTML = ["<img src ='imagenes/download (1).jpg'>"];

		}
		else

		if (monto="Papel") {
			alert("La");
			document.getElementById("res").innerHTML = ["<img src ='imagenes/download (3).jpg'>"];
		}
			else

		if (monto="Piedra") {
			document.getElementById("res").innerHTML = ["<img src ='imagenes/images.jpg'>"];
		}
		else
		document.getElementById("res").innerHTML =monto;
	}
	else
		alert("Ingrese Numeros");
}

