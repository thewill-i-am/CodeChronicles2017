$(document).ready(function(){
	document.getElementById("cursos").addEventListener("click",rescursos);
	document.getElementById("informacion").addEventListener("click",resinforma);
});

function rescursos(){
	$(".ejemplo").removeClass("linkinforma");
	$(".cursos").addClass("linkdestacacursos");
	//%(".cursos").toggleClass("linkdestacacursos");
	//$(".ejemplo").removeClass("linkinforma");
}

function resinforma(){
	$(".cursos").removeClass("linkdestacacursos");
	$(".ejemplo").addClass("linkinforma");
	//%(".cursos").removeClass("linkdestacacursos");
	//$(".ejemplo").toggleClass("linkinforma");
}