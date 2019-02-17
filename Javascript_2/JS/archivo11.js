function vaciar() {
	document.getElementById("n1").value="";
}
function cuadrado() {
	var Resultado = document.getElementById('res');
	var monto = document.getElementById("n1");
	monto.style.background="red";
	if (!isNaN(monto.value)){
	monto = monto.value * monto.value;
	Resultado.style.color="green";
		
		if (monto>100) {
			document.getElementById("res").innerHTML = ["<img src ='imagenes/lo.png'>"];

		}
		else
		document.getElementById("res").innerHTML =monto;
	}
	else
		alert("Ingrese Numeros");
}

