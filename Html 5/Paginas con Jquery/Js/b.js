$(document).ready(function(){
	var botones=document.querySelectorAll("input");
	for(var i=0;i<botones.length;i++){
		botones[i].addEventListener("click",aumentar);
		botones[i].addEventListener("click",disminuir);
	}
});
function aumentar(e){
	var zonaActuacion;
	if (e.target==aumenta1) {
		zonaActuacion="#noticia1";
	}
	else
		if (e.target==aumenta2) {
		 	zonaActuacion="#noticia2";
		}
		else
			if (e.target==aumenta3) {
				zonaActuacion="#noticia3"
			}
			var tamDefecto=$(zonaActuacion).css("font-size");
			tamDefecto=parseint(tamDefecto);
			$(zonaActuacion).css("font-size",tamDefecto*1.5);
		}
		function disminuir(e){
			var zonaActuacion;
			if (e.target==disminuir1) {
		zonaActuacion="#noticia1";
			}
			else
				if (e.target==disminuir2) {
		 	zonaActuacion="#noticia2";
				}
				else
			if (e.target==aumenta3) {
				
				zonaActuacion="#noticia3"
					}
					var tamDefecto=$(zonaActuacion).css("font-size");
					tamDefecto=parseint(tamDefecto);
					$(zonaActuacion).css("font-size",tamDefecto*0.95);
				}
			