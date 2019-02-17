function vaciar(){
	document.getElementById("n1").value+"";
	document.getElementById("n2").value+"";
}
function cuadrado(){
	var monto= document.getElementById("n1");
		var monto1= document.getElementById("n2");
	mont=parseInt(monto1.value)+parseInt(monto.value);
	document.getElementById("res").innerHTML=mont;
}