$(document).ready(function(){
	document.getElementById("Imagen1").addEventListener("mouseover",cambio);
	document.getElementById("Imagen1").addEventListener("mouseout",cambiar);
});
function cambio(){
	$("#Imagen1").attr("src","Imagenes/Pin.jpg");
}
function cambiar(){
	$("#Imagen1").attr("src","Imagenes/chiles.jpg");
}