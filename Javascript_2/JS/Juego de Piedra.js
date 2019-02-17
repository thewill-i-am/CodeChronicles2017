
var vec=new Array(3);
 	vec[0]="TIJERAS"
 	vec[1]="PIEDRA"
 	vec[2]="PAPEL"
var imagen=new Array(3);
	imagen[0]='<img src="Juego/Piedra.jpg" width="300px" height="150px">';
	imagen[1]='<img src="Juego/Tijeras.jpg" width="300px" height="150px">';
	imagen[2]='<img src="Juego/Papel.jpg" width="300px" height="150px">';
var computadora;
function vaciar(){
	document.getElementById("juga").value= "";
}
function numeroAleatorio(min, max) {
	var num = Math.round(Math.random() * (max - min)+min);
	return num;
}
function Jugando(){
	var aat=document.getElementById('juga')
	aat.value=aat.value.toUpperCase();
		ale=numeroAleatorio(0,2)
		if (isNaN(aat.value)) {
			if(vec[ale]=="TIJERA" && aat.value=="TIJERA" || vec[ale]=="PAPEL" && aat.value=="PAPEL" || vec[ale]=="PIEDRA" && aat.value=="PIEDRA")
				computadora= vec[ale];
				estado="Empate";
				document.getElementById("res").innerHTML=computadora;
				document.getElementById("res2").innerHTML=estado;
				document.getElementById("res3").innerHTML=imagen;
		}
		else
		 if (vec[ale]=="TIJERA" && aat.value=="PIEDRA" || vec[ale]=="PAPEL" && aat.value=="TIJERA" || vec[ale]=="PIEDRA" && aat.value=="PAPEL") {
			computadora=vec[ale];
			estado="Ganaste";
				document.getElementById("res").innerHTML=computadora;
				document.getElementById("res2").innerHTML=estado;
				document.getElementById("res3").innerHTML=imagen;
		}
		else
		 if (vec[ale]=="TIJERA" && aat.value=="PAPEL" || vec[ale]=="PAPEL" && aat.value=="PIEDRA" || vec[ale]=="PIEDRA" && aat.value=="TIJERAS") {
			computadora=vec[ale];
			estado="Gano La computadora";
				document.getElementById("res").innerHTML=computadora;
				document.getElementById("res2").innerHTML=estado;
				document.getElementById("res3").innerHTML=imagen;
	}
	else
		alert("Numeros por favor");
   }
