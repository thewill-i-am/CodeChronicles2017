var mensaje=["Obesidad Morbida","Obesidad","Obesidad moderada","Peso ideal","Delgadez moderada","Delgadez severa"];
var mensaje2=["Visita a un nutricionista","Intenta consumir menos calorias","Haz un poco más de ejercicio","REQUESON","Intenta consumir alimentos con más calorias"];
var mensajeHTML;
var mensajeHTML2;
function vaciar() {
	document.getElementById("n1").value = "";
	document.getElementById("n2").value = "";
}
function Prom() {
	var s1 = document.getElementById("n1");
	var s2 = document.getElementById("n2");
	monto=Number(s1.value)/(Number(s2.value)*Number(s2.value));
	document.getElementById("res").innerHTML = monto.toFixed(2);
	
	if(monto>=40){
		mensajeHTML=mensaje[0];
		mensajeHTML2=mensaje2[0];
		res.style.color="red";
		res1.style.color="red";
	}
else
	if(monto>=30){
		mensajeHTML=mensaje[1];
		mensajeHTML2=mensaje2[1];
		res.style.color="red";
		res1.style.color="red";
	}
else
	if(monto>=25){
		mensajeHTML=mensaje[2];
		mensajeHTML2=mensaje2[2];
		res.style.color="red";
		res1.style.color="red";
	}
else
		if(monto>=20){
		mensajeHTML=mensaje[3];
		mensajeHTML2=mensaje2[3];
		res.style.color="green";
		res1.style.color="green";

	}
else
		if(monto>=15){
		mensajeHTML=mensaje[4];
		mensajeHTML2=mensaje2[4];
		res.style.color="yellow";
		res1.style.color="yellow";
	}
else{
		mensajeHTML=mensaje[5];
		mensajeHTML2=mensaje2[0];
		res.style.color="yellow";
		res1.style.color="yellow";
	}

	document.getElementById("res1").innerHTML = mensajeHTML;
	document.getElementById("res2").innerHTML = mensajeHTML2;
}

