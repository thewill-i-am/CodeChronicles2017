var actu=0;
function puntos(n){
	var ptn=document.getElementsByClassName("punto");
	for(i=0; i< ptn.length;i++){
		if(ptn[i].className.includes("activo")){
				ptn[i].className=ptn[i].className.replace("activo"," ");
				break;
		}
	}
	ptn[n].className+=" activo";
}
function mostrar(n){
	var imagenes=document.getElementsByClassName("imagen");
	for(i=0; i< imagenes.length;i++){
		if(imagenes[i].className.includes("actual")){
				imagenes[i].className=imagenes[i].className.replace("actual"," ");
				break;
		}
	}
	actu=n;
	imagenes[n].className+=" actual";
	puntos(n);
}

function siguiente(){
	actu++;
	if(actu>3){
		actu=0;
	}
	mostrar(actu);
}
function anterior(){
	actu--;
	if(actu<0){
		actu=3;
	}
	mostrar(actu);
}
var velocidad=2000;
var play=setInterval("siguiente()",velocidad);
function playpause(){
	var boton=document.getElementById("bot");
	if(play == null){
		boton.src="imagenes/pause.png";
		play=setInterval("siguiente()",velocidad);
	}
	else{
		clearInterval(play);
		play=null;
		boton.src="imagenes/play.png";
	}
}