$(document).ready(function(){
	document.getElementById("incr").addEventListener
	("click",aumentar);
	document.getElementById("decr").addEventListener
	("click",disminuir);
});

function aumentar(){
	var img= $("#imagen1");
	img.width(img.width()*1.1);
	img.height(img.height()*1.1);
}

function disminuir(){
	var img= $("#imagen1");
	img.width(img.width()/1.1);
	img.height(img.height()/1.1);
}




$(document).ready(function(){
	document.getElementById("incre").addEventListener
	("click",aumentar2);
	document.getElementById("decre").addEventListener
	("click",disminuir2);
});

function aumentar2(){
	var img1= $("#imagen2");
	img2.width(img2.width()*1.1);
	img2.height(img2.height()*1.1);
}

function disminuir2(){
	var img2= $("#imagen2");
	img2.width(img2.width()/1.1);
	img2.height(img2.height()/1.1);
}








$(document).ready(function(){
	document.getElementById("increm").addEventListener
	("click",aumentar3);
	document.getElementById("decrem").addEventListener
	("click",disminuir3);
});

function aumentar3(){
	var img3= $("#imagen3");
	img3.width(img3.width()*1.1);
	img3.height(img3.height()*1.1);
}

function disminuir3(){
	var img3= $("#imagen3");
	img3.width(img3.width()/1.1);
	img3.height(img3.height()/1.1);
}

