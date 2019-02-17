$(document).ready(function(){
	var botones=document.querySelectorAll("input");
	for(var i=0;i<botones.length;i++){
		botones[i].addEventListener("click",modolectura);
	}
});
function modolectura(e){
	var zonaActuacion;
	if (e.target==mlectura1) {
		zonaActuacion="#noticia1";
	}
	else
		if (e.target==mlectura2) {
		 	zonaActuacion="#noticia2";
		}
		else
			if (e.target==mlectura3) {
				zonaActuacion="#noticia3"
			}
			$(zonaActuacion).css({"background-color":"#FFDEAD","font-size":"30px","text-align":"justify","color":"#A52A2A"});
		}