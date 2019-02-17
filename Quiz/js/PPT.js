
function vaciar(){

	document.getElementById("n1").value="";
	
}



function Aleatorio(min,max){

var num = Math.round(Math.random() * (max-min) + min);
return(num);
}





function jugar(){
 var objetos= new Array();
       objetos[0]=["<img src='./imagenes/roca.jpg'/>"];
       objetos[1]=["<img src='./imagenes/papel.jpg'/>"]
       objetos[2]=["<img src='./imagenes/tijera.png'/>"]

var a=document.getElementById("n2");
var resp;
var img;
var al=Aleatorio(0,2); 

a.value=a.value.toUpperCase();



if(isNaN(a.value)){
 if(al==0){
 	img=objetos[0];
 }
 else
 	if(al==1){
 		img=objetos[1];
 	}
 	else
 		if(al==2){
 			img=objetos[2];
 		}


document.getElementById("imagen").innerHTML=img;

if(a.value=="PAPEL" && img==objetos[0]){
document.getElementById("res1").innerHTML="Gano jugador";
 }
 else
 	if(a.value=="TIJERA" && img==objetos[1]){
 		document.getElementById("res1").innerHTML="Gano jugador";
 	}
 	 else
 	if(a.value=="PIEDRA" && img==objetos[2]){
 		document.getElementById("res1").innerHTML="Gano jugador";
 	}
 	  else
 	if(a.value=="PIEDRA" && img==objetos[0]){
 		document.getElementById("res1").innerHTML="Empate";
 	}
 	   else
 	if(a.value=="PAPEL" && img==objetos[1]){
 		document.getElementById("res1").innerHTML="Empate";
 	}
 	  else
 	if(a.value=="TIJERA" && img==objetos[2]){
 		document.getElementById("res1").innerHTML="Empate";
 	}
 	    else
 	if(a.value=="PIEDRA" && img==objetos[1]){
 		document.getElementById("res1").innerHTML="Gano pc";
 	}
 	 else
 	if(a.value=="PAPEL" && img==objetos[2]){
 		document.getElementById("res1").innerHTML="Gano pc";
 	}
 	else
 	if(a.value=="TIJERA" && img==objetos[0]){
 		document.getElementById("res1").innerHTML="Gano pc";
 	}
 	else
 		document.getElementById("res1").innerHTML="Escriba piedra, papel o tijera";

 }
 else
 	alert("Escriba piedra, papel, o tijera");
}



