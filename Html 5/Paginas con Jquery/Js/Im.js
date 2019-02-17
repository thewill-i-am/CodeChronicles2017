$(document).ready(function(){
	document.getElementById("incr").addEventListener("click", aumentar);
	document.getElementById("decr").addEventListener("click", disminuir);
});

function aumentar(){
	var img = $('#imagen1');
	img.width(img.width()*1.1);
	img.height(img.height()*1.1);
} 
function disminuir(){
	var img = $('#imagen1');
	img.width(img.width()/1.1);
	img.height(img.height()/1.1);
} 