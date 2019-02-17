var mensaje=["piedra","papel", "tijera"];
var mensajeHTML;
var men;
var num;



function numeroAleatorio(min, max) {
var num = Math.round(Math.random() * (max - min) + min);
return(num);
}

var mensajeHTML=mensaje[numeroAleatorio(0,2)];

function vaciar(){
	document.getElementById("n1").value= " ";
}

function juego(){

var p1= document.getElementById("n1");
p1.value=p1.value.toLowerCase();
if(p1.value == mensajeHTML){
	men="Empate";
}
else 
	if (p1.value=='piedra' && mensajeHTML=='tijera' || p1.value=='papel' && mensajeHTML=='piedra' || p1.value=='tijera' && mensajeHTML=='papel'){
		men="Ganó el jugador 1";
	}
	else {
		men="Ganó la computadora";
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

document.getElementById("res1").innerHTML = men;
}


