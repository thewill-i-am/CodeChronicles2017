var mensaje=["piedra","papel", "tijera"];
var mensajeHTML;
var men;
var num;



function numeroAleatorio(min, max) {
num = Math.round(Math.random() * (max - min) + min);
return(num);
}

mensajeHTML=mensaje[numeroAleatorio(0,2)];

function vaciar(){
	document.getElementById("n2").value= " ";
}

function jugar(){

var p1= document.getElementById("n2").value.toLowerCase();
alert(mensajeHTML);
alert(p1);
if(p1 == mensajeHTML){
	men="Empate";
}
else 
	if ((p1=="piedra" && mensajeHTML=='tijera') || (p1=='papel' && mensajeHTML=='piedra') || (p1=='tijera' && mensajeHTML=='papel')){
		men="Gano el jugador 1";
	}
	else {
		men="Gano la computadora";
	}


if(mensajeHTML=='tijera'){
	document.getElementById("res").innerHTML= "<br><br>"+["<img src='imagenes/tijera.png'/>"];	
}
else
	if(mensajeHTML=='piedra'){
document.getElementById("res").innerHTML= "<br><br>"+["<img src='imagenes/roca.jpg'/>"];	
}
	else {
	document.getElementById("res").innerHTML= "<br><br>"+["<img src='imagenes/papel.jpg'/>"];	
}
alert(men);
document.getElementById("res1").innerHTML = men;
}


