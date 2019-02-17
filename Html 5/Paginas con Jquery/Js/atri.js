$(document).ready(function(){
	document.getElementById("cursos").addEventListener("click",rescursos,false);
	document.getElementById("Informacion").addEventListener("click",resinforma,false);
});
function rescursos(){
	$(".ejemplo").removeClass("linkinforma");
	$(".cursos").addClass("linkdestacacursos");
	//$(".cursos").toggleClass(""linkinforma");
	//$(".ejemplo").removeClass("linkdestacacursos");
}
function resinforma(){
	$(".cursos").removeClass("linkdestacacursos");
	$(".ejemplo").addClass("linkinforma");
	//$(".ejemplo").removeClass("linkinforma");
	//$(".cursos").addClass("linkdestacacursos");
}