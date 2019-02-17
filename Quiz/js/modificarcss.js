$(document).ready(function(){
	var botones=document.querySelectorAll("input");
	for(var i=0;botones.length;i++){
		botones[i].addEventListener("click",aumentar);
		botones[i].addEventListener("click",disminuir);
	}
});

function aumentar(e){
	var zonaActuacion;
	if(e.target==aumenta1){
		zonaActuacion="#noticia1";
	}

	else
		if(e.target==aumenta2){
		zonaActuacion="#noticia2";
	}

	else
	if(e.target==aumenta3){
		zonaActuacion="#noticia3";
}

	var tamDefecto=$(zonaActuacion).css("font-size");
	tamDefecto=parseInt(tamDefecto);
	$(zonaActuacion).css("font-size",tamDefecto*1.2);
	$(zonaActuacion).css({"background-color": "aquamarine","text-aling":"justify","color":"#A52A2"});

}

function disminuir(e){
	var zonaActuacion;
	if(e.target==disminuye1){
		zonaActuacion="#noticia1";
	}

	else
		if(e.target==disminuye2){
		zonaActuacion="#noticia2";
	}

	else
	if(e.target==disminuye3){
		zonaActuacion="#noticia3";
}

	var tamDefecto=$(zonaActuacion).css("font-size");
	tamDefecto=parseInt(tamDefecto);
	$(zonaActuacion).css("font-size",tamDefecto*0.95);
	$(zonaActuacion).css({"background-color": "red","text-aling":"justify","color":"#A52A2"});

}