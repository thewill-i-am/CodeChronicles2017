$(document).ready(function(){
	document.getElementById("imagen1").addEventListener("mouseover", cambio);
	document.getElementById("imagen1").addEventListener("mouseout", cambiar);
});

function cambio(){
	$("#imagen1").attr("src","imagenes/Capricornio.png");
}

function cambiar(){
	$("#imagen1").attr("src","imagenes/Sobre.jpg");
}






$(document).ready(function(){
	document.getElementById("imagen2").addEventListener("mouseover", cambio2);
	document.getElementById("imagen2").addEventListener("mouseout", cambiar2);
});

function cambio2(){
	$("#imagen2").attr("src","imagenes/Cancer.png");
}

function cambiar2(){
	$("#imagen2").attr("src","imagenes/DonB.jpg");
}








$(document).ready(function(){
	document.getElementById("imagen3").addEventListener("mouseover", cambio3);
	document.getElementById("imagen3").addEventListener("mouseout", cambiar3);
});

function cambio3(){
	$("#imagen3").attr("src","imagenes/roca.jpg");
}

function cambiar3(){
	$("#imagen3").attr("src","imagenes/FresaBN.jpg");
}