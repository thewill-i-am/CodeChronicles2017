$(document).ready(function(){
	$("#submenu2").hide();
document.getElementById("Edicion").addEventListener("mouseover",muestra_menu, false);
document.getElementById("Edicion").addEventListener("click",oculta_menu, false);
	$("#submenu3").hide();
document.getElementById("Herramientas").addEventListener("mouseover",muestra_menu3, false);
document.getElementById("Herramientas").addEventListener("click",oculta_menu3, false);
});
function muestra_menu(){
	$("#submenu2").show();
}
function oculta_menu(){
	$("#submenu2").hide();
}
function muestra_menu3(){
	$("#submenu3").show();
}
function oculta_menu3(){
	$("#submenu3").hide();
}



